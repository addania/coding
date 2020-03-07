---
title: "TypeScript"
date: "2020-02-13"
---

![](https://i.imgur.com/xI4DXv7.jpg "Photo by ELEVATE from Pexels")

This article is basically my notes following and amazing [Typescript course](https://www.udemy.com/course/understanding-typescript/) by Maximilian Schwarzmüller which I would recommend to everyone who wants to learn typescript.

> Typescript is a superset to Javascript which means it is a programming languages which builds on top of the Javascript. It adds new features and advantages to Javascript. It allows to write cleaner, less error-prone and more powerful code.

> Big disadavantage of typescript is that it cannot be executed by Javascript environments like a browser. But good news is that Typescript is ALSO a TOOL - it is also a compiler which we can run on our Typescript file and convert it to vanilla Javascript. Typescript brings new features which are then compiled to vanilla Javascript WORKAROUNDS. Such features might be easier to write in Typescrip (or using nicer syntax) which it would be an aweful lot of complex code in Javascript.

> Typescript enables defining and using types, which enforcing being more explicit how our code works, it catches unexpected and unnecerssary errors early. It also allows to use next-generation Javascript features which can be then compiled to be used on older browsers. It also adds non-Javascript features like Interfaces and Generics which cannot be comiled to JS (but they only help during development, they dont need to be compiled to vanila JS). It adds Meta-Programming features like Decorators.

> To install Typscript you need to have node.js installed:
```
nodejs.org/en/
```

> Node.js will also install NPM tool (node package Manager) which will allow us to intall Typsscript globally with <code>npm install</code> command

> To install Typescript:
```
npm install -g typescript

```

> Maybe you need to add <code>sudo</code> in front of it:
```
sudo npm install -g typescript

```

Syntax:
> <code>!</code> means I am sure my element with certain ID will always be there becasue I checked that id:
```
const input1 = document.getElementById("num1")!;
```

> <code>as HTMLInputElement</code> means TYPECASTING which says what kind of elemtn it will be, in this case it will be an input element:
```
const input1 = document.getElementById("num1")! as HTMLInputElement;
```

> To envoke TS compiler we will use command <code>tsc</code>
```
tsc example.ts
```

> Typescript project

> We will start creating an html file with following content:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typescript Course</title>
    <script src="app.js"  defer></script>
</head>
<body>
    
</body>
</html>
```
>Especially important is the script tag which will envoke our app.js file and will execute is:
```
<script src="app.js"  defer></script>
```

> Then in the same folder add app.ts file
```
touch app.ts
``` 
> Add some console.log in there:
```
console.log("Monsters for the win!")
```

> Now let's try to compile our ts file and see if we can console it in browser:
```
tsc app.ts
```

> New file will be produces: add.js

> Now open the index.html in your broswer and <code>CTRL + i</code> to see the console. You should see the message you consoled.

>Problem is however, for now we will need to always save code, compile it, and manually refresh the browser. But we can automate the browser refresh by installing a tool.

> Go to your main project folder and initialize npm. It will create the package,json file. Hit enter for each question it asks you
```
npm init
```

> Then we will install a lite-server package:

```
npm install --save-dev lite-server
```

> Then go to package.json and add a start script after the test script (make sure you seprate them with comma):
```
"test": "echo \"Error: no test specified\" && exit 1",
"start": "lite-server"
```

> Above means that if I type in console <code>npm start</code> I will start a lite server which will serve index.html next to package.json on url:

```
http://localhost:3000

```
> This will automatically reload the page if a file changes in our folder. So forexample if I open app.ts change the message, CTRL+S to save changes and then <code>tsc app.ts</code> in terminal, then my browser page will automatically reload to reflect the changes.

Core types

Core types are data types provided by Typescript/Javascript (but they are not exclusive, you can define your own).

Core types are:
- number - only one number type no difference between integers or floats (8, 8.6, -10)
- string - text ("monster", 'beast', `predator`)
- boolean - true or false

> Defining a type in the script is with semi-colon and word number or string, etc:

```
const add = (n1: number, n2: number) => (n1 + n2);
```

>If I passed string to the above function, I will get a compilation error. 

```
add('1', 2)
```

>Error will be seen when I compiule the code with
```
tsc app.ts
```

> Error will look like this:
```
error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
```

> I will ONLY get error during compilation (during development), not during runtime (because browsers do not have built-in Typescript support). It does not change Javascript to work differently. But it add extra sanity check!

>Important is also to notice that even though compilation threw and error, by default the file was STILL compiled and served (but we can setup a blocker for that later).


Best practises tips:

> **Do not ignore**

Do not use<code>@ts-ignore</code>. It turns off the compilr completely from the next line and prevents from spotting type errors

> **Do not use React.FunctionComponent**
Eee:
```
type Props = { foo: string }
const Foo: React.FunctionComponent<Props> = ({ foo }) => <div>{foo}</div>

```

Approved:
```
const Foo = ({ foo }: Props) => <div>{foo}</div>
```

> **Do not use enums**

Nope:
```
enum Direction { Up, Down, Left, Right}
```
Jaaaa:
```
type Direction = "up" | "down" | "left" | "right"
```

> **Do not us wide types lik objct or any**

Always try to find concrete types

![](https://i.imgur.com/VwFJtH1.jpg "Photo by Anastasiya Lobanovskaya from Pexels")