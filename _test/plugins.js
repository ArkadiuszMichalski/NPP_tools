var version = "2021.03.19.01";

// CONFIGURATION START

var nppSync = false; //true - run Notepad++ in sync mode (need manually close all popup), false - run Notepad++ in async mode (all popup will be close automatically)
var closePopupTime = 2500; // in async mode wait the given number of milliseconds before closing any popup automatically
var closeNppTime = 10000; //  in async mode wait the given number of milliseconds before closing Notepad++ main window automatically

var plugListFile_x86 = "pl.x86.json"; // 32-bit plugin list file
var plugListFile_x64 = "pl.x64.json"; // 64-bit plugin list file

var onlyDownload = true; // true - only downloads .zip archives without test it under Notepad++, false - downloads .zip archives and test it under Notepad++
var retryDownload = 3; // 0 - try download .zip archive only once , >0 will try the specified number of times
var ignorePlugins = [ // ignore plugin list (put "folder-name" of any plugin to ignore it, like ["Plugin1", "Plugin2", "Plugin3"])

];

// CONFIGURATION END

var cwd = process.cwd();

var child = require("child_process");
var https = require("follow-redirects").https;
var http = require("follow-redirects").http;
var Stream = require("stream").Transform;
var fs = require("fs");
var fs2 = require("filendir");
var AdmZip = require("adm-zip");

var plugList;
var plugListInfo = "";
var plugCache = cwd + "\\_cache\\";

var npp = cwd + "\\..\\";
var nppExe = npp + "notepad++.exe";
var nppPlug = npp + "plugins\\";
var winsoft = cwd + "\\_winsoft\\";
var nircmd64 = winsoft + "NirCmd64\\";
var nircmd64Exe = nircmd64 + "nircmdc.exe";

var plugins;
var totalStep;
var currentStep = 0;
var pluginsOK = 0;
var pluginsBAD = 0;
var pluginsBADinfo = "";
var downloadStep = 0;
var downloadBAD = 0;
var downloadBADinfo = "";
var timePopupRef;
var timeNppRef
var totalTime;


run();


function run(){

	if (fs.existsSync(plugListFile_x86)){
	 plugList = require(cwd + "\\" + plugListFile_x86);
	}
	else if (fs.existsSync(plugListFile_x64)){
	 plugList = require(cwd + "\\" + plugListFile_x64);
	}

	//console.log(plugList);

	if (plugList){

		totalTime = new Date() * 1;
		analyzePluginsList();

	}
	else{
		console.log("Need plugin list as " + plugListFile_x86 + "or " + plugListFile_x64 + " file!");
	}

}


function analyzePluginsList(){

	var ver = plugList.version;
	var arch = plugList.arch;
	plugins = plugList["npp-plugins"];
	totalStep = plugins.length;

	plugListInfo += "Plugin List:" + "\n";
	plugListInfo += "version: " + ver + "\n";
	plugListInfo += "arch: " + arch + "\n";
	plugListInfo += "plugins: " + totalStep;

	console.log(plugListInfo);
	console.log("");

	analyzePlugin(plugins[currentStep]);

}


