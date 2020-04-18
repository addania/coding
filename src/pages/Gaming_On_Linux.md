---
title: "Gaming on Linux"
date: "2020-01-18"
category: "knowledge-base"
---

![](https://i.imgur.com/jy1aFWj.jpg "Photo by Lucie Liz from Pexels")

Here we go! Finally the time has come to explore the opportunities of Gaming on Linux. I honestly didn't really think I might be able to get it going, but somehow it turned out that Steam has some excellent initiative called Steam Play which allows Linux users to run some games which are originally only supported on Windows. 

Let's see what is necessary to do:

> First of course you need to have a Steam account and you need to download Steam on your Linux. You can go to Ubuntu Software app and download Steam Installer.

> Then install WineTricks via console:
```
sudo apt-get install wine winetricks
```

> Then go to Steam > Settings > Steam Play and check both boxes:

**1//** Enable Steam Play for supported titles

**2//** Enable Steam Play for all other titles

> Then also select Proton 4.11-12 from the option: <code>Run other titles with</code>.

> Click **OK**

> Then download and install Age of Empires on your Steam and try to run it! Probably you will get an error but at least you will create a Proton file.

> Then go to your terminal and paste this code:
```
WINEPREFIX="/home/YOUR_PROFILE/.steam/steam/steamapps/compatdata/105450/pfx/" winetricks mfc42 l3codecx winxp
```

where YOUR_PROFILE is name of your profile on your Linux. In my case it is <code>addania</code>, so my final code is:
```
WINEPREFIX="/home/addania/.steam/steam/steamapps/compatdata/105450/pfx/" winetricks mfc42 l3codecx winxp
```

> Then try to run Age of Empires again. It hopefully should work. <code>HAPPY GAMING</code> :) 

> Some useful articles:

https://askubuntu.com/questions/306665/can-i-play-windows-steam-games-on-ubuntu

https://itsfoss.com/steam-play/

https://steamcommunity.com/app/105450/discussions/0/3220528325728647640/

https://www.protondb.com/app/105450

![](https://i.imgur.com/MK6LK5L.jpg "Photo by John Petalcurin from Pexels")