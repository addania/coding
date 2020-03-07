---
title: "TypeScript"
date: "2020-02-13"
---



![](https://i.imgur.com/n6YTT3v.jpg "Photo by Matej from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Matej from Pexels_</p>

## Intro

This article is basically my notes following and amazing [Typescript course](https://www.udemy.com/course/understanding-typescript/) by Maximilian Schwarzmüller which I would recommend to everyone who wants to learn Typescript.

> Typescript is a <code>superset</code> to Javascript which means it is a programming languages which builds on top of Javascript. It adds new features and advantages to Javascript. It allows to write cleaner, less error-prone and more powerful code.

> Big disadavantage of Typescript is that it cannot be executed by Javascript environments like a browser. But good news is that Typescript is also a tool - it is also a `compiler` which we can run on our Typescript files and convert them to vanilla Javascript. Typescript brings new features which are then compiled to vanilla Javascript <code>workarounds</code>. Such features might be easier to write in Typescrip (or using nicer syntax) while it would be an aweful lot of complex code in Javascript.

> Most importantly Typescript enables defining and using `types`, which forces us to be more explicit how our code works, it catches unexpected and unnecerssary errors early. It also allows to use next-generation Javascript features which can be then compiled to be used on older browsers. It also adds non-Javascript features like `Interfaces` and `Generics` which cannot be comiled to JS (but they only help during development, they actually don't need to be compiled to vanilla JS). It adds meta-programming features like `Decorators`.

> To install Typscript you need to have `node.js` installed:
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
> Typescript file has `.ts` extension, for example:
```
app.ts
```

> To envoke TS compiler we will use command <code>tsc</code>
```
tsc app.ts
```

## Setting up Typescript project

![](https://i.imgur.com/2QEDSKd.jpg?1 "Photo by Markus Spiske from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Markus Spiske from Pexels_</p>



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
>Especially important is the script tag which will envoke our `app.js` file and will execute is:
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

> Now let's try to compile our `.ts` file and see if we can console it in browser:
```
tsc app.ts
```

> New file will be produces: `app.js`

> Now open the index.html in your broswer and <code>CTRL + i</code> to see the console. You should see the message you consoled.

>Problem is however, for now we will need to always save code, compile it, and manually refresh the browser. But we can automate the browser refresh by installing a tool.

> Go to your main project folder and initialize npm. It will create the `package.json` file. Hit enter for each question it asks you
```
npm init
```

> Then we will install a `lite-server` package:

```
npm install --save-dev lite-server
```

> Then go to `package.json` and add a `start` script after the `test` script (make sure you seprate them with comma):
```
"test": "echo \"Error: no test specified\" && exit 1",
"start": "lite-server"
```

> Above means that if I type in console <code>npm start</code> I will start a `lite server` which will serve `index.html` next to `package.json` at url:

```
http://localhost:3000

```
> This will automatically reload the page if a file changes in our folder. So for example if I open `app.ts`, change the message, CTRL+S to save changes and then <code>tsc app.ts</code> in terminal, then my browser page will automatically reload to reflect the changes.

## Core types
![](https://i.imgur.com/BBgWcbe.jpg "Photo by Ludvig Hedenborg from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Ludvig Hedenborg from Pexels_</p>



Core types are data types provided by Typescript/Javascript (but they are not exclusive, we can define our own).

Core types are:
- **number** - only one number type no difference between integers or floats (8, 8.6, -10)
- **string** - text ("monster") - which can be denoted by double or single quotes or backticks:",' or `
- **boolean** - true or false

> We can define type in the code is with colon and word number or string, etc:

```
const add = (n1: number, n2: number) => (n1 + n2);
```

>If I passed string to the above function, I will get a compilation error. 

```
add('1', 2)
```

>Error will be seen when I compile the code with
```
tsc app.ts
```

> Error will look like this:
```
error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
```

> I will only get error during `compilation` (during development), not during runtime (because browsers do not have built-in Typescript support). It does not change Javascript to work differently. But it adds extra sanity check!

>Important is also to notice that even though compilation threw and error, by default the file was `still` compiled and served (but we can setup a blocker for that later).

> Javascript uses `dynamic types` which are resolved at runtime. Typescript uses `static types` which are set during development, allowing us to catch errors early (before they go to production).

>`Type inference` means that Typescript tries to detect type of data. 

> If you initialize a `constant` with number 5, it will be of interred type 5 when you hover over the number1 in `.ts` file. It is because as for constants you cannot re-assign their value:
```
const number1=5;
// if you hover over number1 you will see: const number1: 5
```

> If you initialize a `variable` with number 5, it will be of inferred type number (as for variables you can re-assign value):
```
let number2=5;
let number2: number
```

> We can actually write our own type in both declarations:
```
const number1: number = 5;
let number2: number = 5;
```

>But it is redundant and not encouraged (not best practice), as Typescript can infer the data type itself from how I initialize the constant or variable.

> Best practice would be to define a type if you do not assign value but only initialize a variable:
```
let number3;
```

>Then it would be encouraged to define type:
```
let number3: number;
```
## Object types
![](https://i.imgur.com/dGwZPCQ.jpg "Photo from mocah.org")<p style="font-size: 12px; text-align: right">_Photo from mocah.org_</p>

> Typescript automatically infers object keys and complains when we access property which does not exist:
```
const hero = {
    name: "Addania",
    title: "The Horde Slayer"
}
console.log(hero.nickname);
```
> It also reckognizes which key is of which type. Syntaxs below is an `object type` in Typescript:
```
const hero: {
    name: string;
    title: string;
}
```

>We can define `object type` explicitly in a very generic way (but not recommended, we prefer inference):
```
const hero: object = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

or

```
const hero: {} = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

>But we only gave info to Typescript that this should be an object but we did not define any keys and their type. So if we want to call `hero.name`, we will get Typescript complaining

> Another way to provide Typescript info about the structure of an object looks like this(also not recommended, because we do prefer inference):

```
const hero: {name: string; title: string } = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

> We can also add types for nested objects. Example object:
```
const hero = {
  name: "Addania",
  title: "The Horde Slayer",
  mounts: ["Spectral Steed", "Blue Proto-Drake"],
  skills: {
    enchanting: 360,
    jewelcrafting: 320
  }
}
```

> This is how types would be defined:

```

const hero:
{
    name: string;
    title: string;
    mounts: string[];
    skills: {
        enchanting: number;
        jewelcrafting: number;
    };
}
 = {
  name: "Addania",
  title: "The Horde Slayer",
  mounts: ["Spectral Steed", "Blue Proto-Drake"],
  skills: {
    enchanting: 360,
    jewelcrafting: 320
  }
}
```

## Array type

<img src="https://i.imgur.com/PqcRvxa.jpg" style="width: 800px"><p style="font-size: 12px; text-align: right; width: 100%">_Photo from wowhead.com_</p>

> Let's imagine we have an array of all our very precious pets:
```
let pets = ["Wind Rider Cub", "Phoenix Hatchling"]
```

> To define type as array of strings we say:
```
let pets: string[];
```

> To define type as array of numbers we say:
```
let hordeKillsPerDay: number[];
```

> To define type as mixed array (of numbers or strings)we say:
```
let mixedAchievements: any[];
```
## Tuples

![](https://i.imgur.com/OTOEqWp.jpg "Photo by Gela Del Rosario from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Gela Del Rosario from Pexels_</p>

> Typescript  allows us to add a new type: <code>Tuple</code>. They are available in other programming languages but not in JS. Tuples are fixed length arrays. Example tuple:

```
const profession= [1, "cooking"]
```
> By inference Typescript will think that profession is an array of either a number or string.
```
profession: (number | string)[]
```
> Typescript will allow to add elements to the array or re-assign values:
```
profession.push("first aid");
profession[1]=2;
```

> So in this scenario, inference does not work the way we want it to work. How to say to Typescript that we can only have exactly 2 elements? Tuple is perfect for this.
```
const role: [number, string] = [1, "cooking"]
```

> This tells Typescript I want a special array which should have exactly two elements out of which first one is number and second one is string. Please note, `.push` will still work as push is exception and works on Tuples!

## Syntax:

![](https://i.imgur.com/equqbFL.jpg "Photo by Miguel Constantin Montes from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Miguel Constantin Montes from Pexels_</p>

> <code>!</code> means I am sure my element with certain ID will always be there becasue I checked that id:
```
const input1 = document.getElementById("num1")!;
```

> <code>as HTMLInputElement</code> means TYPECASTING which says what kind of element it will be, in following case it will be an input element:
```
const input1 = document.getElementById("num1")! as HTMLInputElement;
```

## Best practises tips:

![](https://i.imgur.com/VDxi6vE.jpg "Photo by Porapak Apichodilok from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Porapak Apichodilok from Pexels_</p>

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

Nein:
```
enum Direction { Up, Down, Left, Right}
```
Jaaaa:
```
type Direction = "up" | "down" | "left" | "right"
```

> **Do not us wide types lik objct or any**

Always try to find concrete types

![](https://i.imgur.com/ob6G3qI.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>
