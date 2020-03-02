---
title: "Visual Code Studio"
date: "2020-03-02"
---

As every good programmer we will need to download a good code editor. According to the [polls](https://2019.stateofjs.com/other-tools/) many developers use VCS (Visual Code Studio). Let's install that one then.

![](https://i.imgur.com/SshAdpx.jpg "Photo by Negative Space from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Negative Space from Pexels_</p>

> You can visit their official [website](https://code.visualstudio.com/download) and download the code manually.

> Alternatively you can search for it in the Ubuntu Software App.

> Or use CLI to install it.

> Let's first update the distribution and install dependencies:

```
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
```

> You can open up the VCS from the terminal with this command:

```
code .
```

> The dot <code>.</code> means that it will open the files from the current directory.

> You can also open a specific file in VCS from terminal

```
code package.json
```
