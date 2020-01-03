---
title: "Create and download file in Javascript"
date: "2020-01-03"
---

![](https://i.imgur.com/o5VQqra.jpg "Photo by Dominika Roseclay from Pexels")

Happy New Year and let's learn something right away. How about something cool, I don't know, maybe how to create and download txt file upon a button click :) 

> In order to do so, you will need a following function:
```
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
```

> You can then call this function in you Component button-click-handler-function:
```
download(data, "fileName.txt", "text/plain")
```
> **Tip:** imagine your <code>data</code> is array of strings, such as:
```
const input = [".#.","#.#",".#." ]
```

> If you just print out this file, it will concatenate the elements into one long string. 
```
".#.#.#.#."
```

>What if we wanted each element on a separate line, so that the result is:
```
".#."
"#.#"
".#."
```
>In order to do so we need to create a single string from array elements and this string will be sparated by NewLine character <code>\n</code>

>We can use a function to create such a string:
```
const data=input.join("\n")
```


Reference:

https://stackoverflow.com/questions/13405129/javascript-create-and-save-file

![](https://i.imgur.com/aF3EWOK.jpg "Photo by picjumbo.com from Pexels")