function analyzePlugin(plugin, recurse){

	var folder = plugin["folder-name"];
	var file = folder + ".dll";
	var ver = plugin.version;
	var folder_ver = folder + "_" + ver;
	var full_plugin_folder = nppPlug + folder;
	var url = plugin.repository;

	if (!recurse){
		console.log("[" + (currentStep + 1) + "/" + totalStep + "] Start analyze: " + folder_ver);
	}

	if (ignorePlugins.includes(folder)){

		console.log(folder_ver + ": " + "Ignored");
		pluginsOK += 1;
		currentStep += 1;
		return isFinish();

	}

	var zipExists = fs.existsSync(plugCache + folder_ver + ".zip");

	if (zipExists && !recurse){
		console.log(folder_ver + ": " + "Cached");
	}

	if (zipExists && onlyDownload){

		pluginsOK += 1;
		currentStep += 1;
		return isFinish();

	}

	else if (zipExists && !onlyDownload){

		if (fs.existsSync(full_plugin_folder)){
			fs.rmdirSync(full_plugin_folder, {"recursive": true});
		}

		var zip = new AdmZip(plugCache + folder_ver + ".zip");
		zip.extractAllTo(full_plugin_folder, true); // overwrite

		if (nppSync){
			runNPPsync(folder_ver, full_plugin_folder);
		}
		else{
			runNPPasync(folder_ver, full_plugin_folder);
		}

	}
	else{

		downloadStep = 0;
		return getPluginZip(url, plugCache, folder_ver, plugin);

	}

/*
	if (fs.existsSync(nppPlug + folder + "\\" + file)){

		console.log(folder_ver);

		if (getFileVersion(nppPlug + folder + "\\" + file) == ver){
			console.log(folder_ver)
		}
		else{ // usuń jeśli wersja się nie zgadza

			// UWAGA: niestety wersja w liście bardzo często nie jest kompletna i nie zawiera all cyfr, które są widoczne we właściwościach pliku, ehh...
			// Na razie to trzeba pominąć, trzeba po prostu zawsze usuwać istniejący folder i wypakowywać z cache albo ściągać!!!

		}




	}
	else if (fs.existsSync(nppPlug + "_" + folder)){

	}
	else if (fs.existsSync(plugCache + folder_ver + ".zip")){
		//runNPP(folder_ver);
	}
	*/



	//fs.existsSync() // https://nodejs.org/api/fs.html#fs_fs_existssync_path

	//fs.copyFileSync() // https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_mode

	//fs.renameSync(oldPath, newPath) // https://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath

	// fs.rmSync(path[, options]) // https://nodejs.org/api/fs.html#fs_fs_rmsync_path_options

}


function getPluginZip(url, plugCache, folder_ver, plugin){

	var path = plugCache + folder_ver + ".zip";

	var correctTool = https;
	if (url.match(/^http:/)){
		correctTool = http;
	}

	console.log("Start downloading: " + url);

	correctTool.get(url, function(res){

		if (res.statusCode != 200){

			console.log("Download error: " + res.statusCode);

			if (retryDownload > 0 && downloadStep < retryDownload - 1){

				res.resume();
				downloadStep += 1;
				return getPluginZip(url, plugCache, folder_ver, plugin);

			}

			res.resume();
			currentStep += 1;
			downloadBAD += 1;
			downloadBADinfo += "\n" + folder_ver + ": " + url;

			return isFinish();

		}

		var data = new Stream();

		res.on("data", function(chunk){
			data.push(chunk);
		});

		res.on("end", function(){

			console.log("Download finished: OK");

			fs2.writeFileSync(path, data.read());
			analyzePlugin(plugin, true);

		});

	});

}


function getFileVersion(path){

	var exist = false;

	var checkProcess = child.execSync("wmic datafile where name='" + path.replace(/\\/g, "\\\\") + "' " + "get Version");
	var data = checkProcess.toString();
	var version = data.split("Version")[1].trim();
	//console.log(data);
	//console.log(version);

	return version;

	//wmic datafile where name='c:\\windows\\system32\\notepad.exe' get Version
	//wmic datafile where name='C:\\Users\\Arek\\Desktop\\NPP\\_test\\..\\plugins\\mimeTools\\mimeTools.dll' get Version // works
}


