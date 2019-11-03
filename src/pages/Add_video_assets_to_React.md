---
title: "Add video assets to React"
date: "2019-10-02"
---

> Go to pages folder and create vid subfolder

> Upload your video there for example called ulrik.mp4

> open your index.js files and import your video

import vid from "./vid/ulrik.mp4";

> create a video tag with source tag. in video tag write controls if zou want to displaz controls like plaz and pause. in source tag write the src either as a URL where your video is hosted or file path to your imported video. also add type, in this case video/mp4

<video  controls>

    <source src={vid} type="video/mp4">

    </source>
    
    </video>