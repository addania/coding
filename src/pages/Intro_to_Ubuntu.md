---
title: "Intro to Ubuntu"
date: "2019-09-23"
---

![](https://i.imgur.com/9fMfBav.png "Ubuntu Logo")

**General**:

It is possible to have Ubuntu on Windows through feature called Windows Subsystem for Linux. Installation will result in having a completely new operational (sub)system (along side with Windows). When using this Windows Subsystem for Ubuntu, it only allows for command line, it doesnt have any user interface. Only interaction with the operational system is via command line (terminal). This system will be then used with Gatsby to create webpages and push my code to Github.

Please note, upon first installation of Ubuntu subsystem, it is a completely blank software. It won't have access to my previously installed programms on Windows (like node.js, etc). Therefore we will need to install everything again.

Ubuntu directory on PC:

```
\\wsl$\Ubuntu-18.04\home\addania
```

**Controls**:

Copy/Paste works differently in Ubuntu:

<code>ctrl+shift+c</code> for copy,

<code>crtl+shift+v</code> for paste

Some commands will start with sudo which means to run as administrator

<code>j</code> and <code>k</code> keys allows navigate up and down

<code>h</code> and <code>l</code> allow to navigate left and right

**Commands**:

> To show which directory I am currently in we use command pwd (print working directory)

```
pwd
```

> To display list of all files in a current directory

```
ls
```

> To display list of all files in a current directory including hidden files (those with ., ex: .git)

```
ls -a
```

> If you are in the file manager, you can use the keyboard shortcut <code>Ctrl+H</code> to display all the files including the hidden ones. Pressing Ctrl+H again will hide the files.

```
CTRL+H
```

> Change directory cd + name of the directory (ex: cd src will go to folder called src in your current folder), this is to go one directory down the tree

```
cd src
```

> To go one directory up the tree

```
cd ..
```

> To create a new folder

```
mkdir
```

> To create a new folder called <code>myNewFolder</code>

```
mkdir myNewFolder
```

> To create a new file called global.css

```
touch global.css
```

> Navigate to root directory:

```
cd
```

or

```
cd ~
```

> To cancel something running in the command line:

```
control-C
```

> To delete a specific file, type <code>rm</code> for remove and then file name

```
rm unnecessaryFile.js
```

> Command line, how to delete a specific folder, type <code>rm</code> for remove, <code>-r</code> for recursive, then folder name

```
rm -r unnecessaryFile.js
```

> How to kill or stop a process, for example Chrome?

```
killall chrome
```

> How to see kill manual

```
man kill
```

> How to clear terminal? Simply type <code>clear</code>

```
clear
```

> How to check your current Ubuntu version:

```
lsb_release -a
```

> Output should be something like:

```
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 19.10
Release:	19.10
Codename:	eoan
```

> How to find a file which contains certain substring in the file name? In our case we will be searching for a substring <code>devil</code>

```
sudo find . -name "*devil*"
```

> Result should be something like where we see location and name of the file:

```
./Downloads/devil.png
```

> How to see history of all commands? Simply type in:

```
history
```

> You can also search history for a specific substring. Maybe I want to make sure I installed something and I dont remember, then I can use this command:

```
history | grep "sudo"
```

> Another way how to search history for specific substring is by hitting:

```
 CTRL + R
```
