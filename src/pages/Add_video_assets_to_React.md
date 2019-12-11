---
title: "Add video assets to React"
date: "2019-10-02"
---

![High](https://i.imgur.com/o8RCUlW.jpg "Photo by Cameron Casey from Pexels")


Being able to display videos in your website is very cool. Here is how you can easily do it.

> Go to pages folder and create vid subfolder

> Upload your video there for example called <code>myVideo.mp4</code>

> Open your <code>index.js</code> files and import your video
```
import vid from "./vid/myVideo.mp4";
```
> Create a video tag with source tag. In video tag write controls if you want to display controls like play and pause. In source tag write the src either as a URL where your video is hosted or file path to your imported video. Also add type, in this case video/mp4
```
<video  controls>
    <source src={vid} type="video/mp4">
    </source>
</video>
```