# The changelog for all versions of Notepad++

All `.txt` files available in the [change folder](https://github.com/ArkadiuszMichalski/NPP_tools/tree/main/_change). You can also download the whole files as [change_from_1.0_to_7.9.5.zip](https://github.com/ArkadiuszMichalski/NPP_tools/blob/main/_change/change_from_1.0_to_7.9.5.zip).

Links to particular leading versions:
- [7.x](#7x)
- [6.x](#6x)
- [5.x](#5x)
- [4.x](#4x)
- [3.x](#3x)
- [2.x](#2x)
- [1.x](#1x)

## 7.x

### 7.9.5

Notepad++ v7.9.5 bug-fixes:

1.  Fix Notepad++ not starting up due to SaveAsAdmin plugin (for installer package).
2.  Fix UNC path with quotes handling in folder & file Open/Save dialog.
3.  Fix file doesn't save as extension type on Windows 7.

### 7.9.4

Notepad++ v7.9.4 Enhancements & bug-fixes:

1.  Upgrade Scintilla from v4.2.0 to v4.4.6.
2.  Fix DPI scaling broken while dragging Notepad++ into the 2nd monitor regression.
3.  Add "Find in Projects" feature.
4.	Fix project workspace changes lost on save cancel issue.
5.  Fix folder picker not being launched issue because provided directory is invalid.
6.  Fix network path (UNC path) not working in file dialog.
7.  Fix shortcut name more than 64 characters makes a menu entry empty name issue.
8.  Fix extension appending issue in file dialog.
9.  Fix file not turning to modified state (with Session Manager plugin) bug after its content being changed.
10. Add an option to mute all sounds in preferences dialog.
11. Make JSON auto-indent for brace.

More fixes & implementations detail:
https://notepad-plus-plus.org/downloads/v7.9.4/

### 7.9.3

Notepad++ v7.9.3 Enhancements & bug-fixes:

1.  Discontinued support for Windows XP due to technical reasons. Notepad++ 7.9.2 is the last version to run on Windows XP.
2.  Upgrade Notepad++ License: update GPL version from v2 to v3.
3.  Fix the regression of copying line data from search results.
4.  Fix "Print Line Number" preference is ignored for printing regression.
5.  Fix a regression in Chinese Simplified localization.
6.  Fix dockable panels not being displayed regression due to multi-instance mode activation.
7.  Make split-lines feature work again with multi-edge rightmost specified edge.
8.  Enhance modern style file dialog for allowing UNIX style file path.
9.  Use the modern browse folder dialog to get folder path.
10. Improve option for setting save dialog filter to All Types.
11. Add ability to delete entries from combo box history in Find dialog with DELETE key.
12. Fix lost session issue on Windows reboot/shutdown.
13. Add "save Folder as Workspace in session" option in save session dialog.
14. Make value dialog height accurate in any DPI.
15. Fix issue that Switch-To-Panel keyboard shortcuts cannot be used in context menu.
16. Fix a memory leak issue.
17. Fix blurry display problem on an extended monitor.
18. Fix incompatible plugin not being deleted issue.
19. Synchronize GUP localization file (if available) with Notepad++ in installer.
20. Enhance “No update” dialog with the download page link in the Notepad++ updater.
21. Fix NPPM_SETLINENUMBERWIDTHMODE API not working issue.

More fixes & implementations detail:
https://notepad-plus-plus.org/downloads/v7.9.3/

### 7.9.2

Notepad++ v7.9.2 Enhancements & bug-fixes:

1.  Fix regression of auto-Indent.
2.  Add custom URI schemes ability.
3.  Improve URL parser: fix apostrophe in an URL issue.
4.  Add context menu with "Copy link" ability.
5.  Add color samples on menu items for styling features.
6.  Add "-settingsDir" argument for overriding default settings path.
7.  Fix crash while exit command issued by plugin.
8.  Fix several bugs of PHP parser rule for function list.
9.  Move "Normal Text" to top in Languages Menu.
10. Add new API NPPM_GETSETTINGSONCLOUDPATH for plugins.
11. Add an option for displaying constant line number width.
12. Fix function list is empty with new user profile in the same PC issue.
13. Fix single-quoted string being badly recognized as attribute value in XML.
14. Fix docked panels appear with "-nosession" cmd line parameters.
15. Improve text selection after Replace All In Selection operation.
16. Add the number of total documents on windows dialog's title bar.
17. Fix scroll to last line problem after main window resizing.
18. Fix Plugin admin display UTF-8 issue in its description.
19. Fix Search result's text direction (RTL) not always synchronized with main edit zone's one issue.
20. Fix dockable panels display issue in RTL direction.
21. Fix Search result line number highlighting inaccurate issue.
22. Make "Line" preceding each line number on Search Results translatable.
23. Fix menu check marks not being removed after closing "Clipboard History" and "Character Panel" panels.
24. Fix command line arguments -p, -n & -c negative value's undefined behaviour.
25. Add new Margin/Border/Edge sub-page in Preferences.
26. Fix find in files failure issue due to directory path with leading/trailing spaces.
27. Fix folder icon display issue in "Folder as Workspace" after "Expand/Collapse All".
28. Make "Clipboard History" and "Character Panel" togglable.
29. Fix Find in found results dialog launch failure after macro execution.
30. Disallow Goto dlg offset option from moving to position inside multi-byte char or between CR and LF.
31. Fix "Go to..." dialog wrong Offset value in empty files.
32. Prevent corruption possibility when using -p command line parameter in a UTF file.
33. Improve indent guidelines on non-brace control block languages.
34. Prevent names of untitled tabs from duplication.
35. Add tooltips for Folder as Workspace 3 commands.
36. Fix "SCI_NEWLINE" inside a macro not working issue.
37. Fix bug where search-results won't open 'new 1' file.
38. Fix tab close button remain pushed issue.
39. Enhance ghost typing command line argument feature - using white space directly instead of %20.

More fixes & implementations detail:
https://notepad-plus-plus.org/downloads/v7.9.2/

### 7.9.1

Notepad++ v7.9.1 Enhancements & bug-fixes:

1.  Fix NUL file-corruption bug after Windows shutdown brutally.
2.  Fix inaccurate URL detection by replacing a new URL parser.
3.  Fix RegEx look behind operations and \A and and \b and \z.
4.  Split functionList.xml into multifile in "functionList" Folder.
5.  Make tray icon work again in administrator mode.
6.  Fix dialogs & floating dockable panels don't minimize to system tray issue.
7.  Add alternative icon set for tab bar.
8.  Add ability to remove any duplicate lines in a document, keeping the first occurrence.
9.  Fix incorrect icon for monitoring status in Document list panel and in Document switcher.
10. Add copy marked text & styled text to clipboard commands to menu.
11. Fix find-all-open-docs not finding all matches in ANSI files.
12. Display long lines better in Find-result panel by increasing its max length to 2048.
13. Fix double clicking on find result line not working.
14. Fix Find-result rclick-Copy incomplete data bug.
15. Add case insensitive lines sorting.
16. Add "Open Containing Folder as Workspace" command in main menu and in context menu of tabs.
17. Enhance Sel info of status bar.
18. Add new option for save type of normal text files in Save dialog.
19. Fix file path truncated issue in save confirmation dialog.
20. Fix auto-Indent not working for PowerShell.
21. Allow setting of background color for bookmark margin.
22. Fix smart-highlighting not applying to cloned view.
23. Fix smart highlight issue related to EOF.
24. Fix closing file in 2nd view not removed from Doc Switcher.
25. Add Delete keystroke to remove selected root from Folder as Workspace.
26. Add TAB keystroke in Function List to switch between search field and list.
27. Add ESC keystroke in Function List to switch to edit window.
28. Add ESC keystroke to close Search Results Window.
29. Fix data-prefixed attributes are not recognized in HTML.

### 7.9

Notepad++ v7.9 Enhancements & bug-fixes:

1.  Add the ability to open the target file of a Shortcut (*.lnk).
2.  Enhance side panels behaviour: close a single panel instead of the entire stack.
3.  Fix Monitoring & document auto-update not scrolling to the end of the file with Word wrap enabled issue.
4.  Fix mouse cursor flicker while hovering URLs.
5.  Add back hovered blue underlined URLs.
6.  Enhance C++, Perl, Python parsers and add VHDL in Function List.
7.  Improve some ambiguous commands naming in Shortcut Mapper.
8.  Add an option to prevent right click from canceling selection.
9.  Add ability to sort lines randomly.
10. Fix "Close All BUT this" looses current document data issue.
11. Allow user to start making a stream selection and then change to column block (by pressing ALT key).
12. Add word wrap option to find results context menu.
13. Add keyboard navigation ability to Column Editor.
14. Add keyboard shortcut ability to Projects, Folder as Workspace and Function List for switching among these panels.
15. Enable project panels toggle from menu.
16. Enhance Folder as Workspace to restore latest selected item of last session on Notepad++ startup.
17. Fix inaccurate line margin update with word wrap enabled.
18. Fix Find previous/next commands not scroll vertically to show match result issue (with word wrap disabled).
19. Fix column key sort with col block starting in col1 bug.
20. Add confirmation preference for Replace All in All Opened Documents operation.
21. Add Escape keypress in functionlist searchbox to clear its text.
22. Add RTL capability to localized messageboxes.
23. Make (Find) dlgAlwaysVisible a true Preference setting.
24. Fix sorting by column key using incorrect key values.
25. Add search scope to Find window status bar output.
26. Fix false hit result in Find in Finder.
27. Prevent redundant line data copy in Finder.

Included plugins:

1.  NppExport v0.2.9
2.  Converter 4.2.1
3.  Mime Tool 2.5

Updater (Installer only):

* WinGup (for Notepad++) v5.1.1

### 7.8.9

Notepad++ v7.8.9 Enhancements & bug-fixes:

1.  Fix Line operations (join lines, split lines, remove duplicate lines and sort lines) doing one too many lines issue.
2.  Fix the regression of jump line failure via command line (-n).
3.  Fix URL Hovered colour disappears after modifying any Clickable Link Settings regression.
4.  Fix URL is not clickable in certain stuation while wrapped is enabled.
5.  Fix "Save" not working in Windows dialog.
6.  Fix Flickering cursor after double clicking a found line in find results.
7.  Fix Found line may not be centered by double clicking in find results, if word wrap is on.
8.  Fix wrong horizontal scroll bar position after restoring Window position.
9.  Fix Find result window output TAB-width incoherent issue.

### 7.8.8

Notepad++ v7.8.8 Enhancements & bug-fixes:

1.  Fix accented characters in ANSI files not found in "find in files" and "replace in files" commands issues.
2.  Add an option to improve rendering special Unicode characters by using Scintilla's DirectWrite technology.
3.  Fix URL invisible issue in dark themes.
4.  Fix the focus not on the opening new file issue.
5.  Fix Workspace (Project panel), Folder As Workspace and function list keep focus issue after double clicking an item.
6.  Add Ctrl+Backspace ability to delete word for comboboxes in Find/Replace dialog.
7.  Add ability to find-all in selected text.
8.  Fix wrong treatment of backslashes as escape sequences in autocompletion.
9.  Enhance "Remove Empty Lines" command: Allow scope to be limited by an active selection.
10. Fix loading of project & session files by drag & drop not working issue.
11. Fix block selection cursor wrong positions after typing TAB.
12. Add confirmation prompt to "Replace all in all opened documents" command to avoid PBKAC.

### 7.8.7

Notepad++ v7.8.7 Enhancements & bug-fixes:

1.  Fix new style save dialog by selecting right file filter and adding extension automatically.
2.  Add right-click context menu to bookmark margin.
3.  Add sub-menu bullets for cascaded Encoding and Language menus.
4.  Display file name as root of workspace instead of "Workspace".
5.  Add file extension automatically for session files and workspace files while saving in new style dialog.
6.  Fix file reading failure (network problem) not detected issue.
7.  Improve Document Map precision.
8.  Fix clickable links break syntax highlighting issue.
9.  Fix current range detached from Document Map issue.
10. Disallow backward regex searches due to sometimes surprising results (an non-UI option is available to enable it).
11. Fix wrong project panel at start by opening a project via command line.
12. Allow user to skip *.* when adding only excluding Filters for Find/Replace In Files.
13. Fix Doc switcher icon state update issue for cloned documents.
14. Assign CTRL-M as default shortcut for invoking mark dialog.
15. Fix also a folding visual glitch in Find result.
16. Add count of files searched to 'Find result' output.
17. Fix Find/Replace history lost issue.
18. Fix bug of Mark clearing in selection mode.
19. Fix auto-completion suggest the same word while the word being modified.

### 7.8.6

Notepad++ v7.8.6 Enhancement & bug-fixes:

1.  Add multi-column marker (multi-line edge) feature.
2.  Add dynamical sorting feature for Folder as Workspace.
3.  Make MRU tab activate instead of rightmost tab while tab closure (if MRU enabled).
4.  Fix folding state lost on the next startup issue.
5.  Make Replace-in-Files confirmation dialog modal to prevent from crashing.
6.  Add support of smart-indenting for Perl and Rust.
7.  Make recorded macro (IDC_FINDNEXT & IDC_FINDPREV)retro-compatible up to 7.8.4.

### 7.8.5

Notepad++ v7.8.5 Enhancement & bug-fixes:

1.  Fix "Monitoring" not detecting all file changes issue.
2.  Fix auto-updater disabling not working regression.
3.  Fix Notepad++ doesn't exit correctly while Windows 10 update restart.
4.  Make Count command in Find dialog respect Backward-direction and Wrap-around options.
5.  Make Find dialog remember its position across runs.
6.  Add the document size column to the Windows Selection dialog.
7.  Make "View Current File in(browser)" commands macro recordable.
8.  Add external sound control capability for unsuccessful search (in Find dialog) bell.

### 7.8.4

Notepad++ v7.8.4 bug-fixes:

1.  Fix regression of double clicking a found in files result while Word-Wrap is on.
2.  Fix HashFromDlg title bar localization issue.

### 7.8.3

Notepad++ v7.8.3 enhancements and bug-fixes:

1.  Add the "Expand All", "Fold All" and "Select/Show current editing file" capacity into Folder as Workspace.
2.  Fix restoring line position issue while document is wrapped.
3.  Improve Json syntax highlighting.
4.  Make filling find field of Find dialog with selected word(s) optional.
5.  Make doSaveOrNot dialog simpler when there's a single file to save.
6.  Fix auto-insert {[""]} imbrication not working issue.
7.  Make cmd cli (for "Open Containing Folder in cmd") customizable.
8.  Prevent from setting Updater's Proxy as Notepad++ is not in Admin mode.
9.  Disable file association settings when Notepad++'s no admin right.
10. Fix incremental search bar "highlight all" option not conserved bug.
11. Enhance SQL syntax highlighting (add 2 more keyword lists).
12. Fix too small buffer issue during add text macro playback.
13. Fix "Close All Unchanged" not working issue for sub-view.
14. Eliminate garbage displaying in Find-result fold margin.

### 7.8.2

Notepad++ v7.8.2 enhancements and bug-fixes:

1.  Add key shortcuts in Save or not dialog.
2.  Add find in files filter excluding ability.
3.  Add "Open UDL folder" command.
4.  Fix issue of showing save dialog twice while cloned file is dirty.
5.  Enhance "Open Explorer" command in Folder as workspace with expected path.
6.  Fix tab dragging issues.
7.  Enhance "Close all but This" and "Close all to the left/right" commands while files are dirty.
8.  Enhance "In Selection" option in Find dialog.
9.  Fix Notepad++ blocked in notification zone issue.
10. Make end-of-line conversion operations macroable.
11. Fix "View Current File In" commands disabled problem in some situations.

### 7.8.1

Notepad++ v7.8.1 enhancements and bug-fixes:

1.  Fix popup dialog on startup regression regarding notepad replacement issue.
2.  Make monospaced font in Find dialog optional, disabled by default.
3.  Add download progress bar while download plugin(s).
4.  Fix issue for Alt+Tab doesn't show Notepad++ on Windows 7.

### 7.8

Notepad++ v7.8 enhancements and bug-fixes:

1.  Upgrade Scintilla from 4.1.4 to 4.2.0
2.  Fix non Unicode encoding problem in non-Western language(Chinese or in Turkish).
3.  Add "No to All" and "Yes to All" options in Save dialog.
4.  Add the command line argument "-openFoldersAsWorkspace" to open folders in "folder as workspace" panel.
    Example: notepad++ -openFoldersAsWorkspace c:\src\myProj01 c:\src\myProj02
5.  Enhance plugin system: allow any plugin to load private DLL files from the plugin folder.
6.  Fix File-Rename failing when new name is on a different drive.
7.  Make "Clear all marks", "Inverse Bookmark", "Remove Consecutive Duplicate Lines" & "Find All Current Document" to be macro recordable.
8.  Make "Command Argument Help" MessageBox modal.
9.  Fix Folder as Workspace crash and "queue overflow" issues.
10. Make Combobox font monospace in Find dialog.
11. Fix folding in user-defined languages for non-windows line endings.
12. Fix crash of Folder as Workspace when too many directory changes happen.
13. Fix '-nosession' overwrites config.xml issue.
14. Fix the crash due to NPPM_DESTROYSCINTILLAHANDLE message.
15. Improve GUI in Find dialog for Find Previous & Find Next buttons.
16. Fix Sort Line as Integer regression.
17. Add more OS information to debug info.
18. Fix tab dragging issues under WINE and ReactOS.
19. Fix indent indicators continue to following code blocks for Python.
20. Fix Python folding collapse issue.
21. Fix crash when sorting "out of range" columns.
22. Fix find 2 times for the same occurrence in both original and cloned documents issue.
23. Fix command line issues where filenames have multiple white spaces in them.
24. Fix Document Peeker constantly changing focus problem.
25. Make backward direction checkbox be also on Find dialog's Mark tab.
26. Add 2 new columns for HTML Code in the Character Panel.
27. Fix "clear all marks in find dialog also removes bookmarks" issue.
28. Enhance supported language (on function list or auto-completion): LISP, BaanC,(PL/)SQL & COBOL.

Included plugins:

1.  NppExport v0.2.9
2.  Converter 4.2.1
3.  Mime Tool 2.5

Updater (Installer only):

* WinGup (for Notepad++) v5.1

### 7.7.1

Notepad++ v7.7.1 enhancements and bug-fixes:

1.  Fix drag and drop tab regression: dragging tab is switched to another tab issue.
2.  Fix an input regression: Cyrillic, Turkish and other languages input issue in ANSI mode.
3.  Fix an ASP regression: VB looses syntax highlighting in ASP document.
4.  Fix Reload dialog displaying issue during File Monitoring.
5.  Fix "unhide lines" markers disappears issue.
6.  Fix Plugin menu is not localized issue if no plugin installed.
7.  Add "Copy File Name" command in context menu of "Folder as Workspace".
8.  Fix crash while sorting lines with numbers longer than 20 digits.
9.  Enable Scintilla Virtual Space Option change from macro.
10. Add Tcl, CMake and AutoIt keywords; add Python and SQL new syntax highlighting cathegories.

### 7.7

Notepad++ v7.7 new features and bug-fixes:

1.  Continue Microsoft binary code signing thanks to the offer from DigiCert (again).
2.  Upgrade Scintilla from v3.56 to v4.14.
3.  Fix a regression about memory issue while reloading a file.
4.  Fix cursor flickering problem after double clicking on URL.
5.  Make Python files default to using spaces instead of tabs.
6.  Add "Count in selection" option in Find dialog.
7.  Add Ctrl + R shortcut for "Reload from disk" command.
8.  Fix '\' display problem in CSS while using themes (Remove Batang font for CSS tags).
9.  Fix crash while right clicking on DocSwitcher's column bar.
10. Fix all plugins being removed problem while Plugin Admin romoves an old plugin (of old system).

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Converter 4.2.1
3.  Mime Tool 2.5

Updater (Installer only):

* WinGup (for Notepad++) v5.1

### 7.6.6

Notepad++ v7.6.6 bug-fix:

1. Fix crash issue inserted by adding an enhancement for retaining read only setting state in session.

### 7.6.5

Notepad++ v7.6.5 new features and bug-fixes:

0.  Security enhancement: GPG Signature is provided for Notepad++ release.
1.  Fix a long waiting issue about file auto change detection: enhance "File status Auto-Detection" to avoid switching editing tab off behaviour.
2.  Fix encoding (language) detection regressions since v7.6.
3.  Fix a regression: double-clicking on a "find all in current document" result for an unsaved doc prompts to save it.
4.  Added close all unchanged tabs command.
5.  Restore deleted "Launch in browser" customized shortcuts in EU-FOSSA bounty program by implementing them in more secure way: Add "View Current File in Browser" for Firefox, Chrome, IE & Edge.
6.  Retain read only setting state in session.
7.  Enhancement: after file reload user can still undo.
8.  Fix a bug in command "Remove Consecutive Duplicate Lines" and make it work with old Macintosh EOL.
9.  Fix UDL language marker bullet position, if UDL Name exceeds 14 characters, extend UDL names to max 64 characters.
10. Enhance external call code to avoid eventual arbitrary commands execution. (EURO-FOSSA)
11. Fix crash issue by command "On Selection->Open File" while the number of selected characters is exceed 2048. (EURO-FOSSA)
12. Fix crash issue of User Define dialog while deleting a unallocated entry. (EURO-FOSSA)
13. Fix crash issue on shortcut command while its length exceed 260. (EURO-FOSSA)
14. Add an enhancement on "Open..." command to prevent from the eventual crash. (EURO-FOSSA)
15. Fix stack Buffer Overflow in Command::extractArgs. (EURO-FOSSA)

### 7.6.4

Notepad++ v7.6.4 new features and bug-fixes:

1.  Add Markdown in zip packages and fix Markdown not working in installer package of v7.6.3.
2.  Switch from certificate verification to hashes verification due to "Notepad++" is rejected by certification authority:
    https://notepad-plus-plus.org/news/notepad-7.6.4-released.html
3.  Enhance User Defined Language System for supporting more than one UDL file. New behaviour:
    https://notepad-plus-plus.org/community/topic/17072/new-enhancement-for-user-defined-language-system
4.  Add "Remove Consecutive Duplicate Lines" feature to remove duplicate consecutive lines from whole document.
5.  Add new shortcut "shift + scroll" for horizontal scrolling.
6.  Add Stack Overflow as search engine.
7.  Add the capacity to rename non-existing document's tab.
8.  Fixed file open hang issue in old style mode.
9.  Fix "Find in files" tab translation issue on initial dialog call.
10. Fixed macro playback junk characters display issue on Find dialog.
11. Ensure each recorded command is playable before playing to avoid exploit in hacking. (EURO-FOSSA)
12. Enhance "Search on Internet" command to avoid command hijacked. (EURO-FOSSA)
13. Fix buffer overrun in Print dialog. (EURO-FOSSA)
14. Load nppPluginList.dll as resource instead of binary for the sake of security. (EURO-FOSSA)
15. Check Updater's authenticity before its each launch to prevent from hijacking. (EURO-FOSSA)
16. Fix stack buffer overflow in WordStyle dialog. (EURO-FOSSA)
17. Fix stack buffer overflow issue on User Define Language dialog. (EURO-FOSSA)
18. Prevent eventual DLL hijacking while loading plugins. (EURO-FOSSA)

### 7.6.3

Notepad++ v7.6.3 new enhancements and bug-fixes:

1.  Add Markdown language (Markdown++: https://github.com/Edditoria/markdown-plus-plus), in UDL, included only in installer.
2.  Move plugins home from %ProgramData% to %ProgramFiles% for the sake of security.
3.  List plugins in alphabetical order in Plugins Admin dialog.
4.  Fix loading unexpected dll as plugin issue. (EU-FOSSA)
5.  Fix stack overflow issue while affecting "ext" field on stylers.xml. (EU-FOSSA)
6.  Fix stack overflow in XML Parsing. (EU-FOSSA)
7.  Fix a remote code execution vulnerability via "Open containing folder" command. (EU-FOSSA)
8.  Fix EXE Hijacking of gup.exe launched by Notepad++. (EU-FOSSA)
9.  Fix crash issue due to heap overflow in clipboard history panel. (EU-FOSSA)
10. Remove run external exe entries for avoiding to execute eventual hijacked binaries. (EU-FOSSA)

### 7.6.2

Notepad++ v7.6.2 Gilet Jaune (Yellow Vest) Edition
Pourquoi Gilet Jaune? https://notepad-plus-plus.org/fr/news/notepad-7.6.2-released.html
Why Yellow Vest?  https://notepad-plus-plus.org/news/notepad-7.6.2-released.html

Notepad++ v7.6.2 Gilet Jaune Edition new enhancement and bug-fixes:

1.  Add generation of SHA-256 hash feature.
2.  Fix Plugins Admin unzip (0 lengh) bug.
3.  Add Plugins Admin module into portable version (zipped package).
4.  Add new feature: double click splitter resets panes to equal size.
5.  Fix the plugin crash issue due to the inexistent plugin conf path.

### 7.6.1

Notepad++ v7.6.1 new enhancement and bug-fixes:

1.  Several bug-fixes & enhancement on Plugins Admin.
2.  Notepad++ will load plugins from %PROGRAMDATA% instead of %LOCALAPPDATA%
    https://notepad-plus-plus.org/features/plugin-admin.html
3.	Fix installer's plugins copy issue under Linux (by using WINE).
4.  Fix Installer HI-DPI GUI glitch.
5.  Fix "Import plugins" not working issue.
6.  Fix printer header/footer font issue.
7.  Make installer more coherent for the option doLocalConf.xml.
8.  Make text display right in summary panel.

### 7.6

Notepad++ v7.6 new feature and bug-fixes:

1.  Add Built-in Plugins Admins. Users can install, update and remove plugins by some clicks via Plugins Admin:
    https://notepad-plus-plus.org/features/plugin-admin.html
2.  Change plugin loading method: Remove the legacy plugin loading way and apply only the new plugin loading method.
3.  Add new message NPPM_GETPLUGINHOMEPATH in Notepad++ API for plugin, so plugin can get its path easily.
4.  Fix a regression of performance issue while word wrap option is enable.
5.  Fix a performance issue for switching back to folded document.
6.  Fix crash issue due to Unix style path input in Open file dialog.
7.  Fix UTF-8 detection problem: 4 byte characters UTF-8 character can be detected now.
8.  Enhance/Fix encoding detection/problem.
9.  Fix auto-indent issue by typing Enter on empty line.
10. Fix "Close all but this" behaviour if multiple views are present and some files are dirty.
11. Fix tool tip in document switcher showing the old name issue (after being renamed).
12. Add autoit and lua autoCompletion

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Converter 4.2.1
3.  Mime Tool 2.1
4.  DSpellCheck 1.4.6

Updater (Installer only):

* WinGup (for Notepad++) v5.0.4

### 7.5.9

Notepad++ v7.5.9 bug-fixes & enhancement:

1.   Fix hanging problem while switching back a fully-folded document by using shortcut (Ctrl-TAB).
2.   Fix possible file corruption during backup or power loss or other abnormal N++ termination.
3.   Fix wrong backup file deleted issue.
4.   Fix backup not fully disabled issue.
5.   Add 2 command line flags "-notepadStyleCmdline" and "-z" for the replacement of notepad.exe.
     See https://notepad-plus-plus.org/features/replace-notepad.html
6.   Add new plugin API NPPM_REMOVESHORTCUTBYCMDID to allows plugins to remove unneeded shortcuts.
7.   Fix Tail monitoring incoherent status after deleting a monitored file.
8.   Fix issue with wrong smart highlighting when it is disabled.
9.   Fix last active tab is ignored on Notepad++ restart issue.
10.  Fix Tab non-responding by mouse click after dragging bug.
11.  Fix switching back position restoring issue for wrapped document.
12.  Add several spiritual quotes and a subtle Easter egg in the source code.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Converter 4.2.1
3.  Mime Tool 2.1
4.  DSpellCheck 1.4.6

Updater (Installer only):

* WinGup (for Notepad++) v5.0.3

### 7.5.8

Notepad++ v7.5.8 bug-fixes:

1.  Remove annoying "no update" notification.
2.  Fix Folder as Workspace not updating regression.
3.  Fixed crash issue by checking & unchecking "Disable extension column" option in preferences dialog.
4.  Fixed a crash when trying to launch a secondary instance with command line arguments.
5.  Fix "Explorer Here" from "Folder as Workspace" problem if folder name contains comma.

### 7.5.7

Notepad++ v7.5.7 bug-fixes:

1.  Fix hanging problem while shutdown and backup file is absent.
2.  Fix Sort Lines as Integers issue: use Natural Sort algorithm.
3.  Fix JavaScript not working regression in Function list.
4.  Fix Open File Dialog error for a long path.
5.  Fix document map display bug when the view is scrolled past the end of the file.
6.  Fix tool bar display bug in big icon mode issue.
7.  Make caret line always visible on click from Finder panel.
8.  Fix UDL export extension issue.
9.  Fix Run Macro multiple times dialog display glitch after deleting a Macro.

### 7.5.5

Notepad++ v7.5.6 enhancements & bug-fixes:

1.  Fix macro playing back crash issue on new added "find previous" and "find next" buttons.
2.  Function List enhancement: Highlight the current function based on cursor position.
3.  Fix crash on styler dialog of User Defined Language dialog.
4.  Fix file status detection issue under Windows XP.
5.  Ghost typing enhancement: Unicode, syntax highlighting and speed support.
    (check the url for the usage of ghost typing on command line: https://notepad-plus-plus.org/features/ghost-typing.html )
6.  Add a message from outer space.

### 7.5.5

Notepad++ 7.5.5 enhancements & bug-fixes:

1.  Restore 2 buttons "<< Find Previous" & "Find Next >>" in Find dialog (optional).
2.  Fix monitored (tail -f) file not always updated issue.
3.  Keep Doc Switcher's ordering in sync with Tab bar.
4.  Shortcut Mapper enhancements: Add filter capacity and make dialog resizable and maximizable.
5.  Fix for "Toggle Single Line Comment" malfunctioning with HTML/XML.
6.  Make Unix style path (slashes) work in open file dialog (optional).
7.  Fix tab sticks to mouse pointer problem after external update of a opened file.
8.  Fix encoding not sync (on status bar) after reloading.
9.  Fix menu items' state is not maintained due to save macro command.
10. Fix line ending changes are not detected in reloaded changed files issue.
11. Fix highlighting of <script> tags in XML files issue.
12. Fix Unicode file name comparison to match Windows behaviour (as opposed to doing a linguistic filename comparison).

### 7.5.4

Notepad++ 7.5.4 enhancements & bug-fixes:

1.  Fix a crash bug due to disordered notifications sent to plugins.
2.  Fix encoding broken regression.
3.  Improve smart highlighting performance.
4.  Auto-completion enhancement: remove unwanted symbols {} for variable names.
5.  Add auto-completion for BaanC & CoffeeScript.
6.  Fix localization copy regression in Installer.

### 7.5.3

Notepad++ 7.5.3 bug-fixes:

1.  Fix shell extension registration failure in installer.
2.  Fix theme files installation failure in installer.
3.  Fix DSpellCheck incomplete installation in installer.

### 7.5.2

Notepad++ 7.5.2 new features/enhancements & bug-fixes:

1.  Fixed hanging issue while modifying JavaScript TAB settings.
2.  Add DSpellCheck plugin into distribution.
3.  Add version and other info into installer.
4.  Fix an issue while installing a x64 version, x86 version (if it exists) is not removed - and vice versa.
5.  Fix display glitch of certificate checking error message.
6.  Remove unused/empty entries from shortcut mapper.
7.  Add BaanC function list feature.
8.  Add batch auto-completion into installer.

### 7.5.1

Notepad++ 7.5.1 new featurs/enhancements & bug-fixes:

1.  Fix some excluded language cannot be remembered bug.
2.  Fix a localization regression bug.
3.  Fix the bug that Notepad++ create "%APPDATA%\local\notepad++" folder in local conf mode.
4.  Add Visual Prolog language support.
5.  Add auto-completion support for batch file (*.bat).
6.  Enhance Function List for PHP and JavaScript.
7.  Enhance Shortcut Mapper by adding category column.
8.  Make double click work for language menu disabling/enabling in preferences dialog.
9.  Make double click work to improve file extension movement in Preferences dialog.
10. Fix bug: language menu item is restored back on the wrong zone.
11. Add a spiritual quote.

### 7.5

Notepad++ 7.5 new featurs/enhancements & bug-fixes:

1.  Add new languages support: ASN.1, AviSynth, Blitz Basic, Csound, Erlang, escript, Forth, FreeBASIC, LaTeX, MMIX, Nimrod, nnCron, OScript, PureBasic, Rebol, registry, Rust, SPICE, txt2tags
2.  Add "Open file in its default viewer" command.
3.  Add "-quickPrint" command line argument: Launch Notepad++, print document & exit.
4.  Add /noUpdater argument for installer to not install updater (useful in silent mode).
5.  Add new installer argument /allowAppDataPluginsLoading.
6.  Roll back to 1 "Find next" button in Find/Replace dialog, due to the inconsistence after removal of direction option.
7.  Enhancement: empty fields "Replace with" and "Filters" of Find/Replace dialog are remembered in the next session.
8.  Fix text selection in combo boxes of find/replace dialog problem on resizing.
9.  Fix the issue of passing non-exist folder via command line without any warning.
10. Fix multi-line tab button remaining pushed issue while switching off.
11. Fix TAB key wired behavior on find/replace dialog's transparency radio button.
12. Fix click on tab without hitting close button but close file issue.
13. Fix Notepad++ modifying command line arguments issue (command line arguments could be visualized by system tools).
14. Fix file not dirty while its content changed on the hard drive.
15. Fix saved duplicated file in the same view issue.
16. Fix "Folder as Workspace" toolbar button not activated after dropping folder issue.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Converter 4.2.1
3.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

### 7.4.2

Notepad++ 7.4.2 new featurs/enhancements & bug-fixes:

1.  Add SWIFT language support.
2.  Fix replace in files regression.
3.  Enhance Find Replace dialog (resizable & remove search direction radio buttons).
4.  Fix a crash issue while doing a column insertion on a CJK unicode document.
5.  Fix repeated notification dialog for modification from outside of Notepad++.
6.  Fix a visual glitchy during tab drag and drop.

### 7.4.1

Notepad++ v7.4.1 bug-fixes:

1.  Fix Notepad++ hanging issue on start up due to its connection on Internet - disable the certification chain verification.
2.  Fix the opened zero length file not saving bug.
3.  Improve Document Peeker performance issue for large files.

### 7.4

Notepad++ 7.4 new featurs/enhancements & bug-fixes:

1.  Add document peek feature (while mouse hovering on tab).
2.  Add peek on document map feature.
3.  Fix issue with clicking links in html/js/asp/php.
4.  Fix folding vertical line loses colour after changing folding style via Preference dialog.
5.  Enhance folding feature (multi-line quotes) for python.
6.  Improve certificate verifying method.
7.  Fix issue of losing syntax highlighting while changing file extension (by "save as").
8.  Enhance the UI of "Windows" dialog (Menu "Window->Windows...") for sorting.
9.  Apply the new file custom encoding (Unicode or not) while opening an empty content file.
10. Improve whitespace visibility while the visualization of whitespace is activated.
11. Support RTL for header and footer printing.
12. Add a warning message for launching folder as Workspace while both files and folders are dropped in Notepad++.
13. Drag and dropping tabs is possible in multi-line tab mode.
14. Fix issue of right clicking on multiline tabs.
15. Add new moving tabs with mouse wheel feature (SHIFT + Mouse Wheel)
16. Fix text on active tabs (multi-line mode) being clipped problem.
17. Fix regression for saving session file (for session file extension, if set).
18. Enhance saving workspace file by adding workspace file extension (if set).
19. Fix change.log always opened issue.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2.1
4.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

### 7.3.3

Notepad++ 7.3.3 bug-fixs & enhancements:

1.  Fix CIA Hacking Notepad++ issue (https://wikileaks.org/ciav7p1/cms/page_26968090.html).
2.  Fix mouse wheel to task list scroll crash bug.
3.  Fix flickering issue while switching back after modifying or deleting a document from outside.
4.  Support Motorola S-Record, Intel and Tektronix extended hex file formats.
5.  Improve multi-line tab: maintaining the selected tab position.
6.  Fix add char into word char list bug.
7.  Add Shift+Enter in Find dialog for searching in the opposite direction.
8.  Fix a regression that delimiter settings is not retained correctely.
9.  Add clear command button in shortcut mapper.
10. Enhancement: file extension supported in Load/Save Session dialog if a session file extension is set.

### 7.3.2

Notepad++ 7.3.2 bug-fixs & enhancements:

1.  Fix crash issue on column mode editor.
2.  Fix "Use new style save dialog" setting's regression.
3.  Enhance "Open file" command - open a file from editor zone without selecting its full path.
4.  Fix word char list settings not applying on next launch issue.
5.  Fix block uncomment for line comment bug.
6.  BaanC Language is surpported.
7.  Add error notification on run dialog.
8.  Fix the caret position not maintained issue between document move.
9.  Fix caret goes to wrong position after word completion.
10. Enhance Function List for supporting language.
11. Add check mark in Language menu.
12. Fix toolbar not showing issue while launching Notepad++ from system tray in some unknown configuration.

### 7.3.1

Notepad++ 7.3.1 bug-fix & enhancement:

1.  Fix geneation of MD5 on Unicode bug.
2.  Enhancement : make "Word characters list" customizable.

### 7.3

Notepad++ 7.3 new feature & bug-fixes:

1.  Add MD5 functionalities.
2.  Fix the problem of launch Notepad++ with Admin right after installation.
3.  Fix a problem of recent file history - add to recent file history only if file is removed from all the views.
4.  Get back Find dialog while you lost it (in a multi-screen + laptop configuration).
5.  Fix long hyperlinks truncated problem.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2
4.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

### 7.2.2

Notepad++ 7.2.2 bug-fixes:

1.  Fix auto-updater setting toggles between startups bug.
2.  Fix "Replace All" button shortcut accelerator in Replce dialog not working regression.
3.  Fix unusual plugin update prompt after upgrade to 7.2.1 version.

### 7.2.1

Notepad++ 7.2.1 bug-fixes:

1.  Fix x64 installer regression issue - install in "C:\Program Files" instead of "C:\Program Files (x86)"
2.  Fix expanding environment variables regression in backup path.
3.  Make installer Unicode again.

### 7.2

Notepad++ 7.2 enhancements and bug-fixes:

1.  Add option for smart highlighting extension to anothe view.
2.  Fix Installer for 64-bit fails with argument "/D".
3.  Fix uninstaller silent mode issue.
4.  Fix a tab settings regression.
5.  Fix file not saving bug (Ensure backup directory exists).

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2
4.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

### 7.1

Notepad++ 7.1 enhancements and bug-fixes:

1.  Fix x64 crash on macro recording.
2.  Fix x64 crash on new language dialog of UDL.
3.  Check plugin architecture (32-bit or 64-bit) before loading.
4.  Enhance Smart Highlighting feature: 1. match case 2. whole word only 3. use find dialog settings for both.
5.  Fix poor performance of hex XML entities.
6.  Reshow CallTip text on separator character.
7.  Skip Auto-Complete self-closing HTML tags (<br>, <base>, <track>... etc).
8.  Fix 2 UI issues for RTL layout.
9.  Fix Folder as Workspace toolbar button inconsist behaviour.
10. Add option to skip word completion on numbers (default: ON).
11. Fix bookmarks toggled off's bug.
12. Sort plugin menu by plugin name.
13. Installer: Add 64-bit/32-bit old install detection, and old installation removal ability.
14. Installer: Ask user for keeping user data during uninstallation.
15. Installer: Fix uninstaller bug to not remove themes files from APPDATA.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2
4.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

### 7.0

Notepad++ 7 new features and bug-fixes:

1.  64-bit build available.
2.  Fix the DLL Hijacking Vulnerability of previous versions (by updating NSIS to v3.0).
3.  Auto-updater improvement: periodical check can be disable via auto-update prompt dialog.
4.  Installer enhancement: Check if Notepad++ is running and ask the user to close it before continue.
5.  Enhancement: add conflict detection to Shortcut Mapper.
6.  Fix auto-completion on XML comment <!-- comment --> and <?xml> tag bug.
7.  Fix file saving crash which can be reproduced through a specific way to save file.
8.  Fix a crash issue while UDL's user keyword list is too long.
9.  Fix HDPI issues for some components (task list, margins and shortcut mapper).
10. Add a new feature(optional) : Close the last document will quit Notepad++.
11. Add more Change Case variants (Title Case, Sentence case, iVERT cASE, rANdOm caSe).
12. Add Open file & open containing folder commands on selected file/folder name in text content.
13. Add Search on Internet command on selected word(s) in text content.
14. Add Scroll Tab Bar with mouse wheel capacity.
15. Add commands for moving the current file tab Forward/Backward.
16. Fix bug of monitoring not working for files under root.
17. Ruby is supported by Function List.
18. Added new option: Enable scrolling beyond last line.
19. Add an option to restore old behaviour (open files in folder) while folder being dropped.

Included plugins:

1.  NppExport v0.2.8 (32-bit x86 only)
2.  Plugin Manager 1.3.5 (32-bit x86 only)
3.  Converter 4.2
4.  Mime Tool 2.1

Updater (Installer only):

* WinGup v4.1

## 6.x

### 6.9.2

Notepad++ v6.9.2 new features and bug-fixes:

1.  Add most wanted feature: Log Mornitoring (tail -f).
2.  Add new feature: Find in Finder.
3.  Fix status bar display bug in high dpi environment.
4.  Fix open in explorer problem while path contain unusual characters.
5.  Fix smart highlighter issue after zoom or code folding change.

### 6.9.1

Notepad++ v6.9.1 enhancements and bug-fixes:

1.  Fix bad detection of sub-folder in "Folder as Workspace".
2.  Enhancement: Add "Find in files" command in "Folder as Workspace"
3.  Enhancement: Add "Open Folder as Workspace" command in File menu.
4.  Fix "copy" command bug in find result panel.
5.  Improvements for JSON highlighting.
6.  Fix Find In Files progress bar position bug.
7.  Add Ctrl+Shift+Z shorcut for Redo.
8.  FORTRAN 77 is supported.
9.  Fix html tag auto-completion bug.

### 6.9

Notepad++ v6.9 New feature and bug-fixes:

1.  Add "Folder as Workspace" feature.
2.  Fix Notepad++ hanging issue while user uses touchscreen to activate Notepad++ window.
3.  HTML auto-close tag enhancement: Prevent <br>, <hr>, <img>, <link> and <meta> from being closed automatically.
4.  Project enhancement: Allows user defined extension to associate workspace file.
5.  Make behavior of SHIFT+END and SHIFT+HOME more consistent when word wrapping is enabled.
6.  Add new API NPPM_SAVEFILE (for plugins) to save any file, not only the focused one.
7.  Add file extensions for FreePascal/Lazarus pascal, lex (as C).
8.  Update keywords for C, C++, JavaScript, Python and YAML.

Included plugins:

1.  NppExport v0.2.8
2.  Plugin Manager 1.3.5
3.  Converter 3.0
4.  Mime Tool 1.9

### 6.8.9

Notepad++ v6.8.9 bug-fixes and enhancements:

1.  Fix Notepad++ hanging issue while user uses touchscreen to activate Notepad++ window.
2.  HTML auto-close tag enhancement: Prevent <br>, <hr>, <img>, <link> and <meta> from being closed automatically.
3.  Project enhancement: Allows user defined extension to associate workspace file.
4.  Make behavior of SHIFT+END and SHIFT+HOME more consistent when word wrapping is enabled.
5.  Add new API NPPM_SAVEFILE (for plugins) to save any file, not only the focused one.
6.  Add file extensions for FreePascal/Lazarus pascal, lex (as C).
7.  Update keywords for C, C++, JavaScript, Python and YAML.

### 6.8.8

Notepad++ v6.8.8 bug-fixes and enhancements:

1.  Fix a regression of link style in html/php.
2.  Fix find in files progress window alway on top issue.
3.  Add Debug Info helper feature.
4.  Fix highlighting for tags inside comment problem.
5.  Make editor border edge display optional.
6.  Enhance syntax highlighting for D, Powershell, Lua and Python.
7.  Enhance syntax highlighting of preprocessor comments for several languages.
8.  Improve close button in tab position.

### 6.8.7

Notepad++ v6.8.7 bug-fixes and enhancements:

1 .  Fix crash while "backups and session snapshots" is activated.
2 .  Restore file extension feature in save dialog.
3 .  Fix crash issue while moving Find In Files progress window.
4 .  Fix tab settings not working in javascript.
5 .  Fix user customized keywords no effect in Javascript.
6 .  Enhance language detection on "Save as".
7 .  Add back-quoted string support for javascript.
8 .  Move position to center when using "-n" option in command line.
9 .  Installer enhancement: Allow user to keep DSpellCheck plugin.

### 6.8.6

Notepad++ v6.8.6 bug-fixes and enhancements:

1.  Fix function list not working for Javascript regression.
2.  Fix maintain indent not working in javascript regression.
3.  Improve the language detection at the beginning of file content.
4.  Fix possible file corruption during macro playback.
5.  Fix wrong EOL mode for opening/reloading big files.
6.  Fix loading 3 bytes file error due to bad encoding detection (UTF16 w/o BOM).
7.  Fix DocMap not updating issue when switching to user defined language or external lexer.
8.  Fix reload file issue: document marked as unsaved after reloading.
9.  Enhance the detection of EOL: if a document has no EOL for detecting, use EOL of new document settings.

### 6.8.5

Notepad++ v6.8.5 bug-fixes:
1.  Fix Javascript autocompletion not working regression.

### 6.8.4

Notepad++ v6.8.4 bug-fixes and enhancements:

1.  Improve document switching performance while folding restoring.
2.  Enhance Javascript syntax highlighting: 2 groups of keywords more for syntax highlighting customization.
3.  Improve auto-insert usability: the open symbols (", ', (, [ and { ) triggers the close symbols according to the context.
4.  Apply new added language auto-detection (for php, xml, html and bash) in the case of unknown file extension.
4.  Add JSON language support.
5.  Fix macro playback inserting/removing characters randomly.
6.  Fix Save All button is still enabled problem while no file to save.
7.  Make file save dialog modern style.
8.  Fix auto-insert for xml comment incorrect insertion.
9.  Fix user command save problem on exit.
10. Fix macro save problem on exit.
11. Fix the restoring from system tray problem while running in admin mode.
12. Fix smart highlighting not working in some case.
13. Enlarge tabbar height.

### 6.8.3

Notepad++ v6.8.3 bug-fixes:

1.  Fix a crash issue by using wild card (*) to open files on command line.
2.  Fix the problem of display refresh missing on exit.
3.  Fix plugin shortcut configuration lost problem by using option -noPlugin.
4.  Fix Norwegian localization bad display and wrong encoding.
5.  Fix functionList display problem under high DPI.
6.  Fix Norwegian localization bad display and wrong encoding.

### 6.8.2

Notepad++ v6.8.2 bug-fixes:

1.  Remove Source Code Pro font du to the different issues.
2.  Add back "Notepad++ Community (Forum)" menu item.
3.  Fix a visual glitch on starup and on exit.
4.  Fix "Open in/Move to new instance" issue (to memorize the language and the position).
5.  Fix Preferences dialog loses focus issue while enabling document list panel.
6.  Fix the narrow columns problem in Ascii Insert Panel under a high DPI.
7.  Fix the list items' squeezed height problem in function list panel and project panel under a high DPI.
8.  Fix panel caption squeezed display under a high DPI.
9.  Fixed buffer overrun when opening a recent file.
10. Make toolbar refresh properly while switching over small/big icons.

### 6.8.1

Notepad++ v6.8.1 bug-fixes:

1.  Fix the Source Code Pro font making OS hanging issue (for some specific hardware congiguration).
2.  Make current default font (Source Code Pro) prettier by adding its bold, italic and bold-italic fonts.
3.  Fix "Restore recent close file" text disappearing issue for some circonstance.
4.  Fix snapshot file after saving being always dirty problem.
5.  Fix document tab moving by clicking close button issue due to splitter inaccuracy.
6.  Fix a regression of Preferences dialog in which some modified options are not applied immediately.
7.  Fix inconsistant untitled document name issue (new 0 instead of new 1).
8.  Fix Macro button on toolbar inconsistant issue at Notepad++ startup.

### 6.8

Notepad++ v6.8 new features and bug-fix:

1.  Settings on cloud feature allows users to write their settings on whichever cloud.
2.  Use Source Code Pro as default font.
3.  Make smooth font optional.
4.  Fix the context menu disappears problem after find in files operation.

Included plugins:

1.  NppFTP 0.26.3
2.  NppExport v0.2.8
3.  Plugin Manager 1.3.5
4.  Converter 3.0
5.  Mime Tool 1.9

### 6.7.9.2

Notepad++ v6.7.9.2 bug-fix:

1. Fix JavaScript block not recognized in HTML document.

### 6.7.9.1

Notepad++ v6.7.9.1 new features and bug-fix:

1. Fix JavaScript block not recognized in HTML document.
2. Fix Hanging on exit of Notepad++ issue (update DSpellCheck for its instability issue).
3. Add "Google Search" command in the context menu.

### 6.7.9

Notepad++ v6.7.9 new features and bug-fix:

1.  Upgrade Scintilla to v3.56.
2.  Add Language and EOL conversion context menu on status bar.
3.  Enhance sort lines feature: Add lexicographic and numeric (integer and real) sorting with ascending and descending order.
4.  Add new feature which launches a new instance with administrator privilege to save the protected file.
5.  Fix the context menu not working problem after doing find in files action.
6.  Improve copy (to clipboard) in found results panel.
7.  Improve find in files modal dialog.

### 6.7.8.2

Notepad++ v6.7.8.2 bug-fixes:

1.  Disable Notepad++ updater (WinGup) under XP.

### 6.7.8.1

Notepad++ v6.7.8.1 bug-fixes:

1.  Fix "Missing msvcr120.dll" message error (of WinGup).

### 6.7.8

Notepad++ v6.7.8 new features and bug-fixes:

1.  Fix an annoying regression about message "The buffer passed to GetFullPathName was too small!".
2.  Update WinGup to version 3.0 which has SSL support and customizable User-Agent.
3.  Improve sort lines performance greatly.
4.  Fix tabbar close button usability issue (too small) on a high resolution laptop (Surface Pro 3).
5.  Fix Settings on cloud - Google drive detection error.
6.  Hiding tab bar via command line won't make hidden tab setting be saved in the next session.
7.  Fix a bug of "Jump to next indicator" command.
8.  Fix "File Status auto-detection" settings bug.

### 6.7.7

Notepad++ v6.7.7 bug-fix:

1.  Fix "Restore last closed file" (Ctrl+Shift+T) display bug.

### 6.7.6

Notepad++ v6.7.6 new feature and bug-fixes:

1.  Add "Restore last closed file" (Ctrl+Shift+T) feature.
2.  Fix Setting on Cloud for dropbox and for google drive not working issue.

### 6.7.5

Notepad++ v6.7.5 new features and bug-fixes:

1.  Add ghost typing feature: launch Notepad++ with the auto-typing text from command line (via command line with argument -qn, -qt or -qf).
2.  Fix auto-insert bad behaviour : under some condition typing " or ' makes erase the further " or '.
3.  Fix the crash issue while user Ctrl + double click on an empty document.
4.  Fix crash bug on loading dropbox settings.
5.  Show progress window instead of a static window during FindInFiles and ReplaceInFiles.
6.  Filename rendered incorrectly on tab bar while it contains '&' character.
7.  Make highlighting (if enabled) follow typing for Incremental search, and add several Incremental search enhancements.
8.  Add the followings notifications for plugins : NPPN_BEFORESHUTDOWN NPPN_CANCELSHUTDOWN NPPN_FILEBEFORERENAME NPPN_FILERENAMECANCEL NPPN_FILERENAMED NPPN_FILEBEFOREDELETE NPPN_FILEDELETEFAILED NPPN_FILEDELETED
9.  Make keystroke ENTER trigger the shortcut editor dialog in Shortcut Mapper.
10. Allow drop files onto doc switcher and other side panels.
11. Installer remembers user's choices of last installation.
12. Fix Auto-indent in new code block not respecting current EOL bug.
13. Restore focus to editor when a panel is closed.

### 6.7.4

Notepad++ v6.7.4 Je suis Charlie edition

### 6.7.3

Notepad++ v6.7.3 bug fixes:

1.  Fix a crash issue for old processors due to SSE2 instruction.
2.  Fix the regression for the translation: remap the sub-menu entry for the added command "Mark...".

### 6.7.2

Notepad++ v6.7.2 enhancements and bug fixes:

1.  Fix the crash issue while config.xml and stylers.xml are not loaded.
2.  Fix NPPM_LAUNCHFINDINFILESDLG API regression issue.
3.  Prevent auto-insert of {} [] () "" and '' from inserting in column mode.
4.  Fix the bug that "Function parameters hint on input" checkbox in preferences dialog is not initialized correctly.
5.  Fix saving theme modified styles not working problem (Copy theme files in %APPDATA% to avoid UAC problem).
6.  Improve the usability of User Defined Language dialog: reduce dialog's height.

### 6.7.1

Notepad++ v6.7.1 new feature and bug fixes:

1.  Fix crash issue on GotoLine.
2.  Fix a random crash issue while typing random characters.
3.  Fix the bug of auto-insert skipping feature that ] and } don't be skipped if "auto-insert ()" is disabled.
4.  Add new feature: auto-insert skipping character feature works for "" and '' now.
5.  Fix reloaded file on dirty status issue.
6.  Add "Mark..." menu command.
7.  Fix a regression (broken with compare plugin) due to a new feature of MRU in v6.7 (the feature is removed).

### 6.7

Notepad++ v6.7 new feature and bug fixes:

1.  Add Smart Indent feature for php/javascript/c/c++/java/c#/Objective-C.
2.  Enhance Auto-insert feature for {} [] (): typing and skipping }, ] and ).
3.  Add new feature of MRU: While current file is closed the previous activated file will be activated.
4.  Allow users to disable Easter eggs by adding noEasterEggs.xml in Notepad++ installed directory.
5.  Enhancement: Resize column Name filed correctly while hiding column Ext.
6.  Fix Global colours not applied to all text of the "Find result" pane.
7.  Add C# and enhance php parser in Function List.
8.  Fix document list panel has no selection while start up.
9.  Fix docSwitcher bug which shows new 0 after loading a session of files.
10. Fix crash issue on quit Notepad++ while session snapshot period backup feature is on.
11. Make "Text Direction RTL" command and "Text Direction LTR" command work without reloading file.
12. Make document map matches the current text direction (RTL/LTR).
13. Fix a crash issue while the opened document is deleted/moved from outside.
14. Fix undo actions on unsaved snapshot file removing the dirty state bug.

Included plugins:

1.  DSpellCheck v1.2.12
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0
6.  Mime Tool 1.9

### 6.6.9

Notepad++ v6.6.9 new feature and bug fixes:

1.  Fix comment command bug that the comment symbols isn't set on the first column for Fortran.
2.  Add python parson for function List.
3.  Make icons' background colour transparent for functionList and projectManager.
4.  New feature: Apply new file default settings on created new file (opened via command line).
5.  Fix colour picker' chooser bug which does not work well.

### 6.6.8

Notepad++ v6.6.8 new feature and bug fixes:

1.  Settings on cloud - Google Drive.
2.  Fix Settings on cloud - OneDrive detection error.
3.  Make internal docking dialogs apply the selected theme's background and foreground colours.
4.  Fix the bug that "backslash is escape char for SQL" setting is not saved correctly.
5.  Fix the bug that user cannot disable "backslash is SQL escape char" without restarting.
6.  Fix DocMap's syntax highlighting doesn't update while current doc apply a new syntax highlighting.
7.  Add 2 new plugins APIs: NPPM_GETEDITORDEFAULTBACKGROUNDCOLOR & NPPM_GETEDITORDEFAULTFOREGROUNDCOLOR
8.  Add new notification NPPN_SNAPSHOTDIRTYFILELOADED to notify plugins that a snapshot dirty file is loaded on startup.

### 6.6.7

Notepad++ v6.6.7 new feature and bug fixes:

1.  Settings on cloud - OneDrive.
2.  Fix the crash issue on start up for some context.

### 6.6.6

Notepad++ v6.6.6 bug fixes:

1.  Fix "Settings on cloud - Dropbox" not working problem if the dropbox path has been changed.
2.  Fix a saving issue in session snapshot and periodic backup feature while backup file is deleted or read-only.

### 6.6.4

Notepad++ v6.6.4 bug fixes:
1.  New feature: Settings on cloud - dropbox.
2.  Add backup path info for session snapshot & periodic backup feature.

### 6.6.3

Notepad++ v6.6.3 bug fixes:
1.  Fix SaveAll command hanging issue while session snapshot is enabled.
2.  Fix docking error messages displaying due to bad detection of windows version.
3.  Fix restoring saved files as unsaved due to SaveAll bug in session snapshot mode.
4.  Disable session snapshot while command line argument -nosession is used.
5.  Fix bug that backup is not performed (in session snapshot mode) while view is switched from one to another.
6.  Fix a bug in NppShell when trying to open many files.

### 6.6.2

Notepad++ v6.6.2 bug fixes:
1.  Fix session snapshot enabled issue even "remember current session" option is disabled.

### 6.6.1

Notepad++ v6.6.1 bug fixes:

1.  Fix Notepad++ hanging issue while saving a large file if session snapshot feature is on.

### 6.6

Notepad++ v6.6 new features and bug fixes:

1.  Add session snapshot and periodic backup feature.
2.  Fix RTL/LTR command making mirrored text bug.
3.  Make auto-detect character encoding optional.
4.  Apply DPI-aware on find & replace dialog tab and User define language dialog tab.
5.  Add shell script parser for the function list.
6.  Make backslash as an escape character optional in SQL.

Included plugins:

1.  DSpellCheck v1.2.12
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0
6.  Mime Tool 1.9

### 6.5.5

Notepad++ v6.5.5 new features and bug fixes:

1.  Add character encoding auto-detection feature.
2.  Fix the word-completion hanging problem by typing Chinese in ANSI document under Chinese Windows 7/8 64 bits.
3.  Enable word-completion in ANSI document under CJK environment.
4.  Add wildcard capacity for file name argument in command line.
5.  Add new command line argument "-r" for opening files recursively (with wildcard characters).
6.  Fix the crash bug while setting current document as Objective-C source code.
7.  Fix rename not replacing the existing file bug.
8.  Enhance Function list feature: reload on saving.
9.  Enhance Function list feature: better recognition of perl function.
10. Fix sorting path in Windows document dialog makes Notepad++ crash.
11. Fix the no extension column setting for Doc Switcher not initialized properly in preference dialog.
12. Add "Command line arguments help" menu item command.

### 6.5.4

Notepad++ v6.5.4 new features and bug fixes:

1.  Enhance Notepad++ to conform with DPI-aware application.
2.  Make extension column optional in vertical file switcher.
3.  Add 3rd option "function + word completion" in auto-completion feature.
4.  Fix closing bug in doc switcher via the context menu (right clicking of an unselected item).

### 6.5.3

Notepad++ v6.5.3 new features and bug fixes:

1.  Make advanced scrolling optional so it can be disabled in case of touchpad scrolling problem.
2.  Enhance sort lines feature: if several lines are selected, only the selected lines are sorted.
3.  Add hex value column in Ascii Insert Panel.
4.  Enhance performance: prevent switched-in document from being parsed by function list and by document map while these 2 panels are hidden.
5.  Fix the bug that modified tab interface colour settings cannot be saved in stylers configurator.
6.  Fix text crazy flickering while resizing the frame on a specific position.
7.  Fix the context menu not shown for the all other users (accounts) in the same PC.


### 6.5.2

Notepad++ v6.5.2 new features and bug fixes:

1.  Add sort lines feature.
2.  Make 2 external commands as build-in commands: Open containing folder in Explorer/cmd.
3.  URL hovered highlighting can be customized.
4.  Fix the bug that Global Styles are not loaded completely in Stylers Configurator.
5.  Improve php and js parsers in functionList.
6.  Add panel icons for 6 panels: ascii insertion, clipboard history, doc map, doc switcher, function list and project.
7.  Fix function list class border determination problem (while open/close symbols are in the comment zone).
8.  Fix crash (buffer overflowed problem) for function calltip.
9.  Fix a bug in path auto-completion feature.
10. Fix tab close button's color remains hovered while mouse leaves.
11. Update html auto-completion file.

### 6.5.1

Notepad++ v6.5.1 new features and bug fixes:

1.  Add search and sort abilities into function list.
2.  Add Java parser into function list.
3.  Add auto-completion for absolute path feature.
4.  Fix scrolling text problem while using "Synaptics touchpad".
5.  Fix EOL type not correctly determined for UTF-16 files bug.
6.  Fix tab settings bug in Normal text.

### 6.5

Notepad++ v6.5 new features and bug fixes:

1.  Update Scintilla to version 3.3.4
2.  Add language CoffeeScript support.
3.  Add multi-paste support for multi-selection/column mode.
4.  Add new feature: auto-close parentheses, quotes, bracket and matched xml/html tag.
5.  Add php, perl, xml, batch, ini and nsis for the build-in function list.
6.  Add User Defined Languages support for the build-in function list.
7.  Add reload feature for the build-in function list.
8.  Fix a minor problem of file extension support for the build-in function list.
9.  Fix a tag matching bug by disabling tag matching inside PHP code blocks.
10. Fix right-to-left text after closing document map bug.
11. Fix cancelling shutdown make Notepad++ quit w/o saving files bug.
12. Enhance "Begin/End select" feature: Check "Begin/End select" menu item when active.
13. Enhance Mark all feature: 2 options "Match case" and "Match whole word only" in Find/Replace dialog .
14. Fix a Replace dialog status bar display problem by clearing status bar before processing any action.
15. Add new feature: if Notepad++ is running as administrator, display this info on the title bar.
16. Rename "block comment" to "Single line comment" and "stream comment" to "block comment".
17. Remove invalid command "Online Documentation".

Included plugins:

1.  DSpellCheck v1.2.7.0
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

### 6.4.5

Notepad++ v6.4.5 bug fixes:

1.  Fix a regression on recent files history.

### 6.4.4

Notepad++ v6.4.4 new features and bug fixes:

1.  Fix a crash issue while there's missing tag in functionList.xml.
2.  Fix UTF-8 (w/o BOM) detection bug.
3.  Fix line numbers space problem while folding.
4.  Fix opening file in Notepad++ makes Aero-snapped cancelled.
5.  Change behaviour: statusbar reports the number of selected characters instead of number of bytes now.
6.  Add "close all tab to left" and "close all tab to right" features.
7.  Add direct access to the tab feature (Ctrl + NumPad).
8.  Fix macro replaying crash issue.
9.  Add insert blank line above/below the current line feature(Ctrl+Alt+Enter/Ctrl+Alt+Shift+Enter respectively).
10. Add selection between matching braces feature.
11. Fix opening file problem from the network drive.
12. Fix C++ class (*.h) parsing problem in function list while there is comment on the beginning of document.
13. Enhance function list's C/C++ parser.

### 6.4.3

Notepad++ v6.4.3 new features and bug fixes:

1.  Fix a crash issue while using Function list.
2.  Enhance delimiter selection (Ctrl + Mouse Double Click) - add GUI settings in Preferences dialog.
3.  Add open session in the new instance capacity.
4.  Add new command line argument "-openSession" for opening a session file.
5.  Add multi-instance option.
6.  Fix regression -systemtray command line option not working properly.
7.  Fix begin/end selection bug after the text modification between the begin and end position.
8.  Add localization command line option -LlangCode where langCode is browser language code.

### 6.4.2

Notepad++ v6.4.2 new features and bug fixes:

1.  Fix localization regressions.
2. Make "Begin/End Select" Command recordable in macro.
3. Enhance the delimiter selection(Ctrl + double click) feature.
4. Fix Find/Replace dialog status bar overwriting memory problem.
5. Fix Run dialog doesn't work with spaces in path.
6. Fix "Find all in current document" asking for creating a new file bug (regression).

### 6.4.1

Notepad++ v6.4 new features and bug fixes:

1.  Add Function List Panel (customizable, support C++ and Javascript for the moment).
2.  Display the error/result in the new added statusbar of Find/Replace dialog instead in popup dialogs.
3.  Add delimiter select by ctrl+Double click feature.
4.  Add set begin position feature for selection.
5.  Fix fold all command bug (which folds partially).
6.  Fix opening the same file twice due to its different path (for example symbol link).
7.  Fix deleting macro from macro menu crash issue.
8.  Fix the bug of Window position not saved/restored properly.
9.  Fix small window size problem due to closing Notepad++ in icon state (reduced in the taskbar) on the last session.
10. Enhance Block comment: remove 1024 bytes limit.
11. Fix a detection error of UTF16 file from a binary file.
12. Enhance the performance of switching files if folding is applied.
13. Fix macro problem: Find functionality doesn't work in "Run a Macro Multiple Times".
14. Enhance the performance while double clicking on a very long word.
15. Enhance TAB/Space conversion: UTF8 support and preserving the current state.
16. Change the Preferences dialog UI (List interface instead of tab interface).

Included plugins:

1.  DSpellCheck v1.2.6
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

### 6.3.3

Notepad++ v6.3.3 new features:

1.  Add remembering folding between sessions feature.
2.  Optimize startup (loading last session) performance.
3.  Add multi-select feature in Document List Panel and Close/Keep the selected files commands (right click).
4.  Add new spell checker plugin(DSpellCheck).

### 6.3.2

Notepad++ v6.3.2 fixed bug and added feature:

1.  Fix a regression (performance issue).
2.  Recognize wscript and Rakefile respectively as python and ruby file.

### 6.3.1

Notepad++ v6.3.1 fixed bugs and added features:

1.  Fix replacing '\n' bug in both extended and regex mode.
2.  Remember folding states for each file in session.
3.  Fix a crash bug on uncommenting.
4.  Add "Set Updater proxy..." command for setting the proxy of updater.
5.  Fix the problem of Window position not saved/restored properly.
6.  Add new API NPPM_GETCURRENTVIEW.

### 6.3

Notepad++ v6.3 fixed bugs and added features:

1.  Fix regex search replace hanging problem.
2.  Fix folding performance issue.
3.  Fix folding level N folds partially bug.
4.  Add UDL (User Defined Language) versioning.
5.  Make UDL line comment start position definition be more accurate.
6.  Add new options for UDL number definition.
7.  Fix applying wrong UDL bug while several UDL exist.
8.  Fix UDL incorrect folding while Unix EOL is used.
9.  Fix UDL stream comment hanging problem.
10. Fix UDL multi-part keywords recongnition problem while "Ignore case" is checked.
11. Fix a UDL number recongnition problem.
12. Fix crashing on XP problem in UDL.
13. Fix the bug that double clicking on tab with 2 views doesn't open new file.
14. Fix the bug that file cannot be opened via Explorer context menu when Notepad++ is run as administrator.
15. Fix the problem that calltip becomes garbage after switching document.
16. Fix the bug that empty document cannot be saved when using special encoding.
17. Fix the issue of document focus after canceling exit on an unsaved file.
18. Fix folding performance issue
19. Fix folding partially bug.
20. Fix tab display bug when buffer's filename is changed or buffer is closed.
21. Fix the problem of wrong starting window position on the second monitor.
22. Remove the redundant message under win7/vista/xp while move file into recycle bin.

Included plugins:

1.  Spell Checker v1.3.3
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

### 6.2.2

Notepad++ v6.2.2 fixed bugs and added features:

1.  Fix url link style problem in php document.
2.  Add selected line count display on the status bar.
3.  Add the capacity to treat path like "\test\test.txt".

### 6.2.1

Notepad++ v6.2.1 fixed bugs:

1.  Fix link hotspot colourising issue.
2.  Fix a regression bug about Configurator GUI: font setting controls are disabled.
3.  Fix a crash issue due to the inconsistent userDefineLang.xml.
4.  Fixed bug of UDL2 where "Folder in code" keywords were detected even outside of commnets.
5.  Fixed for the hex number detection bug of UDL2 (for example, 0xfece57 ok, but not 0xfe57ce).
6.  Fix a crash bug while file path as argument and its length is more than 260 characters.

### 6.2

Notepad++ v6.2 includes a new User Defined Languge (UDL2) system, the key features of UDL2 are:

1.  More keyword groups were added (more syntax highlighting can be defined):
  - 3 folding groups
  - 8 keyword groups
  - 2 comment groups
  - 1 number definitons
  - 2 operators groups
  - 8 delimiter sets
2.  Multipart keywords are supported (for example: "else if" can be defined as a single keyword)
3.  Whitespace is no longer mandatory as keyword separator: Operators, Delimiters and Folding keywords can be recognized with or without whitespace separators.
4.  Numbers recognition support is greatly improved (prefix, suffix, range and extra symbols supported).
5.  Operators and delimiters can be longer than one character.
6.  The same characters can be used as comments AND operators.
7.  Comments and delimiters support nesting (even within each other).
8.  Improvments to Comments include:
  - Comment folding
  - Comment continuation
  - Comment only start at the beginning of line
9.  In the case of several comment pairs defined, comment open symbols match only with comment close symbols of the same order. (for example: /* C comment */, /+ D comment +/, but not /* mixed comment +/)

Included plugins:

1.  Spell Checker v1.3.3
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

### 6.1.8

Notepad++ v6.1.8 fixed bug (from v6.1.7):

1.  Fix a regression of wrong behaviour while save an empty file.

### 6.1.7

Notepad++ v6.1.7 new features and fixed bugs:

1.  Fix config.xml zero length bug after Windows' update (Notepad++ is forced to quit).
2.  Fix a crash issue on save as command.
3.  Fix saving file fails silently bug.
4.  Fix a buffer overflow bug.
5.  Add case sensitive option for smart highlighting feature.
6.  Enhance the localization system.
7.  Fix a behavior issue on Windows shutdown.
8.  Enhance comment operations: add stream Uncomment command and cross-calling of block feature.
9.  Enhance TAB to space and space to TAB commands.

### 6.1.6

Notepad++ v6.1.6 new features and fixed bugs:

1.  Fix (Walk around) Notepad++ hanging on CJK input with ANSI document while enabling word completion.
2.  Enhance folding performance on large documents.
3.  Check update without elevating to Administrator right.
4.  Add update auto-detection for the environment vista/windows 7/Windows 8.
5.  Fix bug: Doc switcher icon state not refreshed after '"save all" action.
6.  Make Document map togglable via menu.
7.  Enhance Find/Replace dialog result messages.
8.  Fix a issue that "max number of recent files" cannot be set to 0.
9.  Add font size 5, 6 and 7 in Style Configurator.

### 6.1.5

Notepad++ v6.1.5 fixed bugs:

1.  Fix a html tag match freezing issue.
2.  Fix the sidebar splitter failed in Windows 8 issue.
3.  Fix un regression: folding/unfolding performance issue.
4.  Fix tab context menu in the other localization regression due to adding new command "Reload".
5.  Fix lower/UPPER case on selected text which contains NULL characters.
6.  Fix wrap/unwrap line position not being kept bug.
7.  Fix xml syntax highlighting broken because of php preprocessor instruction inside.
8.  Fix a GUI bug which shows empty tab row while closing a last tab in a row (in the multi-line tab mode).

### 6.1.4

Notepad++ v6.1.4 fixed bugs:

1.  Fix a crash issue of Windows 8's Computer Manager due to Notepad++'s Shell Extension (Explorer's context menu).
2.  Walk around a crash issue of Windows 7/vista/xp Explorer due to the conflict among Symantec Antivirus, Net iD component and Notepad++'s Shell Extension (Explorer's context menu).
3.  Fix a regression in clickable link feature.
4.  Add "reload from disk" command entry in tab context menu.

### 6.1.3

Notepad++ v6.1.3 enhancement and fixed bugs:

1.  Enhance the performance issue for xml matching tags highlighting and for displaying clickable links.
2.  While the amount of file to open is larger than 200, a dialog will be shown to warn user.
3.  Fix Notepad++ close bug while move one cloned new empty document into another view, in the destination contained only this new empty document.
4.  Fix hanging problem while double-click on a project folder then (immediately) drag it.
5.  Fix a bug while command argument contain an empty string ("").
6.  Fix mouse cursor disappearing bug on right click while a project item is dragging.

### 6.1.2

Notepad++ v6.1.2 fixed bugs:

1.  Fix Notepad++ hanging bug due to the opened file containing a half of UTF-8 double byte sequence at the end of the file.

### 6.1.1

Notepad++ v6.1.1 modification and fixed bugs:

1.  Enhance project's license (GPL) to avoid the other malicious websites bundle Notepad++ release with their parasite software.
2.  Fix selectAll-copy-paste on the same document crash bug while document map has been activated.
3.  Fix a regression about auto-completion feature.
4.  Fix focus on document map problem after its launch.

### 6.1

Notepad++ v6.1 fixed bugs:

1.  Fix search/replace bug while Doc Map is opened.
2.  Fix User Defined Language syntax highlighting problem while Doc Map is opened.
3.  Fix Chinese characters showing problem while Doc Map is opened.
4.  The old behaviour of comment/uncomment w/o selection is restored.
5.  Fix selecting all the text in doc map while clicking on doc map dialog caption.

Included plugins:

1.  Spell Checker v1.3.3
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

### 6.0

Notepad++ v6 new features and enhancement:

1.  PCRE (Perl Compatible Regular Expressions) is supported.
2.  Add Document Map feature (via Menu "View->Document Map").
3.  Enhance the loading performance for the large file.

Included plugins:

1.  Spell Checker v1.3.3
2.  NppFTP 0.24.1
3.  NppExport v0.2.8
4.  Plugin Manager 1.0.8
5.  Converter 3.0

## 5.x

### 5.9.8

Notepad++ v5.9.8 new features and fixed bugs:

1. Add drag and drop capacity in Project Manager (only inside of Project Manager).
2. Add "Move Up" (Ctrl+Up) and "Move Down" (Ctrl+Down) commands in Project Panel.
3. Edit Zone border can be customizable via "Editing" tab of Preferences dialog.
4. Fix an aesthetic problem in incremental search bar.
5. Fix "Save all" GUI bug.
6. Make plugins in "%APPDATA%\Notepad++\plugins\" override les plugins in Notepad++ installation directory. (Plugins loading from %APPDATA%\Notepad++\plugins\ is enabled only if "NPP_INSTALLED_DIR\Notepad++\allowAppDataPlugins.xml" is present)

### 5.9.6.2

Notepad++ v5.9.6.2 new features and fixed bugs:

1.  Fix a crash issue while right-clicking on the doc switcher's column control ("Name" and "Ext.").
2.  Reduce the margin of edit zone.

### 5.9.6.1

Notepad++ v5.9.6.1 new features and fixed bugs:

1.  Fix the crash issue while execute "Add Files from Directory" command (Project Manager).
2.  Enhance "Add files from Directory" command in Project Manager - sorted result: first all folders, then all files, both of them alphabetically.

### 5.9.6

Notepad++ v5.9.6 new features and fixed bugs:

1.  Add a new feature "Adding files recursively from a floder" in Project Manager.
2.  Fix a bug in Project Manager regarding open and reload commands.

### 5.9.5

Notepad++ v5.9.5 new features and fixed bugs:

1.  Fix Project Panel loading non-project file bug.
2.  Fix saving project file bug while saving it on the root.
3.  Fix adding/hidding Language Menue item problem in Preference dialog.
4.  Make Project Panel translatable.

### 5.9.4

Notepad++ v5.9.4 new features and fixed bugs:

1.  Add 3 Project Panels for the management of projects
2.  Doc Switcher can be sorted now.
3.  Fix a crash bug - crash on launch time if default User defined language was set on the previous session.
4.  Fix crash issue while printing for some printers.
5.  Fix ANSI version Clipboard history entries display bug.
6.  Fix wrong display of tab number setting dialog in Lang Menu/Tab settings of Preferences dialog.

### 5.9.3

Notepad++ v5.9.3 new features and fixed bugs:

1.  Update Scintilla to 2.27.
2.  Make Recent File List totally customizable.
3.  Add Vertical File Switcher feature.
4.  Add active folding area highlighting feature (only for box and circle mode).
5.  Detect the absence of Scintilla.
6.  Add 2 plugins messages NPPM_GETLANGUAGENAME & NPPM_GETLANGUAGEDESC.
7.  Fix "Replace all" feature hangs on the Regular Expression '$'.
8.  Fix wrong result returned by NPPM_GETLANGUAGENAME.

### 5.9.2

Notepad++ v5.9.2 fixed bug (from v5.9.1):

1. Fix the Clipboard History crash issue while no data in Clipboard.
2. Fix the local directory installation option ignored issue in Installer.
3. Reduce the recent file history width to 32 characters.

### 5.9.1

Notepad++ v5.9.1 new features and fixed bug (from v5.9):

1.  Add Character Insertion Panel.
2.  Add Clipboard History feature.
3.  Add find characters in range feature.

### 5.9

Notepad++ v5.9 new features and fixed bug (from v5.8.7) :

1.  Update Scintilla from 2.21 to 2.25
2.  New feature: Non-greedy regular expression (Scintilla).
3.  Add Copy/Cut/Paste Binary Content feature.
4.  Add "paste HTML content" and "paste RTF content" commands.
5.  Fix the inverse of title and message for some MessageBox.
6.  Add "Remove Unmarked Lines" command.
7.  Add "Column Mode Tip" to notice users the usage of column mode in Notepad++.
8.  Make stream comment of php/javascript foldable.

Included plugins (Unicode):

1.  Spell Checker v1.3.3
2.  NppFTP 0.23
3.  NppExport v0.2.8
4.  Compare Plugin 1.5.6.1
5.  Plugin Manager 0.9.3.1
6.  Converter 3.0

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.4.1
3.  Spell Checker v1.3.3
4.  MIME Tools v1.6
5.  NppExport v0.2.8
6.  Light Explorer v1.6
7.  Compare Plugin 1.5.5
8.  Plugin Manager 0.9.3.1

### 5.8.7

Notepad++ v5.8.7 new features and fixed bug (from v5.8.6) :

1.  Fix a regression bug: the notification message boxes were not modal. It can be ignored by user then cause wrong input characters.
2.  In order to reduce the confusion, new "Mark" tab for "Mark all" feature is made in Find/Replace dialog.
3.  Make "Fide what" and "Replace with" fields larger in Find/Replace dialog.
4.  Make message dialogs in Notepad++ translatable (in progress).
5.  Change user manual format from chm to html.
6.  Make minimalist installation available in installer.

### 5.8.6

Notepad++ v5.8.6 new features and fixed bugs (from v5.8.5) :

1.  Fix langs.xml 0 length problem while user ends session without closing Notepad++.
2.  Fix empty line count failure (RegExpr).
3.  Fix task list display glitch under Windows 7.
4.  Add trim functions (header/trailing/compact feature).
5.  Add white space and TAB conversion features.
6.  Fix folding margin to be displayed when opening Notepad++ with a new/empty file (Normal text).
7.  Fix auto-completion detection language bug.
8.  Fix the changing theme settings makes switch back to the default theme bug.
9.  Make english.xml customizable.

### 5.8.5

Notepad++ v5.8.5 new features and fixed bugs (from v5.8.4) :

1.  Fix Shell Extension icon absent issue.
2.  Fix the crash problem if config.xml is not present.
3.  Fix tab settings not saved under Windows 7 problem.
4.  Fix localization switching under Windows 7 problem.
5.  Fix x64 system files problems : not included in recent file history list while closing a file.
6.  Fix x64 system files problems : not remembered in the next session problem.
7.  Fix the search direction not being memorized problem.
8.  Modify File Association dialog UI.
9.  Fix the initial document encoding is not set by "New Document Settings".

### 5.8.4

Notepad++ v5.8.4 new features and fixed bugs (from v5.8.3) :

1.  Fix memory leak problem while switching tab.
2.  Fix User Defined Language dialog docking problem under Windows 7.
3.  Fix backwards search with Asian codepage problem.
4.  Add a new capacity in context menu: the menu item and folder item can be renamed (and in whichever language).
5.  All the supported encoding charsets can be set as default in "New Document Settings".
6.  Remove Calltip restriction from plugins side.
7.  Add "-alwaysOnTop" command line argument.
8.  Fix icon display glitch in shell extension context menu.

### 5.8.3

Notepad++ v5.8.3 new features and fixed bugs (from v5.8.2) :

1.  A new application icon.
2.  Add the capacity to open x64 system files.
3.  Add Edit context menu command.
4.  Add a new ability: sub-menus commands can be in the context menu.
5.  Fix context menu reload problem (plugin commands reload fails).
6.  Fix searching up fails while code page is set to Chinese/Japnese/Korean bug.
7.  Remove unsupported encodings by Microsoft Windows : ISO-8859-10, ISO-8859-11, ISO-8859-16.
8.  Fix move down current lines bug while moving down on the last line.
9.  Fix crash issue : crash in the next launch after setting MS-DOS-Style as default language.
10. Fix zoom bug on the second view.
11. Fix a heap corruption of ColourPicker.
12. Due to UAC issue, doLocalConf.xml is ignored under vista and windows 7, if Notepad++ is installed in "Program files" directory.

### 5.8.2

Notepad++ v5.8.2 fixed bugs (from v5.8.1) :

1.  Fix windows 7 crash bug while executing update.
2.  Fix macro recording bug for the non-ASCII characters.
3.  Fix C# syntax highlighting disabled problem after reloading.
4.  Fix find performance issue related macro recording.

### 5.8.1

Notepad++ v5.8.1 new features and fixed bugs (from v5.8) :

1.  Fix Actionscript lexer crash problem.
2.  Fix saving UCS-2 text file corrupted bug.
3.  Add word count in Summary feature.
4.  Fix macro record bug from ANSI document.
5.  Fix hidding/showing status bar bug.

### 5.8

Notepad++ v5.8 new features and fixed bugs (from v5.7) :

1.  Upgrade Scintilla to version 2.21.
2.  Fix a vulnerability issue: Load ScinLexer.dll with its full path to avoid hijack.
3.  Fix Unicode file corrupted on saving bug (the buffer alignment issue).
4.  Fix DBCS encodings file saving corruption bug.
5.  Fix file containing NULL character loading bug.
6.  Fix php syntax highlighting bug.
7.  Fix dragging undocked window performance issue while using Vista Aero UI style.
8.  Fix dragging undocked window performance issue while using Vista/Windows7 Aero UI style.
9.  Fix large file truncated after loading problem.
10. Improve file loading performance.
11. Fix Shortcut Mapper inconsistence issue after deleting a macro or an user command.
12. Add 2 line wrap methods (default plus aligned and indent).
13. Add 2 menu commands : "Modify Shortcut/Delete Macro" and  "Modify Shortcut/Delete Command".
14. Add "Modify" and "Delete" buttons on Shortcut mapper dialog.
15. Add macro new ability to record search and replace actions.
16. Fix SaveSession bug.
17. Remove characters count feature from the status bar due to its performance issue with UTF8 file.
18. Fix crash issue due to themes switching.
19. Make folding margin hidable.
20. Add NPPM_GETCURRENTNATIVELANGENCODING, NPPM_ALLOCATECMDID and NPPM_ALLOCATEMARKER message (to get the current native language enconding).
21. Change editing settings saving behaviour : one set of settings are applied in 2 scintilla controls (except zoom).
22. Add Statistics feature which is accessible from the menu command "Summary..." (under menu "View") and the 2nd zone of statusbar (double click).

Included plugins (Unicode):

1.  TextFX v0.26
2.  Spell Checker v1.3.3
3.  MIME Tools v1.6
4.  NppExport v0.2.8
5.  Compare Plugin 1.5.6.1
6.  Plugin Manager 0.9.3.1
7.  NppFTP 0.23
8.  Select 'N' Launch 1.0

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.4.1
3.  Spell Checker v1.3.3
4.  MIME Tools v1.6
5.  NppExport v0.2.8
6.  Light Explorer v1.6
7.  Compare Plugin 1.5.5
8.  Plugin Manager 0.9.3.1

### 5.7

Notepad++ v5.7 new features and fixed bugs (from v5.6.8) :

1.  Upgrade Scintilla to version 2.12.
2.  Add "Inverse bookmark" feature.
3.  Add NPPM_SAVECURRENTFILEAS message.
4.  Fix premature deallocation bug for import UDL.
5.  Add import/export User Defined Language features.
6.  File detection : Switch to modified or deleted file while user is asked to reload or keep the file.
7.  Fix closing several detected non-existing files bug.
8.  Fix language switching to English not working bug.
9.  Reduce PostIt/FullScreen restore button size.
10. Fix PostIt wrong restore button position after toggling off fullScreen mode.
11. Fix crashes on new 11 character long UDL names bug.
12. Fix "Save all" inconsistent icon state on toolbar.
13. Add new keywords of HTML 5 and css.

Included plugins (Unicode):

1.  TextFX v0.26
2.  Spell Checker v1.3.3
3.  MIME Tools v1.6
4.  NppExport v0.2.8
5.  Compare Plugin 1.5.6
6.  Plugin Manager 0.9.3.1
7.  NppFTP 0.1.3.0
8.  Select 'N' Launch 1.0

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.3.2
3.  Spell Checker v1.3.3
4.  MIME Tools v1.6
5.  NppExport v0.2.8
6.  Light Explorer v1.6
7.  Compare Plugin 1.5.5
8.  Plugin Manager 0.9.3.0

### 5.6.8

Notepad++ v5.6.8 new features and fixed bugs (from v5.6.7) :

1.  Fix comment stream without selection bug.
2.  Fix Find in files results highlighting regression bug.
3.  Fix regression bug (include the correct SciLexer.dll) about insensible case search mode.

### 5.6.7

Notepad++ v5.6.7 new features and fixed bugs (from v5.6.6) :

1.  Fix "Find in files" crash bug.
2.  Focus (switch to) the dirty document while asking to save unsaved document when user close Notepad++.
3.  Fix the bug while giving command C:\NppDir>notepad++ (w/o quote), npp try to open file "notepad++".
4.  Enlarge regconition of clickable link from "http://" to any URI.
5.  Fix the bug while changing the language list in Style Configurator, the "Save and close" button is enabled.

### 5.6.6

Notepad++ v5.6.6 new features and fixed bugs (from v5.6.5) :

1.  Fixed Search bug with Chinese/Japanese/Korean characters.

### 5.6.5

Notepad++ v5.6.5 new features and fixed bugs (from v5.6.4) :

1.  Fix loading encoding file making file corrupted (after saving).
2.  Fix xml/html encoding overrides BOM if present.
3.  Fixed Chinese/Japanese/Korean characters display problem after "find in the current document".
4.  Add "set find text and find next" feature.
5.  Add JSP.
6.  Recover langs.xml while its length is zero.
7.  Fix "Close Window(s)" in Window dialog bug (if file is dirty and cancel to close).
8.  Fix finding "\0" or "\x00" issue in find extened mode.
9.  Add "\u" in find extened mode to find Unicode encoding character(ex. "\u00e9" find 'é').

### 5.6.4

Notepad++ v5.6.4 new features and fixed bugs (from v5.6.3) :

1.  Add feature of conversion from a localization encoding to UNICODE.
2.  Fix status bar display bug that xml/html utf8 indicator makes status bar display ANSI instead of ANSI as UTF-8.

### 5.6.3

Notepad++ v5.6.3 new features and fixed bugs (from v5.6.2) :

1.  Add restore button in fullscreen and postIt mode.
2.  Fix auto-updater bug.

### 5.6.2

Notepad++ v5.6.2 new features and fixed bugs (from v5.6.1) :

1.  Fix the Unicode localization file display problem.
2.  Update templat localization file (english.xml) to v5.6.1.
3.  Fix tag highlighting bug while disabling indent guide lines.
4.  Fix the translated sub menu entries applying on the menu item.
5.  Display more information while catching of plugins crash.

### 5.6.1

Notepad++ v5.6.1 new features and fixed bugs (from v5.6) :

1.  Fix brace highlighting breaking issue and related performance problem.
2.  Add new encodings in the shortcuts map.
3.  Remove annoying encoding issue warning dialogs.
4.  Enhance Html encoding auto-detection.
5.  Fix case-insensitive searching bug for non-ascii characters (for example some characters in French and Cyrillic letters).
6.  Add find result commands in the menu.
7.  Add DOS CodePage : CP437, CP737, CP850, CP852, CP855, CP857, CP858, CP860, CP861, CP863, CP865, CP866 and CP869.
8.  Fix localization combo box unselected in preference dialog bug after startup (when a localization file is in use).

### 5.6

Notepad++ v5.6 new features and fixed bugs (from v5.5.1) :

1.  Add languages encoding - Chinese traditional (BIG5), Chinese Simplified (GB2312), Japanese (Shift JIS), Korean (EUC), Thai (TIS-620), Hebrew (iso-8859-8), Hebrew (1255), Central European (1250), Cyrillic (1251), Cyrillic (KOI8-U), Cyrillic (KOI8-R), Cyrillic (Mac), Western European(1252), Greek (1253), Turkish(1254), Arabic (1256), Baltic (1257), Vietnamese (1258), ISO_8859-1 to ISO_8859-16 and a lot of more.
2.  Add auto-detection of HTML and XML files encodings.
3.  Add COBOL, D, Gui4Cli, PowerShell and R language support.
4.  Add Marker Jumper feature (Jump down/up : Ctrl+Num/Ctrl+Shift+Num).
5.  Add indent guide line highlighting for html/xml tags.
6.  Add system tray context menu and new command argument "-systemtray".
7.  Fix Unicode to ANSI encoding bug.
8.  Fix last recent file list menu items localization encoding bug.
9.  Fix last recent file number goes to zero issue.
10. Add new command argument "--help".
11. Fix Calltip hint bug and add a new capacity in it.
12. Add the ability to add the second keyword group for user in both LISP and Scheme languages.
13. Fix the wrap symbol display problem.
14. Add SQL ESC symbol '\'.
15. Fix column editor insert number bug in virtual space mode.
16. Fix status bar displaying "-2 char" issue for a empty document.
17. Fix installation of NppShell64 failed issue in installer.

Included plugins (Unicode):

1.  TextFX v0.26
2.  NppExec v0.3.2
3.  Spell Checker v1.3.3
4.  MIME Tools v1.6
5.  NppExport v0.2.8
6.  NppNetNote v0.1
7.  Compare Plugin 1.5.5
8.  Plugin Manager 0.9.3.0

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.3.2
3.  Spell Checker v1.3.3
4.  MIME Tools v1.6
5.  NppExport v0.2.8
6.  Light Explorer v1.5
7.  NppNetNote v0.1
8.  Compare Plugin 1.5.5
9.  Plugin Manager 0.9.3.0

### 5.5.1

Notepad++ v5.5.1 new features and fixed bugs (from v5.5) :

1.  Old icon is back.
2.  Set ".txt" extension automatically while saving a document text.
3.  Real characters count is added in status bar.
4.  Fix some memory leaks.
5.  Add "open all" capacity in finder (for find in files).
6.  Replaced nppcm with NppShell (in installer).
	- Dialog to allow change of various settings (cmd : regsvr32 /s /i NppShell.dll)
	- Context menu icon properly rendered
	- Incorporate dynamic icon for registered filetypes

### 5.5

Notepad++ v5.5 new features and fixed bugs (from v5.4.5) :

1.  Update : upgrade Scintilla from v1.78 to v2.01.
2.  New icon : change from old icon to a cool chamelon icon.
3.  New feature : virtual space for column mode.
4.  New feature : multi-editing / selection.
5.  New feature : tab settings for per language.
6.  New feature : selected lines moving up/down capacity.
7.  New feature : incremental Search shows pink background when text not found (like Firefox).
8.  New feature : rational number is recognized in User Defined Language System.
9.  New feature : escape character capacity for the delimiter in User Defined Language System.
10. Bug fixed : tool bar tip crash issue.
11. Bug fixed : column editor inserting octal number broken issue.
12. Changed behaviour : "-nosession" parameter's not only none of session is loaded, but also none of session is saved.
13. Bug fixed : docking feature crash issue.
14. New feature : the ability to not launch Auto-updater during a period (15 days by default).
15. New feature : import plugins feature (load on the fly).
16. New feature : import theme (stylers.xml) feature.
17. Bug fixed : a crash issue while launch Fin in file (regression since v5.4.5).
18. Bug fixed : a crash issue while deleting the last line.
19. Bug fixed : a bug of plugin message NPPM_GETPLUGINSCONFIGDIR (regression since v5.4.5).
20. New feature :  new plugin notification NPPN_DOCORDERCHANGED to notify plugins that document order is changed.
21. Bug fixed : tool bar chevron disappeared bug (regression since previous versions).
22. Bug fixed : a crash bug due to instability of FTP_synchronize plugin (enhance Docking feature).
23. Bug fixed : getting fonts problem under Chines/Korean/Japanese environment.
24. Bug fixed : wrong File encoding auto-detection problem : binary file is detected as UTF-16 big-endian.

Included plugins (Unicode):

1.  TextFX v0.26
2.  NppExec v0.3.2
3.  Spell Checker v1.3.3
4.  MIME Tools v1.5
5.  NppExport v0.2.8
6.  Doc Monitor v2.2
7.  NppNetNote v0.1
8.  Compare Plugin 1.5.5
9.  Plugin Manager 0.9.2.1

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.3.2
3.  Spell Checker v1.3.3
4.  MIME Tools v1.5
5.  NppExport v0.2.8
6.  Light Explorer v1.5
7.  Doc Monitor v2.2
8.  NppNetNote v0.1
9.  Compare Plugin 1.5.5

### 5.4.5

Notepad++ v5.4.5 fixed bugs (from v5.4.4) :

1.  Fix plugins shortcuts not working bug.
2.  Fix the tooltip on toolbar display bug for the plugins icons.
3.  Fix a crash that was occurring when searching in files from a deep path.
4.  Fix a crash issue (Unicode binary) while close Notepad++ with an RC file opened under Chinese Xp.
5.  Fix Pascal and Scheme syntax highlighting problem (fixes in styles.xml).
6.  Add SQL folding capacity.

### 5.4.4

Notepad++ v5.4.4 fixed bugs (from v5.4.3) :

1.  Upgrade Scintilla from 1.77 to 1.78.
2.  Fix XML syntax highlighting bug while presence of the tag "<script/>" (Yes, finally).
3.  Fix Find in files/Find in all open files bug in non western languages (ie. Russian, Chinese, Hebrew...).
4.  Fix the find in files crash issue if find what field contains 0x0A or 0xD.
5.  Fix Window7 SetWindowsHookEx() failed issue for the dockable windows. (by recognizing windows7 environment)
6.  Fix no tool bar bug under w2k.
7.  Fix Incremental search bug while clicking on text zone after some searches.
8.  Fix Matlab script making Notepad++ crash under Chinese windows issue.
9.  Make NpWiki++ link available as on line help.
10. Add lines count on status bar.
11. Fix "In selection" bug in Find Replace features.
12. Fix the clickable link issue for some links (add '~' in RegExp).
13. Fix the bug that Notepad++ does not show on while it is minimized and its file is modified from outside.

### 5.4.3

Notepad++ v5.4.3 fixed bugs (from v5.4.2) :

1.  Fix clickable link styling bug.
2.  Fix document tab click launching a new instance bug.

### 5.4.2

Notepad++ v5.4.2 fixed bugs (from v5.4.1) :

1.  Fix the localization switcher bug while w/o doLocalConf.xml.
2.  Fix only one document "Move to other view" close Notepad++ instance issue.
3.  Fix plugin menu boolean check box bug.

### 5.4.1

Notepad++ v5.4.1 new features and fixed bugs (from v5.4) :

1.  Add ChangeMarkers plugin in installer.
2.  Add theme description in installer.
3.  Make installer update contextMenu.xml (backup the old one then override it with the new one).
4.  Fix lastRecentFileList localization issue.
5.  Add readonly change status notification for plugin system.
6.  Fix Styler Configurator user extension handler.

### 5.4

Notepad++ v5.4 new features and fixed bugs (from v5.3.1) :

1.  Add theme selector to switch styles.xml on the fly, change styles.xml on one click.
2.  Add google chrome drag and derop tab feature : drag out tab to create a new instance, transfer documents among several instances by drag and drop.
3.  Add Mark all extension : user can mark any occurrence with 5 different colours.
4.  Add new feature : column selection allows to insertion a string by typing characters in sequence (w/o column mode editor).
5.  Detect UTF16 encoding (BE and LE) w/o BOM.
6.  Fix crash bug : Double click a file associated with an older version of Notepad++ while a newer version of Notepad++ instance is running.
7.  lmprove main menu structure (more compact). Language Menu can be compacted as well (optional, in Preference dialog).
8.  Fine numbers margin width is changed dynamically according to the needed space (but keeping at least 3 digits).
9.  File history list (under the File menu) is limited to 100 characters per item. Longer file names are fitted to 100 characters by replacing path components with ellipses.
10. Update Scintilla from v1.75 to v1.77.
11. Indent guideline can be shown w/o whitespace or tab symbol.
12. Fixed two bugs when calculating the width of the TaskList (document list when pressing ctrl+tab or right-click + mouse wheel.
13. Add an (hidden) option to make the "Filters" and "Directory" fields follow the current opened document in "Find in files" dialog. The new parameters are located in config.xml and are called: "fifFilterFollowsDoc" and "fifFolderFollowsDoc" (set to "yes"/"no")
14. Add new command parameters : -c (column) -x et -y (startup position).
15. Remove change line marker which does not work correctly. Include ChangeMarkers plugin instead.
16. Fix bug "Switch to found results window" command now switches back to the current edit view if the focus is already on the found results.
17. Fix the search result inaccurate colorization bug.
18. Fix the Mark all in selection bug (while Find Replace Dialog loosing the focus).
19. Add 2 plugins messages : NPPN_FILEBEFORELOAD and NPPN_FILELOADFAILED.
20. Fix New document not be switched while double clicking in Find in files result panel.
21. Fix conversion min to Maj and Maj to min (or vice et versa) in column selection bug.
22. Fix bug when the find dialog was closed the translucaent shadow remained in Windows 7.
23. Fix crash bug of find in files feature.
24. Add "follow current doc" checkbox in Find in file dialog.
25. Add the ability of tag match feature to not highlight comment zone in html/xml.
26. Fix TCL language highlighting bug.

Included plugins (Unicode):

1.  TextFX v0.26
2.  NppExec v0.3 RC1
3.  Spell Checker v1.3.2
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Doc Monitor v2.2
8.  NppNetNote v0.1
9.  ChangeMarkers 1.2.0

Included plugins (ANSI):

1.   TextFX v0.25
2.   NppExec v0.3 RC1
3.   Spell Checker v1.3.1
4.   MIME Tools v1.5
5.   FTP_synchronize v0.9.6
6.   NppExport v0.2.8
7.   Light Explorer v1.5
8.   Doc Monitor v2.2
9.   NppNetNote v0.1
10.  ChangeMarkers 1.2.0

### 5.3.1

Notepad++ v5.3.1 new features and fixed bugs (from v5.3) :

1.  Fix inaccurate replace bug.
2.  Increase Find what and replace with fields to 2047 characters.
3.  Stop the indicator highlighting while the line change marker margin is hidden.
4.  SConstruct and SConscript are recognized as python file.

### 5.3

Notepad++ v5.3 new feature and fixed bugs (from v5.2) :

1.  Add Line change state vertical bar.
2.  Drop (or open in dos command line) a directory in Notepad++ to open all files in the directory recursively.
3.  Add "Find all in current file" feature.
4.  (Most of) Find/replace dialog settings are remembered.
5.  Add a hidden setting (dlgAlwaysVisible in config.xml) to allow user set it manually to not hide the Find/Replace dialog if any result found.
6.  Fix uncomment block erasing first character bug.
7.  Enlarge some strings displayed zone for the translation.
8.  Fix ESC key for column mode behaviour.
9.  Fix read only file SaveAs bug.
10. Change behaviour : no popup dialog while closing an unsaved empty untitled document.
11. Changing "Search result" stylers via Styler Configurator takes visual effect on the fly now.
12. Fix for L_EXTERNAL in loadSession.
13. Variable $(CURRENT_WORD) is enlarged to 2039 charraters.
14. Fix the bug the Notepad++ is launched several instances but show nothing.
15. Fix Find in files regression : The result panel doesn't show Unicode characters correctly.

Included plugins (Unicode):

1.  TextFX v0.26
2.  NppExec v0.3 RC1
3.  Spell Checker v1.3.2
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Doc Monitor v2.2
8.  NppNetNote v0.1

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.3 RC1
3.  Spell Checker v1.3.1
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Light Explorer v1.5
8.  Doc Monitor v2.2
9.  NppNetNote v0.1

### 5.2

Notepad++ v5.2 new feature and fixed bugs (from v5.1.4) :

1.  Fix Function Tip crash issue.
2.  Fix the find in files crash bug while cloned views are side by side and focus is on main view.
3.  Fix a crash bug after searching/replacing in files returned with no results.
4.  Enhance "Find in all opened files" and "Find in files" features.
5.  Add Replace in files feature.
6.  Fix command line parsing to accept unquoted files as single argument.
7.  Refine "open ANSI files as UTF8 w/o BOM" feature.
8.  Add minidump feature in the case of crash for debug use.
9.  Adjust PostIt/FullScreen behaviour to mix well together.
10. The file filters and the directory are set while find/replace/findInFiles dialog is launched.
11. Adding find in files filters supports user defined language.
12. Fix the bug that texts in combo box of Find dialog are restored not in order on the launch time.
13. Add NPPM_DOOPEN plugin message.

Included plugins (Unicode):

1.  TextFX v0.26
2.  NppExec v0.3 RC1
3.  Spell Checker v1.3.2
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Doc Monitor v2.2
8.  NppNetNote v0.1
9.  Compare plugin v1.5.2

Included plugins (ANSI):

1.  TextFX v0.25
2.  NppExec v0.3 RC1
3.  Spell Checker v1.3.1
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Compare plugin v1.5.1
8.  Light Explorer v1.5
9.  Doc Monitor v2.2
10. NppNetNote v0.1

### 5.1.4

Notepad++ v5.1.4 new feature and fixed bugs (from v5.1.3) :

1.  Add localization on run time feature : Change language on the run time for Unicode version (via preferences dialog).
2.  Add the ability to force opened ANSI document as UTF-8 w/o BOM.
3.  Fix verbose backup bug (while the backup dir is not set).
4.  Fix bug that external lexer doesn't work with Unicode version.
5.  Fix recent files list bug.
6.  Include a help content file.
7.  Add new plugin notification message NPPN_WORDSTYLESUPDATED.
8.  Add 2 plugin messages for shortcut feature : NPPN_SHORTCUTREMAPPED notification and NPPM_GETSHORTCUTBYCMDID message.

### 5.1.3

Notepad++ v5.1.3 new feature and fixed bugs (from v5.1.2) :

1.  Add PostIt feature (F12 to toggle it).
2.  Fix the bug that Unicode path file opened in the previous session doesn't be restored.
3.  Fix nativeLang loading problem if Notepad++ location path contains Unicode characters.
4.  Make shell extension context menu Unicode compliant.
5.  Fix "Go to/Open in another instance" bug.
6.  Process WM_IME_REQUEST message to support Windows IME.
7.  Fix "Go to another view" translation coding error.
8.  Adding search text on the top of combo box.
9.  Fix Tidy installation problem for TextFX plugin.
10. Change the N++ recovery directory from c:\N++RECOV to %temp%\N++RECOV.

### 5.1.2

Notepad++ v5.1.2 fixed bugs (from v5.1.1) :

1.  Fix localization (Japanese/Cyrillic/Hebrew...) display bug under Notepad++ Unicode version.
2.  Fix Find in Files search in both Unicode/ANSI files.
3.  Make Find in files thread-less to improve the performance and to avoid the crash.
4.  Fix crash bug while loading File of User Defined Language.
5.  Fix writing a key in registry while preference dialog launches
6.  Fix crash in File Dialog if too many languages or extensions were added.
7.  Fix memory leak when a file cannot be opened if it consumes too much memory.
8.  Fix a vista issue : prevent Notepad++ save files to "virtual store" under vista.
9.  Fusion 2 commands "activate main view" and "activate sub view" in "Focus the other view".
10. Fix close all files/app exit cancel bug.
11. Fix default button problem in Find in Files dialog.
12. Fix caret position moving problem after loading a session.
13. Fix bug when pasting to bookmarked lines in Unicode version.

### 5.1.1

Notepad++ v5.1.1 fixed bugs (from v5.1) :

1.  Fix Unicode version display Korean/Japanese language problem.
2.  Fix bug : Open in new instance not allowing spaces in paths.
3.  Fix "Global Styles" string incorrectly displayed in Unicode version.
4.  Fix filters for open/save dialog not showing or incorrectly (showing 'L').
5.  Fix calltip argument with 'L' leader character bug.
6.  Fix tab control draw bug.

### 5.1

Notepad++ v5.1 fixed bugs and added features (from v5.0.3) :

1.  Make Notepad++ Unicode-compliant application(Unicode path supported).
2.  Fix crash issue due to the incoherent modification/creation date.
3.  Enhance Find in files feature : launch in thread, stop as wish.
4.  Add find/replace dialog memorize capacity.
5.  Fix "find in all opened files" and "find in files" unicode text search bug.
6.  Fix "replace" and "replace all" bug.
7.  Fix tag match highlighting mismatched bug.
8.  Make tag match highlighting on non html zone optional.
9.  Fix cpu high consumption bug while document is cloned with smart highlighting and xml matched highlighting features activating.
10. Refine the Save/Open file directory settings (follow tab/last operation/user defined dir).
11. Add "Doc go to new instance" and "Doc open in new instance" features.
12. Move document to another instance of Notepad++ via drag and drop document tab.
13. Add new pluin notification NPPN_DOCACTIVATED and NPPN_LANGCHANGED.
14. Fix context menu incorrect setting crash bug.
15. Fix crash problem while typing Chinese character in ANSI CSS document under Chinese environment.
16. Fix a problem with Incremental search+UTF8 in win9x.
17. Fix the User defined language not working in Unicode version bug.
18. Fix bug with CPP lexer keyword list.
19. Fix auto-completion not woring for HTML, SQL and RC problem.
20. Fix html, sql and rc auto-completion bug.
21. Fix cancel to save file in Notepad++ can not stop system shutdown problem.
22. Fix bug with opening relative path files.
23. Fix bug with clearing read-only flag.
24. Fix wrap after save as bug.
25. Improve "reload from disk" behaviour.
26. Add option to only show the filename in the titlebar.
27. Add NPPM_[G/S]ET_BUFFERLANGTYPE, NPPM_[G/S]ET_BUFFERENCODING, NPPM_[G/S]ET_BUFFERFORMAT  messages to access buffer properties.
28. Remove all the comic sans font (finally :) ).

Included plugins (Unicode):

1.  TexFX v0.24a
2.  MIME Tools v1.5
3.  NppExport v0.2.8
4.  Doc Monitor v2.2
5.  NppAutoIndent 1.2
6.  FTP_synchronize v0.9.6
7.  NppAutoIndent 1.2
8.  NppDocShare v0.1

Included plugins (ANSI):

1.  TexFX v0.24a
2.  NppExec v0.2 RC3.2
3.  Spell Checker v1.3.1
4.  MIME Tools v1.5
5.  FTP_synchronize v0.9.6
6.  NppExport v0.2.8
7.  Compare plugin v1.5.1
8.  Light Explorer v1.5
9.  Doc Monitor v2.2
10. NppAutoIndent 1.2
11. NppDocShare v0.1

### 5.0.3

Notepad++ v5.0.3 fixed bugs and added features (from v5.0.2) :

1. Fix crash bug while processing find in all opened files/find in files in a file contains a very long line.
2. Fix the display problem in found results dialog while processing find in all opened files/find in files in a file contains a very long line.
3. Fix not remembering the history file setting "Don't check at launch time" option bug.

### 5.0.2

Notepad++ v5.0.2 fixed bugs and added features (from v5.0.1) :

1. Fix crash bug for tags match highlighting.
2. Fix the huge file makes notepad++ crash issue.
3. Fix adding item in the history file list while deleting file from Notepad++ bug.
4. Fix a bug that file detection options set are not saved due to doc monitor plugin.
5. Improve opening file performance.
6. Fix bug when closing file using close button.

### 5.0.1 (missing .txt)

Notepad++ v5.0.1 fixed bugs and added features (from v5) :

1.  Fix tags match highlighter bug - more accurate.
2.  Fix word completion doesn't display bug.
3.  Fix word completion not in alphabet order.
4.  Fix Notepad++ launch problem under WINE.
5.  Fix crash issue due to timestamp problem.
6.  Fix bug : Files not in recent list on exit and no session saved.
7.  Fix bug : hide lines not working right when closing.
8.  Re-enable gcc compiler environment (minGW).
9.  Fix bug : Syntax highlighting is not applied after "Save as".

### 5.0

Notepad++ v5 fixed bugs and added features (from v4.9.2) :

1.  Improve Notepad++ performance - on startup and on exit.
2.  Add Calltip capacity.
3.  Add HTML/XML tag match highlighting.
4.  All the menu commands can be added in context menu, including plugins' commands, macros and user defined commands.
5.  Add bookmarked lines operations : delete all marked lines, copy all marked lines into clipboard, cut all marked lines into clipboard, paste from clipboard to replace all marked lines content.
6.  Add rename and delete current document features.
7.  Fix crash bug : Open files with date pre-1970.
8.  Fix clone mode bug : now the actions done in one view will be synchronized in the cloned view.
9.  Add tooltips in document tab to display the full file name path.
10. Change hide lines behaviour : Hide lines now saved during switches.
11. Change file history list behaviour : Most recent closed file is on the top. Add number on list.
12. Caret width and blink rate are customizable.
13. Add asterisk in title bar if file is dirty.
14. The bookmarks' look & feel are improved.
15. Add "Select all" and "copy" context menu items in Find in files results window.
16. Fix goto line with command line bug.
17. Improve smart highlight / mark all / incremental search highlight all visibility
18. Tabbar's coulours is configurable via Stylers Configurator(Active tab Text, Inactive tab text, Inactive tab background, Active tab focused indicator and Active tab unfocused indicator).
19. Add the smart highlight file size limit - 1.5 MB in order to improve the performance.
20. Add exception handling (dumping filedata).
21. Fix go to line command line bug.
22. Enhance Find in files and Find in all opened files features' performance.
23. Fix dialog off screen problem under multi-monitor environment.
24. Add 2 plugin message for v5 : NPPM_GETFULLPATHFROMBUFFERID and NPPM_GETPOSFROMBUFFERID.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. MIME Tools v1.4
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.5
9. Doc Monitor v2.1

## 4.x

### 4.9.2

Notepad++ v4.9.2 fixed bugs and added features (from v4.8.5) :

1.  Add smart highlighting feature (double click a word to highlight all the same word in the document).
2.  Enhance visual effect of Mark all feature.
3.  Enhance Incremental search dialog docking.
4.  Enhance Incremental search : add Highlight all feature.
5.  Add auto-hide menu feature (IE7 style menu - Alt or F10 to toggle)
6.  Enhance tool bar GUI usability (display a chevron while some tool icons hidden).
7.  Add style transparency feature, right click on color to enable.
8.  Fix the files not opening by DnD bug.
9.  Enhance Find Replace dialog : Add "Extended" option - search (and replace) for tabs(\t), newline(\n\r), and a characters by it's value (\o, \x, \b, \d, \t, \n, \r and \\).
10. Bug fixed : Find dialog always scrolls text into view now.
11. Add places bar in save as dialog
12. Fix non-recognized relative path bug in command line mode (under Dos prompt).
13. Add 2 messages for doc monitor plugin.
14. Fix the transparency bug (in Styler Configurator).
15. Make search in hidden directory (for Find in files) optional.
16. Fix the replace bug while replacing nothing.
17. Fix the F3 searching direction bug.
18. Fix the regression bug that x position doesn't be restored while switching back a document.
19. Add "Save a Copy As" feature.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. MIME Tools v1.4
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.5
9. Doc Monitor v2.1

### 4.9.1

Notepad++ v4.9.1 fixed bugs and added features (from v4.8.5) :

1.  Add smart highlighting feature (double click a word to highlight all the same word in the document).
2.  Enhance visual effect of Mark all feature.
3.  Enhance Incremental search dialog docking.
4.  Enhance Incremental search : add Highlight all feature.
5.  Add auto-hide menu feature (IE7 style menu - Alt or F10 to toggle)
6.  Enhance tool bar GUI usability (display a chevron while some tool icons hidden).
7.  Add style transparency feature, right click on color to enable.
8.  Fix the files not opening by DnD bug.
9.  Enhance Find Replace dialog : Add "Extended" option - search (and replace) for tabs(\t), newline(\n\r), and a characters by it's value (\o, \x, \b, \d, \t, \n, \r and \\).
10. Bug fixed : Find dialog always scrolls text into view now.
11. Add places bar in save as dialog
12. Fix non-recognized relative path bug in command line mode (under Dos prompt).
13. Add 2 messages for doc monitor plugin.
14. Fix the transparency bug (in Styler Configurator).
15. Make search in hidden directory (for Find in files) optional.
16. Fix the replace bug while replacing nothing.
17. Fix the F3 searching direction bug.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. MIME Tools v1.4
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.5
9. Doc Monitor v2.1

### 4.9

Notepad++ v4.9 fixed bugs and added features (from v4.8.5) :

1.  Add smart highlighting feature (double click a word to highlight all the same word in the document).
2.  Enhance visual effect of Mark all feature.
3.  Enhance Incremental search dialog docking.
4.  Enhance Incremental search : add Highlight all feature.
5.  Add auto-hide menu feature (IE7 style menu - Alt or F10 to toggle)
6.  Enhance tool bar GUI usability (display a chevron while some tool icons hidden).
7.  Add style transparency feature, right click on color to enable.
8.  Fix the files not opening by DnD bug.
9.  Enhance Find Replace dialog : Add "Extended" option - search (and replace) for tabs(\t), newline(\n\r), and a characters by it's value (\o, \x, \b, \d, \t, \n, \r and \\).
10. Bug fixed : Find dialog always scrolls text into view now.
11. Add places bar in save as dialog
12. Fix non-recognized relative path bug in command line mode (under Dos prompt).
13. Add 2 messages for doc monitor plugin.
14. Fix the transparency bug (in Styler Configurator).
15. Make search in hidden directory (for Find in files) optional.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. MIME Tools v1.4
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.4
9. Doc Monitor v2.1

### 4.8.5

Notepad++ v4.8.5 fixed bugs and added features (from v4.8.2) :

1.  Fix crash bug while a "New 2" is in session.xml.
2.  Fix the Drag N Drop text bug between 2 views.
3.  Fix the annoying acrobat reader dialog problem.
4.  Fix the bug that the first new document encoding is not set as the setting in "New Document settings".
5.  Fix crash bug while running the command "Close All But Me" in some context.
6.  Add scroll to end line feature after document reloading from disk.
7.  Enhance checking modification from outside feature.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. MIME Tools v1.4
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.4
9. Doc Monitor v2.0

### 4.8.2

Notepad++ v4.8.2 fixed bugs and added features (from v4.8.1) :

1.  Fix unicode input problem for non-western language.
2.  Add the capacity (behaviour) of keeping line highlighting even when Notepad++ loss its focus.
3.  Fix missing fonts problem in font list of Stylers configurator.
4.  Fix the hot key problem : make Alt+f+s work again.
5.  Fix the hardware problem : make keyboard commands (such as "e-mail", "calculator",
"sound", ...) works again.

Notepad++ v4.8.1 fixed bugs and added features (from v4.7.5) :

1.  Enhance Shortcut Mapper - all the commands (including plugins commands) can be assigned to a shortcut, even for the unmapped ones.
2.  Upgrade Scintilla from v1.73 to v1.75
3.  Add multi-line and vertical capacity for tab bar.
4.  Add launch "as notepad" style feature (detection of asNotepad.xml, then launch notepad++ with -multiInst -nosession -notabbar options).
5.  Add detection mouse wheel on the different view feature : User can scroll edit view when mouse on it, it's not necessary to set edit view as current view to scroll it.
6.  Add clicking middle mouse button click to set current view feature : make clicked edit view be focused, but the cursor position does not change.
7.  Add mouse wheel horizontal scroll feature (vista only).
8.  Add mouse browsing (forward/back for switching to next/previous document) feature.
9.  Make orange indicator on the top of tab lighter when the view loss the focus.
10. Add new look and feel of Docking container.
11. Fix word-completion crash bug while the word to complete exceeds 256 characters.
12. Fix full screen mode bug : can not switch applications by using Alt+TAB in full screen mode.
13. Fix Preference crash bug.
14. Add the utf8->ansi / ansi->utf8 conversion feature.
15. Add Go to offset feature (in Go To Line dialog).
16. Fix folding bugs while deleting the begin/end folding keywords.
17. Fix position restored bug : Wrap position is restored correctly while switching back document.
18. Fix locking current directory behaviour : Restore Notepad++ directory as working directory with no open files.
19. Fix the multi-line tab height display problem while adding/removing the document.
20. Enhance the auto-completion feature : user can define the number of characters to trigger auto-completion popup window.
21. Change the horizontal scroll behaviour from dynamic one to static one.
22. Fix the bug that cannot save file(s) if application closed while minimized.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. Base64 encoder/decoder v1.2
5. FTP_synchronize v0.9.6
6. NppExport v0.2.7.3
7. Compare plugin v1.5.1
8. Light Explorer v1.4

### 4.8.1

Notepad++ v4.8.1 fixed bugs and added features (from v4.7.5) :

1.  Enhance Shortcut Mapper - all the commands (including plugins commands) can be assigned to a shortcut, even for the unmapped ones.
2.  Upgrade Scintilla from v1.73 to v1.75
3.  Add multi-line and vertical capacity for tab bar.
4.  Add launch "as notepad" style feature (detection of asNotepad.xml, then launch notepad++ with -multiInst -nosession -notabbar options).
5.  Add detection mouse wheel on the different view feature : User can scroll edit view when mouse on it, it's not necessary to set edit view as current view to scroll it.
6.  Add clicking middle mouse button click to set current view feature : make clicked edit view be focused, but the cursor position does not change.
7.  Add mouse wheel horizontal scroll feature (vista only).
8.  Add mouse browsing (forward/back for switching to next/previous document) feature.
9.  Make orange indicator on the top of tab lighter when the view loss the focus.
10. Add new look and feel of Docking container.
11. Fix word-completion crash bug while the word to complete exceeds 256 characters.
12. Fix full screen mode bug : can not switch applications by using Alt+TAB in full screen mode.
13. Fix Preference crash bug.
14. Add the utf8->ansi / ansi->utf8 conversion feature.
15. Add Go to offset feature (in Go To Line dialog).
16. Fix folding bugs while deleting the begin/end folding keywords.
17. Fix position restored bug : Wrap position is restored correctly while switching back document.
18. Fix locking current directory behaviour : Restore Notepad++ directory as working directory with no open files.
19. Fix the multi-line tab height display problem while adding/removing the document.
20. Enhance the auto-completion feature : user can define the number of characters to trigger auto-completion popup window.
21. Change the horizontal scroll behaviour from dynamic one to static one.
22. Fix the bug that cannot save file(s) if application closed while minimized.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC3.2
3. Spell Checker v1.3.1
4. Hex editor v0.84
5. Base64 encoder/decoder v1.2
6. FTP_synchronize v0.9.6
7. NppExport v0.2.7.2
8. Compare plugin v1.5.1
9. Light Explorer v1.4

### 4.7.5

Notepad++ v4.7.5 fixed bugs and added features (from v4.7.3) :

1. Fix invisible tabs bug while closing.
2. Fix the horizon scroll bar flicker bug.
3. Fix the full screen (F11) bug regarding multi-display issue
4. Explorer context menu is available under xp 64 bits et vista 64 bits.
5. Add YAML language.
6. Fix the crash issue of window dialog while clicking Sort button without selected item.
7. Enhance Sort feature GUI part - Enable Sort button only after clicking on the column tab; Disable Sort button after sorting.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC2
3. Spell Checker v1.3.1
4. Quick text v0.02
5. Explorer plugin v1.6.1
6. Hex editor v0.84
7. Base64 encoder/decoder v1.2
8. FTP_synchronize v0.9.6
9. NppExport v0.2.5.0

### 4.7.3

Notepad++ v4.7.3 fixed bugs and added features (from v4.6) :

1.  Make the "recovery system" for 3 mandatory xml files (config.xml, langs.xml and stylers.xml) to prevent the fail loading due to the corrupted files.
2.  Extend plugin capacity - add the Scintilla external lexer capacity.
3.  Add the ability to hide the tab bar with "-notabbar" flag in command line (ie. Notepad style).
4.  Column selection is remembered now while switching among the files. As well this settings will be stored in the next session.
5.  Add 2 Commends (beside Toggle Comment) Comment (Ctrl+K) and Uncomment (Ctrl+Shift+K).
6.  Change "UTF8 without BOM" menu item behaviour.
7.  Fix the hiding bug while launch time because of change of environment from duel monitors to mono monitor.
8.  Remove vista UAC warning for GUP. Add "Update Notepad++" menu item.
9.  Add NPPM_HIDETABBAR and NPPM_ISTABBARHIDE plugins messages.
10. Add NPPM_GETNPPVERSION message for plugin system.
11. Enhance the horizontal scroll feature.
12. Change Find in files behaviour : all the hidden directory won't be searched (for example : .svn).
13. Add build date-time in about box.
14. Fix a bug where a file with 2 or more consecutive spaces gives problems with sessions and history.
15. Fixe the problem where opening a file when in save as dialog saves the wrong file.
16. Add "Clean Recent File List" menu command.
17. Enhance full screen feature (F11).

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC2
3. Spell Checker v1.3.1
4. Quick text v0.02
5. Explorer plugin v1.6.1
6. Hex editor v0.84
7. Base64 encoder/decoder v1.2
8. FTP_synchronize v0.9.6
9. NppExport v0.2.5.0

### 4.7.2

Notepad++ v4.7.2 fixed bugs and added features (from v4.6) :

1.  Make the "recovery system" for 3 mandatory xml files (config.xml, langs.xml and stylers.xml) to prevent the fail loading due to the corrupted files.
2.  Extend plugin capacity - add the Scintilla external lexer capacity.
3.  Add the ability to hide the tab bar with "-notabbar" flag in command line (ie. Notepad style).
4.  Column selection is remembered now while switching among the files. As well this settings will be stored in the next session.
5.  Add 2 Commends (beside Toggle Comment) Comment (Ctrl+K) and Uncomment (Ctrl+Shift+K).
6.  Change "UTF8 without BOM" menu item behaviour.
7.  Fix the hiding bug while launch time because of change of environment from duel monitors to mono monitor.
8.  Remove vista UAC warning for GUP. Add "Update Notepad++" menu item.
9.  Add NPPM_HIDETABBAR and NPPM_ISTABBARHIDE plugins messages.
10. Add NPPM_GETNPPVERSION message for plugin system.
11. Enhance the horizontal scroll feature.
12. Change Find in files behaviour : all the hidden directory won't be searched (for example : .svn).
13. Add build date-time in about box.
14. Fix a bug where a file with 2 or more consecutive spaces gives problems with sessions and history.
15. Fixe the problem where opening a file when in save as dialog saves the wrong file.
16. Add "Clean Recent File List" menu command.
17. Enhance full screen feature (F11).

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC2
3. Spell Checker v1.3.1
4. Quick text v0.02
5. Explorer plugin v1.6.1
6. Hex editor v0.84
7. Base64 encoder/decoder v1.2
8. FTP_synchronize v0.9.5.1
9. NppExport v0.2.5.0

### 4.7.1

Notepad++ v4.7.1 fixed bugs and added features (from v4.6) :

1.  Make the "recovery system" for 3 mandatory xml files (config.xml, langs.xml and stylers.xml) to prevent the fail loading due to the corrupted files.
2.  Extend plugin capacity - add the Scintilla external lexer capacity.
3.  Add the ability to hide the tab bar with "-notabbar" flag in command line (ie. Notepad style).
4.  Column selection is remembered now while switching among the files. As well this settings will be stored in the next session.
5.  Add 2 Commends (beside Toggle Comment) Comment (Ctrl+K) and Uncomment (Ctrl+Shift+K).
6.  Change "UTF8 without BOM" menu item behaviour.
7.  Fix the hiding bug while launch time because of change of environment from duel monitors to mono monitor.
8.  Remove vista UAC warning for GUP. Add "Update Notepad++" menu item.
9.  Add NPPM_HIDETABBAR and NPPM_ISTABBARHIDE plugins messages.
10. Add NPPM_GETNPPVERSION message for plugin system.
11. Enhance the horizontal scroll feature.
12. Change Find in files behaviour : all the hidden directory won't be searched (for example : .svn).
13. Add build date-time in about box.
14. Fix a bug where a file with 2 or more consecutive spaces gives problems with sessions and history.
15. Fixe the problem where opening a file when in save as dialog saves the wrong file.
16. Add "Clean Recent File List" menu command.

Included plugins :

1. TexFX v0.24a
2. NppExec v0.2 RC2
3. Spell Checker v1.3.1
4. Quick text v0.02
5. Explorer plugin v1.6.1
6. Hex editor v0.84
7. Base64 encoder/decoder v1.2
8. FTP_synchronize v0.9.5.1
9. NppExport v0.2.5.0

### 4.6

Notepad++ v4.6 fixed bugs and added features (from v4.5) :

1. Add Notepad++ self-update capacity (optional).
2. Fix save file dialog crash issue.
3. Fix the crash issue while the length of config.xml is zero.
4. Change the behaviour : When file is deleted from outside and switch back to Notepad++, user will be asked if he want to keep this file. If he answer yes, he will not be asked in the next time.
5. Change Window title from "Notepad++ - file path" to "file path - Notepad++"
6. Fix Run dialog bug: the executable file won't be executed even it is between the double quot.
7. Add open relative file path from command line feature.
8. Fix the crash issue when open a file which does not exist anymore from RFL (if its path exceed certain length).
9. Fix the bug that the title doesn't be updated while file status changed and updated.

Included plugins :

1. TexFX v0.24a
2. Function list v1.2
3. ConvertExt v1.1
4. NppExec v0.2 beta 4
5. Spell checker v1.2
6. Quick text v0.02
7. Light Explorer v1.4
8. Hex editor v0.84
9. Base64 ecoder/decoder v1.2

### 4.5

Notepad++ v4.5 fixed bugs and added features (from v4.4) :

1. Fix crash issue while the launch the session file which contains the same file in 2 views (clone mode).
2. Add the session file extension association feature.
3. Enhance the read/write config.xml to avoid crash.
4. Add new -ro and -noSession command line parameters.
5. Fix Russian display problem in the shortcut mapper.
6. Fix NPPN_SHUTDOWN notification bug.
7. Add NPPM_ACTIVATEDOCMENU message.

Included plugins :

1. TexFX v0.24a
2. Function list v1.2
3. ConvertExt v1.1
4. NppExec v0.2 beta 4
5. Spell checker v1.2
6. Quick text v0.02
7. Light Explorer v1.4
8. Hex editor v0.84

### 4.4

Notepad++ v4.4 fixed bugs and added features (from v4.3) :

1. Add auto-add extension feature in file save dialog.
2. Fix crash issue while file is deleted outside (answer NO to popup dialog to not keep) and the silence update option is on.
3. Add Session Restore with Sub-View Settings feature.
4. Fix the Notepad++ getting focus problem while find dialog is activated.
5. Fix unwanted selection after popup dialog (keep file) when the file opened is deleted.
6. Add NPPN_FILEBEFOREOPENED, NPPN_FILECLOSED, NPPN_FILESAVED, NPPN_FILEBEFORESAVE and NPPN_SHUTDOWN plugin notifications.

Included plugins :

1. TexFX v0.24a
2. Function list v1.2
3. ConvertExt v1.1
4. NppExec v0.2 beta 4
5. Spell checker v1.2
6. Quick text v0.02
7. Light Explorer v1.4
8. Hex editor v0.84

### 4.3

Notepad++ v4.3 fixed bugs and added features (from v4.2.2) :

1.  Fix the crash bug due to the corrupted configuration file (config.xml and session.xml).
2.  Fix the crash bug while the shortcut command is absent in shortcut.xml.
3.  Fix the file status auto-detection bug :  a unwanted selection after a pop-up dialog.
4.  Enhance Styler Configurator : the visual effect is updated immediately while the setting is changing.
5.  Add Global override feature (in Styler Configurator).
6.  Fix the bold/italic/underline refresh problem in Stylers Configurator for Scintilla component.
7.  Add hide lines feature (Menu : View->Hide lines).
8.  Add new capacity (optional setting in Preferences dialog : Backup/Auto-completion tab) to trigger Auto-Completion(Function Completion or Word completion) automatically .
9.  The set languages in session are remembered now.
10. Fix the Move down current line bug.
11. Add the start up with no plugins feature (command line : notepad++ -noPlugins).
12. Fix the display file type bug on the status bar while switching between the files.

Included plugins :

1. TexFX v0.24a
2. Function list v1.2
3. ConvertExt v1.1
4. NppExec v0.2 beta 4
5. Spell checker v1.1
6. Quick text v0.02
7. Light Explorer v1.4
8. Hex editor v0.84

### 4.2.2

v4.2.2 fixed bugs and added features (from v4.1.2) :

1.  Fix the dockable dialog drag and drop problem under vista.
2.  Add Column mode edition feature (Menu "Edit->Column Editor...").
3.  Fixed "To UPPER/lower case" bug in column mode.
4.  Fix the display bug in User language define dialog.
5.  Add new feature which backups files in a user specific directory.
6.  Fix TeX syntax highlighting corruption problem while switching off then switching back to current document.
7.  Fix User Define Language extension recognition problem for sensitive case (now it's insensitive).
8.  Add a menu entry to access to notepad++ plugins project page.
9.  Enhance file open dialog (add all supported extensions in the filters list).
10. Fix bug of Run macro until EOF.
11. Add the filters in Find in files dialog.
12. Add a new transparency feature for Find dialog : Transparency on loss focus.

Plugins included in v4.2.2 :

1. TexFX v0.24a
2. Function list v1.2
3. ConvertExt v1.1
4. NppExec v0.2 beta 4
5. Spell checker v1.1
6. Quick text v0.02
7. Light Explorer v1.4
8. Hex editor v0.84

### 4.1.2

v4.1.2 fixed bugs and added features (from v4.1.1) :

1.  Fix crash problem of updating v4.1.1 from v3.9 (or previous version).
2.  Fix the bug of the settings "Remember the last operation directory" : this parameter is remembered by acrossing the sessions.
3.  Fix Ruby source file buffer overflow bug.
4.  Increase User Define Language keywords buffers from 1024*20 to 1024*30 characters.
5.  Increase the buffer of Extension defined by user from 20 to 256 characters in Style Configurator.
6.  Fix the bug of user defined keywords field in Styler configurator.
7.  Add URL "Notepad++ Home", "Notepad++ Project Page", "Online help" and "Forum" into menu.

### 4.1.1

v4.1.1 fixed bugs and added features (from v4.1) :

1.  Fix the unnecessary memory consuming (not memory leak) while find in files operation.
2. 	Enhance Find in files feature : Insert the default value to filters and Directory fields automatically while launch or switch to Find in file dialog.
3.  Fix the crash bug while double click on find in files result.
4.  Link clickable feature is optional (in Preferences->MISC).
5.  Fix crash problem while search in all opened file in multi-view mode.
6.  Fix Close button misplaced problem in Find dialog.
7.  Change the plugin behaviour : different users can have different sets of plugins, besides the basic set. Notepad++ will load the plugins from %APPDATA%\Notepad++\plugins\ directory, in the case of absence of "doLocalConf.xml".

### 4.1

v4.1 fixed bugs and added features (from v4.0.2) :

1.  Fix the crash issue while saving settings on quit.
2.  Fix the crash issue while using the command line with one launched Notepad++ instance.
3.  Enhance Find in files feature :
      a. Improve Find in files user interface (more intuitive).
	  b. The search result (also for find in all opened files) is docked on the bottom of Notepad++.
	  c. Recursive search is optional.
	  d. Search result is collapsable by file.
	  e. User defined keywords for search result.
4.  Add tabbing interface in Find dialog : Find/Replace/Find in files
5.  Add clickable URL http link feature (double click to trigger).
6.  Add cmake language support.
7.  Add mark all without launching Find dialog (Ctrl+M).
8.  Fix the ROFL (Recent Opened File List) bug : try to open a non-existing file from ROFL, the full file path doesn't be removed from ROFL.
9.  Enhance the backup feature : in verbose mode, the file will be backed up in .\nppBackup directory.
10. Update Scintilla component to v1.73

### 4.0.2

v4.0.2 fixed bugs (from v4.0.1) :

1.  Fix the crash issue regarding the docking feature.
2.  Fix the crash issue for Find in files feature.
3.  Fix the crash issue while pressing close button in Windows dialog (menu "Window->windows...").
4.  Fix the bug that the docked dialog can not be resized by dragging splitter under w98.

### 4.0.1

v4.0.1 fixed bugs (from v4.0) :

1.  Fix the crash issue of opening of file name length > 63.
2.  Fix the crash issue under w98.
3.  Fix the shortcut name bug in shortcut mapper.
4.  Fix ASP syntax highlighting problem.
5.  Fix 2 context menu items issue after the installation by installer.
6.  Enhance the NSIS language support.


FunctionList Plugin 1.1 :
1.  Fix the bug of wrong toolbar stat while closing Function List dialog by X button.
2.  Fix C++ "operator[]" recognition
3.  Fix Pascal method recognition
4.  Add TCL support

Explorer Plugin 1.01 :
1.  Fix the font display bug.
2.  Fix open of favorite folders in explorer when explorer is not open

HexEditor Plugin 0.6 :
- Fix display problems and the extension recognition bug.


### 4.0

v4.0 new features and fixed bugs (from v3.9) :

1.  Fix the crash issue.
2.  Add Docking feature for plugin dialogs.
3.  Fix the bug that current "open" and "save as" directory are inchanged with the shortcut Ctrl+Tab.
4.  Fix the bug that the new added languages in v3.9 can not be hidden from the language menu.
5.  Fix the volatile search direction bug.
6.  Fix the Tab display problem.
7.  Add Haskell, InnoSetup languages support.
8.  Add the option to open/save files in the last operation directory.
9.  Enhance Document switcher (MRU and switch crossing view abilities)
10. Fix "Find Next" unicode bug for Find Replace Dialog.
11. Support Unicode in displayed result of Find in files & Find in all opened files.
12. Add Reload from disk feature.
13. Fix bug : quite (close or restart Windows) without prompt to save.
14. All the shortcuts of plugins commands are customizable via the shortcut mapper.

## 3.x

### 3.9

02:32 lundi 25 septembre 2006

v3.9 new features and fixed bugs (from v3.8) :

1.  Remember the bookmarks, maitaining of identation, zoom level and visibilities of white space/EOL characters in each saved session.
2.  Add the capacity to clear read only attribute.
3.  Fix the reload bug for read-only file.
4.  Add the capacity to write the files which have the system attribte.
5.  Backup file on each save (optional : verbose mode & normal mode).
6.  Add the close button for each tab like Opera (optional).
7.  Add double click on tab to close document feature (optional).
8.  Add word completion (Alt+Space) feature.
9.  Fix the line number margin display bug.
10. Add Opera style task list tab switcher (Ctrl+Tab or Mouse Right Click + Mouse Wheel).
11. Add Ada, Caml, AutoIt, KixTart, Matlab, Verilog language support.
12. Add TeX folding support.

### 3.8

14:18 23/07/2006

v3.8 new features and fixed bugs (from v3.7) :

1.  Restore the F3 old behaviour of v3.6 (search non-volatile). Change search volatile behaviour in Ctrl-F3.
2.  Add run macro multiple times feature.
3.  Enhance macro undo/redo feature.
4.  Memorize the position of each file while saving the session.
5.  Add feature which creates a new file if file to open does not exist (from command line).
6.  Bug fixed : crash while NPP minimized & open file from explorer context menu.
7.  Bug fixed : User Defined Dialog's crash problem
8.  Change system tray icon behaviour : One Click to show notepad++ windows.
9.  Add Block comment/uncomment and Stream comment feature for User define language.
10. Fix Macro recording bug : paste command is recorded 2 times.

### 3.7

v3.7 new features and fixed bugs (from v3.6) :

1.  Fix UCS2 LE bug.
2.  Fix search/replace in UTF-8 file problem.
3.  Fix the bug to paste the EOL which is not conforme to destination document.
4.  Add the auto-expansion capacity (reacting on the cursor position) for search feature (Ctrl+F / Ctrl+Alt+I).
5.  Add the window (document) list feature.
6.  Add updating file silently feature (to enable it via Preference Dialog).
7.  Add CURRENT_WORD and NPP_DIRECTORY in environment variables.
8.  Fix the bug for New document setting.


### 3.6

v3.6 new features and fixed bugs (from v3.5) :

1.  Add Preference Dialog.
2.  Add the customizable default settings for new document - Format/Encoding/Language(in Preference Dialog).
3.  Add the customizable feature (hide or display item) for the Language Menu (in Preference Dialog).
4.  Fix the print bug of continued background colour on footer and header.
5.  Add 2 environment variables for Run Dialog : $(NAME_PART) and $(EXT_PART), and 3 environment variables for printing feature.
6.  Make printing parameters customizable : colour, marges, headers and footers.
7.  Fix the search with match case bug for non latin-1.

1.  Ajout de la boîte de dialogue "Préférence".
2.  Ajout de la capacité de paramétrer format/encodage/langage pour un nouveau document (dans la boîte de dialogue "Préférence").
3.  Ajout de la capacité de paramétrer  (cacher ou afficher) les items du menu langage (dans la boîte de dialogue "Préférence").
4.  Correction du bug d'impression (la couleur de fond de l'entęte et du pied de page).
5.  Ajout de 2 variables d'environnement pour la boîte de dialogue "Exécution" : $(NAME_PART) and $(EXT_PART).
6.  Ajout de la capacité de paramétrer les options d'impression : les couleurs, les marges, les entętes et les pieds de page.
7.  Correction du bug de la recherche avec la casse sensible pour les codages non latin-1.

### 3.5

v3.5 new features and fixed bugs (from v3.4) :

1.  Double click on blank area to have a new document (Firefox behaviour).
2.  Add "Set current document read only" command.
3.  Fix the behaviour to hold the directory of closed file as current working directory.
4.  Add "copy file name/full path/current directory to clipboard" feature.
5.  Add an X button on upper right corner to close the current document.
6.  Add the "incremental search" feature.
7.  New toolbar feel & look (For the standard icons).

1.  Double clic sur la zone des onglets pour ouvrir un nouveau document (comme dans Firefox)
2.  Ajout de la commande "appliquer la lecture seule au document courant".
3.  Correction du bug de garder le répertoire du dernier fichier fermé comme répertoire courant.
4.  Ajout de la fonctionnalité de copie du chemin d'accčs, du nom du fichier ou du répertoire courant, dans le clipboard.
5.  Ajout d'un bouton X en haut ŕ droite pour fermer le document courant.
6.  Ajout de la fonctionnalité de recherche incrémentielle.
7.  Nouveau look.

### 3.4

v3.4 new features and fixed bugs (from v3.3) :

1.  Auto-detect the UTF-8 files without BOM.
2.  Add synchronized (vertical and/or horizontal) scrolling feature in multi-view mode.
3.  Add several keys (cut/copy/paste, undo/redo...) in the shortcut mapper.
4.  Opening a file with relative path from command line is supported.
5.  Fix the clear the "Style found token" problem (Find/Replace Dialog) in normal text mode.
6.  Fix UPPERCASE and lowercase bug under Windows 95/98.
7.  Enhance HOME/END key in Wrap text mode.
8.  Add Always on top feature.

1.  Auto-detection du fichier UTF-8 sans BOM.
2.  Ajout de la synchronisation du scroll entre 2 vues.
3.  Ajout des racourcis (couper/copier/coller, annuler/établir...) dans le Gestionaire de racourci.
4.  Ajout de la capacité d'ouvrir un fichier avec le chemin relatif en ligne de commande.
5.  Correction du bug de purge la coloration des mots trouvés (dans la boîte de dialogue Rechercher/Remplacer) en mode de text normal.
6.  Correction du bug de conversion en MAJUSCULE et en minuscule sous windows95/98.
7.  Amélioration des racourcis début/fin en mode du retour automatique ŕ la ligne.
8.  Ajout de la fonctionnalité "Toujours devant".

### 3.3

v3.3 new features and fixed bugs (from v3.2) :

1.  Add the capacity to keep all the configuration files in Notepad++ installed location.
2.  Add shortcut Alt+F4 to menu item "Exit", user can resign the shortcut he/she want to it.
3.  Add shortcut Ctrl+Alt+S to menu item "Save AS".
4.  Add a button in Find/Replace Dialog to switch between Find Dialog and Replace Dialog.
5.  Support heredoc for php.
6.  Fix the memory leak bug while closing the document
7.  Improve the functionalities of "to upper case" and "to lower case".
8.  Support TCL, Assembler, Ruby, Lisp, Scheme, Properties, Diff, Smalltalk, Postscript and VHDL languages.
9.  Add customizable styles for line number margin and fold margin.
10. The shortcut (hot key) assignment for plugin command is supported.

1.  Ajout de la capacité de garder tous les fichiers de configuration de Notepad++ dans son répertoire d'installation.
2.  Ajout du racourci Alt+F4 ŕ la commande "Exit" (l'utilisateur peut re-définir ce racourci).
3.  Ajout du racourci Ctrl+Alt+S ŕ la commande "Sauvegarder Sous".
4.  Ajout d'un bouton dans la boîte de dialogue de Rechercher/Remplacer pour basculer entre 2 boîtes de dialogue.
5.  Support de heredoc pour php.
6.  Correction du bug de la fuite de mémoire lors de la fermeture d'un document.
7.  Amélioration des fonctionnalités de "convertir en minuscule" et de "CONVERTIR EN MAJUSCULE"
8.  Ajout des langages TCL, Assembler, Ruby, Lisp, Scheme, Properties, Diff, Smalltalk, Postscript et VHDL.
9.  Ajout de la capacité de parametrer la marge de la ligne de numéro ainsi que de controle du relief
10. Ajout de la capacité de gérer les racourcis pour les commandes des plugins.

### 3.2

v3.2 new features and fixed bugs (from v3.1) :

1.  Change the behaviour for nativeLang.xml : nativeLang.xml which in the application directoy will be loaded as the absence of %AppData%\Notepad++\nativeLang.xml.
2.  Support XP visual style.
3.  Fix replace all + direction up bug.
4.  Fix the bug that scrolls down one line as launching Notepad++ to open a file (double click).
5.  Fix the view shift bug while switching back (finally!!!).
6.  Fix the bug of failing to open the files (by using context menu or double click) with some "special" file names.
7.  Add "open the last session's files" feature (optional).
8.  Support the project file (save session and load session)
9.  Change the interface of Styler Configurator.
10. Fix the bug that open muli-instance of Notepad++ while opening several files at the first launch.
11. The extensions of User Defined Languages can override the ones of supported languages now.

### 3.1

v3.1 new features and corrected bugs (from v3.0) :

1.  Add Plugin capacity.
2.  Add Find In Files feature.
3.  Set Current Working Directory according the current editing file.
4.  Make visible the saved macros and user commands on the menu.
5.  Fix some fonts non displayed in combobox bug.
6.  Add bi-directional text editing feature.
7.  Add UI RTL (Right To Left) ability.
8.  Fix the saving problem for the files with hidden attribute.
9.  Fix CSS pseudoclass keywords bug.
10. Add header and footer for printing.
11. Fix the bug that view changes while switch back the previous document (as "wrap text" feature is enable)
12. Multiple extensions for the same User Defined Language is allowed.
13. Fix the bug that notepad++ open a file twice because of sensitive case distinction for the file path.
14. Fix the bug for "Find in all opened document" crash problem under some systems.

### 3.0

v3.0 new features and corrected bugs (from v2.9) :

1.  Add remapping the shortcuts feature.
2.  Enhance the macro feature (saving ability, mapping with shorcut).
3.  Enhance the run command feature (saving ability, mapping with shorcut and insert of environment variables).
4.  Add "Trim Trailing Space" feature.
5.  Fix the User Defined Language Dialog splash problem during the launch of Notepad++.
6.  Fix the Regular Expression Search problem for an empty word.
7.  Fix the problem that Notepad++ creep up each launch time when taskbar at top of screen.
8.  Fix "New Notepad Document" disappearing problem (in context menu) after associate .txt with Notepad++ via the File Association Manager
9.  Add "Close tab with the middle mouse button" feature.
10. Add "go to line #" command line argument.
11. Add find features Find selected Next(Shift+F3), Find Prev(Ctrl+F3) and Find selected Prev(Ctrl+Shift+F3).
12. Fix the Ucs-2 little/big endian encoding bug.
13. Fix the sql string highlighting problem.
14. Add shortcuts Alt+0 and Alt+Shift+0 for respectively "Fold all" and "Unfold all".

## 2.x

### 2.9

v2.9 new features and corrected bugs (from v2.8) :

1.  fix a regular expression's replace bug.
2.  enhance the regular expression find/replace feature.
3.  fix Search Next/Previous Bookmark without bookmark bug.
4.  "Find All" not only marks, but also keeps the style now.
5.  add "Replace all in selection zone" feature.
6.  add "Mark all in in selection zone" feature.
7.  add "Replace all in all opened document" feature.
8.  add "Find all in all opened document" feature.
9.  fix a minor bug of restoring window position and size from previous session.
10. Add a "clear" button to clear all marks in Find Dialog.

### 2.8

v2.8 new features and corrected bugs (from v2.7) :

1.  Recent Files History menu is now dynamic.
2.  Change the shortcuts "Collapse the levels" (From Ctrl-Alt-# to Alt-#) and the shortcuts "Uncollapse the levels" (From Ctrl-Alt-Shift-# to Alt-Shift-#)
3.  The feature to minimize to system tray is added.
4.  Block Comment features are added

### 2.7

v2.7 new features and corrected bugs (from v2.6) :

1.  A regular expression's find/replace bug is fixed.
2.  A folding status' bug is fixed.
3.  The bug of saving file while displaying as UTF-8 is fixed.
4.  The horizontal scrollbar bug is fixed.
5.  The auto-completion for User Define Language is supported.
6.  2 Delimiter Groups are added in the User Language Define System.
7.  2 functionalities are added - to Upper case and to lower case.
8.  "Go to matching brace" feature is added.
9.  Marcro Recording and playing features are added.
10. A "Replace All" bug is fixed, as well the "Replace All" performance are optimized.
11. Add new menu item "Open All Recent File".
12. File Auto-detection is configurable now.
13. A file name separation problem is fixed.
14. Checking of Recent file list at launch time is able to disable now.
15. The crash because of column mode selection is corrected.

### 2.6

v2.6 new features and corrected bugs (from v2.5) :

1.  Add the File Associations Manager.
2.  A bug of User Define Language panel is fixed : After creating a new language and restarting Notepad++, all font foreground colors change to white.
3.  Increse the capacity of User Define Language keyword list : from 1024 bytes to 4096 bytes
4.  Behaviour issue : fixed the problem that the folded document is unfolded while switching back.
5.  A fixed bug : the position of document is entirely memoried while swiching among the document.
6.  New feature for User Language Define System : the comment and comment line symbols can be recognized even the followed character is not a white space (optional to user).
7.  The behaviour of functionality "Fold all" fixed : From now on, not only the folders, bot also all the sub-folders are collapsed when this command is executed.
8.  Add features : user can collapse/uncollapse the current level (the caret current position).
9.  Add features : user can collapse/uncollapse whichever folder level (1-8) he/she wants.
10. Add Underline check box in User Define Language Panel.
11. Add Prefix feature (optional) for each keyword in User Define Language.
12. Add a feature that treating the comment tokens as symbols (allow no white space) is optional in User Define Language.
13. Add a feature that the case sensitive is an option in User Define Language.
14. Add full screen toggle feature (F11).
15. A fixed bug : Infinite search when counting (or marking) words backwards.
16. A fixed bug : Replce all.
17. Add the UI limit of language name for User Define Language Panel.

### 2.4

v2.4 new features and corrected bugs (from v2.3) :

1.  Add the transparency to the Find/Replace dialog, Styler Configurator dialog and User Define Language dialog (for w2k and xp only).
2.  Correct a bug of VB lexer.
3.  Correct a bug of Perl lexer.
4.  Add VB Net keywords.
5.  Add scroll bar in User Define Language dialog in the dock mode (for the people who has the prehistoric configuration - 14" monitor with 640*480 resolution :-) ).
6.  Add the option in the Find/Replace Dialog box to show the found token at the top, in the middle or at the buttom of the edit zone.
7.  Update the keywords list of javascript.
8.  Add the feature to change the toolbar icons.
9.  Add the Unicode encoding feature.


### 2.3

v2.3 new features and corrected bugs (from v2.2) :

1.  Multi-Native Language (For non English speaking user).
2.  Correct a bug of updating the document in dual view while reloading the document modified from outside.
3.  Correct a bug of showing minimised Notepad++ while the opened document is deleted from outside.
4.  Correct a PHP Keywords bug.
5.  Correct a bug about the update of document state  while switching with Ctrl+TAB or Ctrl+Shift+TAB.
6.  Correct a minor bug of losing focus while reaching the end of search by using the F3 key (The focus is not restored while ending the notice dialog box) .
7.  Add 2 menu entries to show the white space/TAB and EOL separately.
8.  Add right vertical edge line.
9.  Add Context Menu Entry under explorer (optional in the installer)
10.Add the ability to replace "the default source viewer"  for the iexplorer (optional in the installer)
11. An auto-completion bug is corrected.


### 2.2

v2.2 new features and corrected bugs (from v2.1) :

1.  Improve the user define language feature (add syntax folding) and allow to user to save the user define language.
2.  Support Unicode (UTF-8, UCS-2).
3.  Add "Mark all", "Style All" and "Count" feature in the Find Dialog.
4.  Correct "Replace All" infinite loop bug. For example : Find "poo" to replace by "pooo".
5.  Add shortcut key Ctrl + F4 and Ctrl + W to close file.
6.  Text foreground colour remains the same when text is selected (change only the selected text background colour).
7.  Add C# language support.
8.  Add Lua language support.
9.  Correct a minor bug for the Splitter window (no more context menu for the fix splitter).
10. Add css.api file and some CSS keywords (Thanks to Caroline Guénette).

### 2.1

v2.1 new features and corrected bugs (from v2.0) :

1.  Support le language Batch (*.bat, *.cmd & *.nt).
2.  Add the ugly standard icons for the toolbar.
3.  Make Tabbar height configurable (Normal <-> Reduce)
4.  Change the caret to the ordinary one.
5.  Add Toggle fold all feature.
6.  Fix the current line highlighting toggle display bug

### 2.0

v2.0 new features and corrected bugs (from v1.9) :

1.  Add autocomplete list box (intern keywords list or extern file.api). Ctrl + Space to trigger it.
2.  Support le language CSS.
3.  Support le language Python.
4.  Support le language Perl.
5.  Support le language Pascal.
6.  Support *.js file (extern javascript file).
7. add php 5 keywords.
8.  Notepad++ remembers now the size and the position of the last session.
9.  Notepad++ remembers also if wrap was enable in the last session (do wrap or not).
10. The focus is always on edit control when Find Dialog appears..


## 1.x

### 1.9

v1.9 new features and corrected bugs (from v1.8) :

1. Buffer over run on Find and Replace Dialog is corrected - The limit of character number to search is set to 256.

2. Add "Set Max Number of Opened Files" menu entry (Setting->Set Max Number of History Files), that allows user to set max opened files history. Note that the maximum number is 30. Enter for accepting the nb max file value and Esc for cancel the action.

3. Tab size and replacing tab by space are configurable now (Setting->Tab Setting). Enter for accepting the tab size value and Esc for cancel the action.

4. Support now Unix and Mac format (before v 1.9 Notepad++ supported only read mode). The user can also convert his doc to the 2 other formats (Unix -> Mac / Dos, Dos -> Unix / Mac and Mac -> Dos / Unix).

5. Launch problem under NT 4 is corrected

### 1.8

v1.8 new features (from v1.7) :


1. VB & VBS is supported.

2. SQL is supported.

3. Objective-C is supported.

4. Installer is added

### 1.7

v1.7 new features and fixed bugs (from v1.6) :


1. Syntax folding for MS ini file is added

2. Improve the asp language support

3. Style Configurator is added. From now on Notepad++ is configurable completely!!!

### 1.6

v1.6 new features and fixed bugs (from v1.5) :


1. Support now the hot key Ctrl+Tab / Ctrl+Shift+Tab to switch to the next / previous document.

2. Current Line Highlighting is added (to enable/disable : Menu View -> Current Line Highlighting).

3. Recent File History is now enhanced (eliminate non-available file path before loading Recent File History).

4. go to line # Dialog Box is added (access to it by Ctrl+G or Menu Search->Go to line...)

5. Status Bar is enhanced :
    a. display the current position Ln & Col of caret - double click on this zone will launch "go to line # Dialog Box"
    b. display the insertion mode INS|OVR -  simple click on this zone will switch the alternative insertion mode (The same effect of key stroke Insert)

6. Fixed bug : The focus wasn't restored after switching back to Notepad++.

### 1.5

v1.5 new features and fixed bugs (from v1.4) :

1. Brace and Indent guideline Highlight : When the caret stay beside of one of those symbol "{ } [ ] ( )" the symbol beside of caret and its symetric opposite symbole will be highlighted, as well as the indent guideline in order to locate the bloc more easily.

2. A fixed bug : the incorrect display of line number margin by doing the zoom is corrected.

3. The tooltips for the tool bar are added.

4.  Another fixed bug : The position of the document wasn't restored correctly after closing or drag-and-droping a document.

5. fixed bug again : the Find text dialog didn't memorize the searched words.

6. Syntax HighLighting of asp file is added.

### 1.4

v1.4 change log (from v1.3) :

1. Codepage auto-detection is done. Notepad++ works automatically now under Traditional/Simplified Chinese Windows. as well under Korean and Japanese Windows (ie. the native characters will be displayed correctly).
2. Bookmark feature is added. User can just click on the bookmark margin (located right side of line number margin) or type Ctrl+F2 to toggle a book mark. To reach the bookmark, type just F2 (Next bookmark) or Shift+F2 (Previous bookmark). To clear all bookmarks, clik the Menu "Search->Clear All bookmarks".
3. An icon of "wrap the text" is added into the tool bar, Thank to our Art Chief Stephane LE GALL for her esthetic design.
4. Syntax highlighting of *.ini is added.
5. Multi-user configuration system is done. From now on the personal GUI configuration and history are saved in the user directory. Also it's no more need to modify the user configuration file manually, Notepad++ memorizes automatically the current GUI configueration for the next session.
6. An "pseudo" bug of find string is corrected thanks to our Test & Support Manager Oren BAUM who reported this problem. This "pseudo bug" is that if the user try to find a whatever string just after opening a file (without placing the caret), he will find nothing because the caret is at the end of file. The remedy is Notepad++ puts the caret at the begining of the opened document.

### 1.3

Notepad++ v1.3

from v1.2 :

1. add the xml configurator
2. add the new functionality of "close all but current document"
3. add doxygen syntax highlighting.
4. add the new functionality of History (the list of the opened document)

### 1.2

corrected bugs & new feature :

1. Add text wrap function.
2. Add automatic indentation. (not intelligent indentation yet).
3. remove no needed fold marge for some types of document.
4. correct the problem of different size of fold margin for the different type of document.
5. correct the problem that the dialogs don't receive the key stroke of ENTER.
6. Add new menu entry to support traditional Chinese codepage,
   so from now on N++ works under the Chinese windows system.

### 1.1

Notepad++ release Note :

Notepad++ is a free source editor with the syntax highlighting.
It gives also the extra functionality to the general user : colourise the user defined words.
You can print your source code in color (or whatever you want) if you have a color printer(WYSIWYG).
Furthermore, Notepad++ have the multi-view feature, that allows user to edit the different document
in the same time, and even to edit the same document synchronizely in 2 different views.
Notepad++ support the fully drag and drop : not only you can drop the file from explorer to open it,
but also you can drag and drop a document from a view to another.
With all the functionalities, Notepad++ runs as fast as Notepad provided by MS Windows.

How to install :

Just unzip all the files in the same directory, et voila!

### 1.0

Notepad++ 1.0 beta release note :

Notepad++ is a Scintilla-based source editor written in C++ with the win32 API (without MFC).
The aim of Notepad++ is to offer the programmer a better GUI and to offer the general user
a better customisable Notepad.

Installation :
Just unzip all the files in the same directory.

Please contact me  (click on Menu "About...") if you have any suggestion or find any bug.
