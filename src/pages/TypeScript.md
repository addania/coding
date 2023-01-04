---
title: "TypeScript"
date: "2020-02-13"
category: "knowledge-base"
---

![](https://i.imgur.com/n6YTT3v.jpg "Photo by Matej from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Matej from Pexels_</p>

## Intro

This article is basically my notes following an amazing [Typescript course](https://www.udemy.com/course/understanding-typescript/) by Maximilian Schwarzmüller and [SkillerWhale](https://skillerwhale.com/) training notes which I would recommend to everyone who wants to learn Typescript.

> Typescript is a <code>superset</code> to Javascript which means it is a programming languages which builds on top of Javascript. It adds new features and advantages to Javascript. It allows to write cleaner, less error-prone and more powerful code.

> Big disadvantage of Typescript is that it cannot be executed by Javascript environments like a browser. But good news is that Typescript is also a tool - it is also a `compiler` which we can run on our Typescript files and convert them to vanilla Javascript. Typescript brings new features which are then compiled to vanilla Javascript <code>workarounds</code>. Such features might be easier to write in Typescript (or using nicer syntax) while it would be an aweful lot of complex code in Javascript.

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

```es6
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

> Especially important is the script tag which will envoke our `app.js` file and will execute it:

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

> Problem is however, for now we will need to always save code, compile it, and manually refresh the browser. But we can automate the browser refresh by installing a tool.

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

> If I passed string to the above function, I will get a compilation error.

```
add('1', 2)
```

> Error will be seen when I compile the code with:

```
tsc app.ts
```

> Error will look like this:

```
error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
```

> I will only get error during `compilation` (during development), not during runtime (because browsers do not have built-in Typescript support). It does not change Javascript to work differently. But it adds extra sanity check!

> Important is also to notice that even though compilation threw an error, by default the file was `still` compiled and served (but we can setup a blocker for that later).

> Javascript uses `dynamic types` which are resolved at runtime. Typescript uses `static types` which are set during development, allowing us to catch errors early (before they go to production).

> `Type inference` means that Typescript tries to detect type of data.

> If you initialize a `constant` with number `5`, it will be of inferred type 5 when you hover over the number1 in `.ts` file. It is because as for constants you cannot re-assign their value:

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

> But it is redundant and not encouraged (not best practice), as Typescript can infer the data type itself from how I initialize the constant or variable.

> Best practice would be to define a type `if you do not assign value but only initialize a variable`:

```
let x;
```

> Then it is actually encouraged to define type:

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

> We can explicitly define that hero will be an `object type`:

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

> Above only says to Typescript that hero will be an object. If we want to be explicit of which type is which key, we can do it like this:

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

## More about object type

**Object Types**

> TypeScript has a general object type that corresponds to JavaScript's object type. This type includes all non-primitive values: arrays, dates, sets, maps, functions (callable objects), as well as objects in the narrower sense (things that can be written out as an object literal).

> Since the object type is so general, you are unlikely to ever want to use it in practice. In this session you will learn how to write and work with types for objects in the narrower sense.

> In the simplest case, object types are written out exactly like object literals, but instead of assigning values to properties, you assign types:

```
type Message = { text: string, urgent: boolean }
let welcome: Message = { text: 'Welcome!', urgent: false }
```

> As with all types, you can also use object types directly, without first assigning them to a type alias:

```
let welcome: { text: string, urgent: boolean } = { text: 'Welcome!', urgent: false }
```

> You can also leave out any explicit type annotations and let TypeScript infer the object type for you:

```
// The inferred type of welcome is { text: string, urgent: boolean }
let welcome = { text: 'Welcome!', urgent: false }
```

> But it is good practice to use explicit type annotations everywhere. And with objects, more than with primitives, the inferred type will often not be what you want. For example, if you want your object to have optional or read-only properties (discussed later in this session), you will have to tell the compiler with an explicit annotation.

> An object type can include properties of any other type. It can also have many nested levels, in a similar way to defining a complex object literal. For example:

```
type Message = { text: string, urgent: boolean }
type MessageSender = {
 messages: Message[],
 scheduledFor: Date,
 format: 'email'|'inapp'|'sms',
 from: {
   email: string,
   name: {
     first: string,
     last: string,
   },
 },
}
let messages: Message[] = [ /** ... */ ]
let messageSender: MessageSender = {
 messages: messages,
 scheduledFor: new Date(2018, 5, 21),
 format: 'email',
 from: {
   email: 'orcaniser@skillerwhale.com',
   name: { first: 'Eelton', last: 'John' },
 },
}
```

**Type Compatibility (Structural Typing)**

> In TypeScript, one object type A is compatible with another object type B when every property in B has a matching property in A. A matching property is a property with the same key and a compatible type - where compatibility is checked recursively in the case of properties that are themselves objects.

> Object type A is compatible with object type B even if A has additional properties not present in B (but then B will not be compatible with A).

```
type Message = { text: string, urgent: boolean }
type Todo = { text: string, urgent: true | false }
type DetailedMessage = { text: string, urgent: boolean, detail: string }
```

> Here, the types Message and Todo are both compatible with each other. (Note the types boolean and true | false are mutually compatible, since the sets of values described by these types are identical.)

> The type DetailedMessage is also compatible with both Message and Todo, but Message and Todo are not compatible with DetailedMessage, because they are missing the additional detail: string property.

> Whenever a value of one type is required by the compiler, a value of a compatible type is allowed. For example, if you have a function that requires a parameter of type Message, you can pass it an argument of type Todo or DetailedMessage without raising an error:

```
function sendMessage (message: Message) {
 // do some messaging
}
let message: Message = {
 text: 'Your order has been shipped.',
 urgent: false
}
let todo: Todo = {
 text: 'Ship order 00046728',
 urgent: true
}
let detailedMessage: DetailedMessage = {
 text: 'You have a new message.',
 urgent: false,
 detail: 'Your order is delayed due to ...'
}
sendMessage(message) // ok because message is a Message
sendMessage(todo) // ok because Todo is compatible with Message
sendMessage(reminder) // ok because DetailedMessage is compatible with Message
```

> This is because TypeScript implements a structural typing system, as opposed to a nominal typing system.

> In a structural typing system, one type is considered compatible with another when it has the same (or compatible) members. Compatibility in nominal typing systems is stricter: whenever a value of one type is required, only a value of that named type - or of a subtype explicitly declared as such - is allowed.

> Other example:

```
type Message = { text: string; urgent: boolean };
type Text = { text: string };
const welcome: Message = { text: "xxx", urgent: true };
const text: Text = { text: "xxx" };
const printing = (a: Text) => {
 console.log(a.text);
};
printing(text);
printing(welcome); // Message is compatible with Text
const printing2 = (a: Message) => {
 console.log(a.text);
};
printing2(text); // text is not compatible with Message
printing2(welcome);
```

**Optional Properties**

> Sometimes you will want to limit the properties that your objects can have, but without insisting that they have all of these properties all of the time. In principle, you could do this by typing some properties as unions with undefined.

```
type Message = { text: string, urgent: boolean, detail: string | undefined }
let messageWithoutDetail: Message = {
 text: 'Your order has been shipped.',
 urgent: false,
 detail: undefined
}
let messageWithDetail: Message = {
 text: 'You have a new message.',
 urgent: false,
 detail: 'Your order is delayed due to ...'
}
```

> This approach can be tedious, however, especially if you want to have several potentially undefined properties. In order to satisfy the TypeScript compiler, you have to explicitly give your messageWithoutDetail object a detail property with a value of undefined. But in JavaScript, it would be possible to access a detail property on this object (which would have the value undefined) without explicitly setting it.

> The explicit detail assignment is needed by the compiler, but is not needed by the JavaScript run-time engine.

> To simplify your code in these cases, TypeScript includes a ? modifier to indicate that a property is optional. This implicitly makes the type of that property a union with undefined, but also allows you to leave the property out altogether when defining objects of the relevant type.

```
type Message = { text: string, urgent: boolean, detail?: string }
let messageWithoutDetail: Message = {
 text: 'Your order has been shipped.',
 urgent: false
}
let messageWithDetail: Message = {
 text: 'You have a new message.',
 urgent: false,
 detail: 'Your order is delayed due to ...'
}
```

> Other examples of optional properties:

```
type Flat = { location: string; area: number; price: number | undefined };
type Flat2 = { location: string; area: number; price?: number };

const newHome: Flat = { location: "Prag", area: 60 }; // error, price needs to be provided, but can have value of undefined
const newHome2: Flat = { location: "Prag", area: 60, price: undefined }; // ok
const newHome3: Flat = { location: "Prag", area: 60, price: 700 }; // ok
const homeSweetHome: Flat2 = { location: "Prag", area: 60 }; // ok, because price is optional and does not need to be defined
const homeSweetHome2: Flat2 = { location: "Prag", area: 60, price: 700 }; // ok
const homeSweetHome3: Flat2 = { location: "Prag", area: 60, price: undefined }; // ok, because price can be undefined
```

> You can use control flow and type narrowing to handle optional properties, by first checking whether the property is undefined.

```
let message: Message = { /* ... */ }
let details: string[] = []
// Error: Argument of type 'string | undefined' is not assignable to parameter of type 'string'
details.push(message.details)
if (message.detail !== undefined) {
 // OK: message.details has been narrowed to type 'string'
 details.push(message.detail)
}
```

> Another example:

```
type Message2 = { text: string; urgent: boolean; detail?: string };
let details: string[] = [];
const message: Message2 = { text: "Hi", urgent: false, detail: "blue" };
details.push(message.detail); // error because detail can be undefined and in details variable we want to only have strings
```

**Excess Property Checks**

> TypeScript's structural typing system, where types are considered compatible even if they have additional properties, gives you a lot of flexibility when working with object types.
> Optional properties take advantage of a flexible feature of JavaScript - that undefined properties can always be accessed at run-time (and have the value undefined) - to save you from writing extra lines of code just to satisfy the compiler.

> Combining these two features of TypeScript, however, creates a hole in the compiler that bugs could potentially fall through. Consider the following code:

```
type Message = { text: string, urgent: boolean, detail?: string }
const message: Message = {
 text: 'Welcome!',
 urgent: false,
 deetail: 'Your account has been created.'
}
```

> Here the message variable has a property called deetail instead of a property called detail. This is almost certainly a typo, and a bug in the code.

> Another example:

```
type Message3 = { text: string; urgent: boolean; detail?: string };
const message3 = {
 text: "Welcome!",
 urgent: false,
 deetail: "Your account has been created.",
};
const printing3 = (a: Message3) => {
 console.log(a.text);
};
printing3(message3); //compiler considers this as ok, but it is a hole in the system! message3 is compatible with Message3
```

> But given the rules of structural typing and optional properties alone, this would not be an error: an object does not have to have the optional detail property to count as a Message, and it can have any additional properties - deetail or anything else - and still be compatible with the Message type.

> In order to catch bugs like these, TypeScript imposes excess property checks in certain situations on top of its core structural typing system. Where excess property checks apply, one object type will be considered compatible with another when it has all the same properties as the other type and no additional properties.

> There are two situations where TypeScript uses excess property checks:
> When an object literal is assigned to a variable with an explicit type (as in the example above with Message).
> When an object literal is passed directly as a function argument (as in the example below).

> Because of this, the buggy code above in fact does generate an error, as does the similarly buggy code in the function call below:

```
type Message = { text: string, urgent: boolean, detail?: string }
function sendMessage (message: Message) {
 // do message sending
}

sendMessage({
 text: 'Welcome!',
 urgent: false,
 // Error: Object literal may only specify known properties, and 'deetail'
 // does not exist in type 'Message'. Did you mean to write 'detail'?
 deetail: 'Your account has been created.'
})
```

> Recap on when excess properties apply:

> Excess properties check will apply and detect our error if we explicitly assign a type:

```
type Message4 = { text: string; urgent: boolean; detail?: string };
const message4: Message4 = {
 text: "Welcome!",
 urgent: false,
 deetail: "Your account has been created.", // we will get an error here now! excess properties are not allowed
};
const printing4 = (a: Message3) => {
 console.log(a.text);
};
printing4(message4);
```

> Another way how excess properties check will apply and detect our error if we pass object literal directly to our function!

```
type Message5 = { text: string; urgent: boolean; detail?: string };
const printing5 = (a: Message5) => {
 console.log(a.text);
};

printing5({
 text: "Welcome!",
 urgent: false,
 deetail: "Your account has been created.", // we will get an error here now! excess properties are not allowed
});
```

> In some cases, excess property checks may result in a compiler error that doesn't correspond to a bug in your code - because you really do intend the object in question to have an additional property not specified in its type. In these cases, the simplest and usually best solution is just to include the additional property as an explicit optional property in the type definition.

**Read-Only Properties**

> You can indicate that a property cannot be reassigned using the readonly property modifier. TypeScript will indicate an error if a line of code reassigns the value of a readonly property after it has been set.
> You prepend the readonly modifier to a property that you want to be read-only.

```
type Message = {
 readonly text: string,
 urgent: boolean
}
let welcome: Message = {
 text: 'Welcome',
 urgent: false
}
// Error: Cannot assign to 'text' because it is a read-only property
welcome.text = 'Welcome!!'
function print (message: Message) {
 // Error: Cannot assign to 'text' because it is a read-only property
 message.text = `** ${message.text} **`
 console.log(message)
}
```

> Another example:

```
type Message6 = {
  readonly text: string;
  urgent: boolean;
};
let welcome6: Message6 = {
  text: "Welcome",
  urgent: false,
};
welcome6.text = "Bem vindo"; // error when trying to assign a new value to the text
```

> readonly can be particularly useful for function parameter types, providing a degree of assurance that the function will not modify the values that are passed to it.
> Note that specifying a property as readonly only prevents reassignments to that property, however. It does not prevent the value itself from being changed if it is mutable. For example, an array assigned to a readonly property can still have new items added to it.

```
type Message7 = {
 readonly clients: Array<string>;
};
let welcome7: Message7 = {
 clients: ["A", "B"],
};
welcome7.clients = ["A", "B", "C"]; // assigning new value to clients is not allowed
welcome7.clients.push("C"); // but mutating array is still allowed
```

**Typing Methods in Object Types**

> Object types can include method types as well as data types.
> To type a method on an object you use a function type expression. Function type expressions mirror the syntax of arrow functions, with a typed list of parameters in brackets, and a return type after the => arrow. For example:

```
type SendMessageFunction = (messages: Message[], saveLocalCopy: boolean) => string
```

> Another example:

```
type Print = (a: Message5) => void
const printing8: Print = (a) => {
 console.log(a.text);
};

```

You can use a function type expression as an object property type like any other. Objects annotated with that type will then need to implement a method matching that function signature.

```
type MessageSender = {
 sendAll: (messages: Message[], saveLocalCopy: boolean) => string
}
let sender: MessageSender = {
 sendAll: (messages: Message[], saveLocalCopy: boolean) => {
   // do some sending
   return 'OK'
}
sender.sendAll(someMessages)

```

> Note that the parameter names in the implementation of a function or method do not have to match the parameter names in the type definition. However, the convention is to use the same names unless you have a good reason not to.

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

> or alternatively:

```
let pets: Array<string>;
```

> To define type as array of numbers we say:

```
let hordeKillsPerDay: number[];
```

> or alternatively:

```
let hordeKillsPerDay: Array<number>;
```

> To define type as mixed array (of numbers or strings) we say:

```
let mixedAchievements: any[];
```

> or alternatively:

```
let mixedAchievements: Array<any>;
```

> You can also be more specific:

```
let mixedAchievements: (string | number)[];
```

> or alternatively:

```
let mixedAchievements: Array<string | number>;
```

**More on Array types**

> Arrays in `JavaScript` can have elements of different types. This is usually undesirable, and is a potential source of bugs. For example, when mapping or filtering an array, you want to assume all the elements have the same type.

> Arrays in `TypeScript`, on the other hand, can only have elements of the same type.

> There are two syntax options for defining an array. Because arrays are so common, TypeScript provides a short way to define array types, using square brackets:

```
const strings: string[] = ['once', 'upon', 'a', 'time']
```

> You can also use the Array generic type. Generic types are like functions for types, which take their arguments in angle brackets:

```
const strings: Array<string> = ['once', 'upon', 'a', 'time']
```

> TypeScript will raise a type error if you try to add an element of the wrong type to an array. The benefit of this restriction is that it can infer the type of every element in your array, and will raise an error if you try to do anything with an array element that is not compatible with its type.

> You can loosen Typescript's array type restriction in a controlled way by creating an `array of a union type`. For example, arrays with the following type can contain a mixture of strings and numbers:

```
const arrayWithStringsAndNumbers: (string | number)[] = [1, 'two', 3]
```

> Be careful, the `|` union type operator takes precedence over the `[]` array type operator, so the brackets are necessary to create an array type of a union type. Dropping the brackets will give you a union type where one of the subtypes is an array:

```
let stringORArrayOfNumbers: string | number[] = 'just a string'
```

> TypeScript's restriction on arrays is generally a good thing, and you are unlikely to need to use union types in this way to loosen that restriction. You are more likely to use unions of literal types to tighten the restriction even further. For example:

```
type ErrorCode = 400 | 401 | 403
const serverResponsesFromLast24Hours: number[] = [
  /* array of all server responses as numbers */
]
const errorCodesFromLast24Hours: ErrorCode[] = []
for (const response of serverResponsesFromLast24Hours) {
if (response === 400 || response === 401 || response === 403) {
errorCodesFromLast24Hours.push(response)
  }
}
// Error: Argument of type '200' is not assignable to parameter of type 'ErrorCode'
errorCodesFromLast24Hours.push(200)
```

> The more precise you can be about the types of values that can go into your arrays, the more helpful the compiler can be in ensuring that those values are used appropriately throughout your code.

> If you do not explicitly annotate your array variables, TypeScript will infer the type based on the types of the elements in the initial assignment. There are called `Inferred Array Types`.

```
const x = [1, 2, 3] // x has the inferred type 'number[]'
const y = ['one', 'two', 'three'] // y has the inferred type 'string[]'
const z = [1, true, 'three'] // z has the inferred type '(string | number | boolean)[]'
```

> The inferred type will always be a `general` type, like number or string, and not a `literal` type, like 1 or 'three'. If the elements in the initial assignment have different types, the inferred type of the array will be a union of all those types.

> If your initial assignment is an empty array, TypeScript will look at how you use the array to infer the type.

```
const x = [] // x initially has the inferred type 'any[]'
x.push(1) // x now has the inferred type 'number[]'
x.push('two') // x now has the inferred type '(number | string)[]'
```

> The inferred type will adapt based on the values you add to the array, so when you lookup elements from the array subsequently you will get a suitably cautious union type. But there will be nothing to stop you adding more values of different types.

> For this reason, it is good practice to explicitly annotate any array that is initialised as an empty array.

```
const x: Array< string | number > = []
```

**Readonly Arrays**

> Arrays in JavaScript are `mutable`: you can add and remove elements using the push, pop, shift, and unshift methods, reassign the elements at any index, and modify the whole array with methods like sort:

```
const numbers = [2, 4]
numbers.push(1) // [2, 4, 1]
numbers[1] = 3 // [2, 3, 1]
numbers.sort() // [1, 2, 3]
```

> As seen above, even if we declare an array as a `const`, we still can `mutate` it. Const only prevents up from re-assigning the entire array like so:

```
const numbers = [2, 4]
numbers = [1,2,3] // not possible
```

> But we can still re-assign individual elements of an array:

```
const numbers = [2, 4]
numbers[1] = 3 // [2, 3]
```

> TypeScript arrays are also `mutable` by default, but you can create an `immutable` array using the `ReadonlyArray` generic type or the `readonly` type modifier. TypeScript will raise a compiler error if you attempt to alter a readonly array.

```
const numbers: readonly number[] = [2, 4] // or: const numbers: ReadonlyArray<number> = [2, 4]
numbers.push(1) // Error: Property 'push' does not exist on type 'readonly number[]'.
numbers[1] = 3 // Error: Index signature in type 'readonly number[]' only permits reading.
numbers.sort() // Error: Property 'sort' does not exist on type 'readonly number[]'.
```

> Note that this is not the same as the difference between `let` and `const` arrays. You cannot reassign a different array to a `const` variable, but you can still `mutate` the array itself. On the other hand, you cannot `mutate` a readonly array, but if it is assigned to a `let` variable, you can still reassign a different array to that variable.

> Summary or arrays re-assigning and mutability:

```
let numbers: ReadonlyArray<number> = [1, 2];
numbers = [3, 4]; // OK: re-assigning whole array is ok because it is declared as let
numbers[1] = 0; // Error: numbers is readonly therefore its individual elements cannot be re-assigned

const pets: ReadonlyArray<string> = ["pheonix hatchling", "bear cub"];
pets = ["pebble"]; // Error: array declared as const cannot be re-assigned
pets[0] = "personal world destroyer"; // Error: pets is readonly therefore its individual elements cannot be re-assigned

const mounts: Array<string> = ["spectral tiger", "drake of the west wind"];
mounts = ["fire hawk", "flameward hippogryph"]; // Error: array declared as const cannot be re-assigned
mounts[1] = "heart of the aspects"; // OK: individual elements of const srray can still be re-assigned

let titles: Array<string> = ["Savior of Azeroth", "Dragonslayer"];
titles = ["the Flamebreaker", "Defender of a Shattered World"]; // OK: array declared as let can be re-assigned
titles[1] = "Blessed Defender of Nordrassil"; // OK: individual elements of let array can still be re-assigned
```

> Please note, that `readonly` is only on the surface and refers to the level on which is it declared. Imagine we have array of objects:

```
const achievements: ReadonlyArray<{ name: string; date: number }> = [
  { name: "Bucket List", date: 1644150502 },
  { name: "Chromatic Champion", date: 1644150502 },
];

achievements[0] = {name: "Taste the Rainbow!", date: 1644150502} // Error: you cant re-assign given element because achievements is readonly
achievements[0].name = "Taste the Rainbow" // OK: readonly is only on the surface level of array elements, but if we dig deeper we can change values
```

> In above example we can see that we cant assign a new object to `achievements[0]` but we can change its name or date: `achievements[0].name`

> If we do not even want to be able to change the name or date of those objects, then we need to add readonly further down the tree:

```
const achievements: ReadonlyArray<{ readonly name: string; readonly date: number }> = [
  { name: "Bucket List", date: 1644150502 },
  { name: "Chromatic Champion", date: 1644150502 },
];

achievements[0] = {name: "Taste the Rainbow!", date: 1644150502} // Error: you cant re-assign given element because achievements is readonly
achievements[0].name = "Taste the Rainbow" // Error: name is now also readonly property of the object
```

> Readonly modifier can be used on arrays, objects or properties of object.

> We can also make an entire object readonly:

```
type Item = Readonly<{item: string, amount: number}>
```

**String Indexed Access**

> JavaScript `arrays` are special kinds of `objects`.

```
const iAmArray = ['elementOnIndexZero', 'elementOnIndexOne', 'elementOnIndexTwo']
iAmArray[0] // 'elementOnIndexZero'
```

> Under the hood in Javascript, the array looks something like this:

```
iAmArray = {
  '0': 'elementOnIndexZero',
  '1': 'elementOnIndexOne',
  '2': 'elementOnIndexTwo',
}
iAmArray[0] // 'elementOnIndexZero'
```

> You can access indexed elements of an array using a string as well as a number.

```
const x = [2, 4, 6, 8]
x[0] === x['0'] // true
```

> TypeScript attempts to accommodate this quirk by allowing `string-keyed property access` when it can be certain that the string can successfully be parsed as a number.

> In practice, this means when the string is a string representation of a number that is either passed as a literal value or a variable with a literal type.

```
const x: number[] = [2, 4, 6, 8]
let literalVariable: '0' = '0'
let stringVariable: string = '0'
x['0'] // ok
x[literalVariable] // ok
x[stringVariable] // Error: Element implicitly has an 'any' type because index expression is not of type 'number'.
```

> The last case here raises an error because there is no type guarantee that `stringVariable` will hold a string representation of a number.

> To get all of this to work, TypeScript allows you to access an array property using any string-keyed property, but implicitly gives the resulting element the any type if it cannot be parsed as a number. If you have the `noImplicitAny` compiler flag disabled, therefore, the last line in the example above will not raise an error.

> More usefully, TypeScript will also allow you to access string-keyed properties of arrays when it can be certain that these correspond to genuine properties or methods on the array.

```
const x: number[] = [2, 4, 6, 8]

const arrayPropertyKey = 'length'

x['length'] // ok: equivalent to `x.length`
x[arrayPropertyKey] // ok: also equivalent to `x.length`
x['sort'] // ok: equivalent to x.sort, i.e. retrieves the fill method on x (without calling it)
x['sort']() // ok: equivalent to x.sort(), i.e. retrieves the fill method on x (and calls it)
```

**Unchecked Indexed Access**

> Because the elements of TypeScript arrays all have the same type, the compiler "knows" the type of each element. But there is a catch.

```
const totals: number[] = [1, 2, 3]

for (const total of totals) {
// total has type 'number' :)
}

// firstTotal has type 'number' :/
const firstTotal = totals[0]

// fourthTotal has type 'number' :(
const fourthTotal = totals[3]
```

> The compiler gives fourthTotal an inferred type of number, but in fact totals[3] is undefined. This is called `unchecked index access`: the compiler doesn't force you to check whether the element at any given index exists.

> If you are worried about this possibility, you can enable the `noUncheckedIndexedAccess` compiler flag. With this flag enabled, the type of elements accessed using an index will be a union type with undefined:

```
const totals: number[] = [1, 2, 3]

for (const total of totals) {
// total has type 'number' :)
}

// firstTotal has type 'number | undefined' :/
const firstTotal = totals[0]

// fourthTotal has type 'number | undefined' :)
const fourthTotal = totals[3]
```

> Unchecked index access is a way in which TypeScript is not completely type safe. But because the errors that it lets through are rare, and enabling `noUncheckedIndexedAccess` forces you to write extra manual checks every time you need to access an element, this option is disabled by default.

## Tuples

![](https://i.imgur.com/OTOEqWp.jpg "Photo by Gela Del Rosario from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Gela Del Rosario from Pexels_</p>

> Typescript allows us to add a new type: <code>Tuple</code>. They are available in other programming languages but not in JS. Tuples are fixed length arrays. Example tuple:

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

> Enum is another data type which exists in Typescript and other languages but does not exist in JS. Enums are global variables that can have only limited number of options. For example for the role, we can have options: guildMaster, officer, guildee. These in code should be represented as numbers (starting from 0) but we also want to have human readable labels on top of them.

> Imagine we then need to work with those values in the code. We could of course just have those as normal string values (not enums) but then we would need to remember if it was `guild-master` or `guild_master` or `guildMaster`.. Which can be cumbersome.

> Another possibility would be to define 3 different global constants where each of role name would be a constant and hold a number:

```
const guildMaster = 0;
const officer = 1;
const guildee = 2;
```

> And then we can work variable names in code:

```
if (officer){ console.log("Hi Officer!")}
```

> But then again I needed 3 global variables.

> Enums can help us in such cases.Enum is a `custom type` and are written in upper-case.

> How to create Enum:

```
enum Role { guildMaster, officer, guildee};
```

> Behind the scenes `guild-master` receives number 0 (poor life of guild masters), `officer` gets number 1 and `guildee` gets number 2.

> We can also start from any custom number:

```
enum Role { guildMaster = 5, officer, guildee};
```

> The rest of them will pick up and have 6 for officer and 7 for guildee.

> Or we assign custom numbers to each of them:

```
enum Role { guildMaster = 5, officer = 100, guildee = 200};
```

> We are also not restricted to use numbers, we can use text:

```
enum Role { guildMaster = "THE MASTER", officer = 100, guildee = 200};
```

> Then we can access this values just like on an object:

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

> Now you are maybe asking how did I define the enum? At least for me this worked:

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

> Stores any value in there, Typescript will never yell at you.

> We can say:

```
let petName: any;
```

> Or at least we can say `any` array:

```
let petList: any[];
```

> However, good practice is that we AVOID `any`!

## Union type:

> Imagine I want to have a function which should work on both numbers AND strings. It would either add 2 numbers or concatenate 2 strings:

```
const combine = (input1, input2) => {
    const result = input1 + input2
    return (result)
};
```

> Union type can help us in case we want to work with 2 or more types (can be multiple):

```
const combine = (input1: number | string, input2: number | string) => {
    const result = input1 + input2
    return (result)
};
```

## More about union types:

**Unions of Sets and Types**

> Every type describes a set of values - the values that have that type. The boolean type describes the set of the two possible Boolean values, true and false, the string type describes the set of all of the possible strings, and so on.

> In set theory, the union of two or more sets is the (super)set containing all the elements of those (sub)sets. The union of the set of all rational numbers and the set of all irrational numbers, for example, is the set of all real numbers.

> In type theory, the union of two or more types is the (super)type which describes the union of the sets described by those (sub)types. The boolean type, for example, is effectively the union of the literal types true and false.

> In TypeScript, you can construct unions of any subtypes with the | operator. For example:

```
type OptionalString = string | undefined // e.g. 'hello whale', undefined
type StringOrNumber = string | number // e.g. 'The meaning of life', 42
type OneOrMoreNumbers = number | number[] // e.g. 8, 12, [1, 2, 3, 4, 5]
type Primitive = boolean | string | number | bigint // e.g. true, 'true', 82, 10n
```

> The | operator is intentionally similar to the logical "or" operator, ||. You can read it as "or". The values of type X | Y must be either of type X or of type Y.

**Unions and Supertypes**

> Unions are supertypes of their component subtypes. Likewise, any built-in supertype (though not explicitly defined as a union) is equivalent to a union of all its subtypes, in the sense that it describes the exact same set of values.

> For example, the general object type is equivalent to a union of every specific object type you might define. And the maximally general any and unknown types are equivalent to unions of every other type.

> The unknown type behaves in all respects just like a union of every other type, and fits naturally into the rest of the type system. The any type is special, however: it is like a union of every other type which also signals that type checking should be disabled for variables of that type.

> Because supertypes are equivalent to unions of their subtypes, writing an explicit union of a supertype with any of its subtypes is effectively meaningless: the resulting union will be no different from the supertype itself.

> For example, a union with any results in a type that exactly equivalent to any itself, and likewise for unknown.

```
type AnyByAnotherName = any | string

type UnknownByAnotherName = unknown | number
```

> In unions with any and unknown, meanwhile, any takes priority.

```
type AnyInDisguise = any | unknown
```

> This means that any variable with the `AnyInDisguise` type will have all type checking disabled for it, just like an ordinary any variable.

**Unions of Literal Types**

> You can create unions of primitive types like string and number to describe even larger and more general sets of values. On the other side, you can create unions of literal types to describe smaller and more precise sets of values.

> When dealing with HTTP response codes, for example, the number type is too general, as not every number is a valid response code. In JavaScript, or TypeScript without unions of literal types, you might check that numbers are within the desired range at run-time:

```
function validateResponse (response) {
  if (response === 400 || response === 401 || response === 403 || response === 404) {
    return response
  }
  throw new Error()
}

function server (code) {
  switch (option) {
    case 400:
      return computerSaysNo()
    case 401:
      return logInPlease()
    case 403:
      return itsASecret()
    case 404:
      return cantFindIt()
  }
}

const errorCode = validateResponse(400)
server(errorCode)
```

With a union of literal types, you can instead shift the burden of validation onto the compiler:

```
type ErrorCode = 400 | 401 | 403 | 404

function server (option: ErrorCode) {
  switch(option) {
    case 400:
      return computerSaysNo()
    case 401:
      return logInPlease()
    case 403:
      return itsASecret()
    case 404:
      return cantFindIt()
  }
}

server(400)
```

**Arrays of Union Types**

> In JavaScript, arrays can contain a mixture of values of different types. Typically, however, you want arrays to only contain values of the same type, and TypeScript enforces this restriction.

> By creating an array of a union type, however, you can loosen this restriction in a controlled way. For example, arrays with the following type can contain a mixture of strings and numbers:

```
type stringsAndNumbers = (string | number)[]
```

> Note that the | union type operator takes precedence over the [] array type operator, so the brackets are necessary to create an array type of a union type. Dropping the brackets will give you a union type, where one of the subtypes is an array:

```
type stringOrNumbers = string | number[]
```

> Above example would be a union type of a string or an array of numbers

> Partly for this reason, it is conventional to leave a space either side of the | operator, and no spaces before the [] operator.

> TypeScript's restriction on arrays is generally a good thing, and you are unlikely to need to use union types in this way to loosen that restriction. You are more likely to use unions of literal types to tighten the restriction even further. For example:

```
type ErrorCode = 400 | 401 | 403 | 404

const serverResponsesFromLast24Hours: number[] = [
  /* array of all server responses as numbers */
]

const errorCodesFromLast24Hours: ErrorCode[] = []

for (const response of serverResponsesFromLast24Hours) {
  if (response === 400 || response === 401 || response === 403 || response === 404) {
    errorCodesFromLast24Hours.push(response)
  }
}

// Error: Argument of type '200' is not assignable to parameter of type 'ErrorCode'
errorCodesFromLast24Hours.push(200)
```

> The more precise you can be about the types of values that can go into your arrays, the more helpful the compiler can be in ensuring that those values are used appropriately throughout your code.

**Unions of Object Types**

> With unions of object types, the union does not merge the properties of the underlying types together. Suppose you have the following types in your code:

```
type Customer = {
  name: string,
  customerSaverNumber: number
}

type Employee = {
  name: string,
  employeeDiscountCode: number,
}

type CheckoutUser = Customer | Employee

```

> A valid instance of CheckoutUser must be either a Customer or an Employee, and not a hybrid of the two. In other words, it must have a name property, and then either a customerSaveNumber or an employeeDiscountCode, `but not both`.

> The following variable, therefore, does not satisfy the definition of CheckoutUser (is not a valid instance of CheckoutUser):

```
let customerEmployeeHybrid = {
  name: 'Rod',
  customerSaverNumber: 479823498,
  employeeDiscountCode: 094839
}
```

> However, because of TypeScript's structural typing system, an object is compatible with either the Customer or the Employee type when it has all of the properties of that type, even if it has additional properties as well.

> For this reason, the `customerEmployeeHybrid` variable is compatible with both the Customer type and the Employee type. As a result, it is also compatible with the CheckoutUser union type.

> It is important to remember that this is just the result of the structural typing system. The customerEmployeeHybrid variable is compatible with the Customer and Employee types, but is not a valid instance of either. The difference here will show up anywhere excess property checks apply, such as with a direct assignment to an explicitly annotated variable:

```
let hybridCustomer: Customer = {
  name: 'Rod',
  customerSaverNumber: 479823498,
  // Error: Object literal may only specify known properties,
  // and 'employeeDiscountCode' does not exist in type 'Customer'
  employeeDiscountCode: 094839
}

let hybridEmployee: Employee = {
  name: 'Tod',
  // Error: Object literal may only specify known properties,
  // and 'customerSaverNumber' does not exist in type 'Employee'
  customerSaverNumber: 479823498,
  employeeDiscountCode: 094839
}
```

> Other examples:

```
type Customer = {
 name: string;
 customerSaverNumber: number;
};

type Employee = {
 name: string;
 employeeDiscountCode: number;
};

type CheckoutUser = Customer | Employee;

type Hybrid = {
 name: string;
 customerSaverNumber: number;
 employeeDiscountCode: number;
};

const a: Customer = { name: "mia", customerSaverNumber: 1 }; // OK

const b: CheckoutUser = { name: "mia", customerSaverNumber: 1 }; // OK

const c: Hybrid = { name: "mia", customerSaverNumber: 1 }; // error, c is missing employee discount code

const d: Employee = { name: "pete", employeeDiscountCode: 202 }; // OK

const e: CheckoutUser = { name: "pete", employeeDiscountCode: 202 }; // OK

const f: Hybrid = { name: "pete", employeeDiscountCode: 202 }; // error, d is missing customerSaverNumber

const k: Hybrid = {
 name: "david",
 customerSaverNumber: 1,
 employeeDiscountCode: 202,
}; // OK


const g: Customer = {
 name: "dave",
 customerSaverNumber: 1,
 employeeDiscountCode: 202,
}; // error

```

> This error is because we explicitly specify what time g should be type Customer, this is an example when excess properties checks kick in. Typescript does not allow us to have additional property of employeeDiscountCode

```
const h: Employee = {
 name: "david",
 customerSaverNumber: 1,
 employeeDiscountCode: 202,
}; // error
```

> This error is because we explicitly specify what time h should be type Employee, this is an example when excess properties checks kick in. Typescript does not allow us to have additional property of customerSaverNumber

> If we passed above to a function which expects a of a type Customer as an argument, it would work though. This is because excess properties check do not apply and Typescript's default structural typing is in place:

```
const printMe = (a: Customer) => {
 console.log(a.name);
};

const i = {
 name: "jake",
 customerSaverNumber: 2,
 employeeDiscountCode: 202,
};

printMe(i); // this is ok - because excess properties check does not apply and Typescript's default structural typing is in place
```

> If we however, passed value of i directly to the call of the function instead of as a constant, typescript will have a problem with it:

```
const printMe = (a: Customer) => {
 console.log(a.name);
};


printMe({
 name: "alan",
 customerSaverNumber: 3,
 employeeDiscountCode: 202,
}); // error - excess properties check kicks in and Typescript's default structural typing is overriden by more strict nominal typing
```

**Unions of Object Types and Excess Property Checks**

> Excess property checks prevent you from assigning an object literal to an explicitly annotated variable if the literal includes properties not in the annotated type.

> However, there is a loophole in the compiler when it comes to assigning object literals to unions of object types. If the additional property exists in any of the subtypes of the union, the assignment is allowed:

```
type Customer = {
  name: string,
  customerSaverNumber: number
}

type Employee = {
  name: string,
  employeeDiscountCode: number
}

type CheckoutUser = Customer | Employee

let customerEmployeeHybrid: CheckoutUser = {
  name: 'Rod',
  customerSaverNumber: 479823498, // no error
  employeeDiscountCode: 094839 // no error
}
```

> Because the compiler raises no error in this case, you might think that unions of object types do merge the properties of the underlying types together, contrary to what you saw on the previous slide. But what is actually going on here is more subtle.

> Excess property checks work by checking whether each property in the value exists in the type. Does customerSaverNumber exist in the CheckoutUser type? There is no definite answer here: it does exist in Customer, but it doesn't exist in Employee. But excess property checks have to give a definite answer, and since a "no" would rule out perfectly legitimate assignments of Customer values, it has to say "yes".

> The case is the same with employeeDiscountCode: it does exist in Employee, but it doesn't exist in Customer.

> The end result in this case is a legitimate assignment to a CheckoutUser variable that would not be a legitimate assignment to either a Customer variable or an Employee variable. Ideally the assignment of this hybrid object wouldn't be allowed, but the compiler cannot rule it out without also ruling out perfectly acceptable assignments of (non-hybrid) Customer and Employee values as well.

**Discriminating Properties**

> To get around the potentially problematic situation described in the previous slide, you can give the underlying types used in a union of object types a discriminating property: a property with the same key, but an incompatible type. For example, you could give the Customer and Employee object types each a role property with a different literal type:

```
type Customer = {
  role: 'Customer',
  name: string,
  customerSaverNumber: number
}

type Employee = {
  role: 'Employee',
  name: string,
  employeeDiscountCode: number
}

type CheckoutUser = Customer | Employee
```

> With discriminating properties like these, it becomes impossible to create a hybrid object that is compatible with both types, and so the problematic situation from the previous slide will never arise. Any valid assignment to a CheckoutUser variable will have to have a role property, and the value of that property will determine which other properties are allowed.

```
let customerWithEmployeeDiscountCode: CheckoutUser = {
  role: 'Customer',
  name: 'Rod',
  customerSaverNumber: 479823498,
  // Error: Object literal may only specify known properties,
  // and 'employeeDiscountCode' does not exist in type 'Customer'
  employeeDiscountCode: 094839
}

let employeeWithCustomerSaverNumber: CheckoutUser = {
  role: 'Employee',
  name: 'Tod',
  // Error: Object literal may only specify known properties,
  // and 'customerSaverNumber' does not exist in type 'Employee'
  customerSaverNumber: 479823498,
  employeeDiscountCode: 094839
}
```

**Tagged Union Types**

> A union of object types in which each object contains a discriminating property is known variously as a tagged union, a discriminated union, or a sum type. Tagged unions are a useful data type common in functional programming languages, which TypeScript is able to bring to JavaScript.

> It is common to use the name 'tag' for the discriminating property (at least when no other more meaningful name suggests itself from the nature of the data). But you can use any name you want.

> In the example from previous slide, the discriminating property was included in the relevant subtypes themselves, but in many cases your code will be more maintainable if you include it in the higher-level union type instead. That way the subtypes can change independently of each other:

```
type Customer = {
  name: string,
  customerSaverNumber: number
}

type Employee = {
  name: string,
  employeeDiscountCode: number
}

type CheckoutUser = { tag: 'Customer', value: Customer }
                  | { tag: 'Employee', value: Employee }
```

> With the discriminating property in the union type, you can also easily add further options that don't have any additional data associated with them:

```
type CheckoutUser = { tag: 'Anonymous' }
                  | { tag: 'Manager' }
                  | { tag: 'Customer', value: Customer }
                  | { tag: 'Employee', value: Employee }
```

> There is nothing intrinsically special or different about tagged unions like these: they behave in all respects like any other union of object types. But because of the discriminating property, you can use them with switch statements to cleanly handle each subtype separately. The compiler will use type narrowing in each case block to determine which properties are available, and - as long as you haven't disabled strict null checks - will typically also be able to warn you if you forget to cover any of the cases.

```
const validCustomerSaverNumbers: number[] = [ /** ... */ ]

const validEmployeeDiscountCodes: number[] = [ /** ... */ ]

function discountApplies (checkoutUser: CheckoutUser): boolean {
  switch (checkoutUser.tag) {
    case 'Anonymous':
      return false
    case 'Manager':
      return true
    case 'Customer':
      return validCustomerSaverNumbers.includes(checkoutUser.value.customerSaverNumber)
    case 'Employee':
      return validEmployeeDiscountCodes.includes(checkoutUser.value.employeeDiscountCode)
  }
}
```

> Note that in the 'Customer' and 'Employee' cases you need to access other properties on the checkoutUser.value object, rather than on checkoutUser directly.

## Literal types

![](https://i.imgur.com/niHJjzd.jpg "Photo by Suzy Hazelwood from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Suzy Hazelwood from Pexels_</p>

> Sometimes we might want to restrict value not only to string, number or boolean, but maybe we want to be even stricter. We can limit to only a specific value. For example for constants TS infers that the literal type is for example: 4.6

```
const myNum=4.6
```

> If my parameter can only have 2 values (for example output can only be either: "calculation result: " or "concatenation result: "), we can use union types together with literal types:

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

> you create them on top of your file with word `type` and provide name of your alias or custom type. Please note that `type` is again only available in Typescript.

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

> When we hover over the add function, we will see following:

```
const add: (n1: number, n2: number) => number
```

> Typescript inferred that return value will be number. But we can assign return type explicitly:

```
const add2 = (n1: number, n2: number): number => {
    return n1 + n2
}
```

> Imagine following function:

```
const add = (n1: number, n2: number) => {
    return n1.toString() + n2.toString()
}
```

> When we hover over the add function, we will see that return is a string:

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

> If you then hover over `printResult`, you will see that Typescript infers that it returns `void`:

```
printResult: (n1: number) => void
```

> We could actually specify it explicitly (but this is not recommended):

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

> We can also add types of parameters which we also need to enter:

```
let newFunction: (a: number, b: number) => number;
```

**Function types and callbacks**

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

**More on function types**

> Function signatures in TypeScript are simply annotated versions of JavaScript function signatures.

```
// annotated function declaration
function add (a: number, b: number): number {
  return a + b
}

// annotated function expression
const multiply = function (c: number, d: number): number {
  return c * d
}

// annotated arrow function expression
const subtract = (e: number, f: number): number => {
  return e - f
}
```

> If you don't explicitly annotate the parameter or return types, the TypeScript compiler will infer them for you.

> While the compiler is generally good at inferring return types, unannotated parameters will usually have an inferred type of any (you will see the exceptions later on). Assuming you have the default `noImplicitAny` flag enabled, this will raise an error, so as a general rule `parameter types must always be annotated`.

> Functions that do not include an explicit return value have an inferred return type of void, which you can also specify explicitly.

```
function logger (): void {
console.log('Hey Skillers!')
}

function loggerWithReturn (): void {
console.log('Have a great day!')
return
}
```

> JavaScript's default return value (for functions that don't specify one) is undefined, hence undefined is the only value assignable to a variable of type void. There are some slight differences between the types void and undefined, however.

> If your function explicitly returns undefined, its inferred return type will be undefined rather than void.

> And although a function whose annotated return type is void can explicitly return undefined, a function whose annotated return type is undefined must do so:

```
// OK
function logger (): void {
console.log('Hey Skillers!')
return undefined
}

// Error: A function whose declared type is neither 'void' nor 'any' must return a value.
function logger (): undefined {
console.log('Hey Skillers!')
}
```

> You will see another difference between void and undefined later on. For now, just note that you should always use void as the return type for functions that do not return an explicit value (and not use it for anything else).

**Function Parameters**

> Functions in JavaScript are all technically `variadic` functions: they are able to accept a variable number of arguments. This is why you can get unintended consequences related to undefined or NaN instead of run-time errors when you pass in the wrong number of arguments:

```
function doNothing (number) {
return number
}

doNothing(1, 2, 3, 4, 5) // 1
doNothing() // undefined

function add (a, b, c) {
return a + b + c
}

add() // NaN
add(1) // NaN
add(1, 2, 3, 4, 5) // 6
```

> TypeScript protects you from this buggy behaviour by throwing a compilation error any time you pass in the wrong number of arguments. When you really do want flexibility in the number of arguments you can pass to a function, there are two controlled ways in which TypeScript allows this.

**Optional Parameters**

> The parameter list in a function signature can end with any number of optional parameters, marked as optional with the ? operator. You do not need to supply an argument corresponding to an optional parameter when you call the function, and the compiler will guard against run-time errors by making the type of this parameter a union with undefined.

```
function add (a: number, b: number, c?: number) {
return c === undefined
? a + b
: a + b + c
}

add(1) // Error: Expected 2 arguments, but got 1
add(1, 2) // 3
add(1, 2, 3) // 6
```

> As with JavaScript, you can also make an argument optional by providing a default value after the type annotation:

```
function multiply (a: number, b: number = 10) {
return a \* b
}

multiply(12, 10) // 120
multiply(12) // 120
```

> In this case, the parameter's type will not be a union with undefined, since the default value will be used whenever the argument is not specified.

**Rest Parameters**

> In the case of an unknown number of arguments you can use a rest parameter, just as you would in JavaScript. Since rest parameters are `arrays`, they must be annotated as an array type.

```
function add (...numbers: number[]) {
return numbers.reduce((a, b) => a + b, 0)
}

add(1, 2, 3, 4, 5) // 15
add() // 0
```

> Similarly but when we know first two parameters, and rest of the parameters are of an unknown length:

```
function add (x: number, y: number, ...numbers: number[]) {
  return x+y+numbers.reduce((a, b) => a + b, 0)
  }
add(1, 2, 3, 4, 5) // 15
add(1,2) // 0
```

**Function Type Expressions**

> You can provide types for your functions inline, by annotating the parameters and the return value directly in the function signature, as you have seen. But you can also specify the type of a function separately from its implementation using a `function type expression`.

> The syntax for `function type expressions` mirrors the syntax for arrow functions, but you can use them to annotate both styles of function expression:

```
type NumberToString = (value: number, leadingZeros: number) => string

const numberToString: NumberToString = (value, leadingZeros) => {
return value.toString().padLeft(leadingZeros)
}

// -OR-

const numberToString: NumberToString = function (value, leadingZeros) {
return value.toString().padLeft(leadingZeros)
}

```

> The `NumberToString` type specifies a function that takes two number arguments and returns a string. The numberToString variable is assigned a function that matches this type signature.

> Note that, if you provide a function type annotation, you do not need to provide explicit type annotations for the parameters or the return value in the function expression itself, as these will be inferred to match those in the function type.

> Also note that there is no way to explicitly annotate a function declaration with a function type expression. You need to write a function expression, assign that to a variable, and annotate the variable with the function type.

> Function type expressions are mainly useful in two cases.

> The first case is when you want to provide a type annotation for a function parameter passed to a higher-order function:

```
type Action = 'Submit' | 'Cancel'

type Handler = (input: string) => void

const submitCallbacks: Handler[] = []

const cancelCallbacks: Handler[] = []

const addListener = (action: Action, handler: Handler) => {
switch (action) {
case 'Submit':
submitCallbacks.push(handler)
break
case 'Cancel':
cancelCallbacks.push(handler)
break
 }
}
```

> When passing a function expression as an argument, you do not need to explicitly annotate its parameters or return type. As with function expressions assigned to annotated function variables, these types will be inferred based on the type of the parameter:

```
addListener('Submit', (input) => {
inputs.push(input)
console.log('thank you for you input')
})
```

> The second case in which function type expressions are useful is when you want to specify the type signature of a method on an object type:

```
type SetOfNumbers = {
values: number[],
add: (value: number) => void,
delete: (value: number) => void,
contains: (value: number) => boolean,
entries: () => number[]
}
```

**Compatibility of Function Types (Structural Typing)**

> TypeScript implements a structural typing system, which means that the type of the value you assign to a variable doesn't have to be identical to the type of the variable, it only has to be compatible with it.

> With object types, for example, object type B is compatible with object type A if it contains at least the same properties as object type A. It can contain additional properties as well (at least where excess property checks don't apply).

> Something similar is true of functions: you can assign a function of type B to a function variable of type A, as long as type B is compatible with type A.

> For function type B to be compatible with function type A, three things have to hold:

- 1. The return type of function type B must be compatible with the return type of function type A.

```
let returnsStringB = (): string => 'boo!'
let returnsStringOrNumberA = (): string | number => Math.random() < 0.5 ? 2 : 'boo!'

returnsStringOrNumberA = returnsStringB // OK: B can be assigned to A because B is compatible with A
returnsStringB = returnsStringOrNumberA // ERROR: A is not compatible with B, B cant handle numbers
```

> The first assignment is fine, because string is compatible with string | number. But the second assignment is not allowed, because string | number is not compatible with string.

- 2.  The types of the parameters in function type A must be compatible with the types of the parameters in function type B. (Note this is the opposite way round from the first condition.)

```
let takesStringB = (x: string): void => {}
let takesStringOrNumberA = (x: string | number): void => {}

takesStringB = takesStringOrNumberA // OK
takesStringOrNumberA = takesStringB // ERROR
```

> The first assignment is fine, because takesStringOrNumber can be called with a string (as the type of takesString expects). The second assignment is not allowed, because takesString can't be called with a number (but the type of takesStringOrNumber says that it can be).

> Another way to think about this is: in the place of takeStringB we expect something that can handle strings. If we provide it with a function that can handle string and numbers, we are fine. In the second line, in the place of takesStringOrNumberA we expect a function that can handle strings and numbers. But if we pass there a function which can only with with strings, then this is not OK.

- 3. Function type B must have no more parameters than function type A (unless those additional parameters are optional or rest parameters), but it can have fewer.

```
let takesTwoArguments = (x: number, y: number) => x + y

takesTwoArguments = (x: number) => x + 10 // OK
takesTwoArguments = (x: number, y: number, z: number) => x + y + z // ERROR
takesTwoArguments = (x: number, y: number, z?: number) => x + y // OK
```

> The first assignment is fine: the compiler will insist on a second argument when you call this function, but the function body will ignore it and there will be no run-time error. The second assignment, however, raises an error, because the compiler would only allow you to call this function with two arguments, and the required third argument would be undefined. For the same reason, the third assignment will not raise an error: since the third parameter is optional, the function body will not cause a run-time error when its value is undefined.

> Don't worry if you don't understand all of these rules at once, this is the kind of thing that becomes clearer over time, with practice. For now, the important thing to know is that each of these constraints exists to make sure that type errors will not slip through when handling functions and function assignments.

**Function Type Compatibility with void**

> In general, for one function to be compatible with another function, the return type of the first function must be compatible with that of the second function. As we saw above, this is to prevent type errors from sneaking past the compiler:

```
type ReturnsNumber = (x: number) => number

const returnsStringOrNumber: ReturnsNumber = (x: number): string | number => {
return x < 10 ? x + 2 : 'x is too large'
}

// ERROR: Type '(x: number) => string | number' is not assignable to type 'ReturnsNumber'.
// Type 'string | number' is not assignable to type 'number'.
// Type 'string' is not assignable to type 'number'.
```

> If this assignment was allowed, then returnsStringOrNumber(20) would have the string value 'x is too large' (because of the function itself), but the type number (because of the ReturnsNumber type annotation). To prevent this kind of type error, assignments like these are not allowed.

> There is one exception to this general rule, however. A function that returns any value (not just undefined) is compatible with a void function.

> This exception exists to allow common patterns like these:

```
const source = [4, 8, 16]
const destination = []

source.forEach(n => destination.push(n))
```

> The array method, forEach, requires a void function as its argument, but here we are passing it a function that returns a number (the push method returns the new length of the array).

> Strictly speaking this shouldn't be allowable, because the only value compatible with void is undefined. And because of this exception, type errors can get past the compiler:

```
type ReturnsVoid = () => void

const returnsString: ReturnsVoid = () => 'not undefined!!'

const result = returnsString() // result has type 'void', but its value is a 'string'
```

> Type errors like these can never give rise to any run-time errors, however. They simply mean that you have a value that is not undefined that the compiler will not let you use as such (because it is assigned to a variable with the type void).

> Note that this exception only applies to void functions, not to functions that have a return type of undefined. This is another key difference between void and undefined as return types.

**Never Return type**

> The never type represents values that can never occur at run-time. It is not possible to assign anything to a variable of type never. In other words, the set described by this type is the empty set.

> Perhaps surprisingly, the never type has some practical applications. One such application is as the return type of a function that will never return, either because it always throws an error, or because it runs forever.

```
function tick (): never {
let counter: number = 0
while (true) counter += 1
}

function fail (): never {
throw new Error('something went wrong')
}
```

> TypeScript uses control flow analysis to determine whether a function will never return, and in principle can give functions an inferred return type of never in these cases.

> The inferred return type for functions that never return, however, is only never for function expressions. For function declarations, the inferred type is void.

```
// the inferred type of failDeclaration is '() => void'
function failDeclaration () {
throw new Error('something went wrong')
}

// the inferred type of failExpression is '() => never'
const failExpression = function () {
throw new Error('something went wrong')
}

// the inferred type of failExpressionArrow is also '() => never'
const failExpressionArrow = () => {
throw new Error('something went wrong')
}
```

> Ideally, the return type for function declarations that never return would also be never. But when the never type was introduced, this was found to be too big a breaking change for a lot of existing code, so for practical reasons the more accurate inference was only applied to function expressions.

## Unknown type

![](https://i.imgur.com/GPUfFFD.jpg "Photo by Kaique Rocha from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Kaique Rocha from Pexels_</p>

> Unknown is used if we do not know yet, if it is number or a string. We can store any numbers in there without getting errors:

```
let userInput: unknown;
userInput = "mia"
console.log(userInput)
userInput = 5
console.log(userInput)
userInput = true
console.log(userInput)
```

> This looks similar to `any` type. But it IS different.

> Type `unknown` type cannot be then assigned to other variable which is for example of a type string. Typescript will throw an error.

```
let userInput: unknown;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```

> Whereas with `any` it will not throw an error:

```
let userInput: any;
let userName: string;
userInput = 5
userInput = "mia"
userName=userInput
```

> If the type of a variable is unknown in order to use it to assign it to a string, we need to check the type:

```
if (typeof userInput === "string") {
userName = userInput
}
```

> `Unknown` is a better choice to any ,when we are not sure of which type the input will be (like when user enters something), because if enables type checks and forces us to check our types in the code manually. If we use any, all the type checks are disabled - typescript gives up.

## Never type

![](https://i.imgur.com/GrnyFyS.jpg "Photo by Elina Krima from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Elina Krima from Pexels_</p>

> Functions which throw error cancel the script after the word `throw`, so that there is no possibility it will ever return anything.

```
const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```

> So the type of such function is not `void` (because `void` returns `undefined`). Type of such function is `never`.

```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
generateError("Upsy", 500)
```

> We can also console log this and see there is no console log:

```
const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code }
}
const something = generateError("Upsy", 500)
console.log(something)
```

> Also another function which would `never` return anything is an infite loop function:

```
const generateError = (message: string, code: number): never => {
    while (true){}
}
const something = generateError("Upsy", 500)
console.log(something)
```

## Watchmode

![](https://i.imgur.com/6tOCEK8.jpg "Photo by Jordan Benton from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Jordan Benton from Pexels_</p>

> So far after each change of our file we needed to manually run tsc `app.ts`.

> We can enter the watchmode and make sure that compilation watches for any change of the file and if it changes then it re-compiles automatically.

> How to enter watchmode:

```
tsc app.ts --watch
```

> Or alternatively:

```
tsc app.ts -w
```

> You can then exit it with:

```
CTRL + C
```

> How about I have more files than one. Let's add another file called `analytics.ts` and this file will contain following command:

```
console.log("Sending...")
```

> In order to use this file in our project, we need to add it to the script tag of out `index.html`:

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

> Now imagine we want to compile automatically every time any of these two files changes.

> For that we will need to do only once:

```
tsc --init
```

> It will initiate the whole folder as a typescript project. It will also create `tsconfig.json` file.

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

> `tsconfig.json` file is a critical file which tells Typescript how to compile this whole project!

> It is possible to exclude certain files from compilation. In order to do that you need to add exclude command at the end of the `tsconfig.json` file. Make sure you add the command betwee two curly brackets and separate them by comma:

```
    /* Advanced Options */
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "exclude": [
    "analytics.ts"
  ]
}
```

> You will need to re-run the compilation with `tsc` command. Notice that file `analytics.js` is not created.

> We can use it with regular expressions to check for any file ending with `.dev.ts`

```
},
  "exclude": [
    "*.dev.ts"
  ]
}
```

> We exclude a file ending with `.dev.ts` in ANY folder

```
},
  "exclude": [
    "**/*.dev.ts"
  ]
}
```

> Typically what we DO WANT to exclude are files in `node_modules` folder (which holds all dependencies):

```
},
  "exclude": [
    "node_modules"
  ]
}
```

> We can exlude any folder from compilation and no files within this folder will be compiled:

```
},
  "exclude": [
    "folder_name_to_exclude"
  ]
}
```

> By default this folder will be excluded by Typescript (so we do not necessarily need to do it, but we can)

> On the other hand we can explicitely say which files to INCLUDE in our compilation. Anything else will be ignored:

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

> Target tells for which target Javascript version we want to compile our code and which runs in set of browsers. And you dedefine which browsers support the compiled code by setting the target.

```
 "compilerOptions": {
    /* Basic Options */
    // "incremental": true,
    "target": "es5",
```

> Default target is `es5`. And I can see it, because in my `.ts` files I use `const` and `let`, which if I open the `.js` file I will see `var` everywhere. Because in `es5` we do not have `let` and `const`!! `es5` makes sure that code will run in older browsers, but maybe I want to use `es6` and then I have other build tool which will transpile the Javascript code which can be then read by older browsers. Or maybe we want to ship code that ONLY works in modern browsers.

> We can delete the es5 and press `CTRL+SPACE` it will give you all the possible options. You can set target to es6 which is equivalent to es2015. Or use even more recent version like: es2020

### Libraries

![](https://i.imgur.com/zZbnUAa.jpg "Photo by Skitterphoto from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Skitterphoto from Pexels_</p>

> Allows to specify which default objects and features Typescript knows (for example working with the DOM). If "lib" is empty, defaults are assumed based on our target. As our target is es5 or es6 than it assumes default libraries like working with DOM API, etc.

> Add a button to the index.html file:

```
<body>
    <button>Click Me!</button>
</body>
```

> And then let us add event listener to the button, so that we console log a message when button is clicked. Add this to the .ts file:

```
const button = document.querySelector("button")!;
button.addEventListener("click", () => {
    console.log("Button Clicked!")
})
```

> We needed to add ! after querySelector (to tell to Typescript that this button WILL exist).

> Typescript does not complain for example about if the (HTML) document even exists, or if there is property like querySelector or addEventListener, etc. It does not complain becaise lib is commented out, and our target is es5 or es6. But in theory our application maybe is not for browsers, maybe it is a node.js application. Leaving lib empty is recommended.

> If we uncomment lib and leave the array empty, then we override defaults and the libraries are empty, which means now we get all sorts of array, that typescript does not reckognize document, or even console.log, toString, Array<>, etc.

> If we uncomment lib, then we should add custom libraries to our tsconfig.json file which would overwrite defaults. If you hit CTRL+SPACE you get auto-completion and see list of options. For our Javascript project we would need:

```
     "lib": [
       "DOM",
       "ES6",
       "DOM.Iterable",
       "ScriptHost"
     ],
```

> But above is equivalent if we leave it empty becasue then defaults are assumed based on our es6 target.

```
"lib": [],
```

### allowJS and checkJS

> This option allows Javascript files to be compiled. AllowJS will compile .js files. CheckJS will still check syntax of .js files, but it will not compile them. But it does not make sense if you have both .ts and .js files becaue then it will leave to double-compilation. This could be however used in projects where we dont have Typescript at all, but we still want to check .js files.

### JSX

> This is relevant only for React projects. It specifies what JSX code is generated.

### sourceMap

![](https://i.imgur.com/fNmTHCH.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

> Source Map helps with debugging and development. You can see .js files from your project in the browser -> developer tools (or CTRL+SHIFT+i)->Sources

> However, we only see the js files, not our ts files. Source map if set to true, will create new files in the project folder: `app.js.map` which in browser will be translated as app.ts file. Which can be practical especially if we use some easy nice syntax in ts which would then be very complicated in js.

```
"sourceMap": true,
```

> In the sources we will see our code and also we will be able to put cursor in a specific line of the code and stop then execution of the code there. Which is good for debugging (like adding `debugger` in the code). But this is only done in browser and we are not polluting our code in reality.

### outDir and rootDir

> These help us in bigger projects to organize the folder structure. Usually we will not want to have all files laying around in the project root folder. A typical project will want to have a `src` and `dist` subfolders. `dist` usually holds all output files (like the javascript files) and `src` might hold all typescript files.

> By default Typescript will compile the Typescript files into Javascript files and put them right next to Typescript files.

> With `outDir` we can tell Typescript where output (Javascript) files will be stored, for example in `dist` folder:

```
"outDir": "./dist",
```

> While our .ts files might reside in `src` folder.

> Please note that then you also need to adpat `index.html` file to point to the .js files in dist folder:

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

> The difference however is that `rootDir` will also make sure that `outDir` will replicate folder structure of the `rootDir`

> Often we set both `outDir` and `rootDir`

### removeComments

> Any comments in the `.ts` file will be ignored in the `.js` file:

```
"removeComments": true,
```

### noEmit

> `noEmit` setting will make sure no `.js` files are produced (for example if I only want to check my files)

```
"noEmitOnError": true,
```

> There is another one `noEmitOnError` which makes sure no `.js` file is produced if there was a compilation error. It is enought that in one file there is an error and no `js` files will be generated.

```
"noEmitOnError": true,
```

### Strict

> This enables all strict type-checking options

> We can set strict to true, which will be equivalent to enabling all the rest of strict options to true:

```
"strict": true,
```

> is the same as:

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

> `strictNullChecks` is checking if the objects we try to access actually exist. So for our button, we needed to add `!`after the querySelector, because otherwise Typescript would complain that it is not sure if that selector exists. It is because of this option. If it is true, it throws such errors to notify if some element might be null / might not exist.

```
"strictNullChecks": true,
```

### noUnused...

> `noUnusedLocals` will ensure we dont have unused variables in the file. FOllowing code with throw an error, because user1 is defined but never used:

```
const adding = (a1: number, a2: number) => {
  const user1 = 'mia'
  return a1+a2;
};
```

> However. this one checks block scoped variables. The global variables are allowed not being used in a file because maybe they are used in another file. SO this code will not throw an error for user2, it will only throw error for user1:

```
const user2 = "addania";

const adding = (a1: number, a2: number) => {
  const user1 = "mia";
  return a1 + a2;
};
```

> `noUnusedParameters` will ensure that all parameters of the function are used in the body of the function. Following code will throw an error cause a2 is not used. Error will read: `a2 is declared but its value is never read`.

```
const adding = (a1: number, a2: number) => {
  return a1;
};
```

### noImplicitReturns

> This is also an important setting. It makes sure that our functions cover all branches and return something under all circumstances.

> Following function only return something when addition is more then a zero. But it does not cover cases when it it zero and less. So not all paths are covered and we will be warned with the message: `No all code pathes return a value`.

```
const adding = (a1: number, a2: number) => {
  if (a1 + a2 > 0) {
    return a1 + a2;
  }
};
```

> We need to add final return, even if it does not return anything to fix this error:

```
const adding = (a1: number, a2: number) => {
  if (a1 + a2 > 0) {
    return a1 + a2;
  }
  return;
};
```

## Syntax:

![](https://i.imgur.com/equqbFL.jpg "Photo by Miguel Constantin Montes from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Miguel Constantin Montes from Pexels_</p>

> <code>!</code> means I am sure my element with certain ID will always be there in the `.html` file because I checked that id:

```
const input1 = document.getElementById("num1")!;
```

> A cleaner way how to work aroudn this error is to have a run-time check if the button exists with and if statement:

```
const button = document.getQuerySelector("button")
if (button) {
  button.addEventListener("click", () => {
    console.log("clicked"
  )})
}
```

> <code>as HTMLInputElement</code> means TYPECASTING which says what kind of element it will be, in following case it will be an input element:

```
const input1 = document.getElementById("num1")! as HTMLInputElement;
```

## Typescript Next Generation Features

> Typescript does not only allow creating types and compiles the code. It also allows using some next generation Javascript (introduced with ES6) and new features and makes it easier to write your code - modern syntax. It does not stop there, if you use modern javascript syntax and want to compile the code to older version like `"target": "es5"` in the tsconfig.json, then it will compile your shiny modern code to the older javascript with workarounds so that it can be run on older browsers.

### let and const

> Modern Javascript features allow to define `const` which will not change and `let` which can change.

> We cannot re-assign new value to const, while we can do it for let. If we try to re-assign a constant, we get a typescript error. In the browser we would also get an runtime error:

```
const user = "mia"
user = "addania"
```

> We can still use `var` as before, which allows to re-assign values. We should not use `var` not anymore.

> `let` and `const` have one important difference to var regarding the scope in which they are available.

> `var` has a global and function scope. Function scope means that var is only available within the function itself, but outside of the function all variables are global - available in our file.

> But these two scopes are not the only scopes. There are other scopes like in if statements.

```
const user2 = "addania";
if (user2 === "addania") {
  var b = 'i am be'
}
console.log("b", b)
```

> This would work with var in Javascript - like in a browser. Because var is not in the function, it will have global scope. Typescript will compail about it, warning us though, because it is not good code to write.

> This would not work with let and const. This would throw an error:

```
const user2 = "addania";
if (user2 === "addania") {
  let b = 'i am be'
  let c = 'i am ci'
}
console.log(b, c)
```

> let and const introduced new scope - block scope which is part of if statements, for loops, functions or even any snippet within curly braces - we can randomly add curly braces to the code and create a block scope:

```
{
  const onlyAvailableHere = "I'm VIP"
  let user
}
```

### Arrow functions

> Instead using function keyword:

```
function add(a: number, b: number) {
  return a+b
}
```

> We can use arrow functions:

```
const add = (a: number, b: number) => {
  return a+b
}
```

> Still possible like this:

```
const add = function(a: number, b: number){
  return a+b
}
```

> Benefits of arrow functions:

- shorter syntax
- we can ommit `return` keyword: `const add = (a: number, b: number) => a+b` (called implicit return)
- we can omit parameter braces if we only have one parameter: `const double = a => a*2`

> Please note, if we have no parameters, we need to use empty parenthesis `() =>`

### Default function parameters

> We can have a function with 2 parameters, but we can set a parameter to have a default value, if this value is not provided when the function is called. It is done using `=` sign:

```
const adding = (a1: number, a2: number = 0) => a1 + a2;
console.log("addng with default: ", adding(5));
```

> This only works if the parameter with the default value is the **last one**. This code below would not work / compile:

```
const adding = (a1: number = 1, a2: number) => a1 + a2;
console.log("addng with default: ", adding(5));
```

> If all arguments would have default value, then it would work:

```
const adding = (a1: number = 1, a2: number = 5) => a1 + a2;
console.log("addng with default: ", adding());
```

> Rule is, first declare parameters which are obligatory and only then parameters which are option and all need to have a default value set.

### SPREAD OPERATOR

> Spread operator is really useful to pull out elements of an array.

```
const hobbies = ["yoga", "cross-fit"];
const activeHobbies = ['hiking', ...hobbies]
```

> ...hobbies will not add whole hobbies array and add it to the activeHobbies array. Result will not be: ['hiking', ["yoga", "cross-fit"]]

> The result will be: ["hiking2, "yoga", "cross-fit"]

> Spread operator will pull out individual values from the array.

> Another example:

```
activeHobbies.push(...hobbies)
```

> Spread operator works also for objects. If we have `person` object and we declare a new constant copiedPerson and simply assign person to it like this:

```
const person = {
  name: 'adda',
}
const copiedPerson = person
```

> Then we are only referencing this object. We do not create a new object with new memory address. We only create a new pointer which will point to the same memory address where person lives. This is important concept, because it can cause mutating existing objects which in React will NOT cause re-render.

> Spread operator will help to create a new object with new memory address and it will pull out all the key-value pairs from `person` and idd them to the completely brand new shiny object `copiedPerson`

```
const person = {
  name: 'adda',
}
const copiedPerson = {...person}
```

> Same goes for arrays. To create a new array from the old one:

```
const hobbies = ["yoga", "cross-fit"];
const activeHobbies = [...hobbies]
```

> To create a new array of hobbies and want to add something more to it:

```
const hobbies = ["yoga", "cross-fit"];
const activeHobbies = [ ...hobbies, 'hiking',]
```

> we can also change the order in case hiking should be first:

```
const hobbies = ["yoga", "cross-fit"];
const activeHobbies = ['hiking', ...hobbies]
```

### Rest operator

> Imagine you want to create a function which will add unlimited amount of numbers. We do not know if it will be 2 or 10 or 1000. Rest parameter will help to create an array from the incoming parameters:

```
const addUnlimited = (...numbers: Array<number>) => {
  let total = 0;
  numbers.forEach((num) => {
    total = total + num;
  });
  return total;
};
console.log("unlimited", addUnlimited(10, 20, 30, 40));
console.log("unlimited", addUnlimited(10, 20));
console.log("unlimited", addUnlimited());
```

> Same example using reduce:

```
const addUnlimited2 = (...numbers: Array<number>) => {
  return numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
};
console.log("unlimited2", addUnlimited(10, 20, 30, 40));
console.log("unlimited2", addUnlimited(10, 20));
console.log("unlimited2", addUnlimited());
```

> If our function should accept exactly 5 numbers, then we can limit it by a typing is as a tupple instead of array of numbers.

```
const addUnlimited2 = (...numbers: [number, number, number, number, number]) => {
  return numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0);
};
```

### Array and Object descrtucturing

> If we have an array and we want to extract its values into separate constants we can use array destructuring:

```
const hobbies = ["yoga", "cross-fit"];
const [ hobby1, hobby2 ] = hobbies
```

> Destructure means you really pull emelents out of the array.

> We can even use rest parameters and store the rest of the values to a dedicated constant for example `other`. All remaining elements in the other will be an **array** of strings:

```
const hobbies = ["yoga", "cross-fit", "hiking", "surfing", "diving"];
const [ hobby1, hobby2, ...other ] = hobbies
```

> Same works for objects. Here we take the person object and pull out all the key-value paris and assign first three to dedicated constants and the rest to the otherInfo const:

```
const human = {
  firstName: "mia",
  id: "1",
  gender: "female",
  age: 18,
  nationality: undefined,
};
const { firstName, id, gender, ...otherInfo } = human;
```

> Please note that the constant names need to reflect the key names in the original object. Order does not matter, but the names do!

> If we wanted to overwrite those names, we put a colon there `:`

```
const human = {
  firstName: "mia",
  id: "1",
  gender: "female",
  age: 18,
  nationality: undefined,
};
const { firstName: randomName, id, gender, ...otherInfo } = human;
```

## Best practises tips:

![](https://i.imgur.com/VDxi6vE.jpg "Photo by Porapak Apichodilok from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Porapak Apichodilok from Pexels_</p>

> **Do not ignore**

Do not use <code>@ts-ignore</code>. It turns off the compiler completely from the next line and prevents from spotting type errors

> **Do not use React.FunctionComponent**
> Eee:

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

> **Do not use wide types like object or any**

Always try to find concrete types

![](https://i.imgur.com/ob6G3qI.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

**Intersection types**

![](https://i.imgur.com/KlTaZzV.png "Photo by Deva Darshan from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Deva Darshan from Pexels_</p>

> Intersection types allow us to combine other types

> Imagine we have a following types:

```
type Admin = {
  name: string;
  privileges: Array<string>
}

