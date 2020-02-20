---
title: "Relative and Absolute imports"
date: "2020-02-14"
---

![](https://i.imgur.com/xVQKAQS.jpg "Photo by Pixabay")

There are generally two ways how to define a path from which we import elements to our files.

> <code>Relative imports</code>

> <code>Absolute imports</code>


Imagine a file structure like this:
```
- src
   - components
       - Button.js
       - Header.js
       - Form.js
   - features
       - Input.js
```

In order to import Button.js to our Input.js, we could do the following:

**A)** import using the <code>Relative</code> path. 

Relative path is always... well... relative :) to the file in which we currently are, in our case Input.js. In order to import to Button.js to our Input.js, we will need to go firstly one directory up <code>"../"</code> and then to the directory <code>features</code>
```
import { Button } from "../features/Button.js"
```

**B)** import using the <code>Absolute</code> path. 

Absolute path is always fixed from <code>src</code> folder.
```
import { Button } from "features/Button.js"
```
In order to make the absolute path work in the create-react-app we will need to go to <code>package.json</code> and in the scripts section, we will need to add <code>NODE_PATH=src</code> to each script which is executing the code:
```
"scripts": {
	"start":"NODE_PATH=src react-scripts start",
    "build":"NODE_PATH=src react-scripts build",
    "test":"NODE_PATH=src react-scripts test --env=jsdom",
}
```


Reference:

https://www.youtube.com/watch?v=h5ekwDyjmW4
