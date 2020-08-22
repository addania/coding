---
title: "How to copy from terminal using XClip"
date: "2020-06-04"
category: "knowledge-base"
---

![](https://i.imgur.com/STxfgmb.jpg "Photo by João Jesus from Pexels")

When you need to copy something from the terminal, instead of selecting it manually you can install xclip:

sudo apt-get install xclip

And then use it like this: 
```
<your command> | xclip
```
Example:
```
docker logs adverity-insights | xclip
```
It will copy that commands output to clipboard

Common place to share text files with your colleagues is https://pastebin.com/