type Employee = {
  name: string;
  startDate: Date;
}
```

> What if I want to combine these two objects to a new type `ElevatedEmployee` which should contain all of above? Of course we could create a new type and define it manually:

```
type ElevatedEmployee = {
  name: string;
  startDate: Data;
  priviledges: Array<string>
}
```

> But since we already have a type for Admin and for Employee, we can combine them and create a new type based on them. This will also allow us to have one source of truth. IN order to define an intersection type, weuse `ampersand` symbol.

```
type ElevatedEmployee = Admin & Employee;
const david: ElevatedEmployee = {
  name: "Dave",
  privileges: [],
  startDate: new Date(),
}
```

> We could also achieve this with interfaces:

```
interface Admin {
  name: string;
  privileges: Array<string>;
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const david: ElevatedEmployee = {
  name: "Dave",
  privileges: [],
  startDate: new Date(),
};
```

> Intersection can be used for any types, not only objects:

```
type Combinable = string | number
type Calculatable = number | boolean
type Universal = Combinable & Calculatable
```

> As a result Universal type will be of a type number, because number is the only `intersection` between (string or number) and (number or boolean).

> Why is that? Simply because of the way intersections are implemented. Intersections of union types will result in whatever is common for both union types. Intersection of object will result in combination of all its objects.

**Type guards**

![](https://i.imgur.com/NYjRWPJ.png "Photo by Mike from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Mike from Pexels_</p>

> Type guards help us with union types. Because we need to know which exact type we are getting at run time.

**a) typeof type guard**

> Imagine a function which can get Combinable parameters - strings or numbers. In order to process those numbers correctly, we need to have a logic which distinguished between strings and numbers. When those are strings or at least one of them is a string, we concatenate them. If both are numbers then we add them up:

```
type Combinable = string | number;

const addUp = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

console.log("strings: ", addUp("m", "n"));
console.log("numbers: ", addUp(1, 2));
console.log("string & number: ", addUp("m", 1));
```

> `if (typeof a === "string" || typeof b === "string") {...}` is called a type guard. It allows us to use the flexibility of the union type gives us, bubt still ensures that our code runs correctly at run time.

**b) typeof type guard**
