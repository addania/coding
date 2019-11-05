---
title: "Intro to Ubuntu"
date: "2019-09-23"
---

General:

It is possible to have Ubuntu on Windows through feature called Windows Subsystem for Linux. Installation will result in having a completely new operational (sub)system (along side with Windows). When using this Windows Subsystem for Ubuntu, it only allows for command line, it doesnt have any user interface. Only interaction with the operational system is via command line (terminal). This system will be then used with Gatsby to create webpages and push my code to Github. Please note, upon first installation of Ubuntu subsystem, it is a completely blank software. It wont have access to my previously installed programms on Windows (like node.js, etc). Therefore we will need to install everything again.

Ubuntu directory on PC:
```
\\wsl$\Ubuntu-18.04\home\addania
```
Controls:

Copy/Paste works differently in Ubuntu: ctrl+shift+c for copy, crtl+shift+v for paste
Some commands will start with sudo which means to run as administrator
j and k keys allows navigate up and down
h and l allow to navigate left and right

Commands:

> to show which directory I am currently in we use command pwd (print working directory)
```
pwd
```
> to display list of all files in a current directory
```
ls
```
> to display list of all files in a current directory including hidden files (those with ., ex: .git)
```
ls -a
```
> change directory cd + name of the directory (ex: cd src will go to folder called src in your currnet folder), this is to go one directory down the tree
```
cd src
```
> to go one directory up the tree
```
cd ..
```
> to create a folder
```
mkdir
```
> to create a new file called global.css
```
touch global.css
```