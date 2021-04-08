# NPP_tools

Several tools for testing Notepad ++. Due to better portability (e.g. relative to Python portable, especially for Windows 7) I wrote all in NodeJS. Currently available:
- plug_crash

## plug_crash

Tool for downloading and testing all plugins for Notepad++ against crash. Everything works locally after following the steps below.

### Attention!

Testing all plugins may cause the following problems:
- Files are not analyzed by any antivirus service (so they can be potentially dangerous). If you have a real-time antivirus installed, they will be probably checked automatically. You can also download all `.zip` files first, check them manually by your antivirus, and after that run the test again.
- Some plugins may change system settings, like `NotepadStarterPlugin`. They probably have some `.bat` files to uninstall, but I haven't checked all of them.

For the above reasons, it's best to use this tool in a virtual machine. **I'm not responsible for any damage done due to testing**. If you don't know what you are doing, it's best not to use this tool at all.

### How to use it

1. Download some portable version of Notepad++ from the [official page](https://notepad-plus-plus.org/downloads/) (`.zip` or `.7z` package). You can also try some newer versions ([details](https://github.com/notepad-plus-plus/notepad-plus-plus/wiki/Testing)).
2. Extract the above package to some folder (for example `NPP`).
3. Download the `_test` folder from this repo and put it to above `NPP` folder.
4. Inside `_test` folder put `pl.x86.json` or `pl.x64.json` file depending on which version you downloaded in step 1. You can download the content of this file from the [official nppPluginList](https://github.com/notepad-plus-plus/nppPluginList) repo or create your own plugin list (according to the syntax of the original plugin list). Check the latest version of [pl.x86.json](https://github.com/notepad-plus-plus/nppPluginList/blob/master/src/pl.x86.json) or [pl.x64.json](https://github.com/notepad-plus-plus/nppPluginList/blob/master/src/pl.x64.json) file.
5. Start tool with `run_crash.bat` file (or `run_crash_win7.bat` for Windows 7).

You can test different versions of NPP and different versions of the plugin list, to locate the plugins that break the NPP version you are testing.

### Configuration

At the beginning of the `_test\plug_crash.js` file we have some configuration (you can change them and run the test again):

```js
// CONFIGURATION START

var nppSync = false; // true - run Notepad++ in sync mode (need manually close all popup), false - run Notepad++ in async mode (all popup will be close automatically)
var closePopupTime = 2500; // in async mode wait the given number of milliseconds before closing any popup automatically
var closeNppTime = 10000; //  in async mode wait the given number of milliseconds before closing Notepad++ main window automatically regardless of other factors

var plugListFile_x86 = "pl.x86.json"; // 32-bit plugin list file
var plugListFile_x64 = "pl.x64.json"; // 64-bit plugin list file

var onlyDownload = true; // true - only downloads .zip archives without test it under Notepad++, false - downloads .zip archives and test it under Notepad++
var retryDownload = 3; // 0 - try download .zip archive only once, values > 0 will try the specified number of times

var fixedSteps = -1; // values > 0 specifies the number of processed plugins from plugin list file, values <= 0 means all plugins from plugin list file are processed

var ignorePlugins = [ // put to this table the "folder-name" of any plugin to ignore it, like ["Plugin1", "Plugin2", "Plugin3"])

];

// CONFIGURATION END
```

### Additional tips
- If you already have NodeJS installed on your system, you can delete the `_test\node.exe` file.
- You can use this tool only for downloading all `.zip` packages, without actually testing them.
- The downloaded `.zip` packages are saved in the `_test\_cache` folder. If you are running the test again and want them to be downloaded again every time, then clean this folder before you run test again.
- Plugins save their settings in a `NPP\plugins\Config`folder. If you are running the test again and want it to be not use again, then clean this folder before you run test again.
- You can copy the entire `_test` folder (with or without `_cache` folder) to another version of NPP and test it with the same or a different plugin list.
- After downloading all `.zip` packages, you can copy the entire contents of `_cache` folder to another place to have access to this files in the future.
- You can list a small number of plugins in the plugin list file to test this tool with a smaller amount of data. This way you can, for example, test only plugins that you trust.
- You can manually generate a crash by copying to the `NPP\plugins` folder some known plugin version that causes problem (or put information about it to plugin list file).

### Dependencies
- NodeJS (included 15.14.0) and some packages inside `_test\node_modules`:
	- adm-zip 0.5.4
	- filendir 2.0.0
	- follow-redirects 1.13.3
- [NirCMD v2.86 (64-bit)](http://www.nirsoft.net/utils/nircmd.html) inside `_test\_winsoft\NirCmd64`

### TODO
- ~~Check hash after downloading the `.zip` file.~~ Done.
- Find an easier way to close NPP when the popup appears (without using any additional programs).
- Add configuration also through CLI arguments.
- After finished return some code.