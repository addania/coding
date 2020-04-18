---
title: "Install Notepad++ on Linux"
date: "2019-12-28"
category: "knowledge-base"
---

![](https://i.imgur.com/LVjRiAO.png "Notepad++ logo")

In order to install Notepad++ we need a snap tool. To check if it is installed, we can type to command line:
```
sudo apt list
```

If it is not installed, we can install it with following command:

```
sudo apt-get install snapd snapd-xdg-open
```

Afterwards we can instal Notepad++ itself:
```
sudo snap install notepad-plus-plus
```

Resources:

https://vitux.com/how-to-install-notepad-on-ubuntu/