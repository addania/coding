---
title: "TypeScript"
date: "2020-02-13"
category: "knowledge-base"
---



![](https://i.imgur.com/n6YTT3v.jpg "Photo by Matej from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Matej from Pexels_</p>

## Intro

This article is basically my notes following an amazing [Typescript course](https://www.udemy.com/course/understanding-typescript/) by Maximilian Schwarzmüller which I would recommend to everyone who wants to learn Typescript.

> Typescript is a <code>superset</code> to Javascript which means it is a programming languages which builds on top of Javascript. It adds new features and advantages to Javascript. It allows to write cleaner, less error-prone and more powerful code.

> Big disadavantage of Typescript is that it cannot be executed by Javascript environments like a browser. But good news is that Typescript is also a tool - it is also a `compiler` which we can run on our Typescript files and convert them to vanilla Javascript. Typescript brings new features which are then compiled to vanilla Javascript <code>workarounds</code>. Such features might be easier to write in Typescript (or using nicer syntax) while it would be an aweful lot of complex code in Javascript.

> Most importantly Typescript enables defining and using `types`, which forces us to be more explicit how our code works, it catches unexpected and unnecessary errors early. It also allows to use next-generation Javascript features which can be then compiled to be used on older browsers. It also adds non-Javascript features like `Interfaces` and `Generics` which cannot be comiled to JS (but they only help during development, they actually don't need to be compiled to vanilla JS). It adds meta-programming features like `Decorators`.

> To install Typscript you need to have `node.js` installed:
```
nodejs.org/en/
```

> Node.js will also install NPM tool (Node Package Manager) which will allow us to install Typescript globally with <code>npm install</code> command

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

> To envoke TS compiler we will use command <code>tsc</code> and then file name which we want to compile:
```
tsc app.ts
```

## Setting up Typescript project

![](https://i.imgur.com/2QEDSKd.jpg?1 "Photo by Markus Spiske from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Markus Spiske from Pexels_</p>



> We will start creating an html file with following content:
``` es6
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
>Especially important is the script tag which will envoke our `app.js` file and will execute it:
```
<script src="app.js"  defer></script>
```

> Then in the same folder add `app.ts` file
```
touch app.ts
``` 
> Add some `console.log` in there:
```
console.log("Monsters for the win!")
```

> Now let's try to compile our `.ts` file and see if we can console it in browser:
```
tsc app.ts
```

> New file will be produced: `app.js`

> Now open the `index.html` in your broswer and <code>CTRL + i</code> to see the console. You should see the message you consoled.

>Problem is however, for now we will need to always save code, compile it, and manually refresh the browser. But we can automate the browser refresh by installing a tool.

> Go to your main project folder and initialize npm with `npm init`. It will create the `package.json` file. Hit enter for each question it asks you
```
npm init
```

> Then we will install a `lite-server` package:

```
npm install --save-dev lite-server
```

> Then go to `package.json` and add a `start` script after the `test` script (make sure you separate them with comma):
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
- **number** - there is only one number type, there is no difference between integers or floats (8, 8.6, -10)
- **string** - text ("monster") - which can be denoted by double or single quotes or backticks:",' or `
- **boolean** - true or false

> Defining type in the code is done with a colon and word `number`, `string` or `boolean` etc:

```
const add = (n1: number, n2: number) => (n1 + n2);
```

>If I passed string to the above function, I will get a compilation error. 

```
add('1', 2)
```

>Error will be seen when I compile the code with:
```
tsc app.ts
```

> Error will look like this:
```
error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
```

> I will only get error during `compilation` (during development), not during runtime (because browsers do not have built-in Typescript support). It does not change Javascript to work differently. But it adds extra sanity check!

>Important is also to notice that even though compilation threw an error, by default the file was `still` compiled and served (but we can setup a blocker for that later).

> Javascript uses `dynamic types` which are resolved at runtime. Typescript uses `static types` which are set during development, allowing us to catch errors early (before they go to production).

>`Type inference` means that Typescript tries to detect type of data. 

> If you initialize a `constant` with number `5`, it will be of interred type 5 when you hover over the number1 in `.ts` file. It is because as for constants you cannot re-assign their value:
```
const number1=5;
// if you hover over number1 you will see: const number1: 5
```

> If you initialize a `variable` with number 5, it will be of inferred type `number` (as for variables you can re-assign their value):
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

> Best practice would be to define a type `if you do not assign value but only initialize a variable`:
```
let x;
```

>Then it is actually encouraged to define type:
```
let x: number;
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


> We can explicitly define that hero will be an  `object type`:
```
const hero: {} = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

or like this:

```
const hero: object = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

>Above only says to Typescript that hero will be an object. If we want to be explicit of which type is which key, we can do it like this:
```
const hero: {
    name: string;
    title: string;
} = {
    name: "Addania",
    title: "The Horde Slayer"
}
```

> Notice the semi-colon `;` between curly brackets. Semicolon is a Typescript way to define types in an object. Javascript way of giving multiple keys in an object is using comma.

> Anyway, it is not recommended to explicitly define types if Typescript can infer them.

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
const hero:{
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

> To define type as mixed array (of numbers or strings) we say:
```
let mixedAchievements: any[];
```
>You can also be more specific:
```
let mixedAchievements: (string | number)[];
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

## Enum type

>Enum is another data type which exists in Typescript and other languages but does not exist in JS. Enums are global variables that can have only limited number of options. For example for the role, we can have options: guildMaster, officer, guildee. These in code should be represented as numbers (starting from 0) but we also want to have human readable labels on top of them.

>Imagine we then need to work with those values in the code. We could of course just have those as normal string values (not enums) but then we would need to remember if it was `guild-master` or `guild_master` or `guildMaster`.. Which can be cumbersome. 

>Another possibility would be to define 3 different global constants where each of role name would be a constant and hold a number:
```
const guildMaster = 0;
const officer = 1;
const guildee = 2;
```
>And then we can work variable names in code:
```
if (officer){ console.log("Hi Officer!")}
```

>But then again I needed 3 global variables.

>Enums can help us in such cases.Enum is a `custom type` and are written in upper-case.

>How to create Enum:
```
enum Role { guildMaster, officer, guildee};
```

>Behind the scenes `guild-master` receives number 0 (poor life of guild masters), `officer` gets number 1 and `guildee` gets number 2.

>We can also start from any custom number:
```
enum Role { guildMaster = 5, officer, guildee};
```

>The rest of them will pick up and have 6 for officer and 7 for guildee.

>Or we assign custom numbers to each of them:
```
enum Role { guildMaster = 5, officer = 100, guildee = 200};
```

>We are also not restricted to use numbers, we can use text:
```
enum Role { guildMaster = "THE MASTER", officer = 100, guildee = 200};
```

>Then we can access this values just like on an object:

```
enum Role { guildMaster = "THE MASTER", officer = 1, guildee = 0 }

const hero = {
  name: "Addania",
  title: "The Horde Slayer",
  mounts: ["Ashes of Al'ar", "Spectral Steed", "Blue Proto-Drake"],
  skills: {
    enchanting: 360,
    jewelcrafting: 320
  },
  role: Role.guildMaster
}
```

>Now you are maybe asking how did I define the enum? At least for me this worked:
```
enum Role { guildMaster = "THE MASTER", officer = 1, guildee = 0 }

const hero: {
    name: string;
    title: string;
    mounts: string[];
    skills: {
        enchanting: number;
        jewelcrafting: number;
    };
    role: Role;

} = {
    name: "Addania",
    title: "The Horde Slayer",
    mounts: ["Ashes of Al'ar", "Spectral Steed", "Blue Proto-Drake"],
    skills: {
        enchanting: 360,
        jewelcrafting: 320
    },
    role: Role.guildMaster
}
```

## Any

>Stores any value in there, Typescript will never yell at you.

>We can say:
```
let petName: any;
```

>Or at least we can say `any` array:
```
let petList: any[];
```

>However, good practice is that we AVOID `any`!

## Union type:

>Imagine I want to have a function which should work on both numbers AND string. It would either add 2 numbers or concatenate 2 strings:

```
const combine = (input1, input2) => {
    const result = input1 + input2
    return (result)
};
```

>Union type can help us in case we want to work with 2 or more types (can be multiple):

```
const combine = (input1: number | string, input2: number | string) => {
    const result = input1 + input2
    return (result)
};
```

## Literal types

![](https://i.imgur.com/niHJjzd.jpg "Photo by Suzy Hazelwood from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Suzy Hazelwood from Pexels_</p>

>Sometimes we might want to restrict value not only to string, number or boolean, but maybe we want to be even stricter. We can limit to only a specific value. For example for constants TS infers that the literal type is for example: 4.6
```
const myNum=4.6
```

>If my parameter can only have 2 values (for example output can only be either: "calculation result: " or "concatenation result: "), we can use union types together with literal types:
```
const combine = (input1: number | string, input2: number | string, output: "calculation result: " | "concatenation result: ") => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return (output + result)
};
console.log(combine(1, 2, "calculation result: "));
console.log(combine("A", "B", "concatenation result: "));
```
## Type aliases

![](https://i.imgur.com/30FPntX.jpg "Photo by sebastiaan stam from Pexels")<p style="font-size: 12px; text-align: right">_Photo by sebastiaan stam from Pexels_</p>

> Instead of writing our union types all the time:
```
input1: number | string;
input2: number | string;
```
> you create them on top of your file with word `type` and provide name of your alias  or custom type. Please note that `type` is again only available in Typescript.

```
type Combinable = number | string;
type OutputMessage = "calculation result: " | "concatenation result: ";
const combine = (input1: Combinable, input2: Combinable, output: OutputMessage) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return (output + result)
};
console.log(combine(1, 2, "calculation result: "));
console.log(combine("A", "B", "concatenation result: "));
```

> You can create type aliases not only for union types, but also for for example object types. This allows avoiding repetition and manage types centrally.

```
type Char = { name: string; level: number };
const char1: Char = { name: "Addania", level: 255 };
console.log(char1.name);
```

## Return type

![](https://i.imgur.com/OfCWNEV.jpg "Photo by P C from Pexels")<p style="font-size: 12px; text-align: right">_Photo by P C from Pexels_</p>


> In a simple function we can not only decide what types the parameters of function will be but also the return type. This is usually infered by typescript:


> In a simple function like this, return value from function will be of type number:
```
const add = (n1: number, n2: number) => {
    return n1 + n2
}
```
>When we hover over the add function, we will see following:
```
const add: (n1: number, n2: number) => number
```
> Typescript inferred that return value will be number. But we can assign return type explicitly:
```
const add2 = (n1: number, n2: number): number => {
    return n1 + n2
}
```
>Imagine following function:
```
const add = (n1: number, n2: number) => {
    return n1.toString() + n2.toString()
}
```

>When we hover over the add function, we will see that return is a string:
```
const add: (n1: number, n2: number) => string
```
> Typescript inferred that return will be string. But we can assign return type explicitly:
```
const add2 = (n1: number, n2: number): string => {
    return n1 + n2
}
```
> Best practice is to let Typescript infer types.

## Void type:

![](https://i.imgur.com/n51Q4mm.jpg "Photo by David Yu from Pexels")<p style="font-size: 12px; text-align: right">_Photo by David Yu from Pexels_</p>

> Void type does not exist in Javascript, but we might know it from other languages.

> WHAT on Earth is the void type? Imagine you have a function which returns nothing and only prints some text:

```
const printResult=(n1: number)=> (
    console.log("Result: " + n1)
)
```

>If you then hover over `printResult`, you will see that Typescript infers that it returns `void`:
```
printResult: (n1: number) => void
```

>We could actually specify it explicitly (but this is not recommended):
```
const printResult=(n1: number):void => (
    console.log("Result: " + n1)
)

printResult(2)
```
> So `void` means I do not have return statement in my function.

> Practically my function returns something though. Console.log the return of `printResult` would yield `undefined`.
```
const printResult=(n1: number):void => (
    console.log("Result: " + n1)
)
console.log(print(2))
```
> `Undefined` is a REAL value in Javascript!

> There is another way (but VERY NOT recommended way) to specify that my function will return `undefined`, but this only works when your function HAS a return statement which is empty: 
```
const printResult=(n1: number):undefined => (
    console.log("Result: " + n1)
    return;
)
console.log(print(2))
```

## Function type

![](https://i.imgur.com/M2Zf5ER.jpg "Photo by Miguel Á. Padriñán from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Miguel Á. Padriñán from Pexels_</p>

> We are able to tell to Typescript that certain variable is expected to be a function.

> Imagine a code like this:
```
const add = (n1: number, n2: number) => {
    return n1 + n2
}
let newFunction;
newFunction=add;
console.log(newFunction(1,2))
```
> In order to tell explicitly to Typescript that `newFunction` will be a function, so that later on we cannot assign it just a number `newFunction=2`, we can define the function type:
```
let newFunction: Function;
```
> We can also use an arrow notation where we can define a return type:
```
let newFunction: () => number;
```

>We can also add types of parameters which we also need to enter:
```
let newFunction: (a: number, b: number) => number;
```

## Function types and callbacks

![](https://i.imgur.com/tp0nHv2.jpg "Photo by Hassan OUAJBIR from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Hassan OUAJBIR from Pexels_</p>

> Imagine I have a function which will receive 2 numbers as paramenters and also a third parameter which will be another function (callback function):
```
const printResult = (n1: number): void => (
    console.log("Result: " + n1)
)
const add = (n1: number, n2: number, callback): number => {
    const result = n1 + n2
    callback(result);
    return result
}
const output = add(10, 20, printResult)
```
> Another way how we can do this using anonymous function (where I define the function right in the place where I call it):
```
const add = (n1: number, n2: number, callback): number => {
    const result = n1 + n2
    callback(result);
    return result
}
const output = add(10, 20, (result) => {
  console.log("Result is: " + result)
 }
)
```

> How to now define the function type:
```
const add = (n1: number, n2: number, callback: (num: number) => void ): number => {
    const result = n1 + n2
    callback(result);
    return result
}
```
## Unknown type
![](https://i.imgur.com/GPUfFFD.jpg "Photo by Kaique Rocha from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Kaique Rocha from Pexels_</p>

>Unknown is used if we do not know yet, if it is number or a string. We can store any numbers in there without getting errors:
```
let userInput: unknown;
userInput = "mia"
console.log(userInput)
userInput = 5
console.log(userInput)
userInput = true
console.log(userInput)
```
>This looks similar to `any` type. But it IS different. 

>Type `unknown` type cannot be then assigned to other variable which is for example of a type string. Typescript will throw an error.
```
let userInput: unknown;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```
>Whereas with `any` it will not throw an error:
```
let userInput: any;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```
>`Unknown` is a better choice to any

## Never type

![](https://i.imgur.com/GrnyFyS.jpg "Photo by Elina Krima from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Elina Krima from Pexels_</p>

> Functions which throw error cancel the script after the word throw, so that there is NO possibility it will ever return anything.
```
const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```

>So the type of such function is NOT `void` (because `void` returns `undefined`. Type of such function is `never`.
```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```
>We can also console log this and see there is NO console log:
```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
const something = generateError("Upsy", 500)
console.log(something)
```
>Also another function which would NEVER return anything is an infite loop function:
```
const generateError = (message: string, code: number): never => {
    while (true){}
}
const something = generateError("Upsy", 500)
console.log(something)
```

## Watchmode

![](https://i.imgur.com/6tOCEK8.jpg "Photo by Jordan Benton from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Jordan Benton from Pexels_</p>

>So far after each change of our file we needed to manually run tsc `app.ts`.

>We can enter the watchmode and make sure that compilation watches for any change of the file and if it changes then it re-compiles automatically.

>How to enter watchmode:
```
tsc app.ts --watch
```

>Or alternatively:
```
tsc app.ts -w
```

>You can then exit it with:
```
CTRL + C
```

>How about I have more files than one. Let's add another file called `analytics.ts` and this file will contain following command:
```
console.log("Sending...")
```

>In order to use this file in our project, we need to add it to the script tag of out `index.html`:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typescript Course</title>
    <script src="app.js" defer></script>
    <script src="analytics.js" defer></script>
</head>
<body>
</body>
</html>
```
>Now imagine we want to compile automatically every time any of these two files changes.

>For that we will need to do only once:
```
tsc --init
```

>It will initial the whole folder as a typescript project. It will also create `tsconfig.json` file.

> Now we will be able to run just `tsc` in the terminal and it will compile all the .ts files in our project. 

> We can combine it with watchmode!
```
tsc -w
```
or
```
tsc --watch
```

## Excluding and including files to compile

>`tsconfig.json` file is a critical file which tells Typescript how to compile files!

>It is possible to exclude certain files from compilation. In order to do that you need to add exclude command at the end of the `tsconfig.json` file. Make sure you add the command betwee two curly brackets and separate them by comma:
```
    /* Advanced Options */
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "exclude": [
    "analytics.ts"
  ]
}
```
>You will need to re-run the compilation with `tsc` command. Notice that file `analytics.js` is not created.


>We can use it with regular expressions to check for any file ending with `dev.ts`
```
},
  "exclude": [
    "*dev.ts"
  ]
}
```
>We exclude a file ending with `dev.ts` in ANY folder
```
},
  "exclude": [
    "**/*dev.ts"
  ]
}
```
>Typically what we DO WANT to exclude are files in `node_modules` folder (which holds all dependencies):
```
},
  "exclude": [
    "node_modules"
  ]
}
```

>By default this folder will be excluded by Typescript (so we do not necessarily need to do it, but we can)

>On the other hand we can explicitely say which files to INCLUDE in our compilation. Anything else will be ignored:
```
},
  "exclude": [
    "node_modules"
  ],
  "include": [
      "app.ts",
      "analytics.ts"
  ]
}
```

> I can also include whole folder which I want to include in compilation. For example folder called "section1":
```
},
  "exclude": [
    "node_modules"
  ],
  "include": [
      "app.ts",
      "analytics.ts",
      "section1"
  ]
}
```

> If I have both exclude and include, Typescript will compile what is INCLUDED minus what is EXCLUDED

> Command file is like include but only applies to files (I cannot use it on folders):
```
},
  "exclude": [
    "node_modules"
  ],
  "files": [
      "app.ts",
      "analytics.ts"
  ]
}
```

## tsconfig.json options

### Target

![](https://i.imgur.com/LIWQef6.jpg "Photo by vedanti from Pexels")<p style="font-size: 12px; text-align: right">_Photo by vedanti from Pexels_</p>

>Target tells for which target Javascript version we want to compile our code and which runs in set of browsers. And you dedefine which browsers support the compiled code by setting the target. 
```
 "compilerOptions": {
    /* Basic Options */
    // "incremental": true,
    "target": "es5",
```

>Default target is `es5`. And I can see it, because in my `.ts` files I use `const` and `let`, which if I open the `.js` file I will see `var` everywhere. Because in `es5` we do not have `let` and `const`!! `es5` makes sure that code will run in older browsers, but maybe I want to use `es6` and then I have other build tool which will transpile the Javascript code which can be then read by older browsers. Or maybe we want to ship code that ONLy works in modern browsers.

>We can delete the es5 and press `CTRL+SPACE` it will give you all the possible options. You can set target to es6 which is equivalent to es2015. Or use even younger version: es2020

### Libraries

![](https://i.imgur.com/zZbnUAa.jpg "Photo by Skitterphoto from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Skitterphoto from Pexels_</p>

>Allows to specify which default objects and features Typescript knows (for example working with the DOM). If "lib" is empty, defaults are assumed based on our target.

>Add a button to the index.html file:
```
<body>
    <button>Click Me!</button>
</body>
```
>And then let us add event listener to the button, so that we console log a message when button is clicked. Add this to the .ts file:
```
const button = document.querySelector("button")!;
button.addEventListener("click", () => {
    console.log("Button Clicked!")
})
```

> We needed to add ! after querySelector (to tell to Typescript that this button WILL exist).

> Now we can add custom libraries to our tsconfig.json file which would overwrite defaults. For our Javascript project we would need:

```
     "lib": [
       "DOM",
       "ES6",
       "DOM.Iterable",
       "ScriptHost"
     ],
```
>But above is equivalent if we leave it empty becasue then defaults are assumed based on our es6 target.

```
"lib": [],
```
### allowJS and checkJS

>This option allows Javascript files to be compiled. AllowJS will compile .js files. CheckJS will still check syntax of .js files, but it will not compile them. But it does not make sense if you have both .ts and .js files becasue then it will leave to double-compilation. This could be however used in projects where we dont have Typescript at all, but we still want to check .js files.

### sourceMap

![](https://i.imgur.com/fNmTHCH.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

>Source Map helps with debugging and development. You can see .js files from your project in the browser -> developer tools (or CTRL+SHIFT+i)->Sources

> However, we only see the js files, not our ts files. Source map if set to true, will create new files in the project folder: `app.js.map` which in browser will be translated as app.ts file. Which can be practical especially if we use some easy nice syntax in ts which would then be very complicated in js.

```
"sourceMap": true,
```

> In the sources we will see our code and also we will be able to put cursor in a specific line of the code and stop then execution of the code there. Which is good for debuggin (like adding `debugger` in the code). But this is only done in browser and we are not polluting our code in reality.

### outDir and rootDir

> These help us in bigger projects to organize the folder structure. Usually we will not want to have all files laying around in the project root folder. A typical project will want to have a `src` and `dist` subfolders. `dist` usually holds all output files (like the javascript files) and `src` might hold all typescript files.

> By default Typescript will compile the Typescript files into Javascript files and put them right next to Typescript files.

> With `outDir` we can tell Typescript where output (Javascript) files will be stored, for example in `dist` folder:
```
"outDir": "./dist",
```

> While our .ts files might reside in `src` folder.

> Please note that then you also nbeed to adpat .index.html file to point to the .js files in dist folder:
```
<script src="dist/app.js" defer></script>
<script src="dist/analytics.js" defer></script>
```

> You will also need to adapt `tsconfig.json` file in case you have include and you will need to add new parth to the files:
```
"include": [
    "src/app.ts",
    "src/analytics.ts"
]
```
> Also if we had subfolder structure in the `src` folder, this will be replicated in the `dist` folder.

> With `rootDir` I can set Typescript to only read files from this folder. It is equivalent if we used `include`.
```
"rootDir": "./src",
```
>The difference however is that `rootDir` will also make sure that ou`tDir will replicate folder structure of the `rootDir`

>Often we set both `outDir` and `rootDir`

### removeComments

>Any comments in the `.ts` file will be ignored in the `.js` file:
```
"removeComments": true,
```

### noEmit
> `noEmit` setting will make sure NO `.js` files are produced (for example if I only want to check my files)
```
"noEmitOnError": true,   
```
> There is another one `noEmitOnError` which makes sure no js file is produced if there was compilation error.

```
"noEmitOnError": true,   
```

### Strict

>We can set strict to true, which will be equivalent to enabling all the rest of strict options to true:

```
"strict": true,  
```
>is the same as:
```
"noImplicitAny": true,
"strictNullChecks": true,
"strictFunctionTypes": true,
"strictBindCallApply": true,
"strictPropertyInitialization": true,
"noImplicitThis": true,
"alwaysStrict": true,
```
> `noImplicitAny` will always throw error if a parameter of a function is implied by Typescript to be of ANY type (which we should avoid). It forces us to be specific about what data we expect. For variables, it does not complain.
```
"strictNullChecks": true,   
``` 

> `strictNullChecks` is checking if the objects we try to access actually exist. SO for our button, we needed to add `!`after the querySelector, because otherwise Typescript would complain that it is not sure if that selector exists. It is because of this option. If it is true, it throws such errors to notify you maybe this does not exist.
```
"strictNullChecks": true,   
``` 

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

> **Do not us wide types like object or any**

Always try to find concrete types

![](https://i.imgur.com/ob6G3qI.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>