function runNPPasync(folder_ver, full_plugin_folder){

	var nppProcess = child.execFile(nppExe, ["-multiInst", "-export=functionList"], function(error, stdout, stderr){

		//console.log(stderr); // string
		//console.log("stdout: " + stdout); // string
		//console.log("error: " + error); // null when all jest OK (otherwise the object )
		//console.log(nppProcess.signalCode);

		if (!error){

			//console.log("Close manually!"); // close NPP in standard way
			pluginsOK += 1;
			console.log(folder_ver + ": " + "OK");

		}
		else{

			if (nppProcess.signalCode == "SIGTERM"){ // close NPP through nppProcess.kill();

				//console.log("Close programmatically!");
				pluginsOK += 1;
				console.log(folder_ver + ": " + "OK");

			}
			else{

				//console.log("Close due of crash!"); // was crash
				pluginsBAD += 1;
				pluginsBADinfo += "\n" + folder_ver;
				console.log(folder_ver + ": " + "BAD");

			}

		}

		clearTimeout(timePopupRef);
		clearTimeout(timeNppRef);

		if (folder_ver.indexOf("NotepadStarterPlugin") != -1){

			try{
				child.execSync(full_plugin_folder + "\\NotepadStarter\\NotepadStarterUninstall.bat");
			}
			catch(e){}

		}

		console.log(folder_ver + ": " + "Delete");
		fs.rmdirSync(full_plugin_folder, {"recursive": true});

		currentStep += 1;
		isFinish();

	});


	timePopupRef = setTimeout(function(){

		child.execFile(nircmd64Exe, ["dlg", nppExe, "", "click", "no"]);
		child.execFile(nircmd64Exe, ["dlg", nppExe, "", "click", "cancel"]);

		// Dialog with problem:
		// iTimeTrack << can't close with above commands
		// FingerText << without Config/FingerText folder open new tab, so trying close Npp window will ask to save file, click "no" before "cancel" solves such problem
		// GedcomLexer << display second popup after close first (Yes/No)

		if (folder_ver.indexOf("iTimeTrack") != -1){
			child.execFile(nircmd64Exe, ["win", "close", "title", "iTimeTrack"]);
		}

		if (folder_ver.indexOf("GedcomLexer") != -1){ // after first close display another dialog

			timePopupRef = setTimeout(function(){

				child.execFile(nircmd64Exe, ["dlg", nppExe, "", "click", "no"]);
				child.execFile(nircmd64Exe, ["dlg", nppExe, "", "click", "cancel"]);

			}, closePopupTime);

		}

	}, closePopupTime);


	timeNppRef = setTimeout(function(){

		nppProcess.kill(); // in nppProcess.signalCode will be SIGTERM

	}, closeNppTime);

}


function runNPPsync(folder_ver, full_plugin_folder){

	var nppProcess;

	try {

		nppProcess = child.execFileSync(nppExe, ["-multiInst", "-export=functionList"]);
		//console.log(nppProcess.toString()); // 0 when all OK

	}
	catch(e){
		//console.log(e);
	}

	if (nppProcess){

		pluginsOK += 1;
		console.log(folder_ver + ": " + "OK");

	}
	else{

		pluginsBAD += 1;
		console.log(folder_ver + ": " + "BAD");

	}

	if (folder_ver.indexOf("NotepadStarterPlugin") != -1){

		try{
			child.execSync(full_plugin_folder + "\\NotepadStarter\\NotepadStarterUninstall.bat");
		}
		catch(e){}

	}

	console.log(folder_ver + ": " + "Delete");
	fs.rmdirSync(full_plugin_folder, {"recursive": true});

	currentStep += 1;
	isFinish();

}


function isFinish(){

	if (currentStep >= totalStep){ // totalStep

		var endTime = parseInt((new Date * 1 - totalTime) / 1000);
		var minutes = parseInt(endTime / 60);
		var seconds = endTime % 60;

		console.log("");
		console.log("");

		console.log("[" + currentStep + "/" + totalStep + "] End analyze:");
		console.log("");
		console.log(plugListInfo);
		console.log("");

		console.log("totalTime: " + minutes + " [min] " + seconds + " [s]");
		console.log("");
		console.log("pluginsOK: " + pluginsOK);
		console.log("");
		console.log("pluginsBAD: " + pluginsBAD);
		console.log("pluginsBADinfo: " + pluginsBADinfo);
		console.log("");
		console.log("downloadBAD: " + downloadBAD);
		console.log("downloadBADinfo: " + downloadBADinfo);

		// TODO return some code

	}
	else{

		console.log("");
		analyzePlugin(plugins[currentStep]);

	}

}