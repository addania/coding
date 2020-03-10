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

## Enums

Another data type which exists in Typescript and other languages but does not exist in JS. They are global variables that can have only limited number of options. For example for the role, we can have options: guildMaster, officer, guildee. These in code should be represented as numbers (starting from 0) but we also want to have human readable labels on top of them.

Then imagine we then need to work with those values in the code. We could of course just have those as normal string values (not enums) but then we would need to remember if it was `guild-master` or `guild_master` or `guildMaster`.. Which can be cumbersome. 

Another possibility would be to define 3 different global constants where each of role name would be a constant and hold a number:
```
const guildMaster = 0;
const officer = 1;
const guildee = 2;
```
and then work variable names in code:
```
if (officer){ console.log("Hi Officer!")}
```

But then again I needed global variables.

Enums can help us in such cases.Enum is a `custom type` and are written in upper-case.

How to create Enum:
```
enum Role { guildMaster, officer, guildee};
```

Behind the scenes guild-master receives number 0, office gets number 1 and guildee gets number 2.

We can also start from any custom number:
```
enum Role { guildMaster = 5, officer, guildee};
```

The rest of them will pick up and have 6 for officer and 7 for guildee.

Or we assign custom numbers to each of them:
```
enum Role { guildMaster = 5, officer = 100, guildee = 200};
```

We are also not restricted to use numbers, we can use text:
```
enum Role { guildMaster = "THE MASTER", officer = 100, guildee = 200};
```

Then we can access this values just like on an object:

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

Now you are maybe asking how did I define the enum? At least for me this worked:
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

Stores any value in there, typescrip will never yell at you.

We can say:
```
let petName: any;
```

Or at least we can say ANY array:
```
let petList: any[];
```

We want to AVOID ANY!

## Union type:

Imagine I want to have a function which should work on both numbers AND string. It would either add 2 numbers or concatenate 2 strings:

```
const combine = (input1, input2) => {
    const result = input1 + input2
    return (result)
};
```

Union type can help us in case we want to work with 2 or more types (can be multiple):

```
const combine = (input1: number | string, input2: number | string | boolean) => {
    const result = input1 + input2
    return (result)
};
```

## Literal types

![](https://i.imgur.com/niHJjzd.jpg "Photo by Suzy Hazelwood from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Suzy Hazelwood from Pexels_</p>

Sometimes we might want to restrict value not only to string, number or boolean, but maybe we want to be even stricter. We can limit to only a specific value. For example for constants TS infers that the literal type is for example: 4.6
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
> You create them on top of your file with word `type` and provide name of your alias  or custom type. Please note that `type` is again only available in Typescript.

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


> In a simple function like this, return from function will be of type number:
```
const add = (n1: number, n2: number) => {
    return n1 + n2
}
```
>When we hover over the add function, we will see following:
```
const add: (n1: number, n2: number) => number
```
> Typescript inferred that return will be number. But we can assign return type explicitly:
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
> Best practice is to let Typescript infer types

## Void type:

![](https://i.imgur.com/n51Q4mm.jpg "Photo by David Yu from Pexels")<p style="font-size: 12px; text-align: right">_Photo by David Yu from Pexels_</p>

> Void type does not exist in Javascript, but we might know it from other languages.

> WHAT on Earth void type is? Imagine you have a function which returns nothing and onyl prints some text:

```
const printResult=(n1: number)=> (
    console.log("Result: " + n1)
)
```

>If you then hover over printResult, you will see that Typescript infers that it returns VOID:
```
printResult: (n1: number) => void
```

>We could actually specify it explicitely (but this is not recommended):
```
const printResult=(n1: number):void => (
    console.log("Result: " + n1)
)

printResult(2)
```
> So VOID means I do NOT have return statement in my function

> Practically my function returns something though. Console.log the return of printResult would yield "undefined".
```
const printResult=(n1: number):void => (
    console.log("Result: " + n1)
)
console.log(print(2))
```
> Undefined is a REAL value in Javascript!

> There is another way (but VERY NOT recommended way) to specify that my function will return `undefined`, but this only works when your function HAS a return statement which is empty: 
```
const printResult=(n1: number):undefined => (
    console.log("Result: " + n1)
    return;
)
console.log(print(2))
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

## Function type

> We are able to tell to Typescrip that certain variable is expected to be a function.

> Imagine a code like this:
```
const add = (n1: number, n2: number) => {
    return n1 + n2
}

let newFunction;
newFunction=add;
console.log(newFunction(1,2))
```
> In order to tell explicitely to Typescript that newFunction will be a function, so that later on we cannot assign it just a number `newFunction=2`, we can define the function type:
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
> Another way how we can do this using anonymous function (where I define the function righ in the place where I call it):
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

>Used if we do not know yet, if it is number or a string. We can store any numbers in there without getting errors:
```
let userInput: unknown;
userInput = "mia"
console.log(userInput)
userInput = 5
console.log(userInput)
userInput = true
console.log(userInput)
```
>This looks so far similar to ANY type. But it IS different. 

>Type Unknown cannot be then assigned to other variable which is for example of a type string. typescript will throw an error.
```
let userInput: unknown;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```
>Whereas with any it will not throw an error:
```
let userInput: any;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```
>Unknown is a better choice to any

## Never type
> Functions which throw error cancel the script after the word throw, so that is NO possibility it will ever return anything.
```
const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```

>So the type of such function is NOT void (cause void returns undefined. Type of such function is NEVER.
```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```
>We can also console log this:
```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
const something = generateError("Upsy", 500)
console.log(something)
```
>Also another function which would NEVER rerutn anything is an infite loop function:
```
const generateError = (message: string, code: number): never => {
    while (true){}
}
const something = generateError("Upsy", 500)
console.log(something)
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
