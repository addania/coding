---
title: "Install Sublime on Linux"
date: "2019-11-20"
category: "knowledge-base"
---

![](https://i.imgur.com/13CjRhl.png "Sublime logo")

How to install Sublime on Linux

Sublime is a code editor.

There are diffrent kinds of installs depending on Linux distributor:

**1/** apt - Ubuntu, Debian

**2/** pacman - Arch

**3/** yum - CentOS

**4/** dnf - Fedora

**5/** zypper - openSUSE

Here we will check how apt works:

> Install GPG key
```
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```

> Setup apt to work with http sources
```
sudo apt-get install apt-transport-https
```

> Select channel - we will choose stable channel
```
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```

> Update apt source
```
sudo apt-get update
```

> Install Sublime Text
```
sudo apt-get install sublime-text
```

> Start Sublime from the command line:
```
subl .
```

Reference:

https://www.sublimetext.com/docs/3/linux_repositories.html



