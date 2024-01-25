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

> But since we already have a type for Admin and for Employee, we can combine them and create a new type based on them. This will also allow us to have one source of truth. In order to define an intersection type, weuse `ampersand` symbol.

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

> Why is that? Simply because of the way intersections are implemented. Intersections of union types will result in whatever is `common` for both union types. Intersection of object will result in `combination of all its objects' values`.

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

> `if (typeof a === "string" || typeof b === "string") {...}` is called a type guard. It allows us to use the flexibility of the union type gives us, but it still ensures that our code runs correctly at run time. If we did not use this type guard and passed a string and a number - we would get an error because you cannot add number to a string.

**b) in type guard**

> Imagine we have our Admin and Employee types and we also create a type of an UnknownEmployee which either one of them:

```
type Admin = {
  name: string;
  privileges: Array<string>
}

type Employee = {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Admin | Employee

```

> Now image we want to create a printEmp function which will console log various information about the emplyoee. But TS will complain if we want to access employee.privileges, because it may not exist on UnknownEmployee:

```
const printEmp = (employee: UnknownEmployee) => {
  console.log("Privileges: " + employee.priviledges)

}
```

> How to do this? We can use `in` from Javascript and check for the object property.

```
const printEmp = (employee: UnknownEmployee) => {
  if ('privileges' in employee) {
  console.log("Privileges: " + employee.priviledges)
  }
}
printEmp({name: "Mia", privileges: ["flash"]})
```

**b) instanceOf type guard**

> Imagine we have two classes Car and a Truck and also a union type Vehicle which can be either one of them:

```
class Car {
  drive() {
    console.log("Driving ...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck ...")
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount)
  }
}

type Vehicle = Car | Truck

const v1= new Car()
const v2= new Turck()
```

> We want to have a function which will receive a vehicle of type Vehicle. vehicle.drive() will be ok cause both Vehicles have drive function. But we will have an issue to use: vehicle.loadCargo(100) because only trucks can do that. We will need to find a way how to type guard this.

```
const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive()
  vehicle.loadCargo(100) // TS ERROR
}
```

> We can use `in` type guard as before:

```
const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive()
  if ('loadCargo' in vehicle){
    vehicle.loadCargo(100) // works!!
  }
}

useVehicle(v1)
useVehicle(v2)
```

> But we can use more fancy `instanceOf` type guard

```
const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive()
  if (vehicle instanceOf Truck){
    vehicle.loadCargo(100) // works!!
  }
}

useVehicle(v1)
useVehicle(v2)
```

> instanceOf is a normal operator built into the vanilla Javascript. It executes at runtime. And we compare it to a class Truck! Which is then compiled to constructor function at runtime and this is what JS understands. We would not be able ot use it with inteface though! Cause interface is a TS feature.

**Discriminated unions**

> They help as type guards. It is a pattern which you can use when working with union types which makes implementing type guards easier. It is available when working with object types.

> Imagine we have Bird, Horse and Animal interfaces and a function moveAnimal:

```
interface Bird {
  flyingSpeed: number
}
interface Horse {
  runningSpeed: number
}
type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
  console.log("Flying speed: " + animal.flyingSpeed) // TS ERROR
}
```

> We can use of with `'flyingSpeed' in animal` or we use a discriminate union.

> Discriminate union will look in a way, that both our interfaces will have a common property, for example animalType with different values. And each value "bird" or "horse" will then determin what other properties te interface has: fyingSpee for bird and runningSpeed for horse:

```
interface Bird {
  animalType: "bird"
  flyingSpeed: number
}
interface Horse {
  animalType: "horse"
  runningSpeed: number
}
type Animal = Bird | Horse
```

> Then our function can use animal.type as a type guard:
> const moveAnimal = (animal: Animal) => {
> if(animal.type === "bird") {

     console.log("Flying speed: " + animal.flyingSpeed) // works !!!

}
}

```

> Or even better it can use a switch:
const moveAnimal = (animal: Animal) => {
  switch(animal.type){
    case "bird":
      console.log("Flying speed: " + animal.flyingSpeed) // works !!!
      break;
    case "horse":
      console.log("Running speed: " + animal.runningSpeed) // works !!!
      break;
  }
}
```

**Type casting**

> Helps us tell TS that a specific value is of a certqin type when TS is not able to detect it on its own but I KNOW BETTER 😎.

> Imagine we have an input element in the HTML:

```
<input type="text" id="user-input">
```

> We then want to access this element in our Javascript and change its value.

```
const userInputElement = document.getElementById("user-input");
userInputElement.value="Hi" // TS Error
```

> TS will complain, because it will inherently type userInputElement as `HTMLElement | null` and not as HTMLInputElement. HTMLElement is a generic type of any HTML element and hence does not support special properties, like value for an input element.

> What we want to tell TS here is that the elemt we are selecting is an `HTMLInputElement` and that it is not null.

> We can solve null with exclamation mark. Exclamation mark tells TS that whatever in front of it will never yield null.

```
const userInputElement = document.getElementById("user-input")!;
userInputElement.value="Hi" // TS Error
```

> And we can tell TS that it is `HTMLInputElement` with type casting. There are two ways to do type casting:

> Type casting with `as` keyword.

```
const userInputElement = <HTMLInputElement>document.getElementById("user-input")! as HTMLInputElement;
userInputElement.value="Hi" // works
```

> (!!DO NOT USE IN REACT) Type casting with `<>` in front of the element we want to type cast. For this to work we need to have tsconfig file including the "dom" lib (library).

```
const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
userInputElement.value="Hi" // works
```

> tsconfig file needs to look like this:

```
"lib": [
  "dom",
  "es6",
  ...
]
```

> Beware this will not work in react where angle brackets denote components.

**Index properties**

> This is TS feature which let's us define flexible object with variable properties.

> Imagine you need to create an object type but you dont know in advance what the properties will it store. And further I want to use this object on any form I have on my page: email input, username input, etc. There will be different inputs with different identifiers on my page. My type needs to be able to embrace all of them.

> For this I can use index type with the square brackets. Inside square brackets I use any name I decide, for example `key` or `prop`, then I define its type. Objects can have strings, numbers or symbols as a property type.

```
interface ErrorContainer {
  [key: string]: string
}
or
interface ErrorContainer {
  [prop: string]: string
}
```

> With this Im saying I dont know exactly the property name, I dont know the property count, I just know they will be strings.

> We can add our own properties to such an object, but all will need to have a string value.

```
interface ErrorContainer {
  id: string,
  [prop: string]: string
}
```

> We cannot add our own properties which would have a number value, because it is in clash with `[prop: string]: string`

```
interface ErrorContainer {
  id: number, // TS ERROR
  [prop: string]: string
}
```

> Then we can create objects for example like those. All are valid:

```
const ob1 = {} // valid
const ob2 = { email: "adb"} // valid
const ob3 = { email: "adb", name: "me"} // valid
```

> This one would not be valid:

```
const ob2 = { email: 1} // invalid
```

**Function overloads**

> Allows us to define different type signatures for the same function, when one function has multiple ways to call this function with different signatures. Good example is our addUp function which can take two strings, string and a number or two numbers

```
type Combinable = string | number;

const addUp = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};
```

> This function takes two parameters of a type Combinable and it also returns a value which is of a type Combinable. But we know further, that if we pass in two numbers, it will always returns a number, else it returns a string. But TS types the return value as a Combinable, which will be number or a string and the TS does not know when it is which one. So even in this case the result might be a string, even when we pass two numbers:

```
const result = addUp(1,2);
```

> Same applies to when I pass two strings, return type will be Combinable, which can be a number. Consequence is that on result, I cant call string or math functions: result.split()

> One way to handle this is type casting with as:

```
const result = addUp(1,2) as number;
const result2 = addUp("mia", " cool") as string;
```

> What can come handy is a `function overload`, which is written with the word `function` on top of your actual function declaration. Please note this only works with the `function` declaration syntax, not with `arrow` functions.

```
type Combinable = string | number;

function addUp(a: number, b: number): number;
function addUp(a: string, b: string): string;
function addUp(a: number, b: string): string;
function addUp(a: string, b: number): string;
function addUp(a: unknown, b: unknown) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

const result = addUp(1,2);
result.split(" "); // NO ERROR
```

> This will explicitely say to TS, that if I call this function with 2 numbers, I will return a number and if I call it with at least one string, I will always get a string.

**Optional chaining**

> Imagine you get your data from backend and you are not sure if in an object certain property is defined. What if job can be undefined.

```
const user = {
  name: "mia",
  lastName: "cool",
//  job: { title: "CEO", company: "Hyped"}
}

console.log(user.job.title) // will not  work
```

> But what if we might not get the job from the backend, we could do the check first if the job exists and then print out the title:

```
console.log(user.job && user.job.title) // will work
```

> Alternatively you can use optional chaining to achieve this:

```
console.log(user?.job?.title) // will work
```

> `user?.job` means if user exists, access job
> `user?.job?.title` means if user exists and job exists, access title

> If the thing in front of the question mark does not exist, it does not try to access the thing after the dot.

> This allows us to safely nested properties.

**Nullish Coalescing**

> It is a nice feature in TS which helps us deal with nullish data. Imagine we have a piece of data which can be null, undefined or a valid value, especially when we fetch something from the backend. Then if I want to store this data, if it is null, I want it to fall back to some default value. We can use or operator || to do this:

```
const user = null; // or if it is undefined
const storedUser = user || "DEFAULT"; // storegUser is DEFAULT
```

> But problem will be when we get an empty string, it will resolve as falsy value and also default to "DEFAULT"

```
const user = ''; // or even 0
const storedUser = user || "DEFAULT"; // storegUser is DEFAULT
```

> What if an empty string is a valid input and I want to keep it. For this TS has an operator - double questionmark operator: `??` and it is called nullish coalescing. It means if user is null or undefined (and only these two values, not an empty string, not a 0), then use "DEFAULT" user

```
const user = '';
const storedUser = user ?? "DEFAULT"; // storegUser is DEFAULT
```

**Generics**

> Generics only exist in TS.

**Built-in generic types in TS**

> Array is one of the built-in generic types in TS. Imagine we have a const which is an array of strings

```
const names= ["mia", "david"] // name: string[]
```

> Let's think about it as two different types: an array type and a string type. Array type is connected to the string type, because array is just a list of values and we need to specify which values those are. We can use this notation: generic notation:

```
const names: Array<string> = ["mia", "david"];
```

> This is a generic notation with the angle brackets. Array itself is a generic type, which then can hold some values. In the angle brackets we define which type the values are, in our case: strings. This then helps me to access each element and do operations on them: for example string operations: `name[0].split(' ')`

> Promise is another built-in generic type in TS. Promises also exist in vanilla Javascript. Promise can be created using `new Promise()` syntax and it takes in one argument which is in itself a function and this function gets two arguments (resolve and reject). These two arguments will be passed in automatically by Javascript and the browser. In a promise we can set a timer. The timer had two arguments: callback function and the timing. In the calleback function we can resolve the promise and say "This is done".

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done")
  }, 2000)
});
```

> This creates a promise object and stores in the constant called promise. This const has a special type called `Promise<unknow>`. Because this promise will eventually resolve to something. TS will assume it will resolve to unknown cause it does not fully understand from the code, that we will resolve it to string. We can be more specific and we can explicitely type it using our generic type using `Promise<string>`:

```
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done")
  }, 2000)
});

promise.then( (data) => {
  data.split(" ");
})
```

> If TS knows that promise will resolve to string, then is we do promise.then and retrieve data, we can do string operations on data, such a split. We get better type safety with generics.

> `Partial` is another built-in type in TS. It turns all the object properties to be optional. Imagine we have CourseGoal object and a function to create one:

```
interface CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
}

const create = (title: string, description: string, date: Date): CoarseGoal => {
  let goal: Partial<CoarseGoal> = {};
  goal.title= title;
  goal.description= description;
  goal.completeUntil= date;
  return goal as CoarseGoal
}
```

> We need to type the goal as `Partial<CoarseGoal>` because we initialize it as an empty object and empty object does not have title, description, etc properties. So initially we use a generic `Partial` and pass in the ``, making this type having all properties optional. At the end when we add all properties, we want to type cast it and return it as a `CoarseGoal` type

> `Readonly` is another built-in TS type which makes sure that an array for example is read-only and that when we try to modify the array by adding/removing the items, TS will yell at us to prevent us from doing so:

```
const names: Readonly<string[]> = [ "Mia", "Dave"];
names.push("Name"); // TS will complain
names.pop();
```

> We can also use `Readonly` on objects.

**Own generic types**

> We can build generic classes or functions.

**Generic functions**

> We will start with a function that merges two objects and store its output to const called mergedObject.

```
const merge = (objectA: object, objectB: object) => {
  return Object.assign(objectA, objectB)
}

const mergedObject = merge({name: "Mia"}, {nickname: "Ada"})
console.log(mergedObject.name) // TS error
```

> The problem here is that I cant access name or nickname on the mergedObject. TS only knows we get 2 objects and it infers it will return an object but it does not know which properties it will have (name and nickname). We could do type casting and hard-code this: `const mergedObject = merge({name: "Mia"}, {nickname: "Ada"}) as { name: string, nickname: string }`. But this is cumbersome. Generics can help us. We can turn this to a generic function.

```
const merge = <T, U>(objectA: T, objectB: U) => {
  return Object.assign(objectA, objectB)
}

const mergedObject = merge({name: "Mia"}, {nickname: "Ada"})
console.log(mergedObject.name) // no error
```

> How to create a generic function? We add angle brackets in front of the parameters declaration and use T and U for the types. T and U are just a convention, it can be full name, like Type or User, etc. We will stick to the convention T and U.

> What does this `<T, U>(objectA: T, objectB: U)` mean? It means that the function will accept two things of a type T and U and then TS infers that the output type will be: `T & U`. So we dont need to explicitely type the output, but we could: `<T, U>(objectA: T, objectB: U): T & U`. THis then helps typescript type the mergedObject correctly and then allow us to access name and nickname.

> And where is this T and U coming from? It is coming from the place where I call the function:

```
 merge({name: "Mia"}, {nickname: "Ada"})
```

> My `T` is `{name: "Mia"}`. My `U` is `{nickname: "Ada"}`. And TS infers those types.

> The magic of this approach is that the T and U are not set in stone when I declare the function. They are dynamic and depends on the place where I call the function and what types I pass in. This below will still work.

```
const mergedObject = merge({work: "No!"}, {chillax: "Yes!"})
```

> If I hard-coded the types at the function declaration, it will limit what I can pass to the function:

```
const merge = (objectA: {name: string}, objectB: {nickname: string}) => {
  return Object.assign(objectA, objectB)
}

const mergedObject = merge({work: "No!"}, {chillax: "Yes!"}) // ERROR
```

> So with generics, T and U are filled with different types every time I call the function. So T and U are kind of placeholders/variables. Once T is `{name: string}`, then next time it is `{work: string}`, etc.

> For each function call we can ge very specific and typeT and U explicitely:

```
const mergedObject = merge<{work: string}, {chillax: string}>({work: "No!"}, {chillax: "Yes!"})
```

> Little bug with our implementation is that at the moment T and U can be anything: string, number, object, array. But what we actually need is just any object. We can do so with so called: generic type constraints. We will use `extends` keywords to do so.

```
const merge = <T extends object, U extends object>(objectA: T, objectB: U) => {
  return Object.assign(objectA, objectB)
}
```

> For those constraints, it can be own types (aliases), unions, etc. Anything. We can also constrain only one of the generic types, or none.

> Another example of a generic function will be one which can extract a key from an object:

```
const extract = (obj: object, key: string) => {
  return obj[key]
}
```

> In above example, TS will have a problem with `obj[key]` because it does not know if the object we are getting will have the given key.

> We want to type the first parameter as and object and the second parameter and the key of that object. We can achieve this with generic function:

```
const extract = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key]
}
```

> This means that the first parameter is and object and second on is the key of that object. Yay! TS will then ensure that it allows us to pass correct types and prevents us from passing incorrect ones.

```
extract({name: "Mia"}, "name") // WORKS
extract({name: "Mia"}, "age") // TS ERROR, cool!
```

**Generic classes**

> Imagine we have a DataStorage class which is able to add and remove an item and also display all items:

```
class DataStorage {
  private data = [];

  addItem(item) {
    this.data.push(item);
  }

  removeItem(item) {
    this.data.splice(this.data.indexOf(item),1);
  }

  getItems(){
    return [...this.data];
  }
}
```

> We will get TS errors on data, because we dont specify what type of data we have. We dont care about the data itself, we only want it to be uniform: for example, just strings or just numbers or just objects. We could turn this to a generic class by adding angle brackets after the class name.

```
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item),1);
  }

  getItems(){
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("car"); // is OK
textStorage.addItem(10); // TS error
textStorage.removeItem("car"); // is OK
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();
```

> Why we want to do this? We want our class to be flexible and store for example strings only, or numbers only, or objects only. As long as we are consistent, we dont care about the type.

> Generics types give us flexibilty and at the same time full type safety.

**Decorators**

> Are useful for meta-programming. They are useful not for end users visiting my page but for writing code that is easier to use by other developers. They guarantee that one of our classes gets used correctly, or a method in a class.

> In order to use decorators, we need to go to tsconfig and uncomment: `"experimentalDecorators": true`

> Decorators are all about classes. We can add one to entire class. Let's create a small `Person` class.

```
class Person {
  name = "Mia"

  constructor() {
    console.log("Creating a class -> object")
  }
}

const pers = new Person()
console.log(pers)
```

> In that example, we have no decorators involved. Decorator is a `function` to apply to somthing (class) in a certain way. We add one at the top of the file and by convention they typically are capitalized. (Probably need to be declared with keyword function instead of using arrow function). We can apply that function as a decorator. It will only hold console.log for now to see when the decorator function runs.

```
function Logger() {
  console.log("Logging...");

}
```

> We will not be running it directly, rather, we will use it as a decorator to the Person class. In order to do so, we will use `@Logger` in front of the class. `@` is a special symbol TS recognizes and it should point at a function. Please note, it does not run the function `Logger()` it only refers that function `Logger`:

```
function Logger() {
  console.log("Logging...");

}

@Logger
class Person {
  name = "Mia"

  constructor() {
    console.log("Creating a class -> object")
  }
}

const pers = new Person()
console.log(pers)
```

> This will not yet work, because a decorator function needs to get some arguments. For example for a class it gets 1 argument: a constructor function of a class.

```
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);

}

@Logger
class Person {
  name = "Mia"

  constructor() {
    console.log("Creating a class -> object")
  }
}

const pers = new Person()
console.log(pers)
```

> What will happen is that Logging will be logged BEFORE the Creating class. Decorators run when defining a class, not when instantiating/creating a class. Even if we remove the code that instantiates the class `const pers = new Person()`, we would still run the Decorator and console log `Logging`. Decorator runs when the JS finds your class definition.

> There are other ways to create decorators: via `decorator factories`. Decorator factory **returns** a decorator function. Decorator factory allows us to configure additional parameters, such as which class it it attached to, etc. Here is an example:

```
function Logger(logString: string) {
  return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
  }

}

@Logger("Logger for Person")
class Person {
  name = "Mia"

  constructor() {
    console.log("Creating a class -> object")
  }
}

const pers = new Person()
console.log(pers)
```

> Please note that now we created a factory called Logger and it needs to be executed, hence we need to add it as a decorator in this way: `@Logger("Logger for Person")` with parenthesis.

> Also notice that the factory returns the decorator function which will get one argument: constructor function of the class.

> Another interesting thing is that at the place where we attach the decorator to the class, we can pass any number of arguments, such as logString: `"Logger for Person"`

> Another point is that a return function of the factory is **anonymous** function: `function(constructor: Function){}`

> Being able to pass in our own arguments to the decorator functions via decorator factory gives us more power over what we can do inside of the decorator.

> Anothe example, imagine we want to create a decorator factory which will then render a template (some html code) to a particular place in DOM based on a hookId:

```
function WithTemplate(template: string, hookId: string){
  return function(constructor: Function){
    const hookElement = document.getElementById(hookId)
    if (hookElement){
      hookElement.innerHTML = template
    }
  }
}

@WithTemplate("<h1>I found ya, my Person object! :)</h1>", "app")
class Person{
...
}
```

> We need to have a corresponding code in the HTML, for example a div with "app" id where we will render our template:

```
<div id="app"></div>
```

> With the code above, we practically search for a hookId and add a template as innerHTML to it.

> Please note that TS will complain, that we specified constructor, but we are not using it. It is obligatory to specify it, and to tell TS that we will not use it, we can replace it with an underscore:

```
function WithTemplate(template: string, hookId: string){
  return function(_: Function){
   ...
  }
}
```

> This demonstrate magical power of decorators, we can expose the decorator functions in our library to allow programmers who use our library can import this decorator function and add it to a class and render some content all of a sudden. With decorators we provide tools to developers - hence meta programming.

> We can do more, we can expose a name of the class for example, because we expose the constructor function.

```
function WithTemplate(template: string, hookId: string){
  return function(constructor: any){

    const person = new constructor()

    const hookElement = document.getElementById(hookId)
    if (hookElement){
      hookElement.innerHTML = template
      hookElement.querySelector("h1")!.textContent = person.name
    }
  }
}

@WithTemplate("<h1>I found ya, my Person object! :)</h1>", "app")
class Person{
  name = "Mia"

  constructor() {
    console.log("Creating a class -> object")
  }
}
```

> Above code will create a person via the constructor function and it will have a name property. Then we query the h1 tag, which we know we will always have, because we pass it to decorator function (hence the trick with !). And then we set the h1 textContent to the person.name.

> We can add more than one decorators to a class.

```
function WithTemplate(template: string, hookId: string){
 ...
}

function Logger(logString: string) {
 ...
}

@Logger("Logger for Person")
@WithTemplate("<h1>I found ya, my Person object! :)</h1>", "app")
class Person{
 ...
}
```

> If we have multiple decorators, they execute in following way:

- decorator factories run top down - topmost first and then subsequent ones
- decorator functions (the return statement from the decorator factories) run bottom up - the closest to the class will be exectuted first.

```
function Logger(logString: string) {
  console.log("I RUN FIRST")
  return function(constructor: any){
    console.log("I RUN FOURTH")
  }
}

function WithTemplate(template: string, hookId: string){
  console.log("I RUN SECOND")
  return function(constructor: any){
    console.log("I RUN THIRD")
  }
}

@Logger("Logger for Person")
@WithTemplate("<h1>I found ya, my Person object! :)</h1>", "app")
class Person{
 ...
}
```

> Decorator factories, are just functions and they execute in the order we specify them. But ctual decorator functions then happen bottom up.

> Decorators dont always need to be added to the class itself, we can use it within the class for properties. Let's imagine we have a Product class, which stores products and their prices:

```
class Product{
  title: string;
  private _price: number;

  setPrice(value: number){
    if (value > 0){
      this._price = value;
    } else {
      throw new Error("Invalid price - must be positive")
    }

  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number){
    this._price * (1 + tax)
  }
}
```

> Let's now create a decorator - Log. Which arguments a decorator function gets, depends on where we add the decorator. If we add it to the class itself as above, we will get constructor as a decorator. We can add a decorator to a property of a class, such as title. Then we will get 2 arguments in our decorator function: target and propety name. Target is the target of the property which can be either prototype for instance properties or for static properties it would be constructor function instead. Hence we type the target as any, because we dont know what structure the object will have.

```
function Log(target: any, propertyName: string | Symbol){
  console.log("Property decorator!");
  console.log("Target", target);
  console.log("Property Name", propertyName);
}

class Product{
  @Log
  title: string;
  private _price: number;

  set price(value: number){
    if (value > 0){
      this._price = value;
    } else {
      throw new Error("Invalid price - must be positive")
    }

  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number){
    this._price * (1 + tax)
  }
}
```

> Decorator function for properties also run when the class definition is registered by Javascript. We see the console logs even though we never instanciated the class.

> Decorators can also be added to accessors (setters and getters). What is an accessor? They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code. So this is ur set price or get price. Other stuff like `this.title` or `this.price` are called: data properties.

> Decorator function for accessors will receive 3 arguments: target, as above, name of the accessor and property descriptor of a type PropertyDecriptor provided by TS.

```
function Log2(target: any, name: string, descriptor: PropertyDecriptor){
  console.log("Accessor decorator!");
  console.log("Target", target);
  console.log("Accessor name", name);
  console.log("Descriptor", descriptor);
}

class Product{
  title: string;
  private _price: number;

  @Log2
  set price(value: number){
    if (value > 0){
      this._price = value;
    } else {
      throw new Error("Invalid price - must be positive")
    }

  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number){
    this._price * (1 + tax)
  }
}
```

> We can also add decorators to method, like to getPriceWithTax:

```
function Log3(target: any, name: string | Symbol, descriptor: PropertyDecriptor){
  console.log("Method decorator!");
  console.log("Target", target);
  console.log("Method name", name);
  console.log("Descriptor", descriptor);
}

class Product{
  title: string;
  private _price: number;

  set price(value: number){
    if (value > 0){
      this._price = value;
    } else {
      throw new Error("Invalid price - must be positive")
    }

  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(tax: number){
    this._price * (1 + tax)
  }
}
```

> Last decorator we can add is a parameter decorator. Please note, that name is not the name of the parameter, but name is the method name to which this parameter belongs to. Last argument is the position of the argument (first, second, etc):

```
function Log4(target: any, name: string | Symbol, position: number){
  console.log("Method decorator!");
  console.log("Target", target);
  console.log("Method name", name);
  console.log("Position", position);
}

class Product{
  title: string;
  private _price: number;

  set price(value: number){
    if (value > 0){
      this._price = value;
    } else {
      throw new Error("Invalid price - must be positive")
    }

  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  }


  getPriceWithTax(@Log4 tax: number){
    this._price * (1 + tax)
  }
}
```

> What is really cool is that some decorators, like class decorators and method decorators are capable of returning something. We are talking about the decorator function and not the decorator factory. For example for the class decorator, we can return a new constructor function.

> In our case, we will return a class which extends the original constructor function and add some properties on top of it: `return class extends constructor(){}`. Inside I have to call super() in order to call the originalConstructor function of the class.

```
function WithTemplate(template: string, hookId: string){
  console.log("I RUN SECOND")
  return function(originalConstructor: any){
    console.log("I RUN THIRD")
    return class extends originalConstructor(){
      constructor(){
        super();
        ... // OUR LOGIC HERE
      }

    }
  }
}

@WithTemplate("<h1>I found ya, my Person object! :)</h1>", "app")
class Person{
  name = "Mia"
  constructor() {
    console.log("Creating a class -> object")
  }
}
```

> Advantage of this approach is that OUR LOGIC will only e executed when we instantiate the class, and not when we define the class!

> Method and accessor decorators can also have return values. Decorators on properties and parameters can return something, but TS will ignore them, so they are not taken into account.

> For accessor or method decorators you can return a brand new property descriptor. For example for a accessor we could return a new get and set function.

**Interfaces**

> Interfaces represent objects! `type` can represent anything, `interface` only an object.

```

interface Adda {
name: string,
nick: string,
age: number
}

```

> It is a matter of custom. Whichever I choose I should be consistent.

**Alias**

> Is when we extract our own type:

```

type User = {
id: string,
age: number
}

```

**Promises**

> How to type a promise from an api? Use `Promise<>`

```

interface LukeSkywalker {
name: string;
height: string;
mass: string;
hair_color: string;
skin_color: string;
eye_color: string;
birth_year: string;
gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
return res.json();
});

return data;
};

```

> Another possibility is to use casting -> with word `as`. We can cast data to LukeSkywalker.

```

interface LukeSkywalker {
name: string;
height: string;
mass: string;
hair_color: string;
skin_color: string;
eye_color: string;
birth_year: string;
gender: string;
}

export const fetchLukeSkywalker = async () => {
const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
return res.json();
});

return data as LukeSkywalker;
};

```

**Sets**

> Sets are collections of values. A value in the Set may only occur once; it is unique in the Set's collection.

```

const guitarists = new Set();

```

> How to type sets?

```

const guitarists = new Set<string>();

```

**Objects with variables as keys**

> How to type objects which can have a variable as a key to avoid errors such as? No index signature with a parameter of type 'string' was found on type '{}'

> In this case the index is refering to the key of the object. Any such TS errors about index usually refer to the key of object (unless you work with arrays).

> First solution

```

const createCache = () => {
const cache = {};

const add = (id: string, value: string) => {
cache[id] = value;
};

return {
cache,
add,
};
};

```

> There are couple of ways how to type such an object:

```

const cache: {
[id: string]: string;
} = {};

```

> In above example I can use also any other key, not only id. I can use index, or any other work (k, n):

```

const cache: {
[index: string]: string;
} = {};

```

> Or:

```

const cache: {
[k: string]: string;
} = {};

```

> This [k: string] inside of a type is called index signature.

> Another approach is to use interface:

```

interface Cache {
[id: string]: string;
}

```

> Or even using Record. Record allows to add any number of keys to that object at runtime.

```

const cache: Record<string, string> = {};

```

**Typing catch errors**

> In javascript for each try block, we can only have 1 catch block

> We can throw any error:

```

throw 'What the!?'
throw 7
throw {wut: 'is this'}
throw null
throw new Promise(() => {})
throw undefined

```

> Now imagine a situation like this:

```

const tryCatchDemo = (state: "fail" | "succeed") => {
try {
if (state === "fail") {
throw new Error("Failure!");
}
} catch (e) {
return e.message;
}
};

```

> TS will yell at us that: 'e' is of type 'unknown' and we want to access message on the e.

> If we try to type "e" directly, it will yell that: Catch clause variable type annotation must be 'any' or 'unknown' if specified.

```

const tryCatchDemo = (state: "fail" | "succeed") => {
try {
if (state === "fail") {
throw new Error("Failure!");
}
} catch (e: Error) {
return e.message;
}
};

```

> One way to fix this is:

```

const tryCatchDemo = (state: "fail" | "succeed") => {
try {
if (state === "fail") {
throw new Error("Failure!");
}
} catch (e) {
if(e instanceof Error){return e.message;}
}
};

```

**Extending interface**

> A reminder: interface is a type for objects. type can be anything, but interface can only be object.

> Look at the code below, it has a duplication of id everywhere:

```

interface User {
id: string;
firstName: string;
lastName: string;
}

interface Post {
id: string;
title: string;
body: string;
}

```

> How can we avoid duplication? We can create Id Interface and extend the User and Post with Id.

```

interface Id {
id: string
}

interface User extends Id {
firstName: string;
lastName: string;
}

interface Post extends Id {
title: string;
body: string;
}

```

> Please note that extends is only available for interfaces, and not for types.

> Why is it usefull? If I change my mind and I want id to be number, I can then only change it in one place instead of multiple.

> we can use extends with more items:

```

interface Post extends Id, User {
title: string;
body: string;
}

```

**Object intersection**

> This combines objects. Imagine we have a scenario like this:

```

interface User {
id: string;
firstName: string;
lastName: string;
}

interface Post {
title: string;
body: string;
}
export const getDefaultUserAndPosts = (): unknown => {
return {
id: "1",
firstName: "Matt",
lastName: "Pocock",
posts: [
{
title: "How I eat so much cheese",
body: "It's pretty edam difficult",
},
],
};
};

```

> How do we type this return statement instead of unknown so it's both User AND { posts: Post[] }?

> We can do it like this:

```

interface User {
id: string;
firstName: string;
lastName: string;
}

interface Post {
title: string;
body: string;
}
export const getDefaultUserAndPosts = (): User & { posts: Array<Post> } => {
return {
id: "1",
firstName: "Matt",
lastName: "Pocock",
posts: [
{
title: "How I eat so much cheese",
body: "It's pretty edam difficult",
},
],
};
};

```

> This little operator & is called intersection and it allows us to combine types. (While extends allows for inheritance)

> We can intersect more things: User & { posts: Array<Post> } & { age: number }

**Pick**

> What if we have a type like this:

```

interface User {
id: string;
firstName: string;
lastName: string;
}

```

> and we want to create a new type which will contain everything except for id?
> We can use omit to do that:

```

type MyType = Omit<User, "id">

```

> We can omit multiple items:

```

type MyType = Omit<User, "id", "firstName">

```

**Pick**

> Maybe we want to only get 1 single property form already defined type.

> Image we only want property lastName from User:

```

interface User {
id: string;
firstName: string;
lastName: string;
}

```

> We can then use pick utility in TS to do so:

```

type MyType = Pick<User, "lastName">

```

**Typing Asynch functions**

> Imagine you have a situation like this:

```

interface User {
id: string;
lastName: string;
}

const createThenGetUser = async (
createUser: unknown,
getUser: unknown,
): Promise<User> => {
const userId: string = await createUser();
const user = await getUser(userId);
return user;
};

```

> You want to replace unknowns with proper type:

```

interface User {
id: string;
lastName: string;
}

const createThenGetUser = async (
createUser: () => Promise<string>,
getUser: (id: string) => Promise<User>
): Promise<User> => {
const userId: string = await createUser();
const user = await getUser(userId);
return user;
};

```

**Return type of function**

> How can we say to TS to take the type from a return statement of a function?

```

const myFunc = () => {
return 123;
};

```

> We can use ReturnType helper and typeof

```

type MyFuncReturn = ReturnType<typeof myFunc>;

```

**Arguments type of function**

> How can we say to TS to take the type from arguments of a function?

```

function sum(a: number, b: string): string {
return a + b;
}

```

> We want a type called SumParams which will be [a: number, b: string]. We will use helper Parameters for if and it will return us a tuple.

```

type SumParams = Parameters<typeof sum>;

```

> type FirstParam will be number

```

type FirstParam = SumParams[0];

```

> type SecondParam will be string

```

type SecondParam = SumParams[1];

```

> This is useful to type stuff which is not in my control, for example from 3rd party libraries

**Awaited**

> What if we have an asynch function which returns a promise, but we want to extract a type from it without the Promise.

```

type A = Promise<string>;

```

> Awaited helps us to unwrap the promise

```

type B = Awaited<A> // string

```

**Extracting keys from an object**

> Imagine we have an object like this:

```

const testingFrameworks = {
vitest: {
label: "Vitest",
},
jest: {
label: "Jest",
},
mocha: {
label: "Mocha",
},
};

```

> And we want to extract a union type of its keys: "vitest" | "jest" | "mocha"

> We will use keyof typeof for this:

```

type TestingFramework = keyof typeof testingFrameworks;

```

**Union, Discriminated union and Enum**

> What is difference between Union, Discriminated union and Enum

> A is a discriminated union, with 'type' as the discriminator. Discriminated unions have common properties which are used to differentiate between members of the union. In this case, type is the discriminator.

```

type A =
| {
type: "a";
a: string;
}
| {
type: "b";
b: string;
}
| {
type: "c";
c: string;
};

```

> B is a union, but not a discriminated union.

```

type B = "a" | "b" | "c";

```

> C is an enum.

```

enum C {
A = "a",
B = "b",
C = "c",
}

```

**Extract**

> Now how can we extract one piece of info from discriminated union? Imagine we have a disc. union of type A:

```

type A =
| {
type: "a";
a: string;
}
| {
type: "b";
b: string;
}
| {
type: "c";
c: string;
};

```

> and we want to extract such a type for "a":

```

type Extracted = Extract<A, { type: 'a' }>

```

> Extract is a type helper and super useful. Another example:

```

export type Event =
| {
type: "click";
event: MouseEvent;
}
| {
type: "focus";
event: FocusEvent;
}
| {
type: "keydown";
event: KeyboardEvent;
};

type ClickEvent = Extract<Event, { type: "click" }>;

```

> We can also grab event, or any other property:

```

type FocussEvent = Extract<Event, { event: KeyboardEvent }>

```

> It also work not only on objects but also on unions, etc

```

type Fruit = "apple" | "banana" | "orange"
type Exotic = Extract<Fruit, "banana" | "orange">

```

**_Exclude_**

> It is reverse of Extract. It is useful for discriminated unions. It specifies which property you dont want:

```

export type Event =
| {
type: "click";
event: MouseEvent;
}
| {
type: "focus";
event: FocusEvent;
}
| {
type: "keydown";
event: KeyboardEvent;
};

type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

```

**Indexed access type - Object values of keys**

> What if I have an object like this:

```

const fakeDataDefaults = {
String: "Default string",
Int: 1,
Float: 1.14,
Boolean: true,
ID: "id",
};

```

> And I want to extract the type for a specific key?

```

type StringType = typeof fakeDataDefaults["String"];
type IntType = typeof fakeDataDefaults["Int"];
type FloatType = typeof fakeDataDefaults["Float"];
type BooleanType = typeof fakeDataDefaults["Boolean"];
type IDType = typeof fakeDataDefaults["ID"];

```

> Or alternatively:

```

type FakeDataDefaults = typeof fakeDataDefaults;

type StringType = FakeDataDefaults["String"];
type IntType = FakeDataDefaults["Int"];
type FloatType = FakeDataDefaults["Float"];
type BooleanType = FakeDataDefaults["Boolean"];
type IDType = FakeDataDefaults["ID"];

```

> We can even access object inside objecz on this way:

```

const fakeData = {
String: "Default string",
Int: 1,
Float: 1.14,
Boolean: true,
ID: {
job: "driver"
},
};

type Job = typeof fakeData["ID"]["job"]

```

**Accessing prop on discriminated union**

> If I have an object like this::

```

type Event =
| {
type: "click";
event: MouseEvent;
}
| {
type: "focus";
event: FocusEvent;
}
| {
type: "keydown";
event: KeyboardEvent;
};

```

> and I want to extract a type from it of: "click" | "focus" | "keydown"?

```

type EventType = Event["type"];

```

> If you access a key on a union, you are accessing all permutations of that key.

> It would not work if one of the elements in the union would miss "type". It works well in discriminated unions using discriminators.

**As const annotation**

> Imagine we enum like this:

```

const programModeEnumMap = {
GROUP: "group",
ANNOUNCEMENT: "announcement",
ONE_ON_ONE: "1on1",
SELF_DIRECTED: "selfDirected",
PLANNED_ONE_ON_ONE: "planned1on1",
PLANNED_SELF_DIRECTED: "plannedSelfDirected",
};

```

> We want to access the type on GROUP key:

```

type GroupProgram = typeof programModeEnumMap["GROUP"]

```

> But this resolves to string and not "group". Why? Because this enum can be altered. For example lik ethis:

```

programModeEnumMap.GROUP = "party"

```

> This is mutable. So it must be typed as string.

> How can we make the programModeEnumMap to resolve to literal values instead of generic values?

```

const programModeEnumMap = {
GROUP: "group",
ANNOUNCEMENT: "announcement",
ONE_ON_ONE: "1on1",
SELF_DIRECTED: "selfDirected",
PLANNED_ONE_ON_ONE: "planned1on1",
PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

```

> As const freezes values and makes them resolve to their literal types. It also adds readonly annotation to the enum as well. This means it turns it into immutable. Its values cannot be changed

> Same is true just for arrays. They are infered as array of numbers for example.

```

const myArr = [1,2,3]
type MyArr = typeof myArr // Array<number>

```

> Why? Because I can do:

```

myArr[0]
myArr.push(123)

```

> But if I add as const to the array, I wont be able to modify the array

```

const myArr = [1, 2, 3] as const;

```

> This array will be readonly and its type will be [1, 2, 3]

> Another way how to freeze an object is Object.freeze():

```

const programModeEnumMap = Object.freeze({
GROUP: "group",
ANNOUNCEMENT: "announcement",
ONE_ON_ONE: "1on1",
SELF_DIRECTED: "selfDirected",
PLANNED_ONE_ON_ONE: "planned1on1",
PLANNED_SELF_DIRECTED: "plannedSelfDirected",
});

```

> Object.freeze only works on the first level of object -> it does not go deeper. As const goes all the way down.

**Indexed Access with Union**

> Imagine we have an object like this:

```

const programModeEnumMap = {
GROUP: "group",
ANNOUNCEMENT: "announcement",
ONE_ON_ONE: "1on1",
SELF_DIRECTED: "selfDirected",
PLANNED_ONE_ON_ONE: "planned1on1",
PLANNED_SELF_DIRECTED: "plannedSelfDirected",
}

```

> And we want to create a union of "1on1" | "selfDirected" | "planned1on1"

> One lame way to do it:

```

type Program = typeof programModeEnumMap;
export type IndividualProgram =
| Program["ONE_ON_ONE"]
| Program["SELF_DIRECTED"]
| Program["PLANNED_ONE_ON_ONE"];

```

> Better way is like this:

```

type Program = typeof programModeEnumMap;
export type IndividualProgram = Program["ONE_ON_ONE" | "SELF_DIRECTED" | "PLANNED_ONE_ON_ONE"]

```

> Notice that we can pass a union to the indexed access :)

**Accessing types of object values**

> Imagine we have an object like this:

```

const frontendToBackendEnumMap = {
singleModule: "SINGLE_MODULE",
multiModule: "MULTI_MODULE",
sharedModule: "SHARED_MODULE",
} as const;

```

> And we want to infer type from the values as a union: "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE"

> We can do it like this:

```

type BackendModuleEnum =
typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];

```

> We can make it nicer:

```

type Obj = typeof frontendToBackendEnumMap
type BackendModuleEnum = Obj[keyof Obj]

```

> We coud achieve them same if we do this:

```

type BackendModuleEnum = Obj["SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE"]

```

> But in this case the type will not be up-to-date if anything changes

**Creating union out of array**

> Imagine we have an array:

```

const fruits = ["apple", "banana", "orange"] as const;

```

> And we want to get from there a union of "apple" | "banana":

```

type AppleOrBanana = typeof fruits[0 | 1];

```

> What if we want union of all fruits? "apple" | "banana" | "orange"

> We can do it in a lame way like this:

```

type Fruit = typeof fruits[0 | 1 | 2];

```

> More elegant though is:

```

type Fruit = typeof fruits[number];

```

> The word number lets you access any member of the array, no matter how long it is

**Template literals**

> Imagine we have a function which takes in an argument called route of a type Route:

```

export const goToRoute = (route: Route) => {};

```

> We want to type Route to accept any string which starts with a slash:

```

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

```

> We can use template literals for that which are denoted by a backtick:

```

type Route = `/${string}`;

```

> Or similarly

```

type MyString = string
type Route = `/${MyString}`;

```

> Syntax is similar to Javascript template literal, except we can also pass in types

> Imagine you have these two types:

```

type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

```

> And you want to create a type of them which will be like this:

```

type Sandwich =
| "rye sandwich with cheese"
| "rye sandwich with ham"
| "rye sandwich with salami"
| "brown sandwich with cheese"
| "brown sandwich with ham"
| "brown sandwich with salami"
| "white sandwich with cheese"
| "white sandwich with ham"
| "white sandwich with salami"

```

> We can do it simply as this:

```

type Sandwich = `${BreadType} sandwich with ${Filling}`;

```

> Now imagine that we have some type Routes:

```

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

```

> We want to create a type DynamicRoutes from Routes type, but only those which contain `:`

```

type DynamicRoutes = "/users/:id" | "/posts/:id";

```

> How to do it? We can use Extract helper function which takes 2 parameters: first the type from which we are extracting and second parameter type which will narrow it down

```

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type WithDots = `${string}:${string}`;
type DynamicRoutes = Extract<Routes, WithDots>;

```

> Alternatively:

```

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

```

> We can think of template literals almost like a regEx for Typescript :)

> Template literals are powerful for string manipulations

> Now lets talk about converting a template literal into keys in an object.

> Imagine template literal type defined as this:

```

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

```

> Resulting type is:

```

userId | userName | postId | postName | commentId | commentName

```

> What if we now want to create an object where we take those as keys?

```

type ObjectOfKeys = {
userId: string;
userName: string;
postId: string;
postName: string;
commentId: string;
commentName: string;
}

```

> Answer:

```

type ObjectOfKeys = {
[key in TemplateLiteralKey]: string;
};

```

> Alternatively use Record:

```

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

```

**Record**

> Record allows us to create an object based on the type of key and type of value.

> Official documentation says: A Record<K, T> is an object type whose property keys are K and whose property values are T. That is, keyof Record<K, T> is equivalent to K, and Record<K, T>[K] is (basically) equivalent to T.

```

type Record<K extends string, T> = {
[P in K]: T;
}

```

**TS-TOOLBELT**

> TS-TOOLBELT is a small library which contains for example a Split function which allows you to split a string based on a character on a type level.

> Here is documentation: https://millsp.github.io/ts-toolbelt/modules/string_split.html

> This is what you import:

```

import { S } from "ts-toolbelt";

```

> Imagine you have this string

```

type Path = "Users/John/Documents/notes.txt";

```

> And we want to split it by slash /

> Resulting type should be an array of its elements:

```

type Result = ["Users", "John", "Documents", "notes.txt"]

```

> How to do it? Here is how:

```

import { S } from "ts-toolbelt";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

```

**UPPERCASE**

> What if we have a string literal type and we want to make it uppercase?

```

type Greeting = "Hello, world"

```

> We can use utility function called Uppercase:

```

type ShoutyGreeting = Uppercase<Greeting>

```

> It will equal to:

```

type ShoutyGreeting = "HELLO, WORLD"

```

> Another example. Imagine we have such type:

```

type Event = `log_in` | "log_out" | "sign_up";

```

> And we want ot create an object of it that will look like this:

```

type ObjectOfKeys = {
LOG_IN: string;
LOG_OUT: string;
SIGN_UP: string;
}

```

> How to do it? Here find the solutio:

```

type ObjectOfKeys = Record<Uppercase<Event>, string>;

```

> Similarly, we have Lowercase or Capitalize

**Generics - type functions / type helpers**

> How can I tell to typescript that Whatever type I pass in, I want that to be returned?

```

type ReturnWhatIPassIn<T> = T;

```

> ReturnWhatIPassIn creates a variable called T but it can have any name.

> When I pass in "miau", it will return "miau"

> If I pass in true, it will return true

```

type Miau = ReturnWhatIPassIn<"miau">
type Twelve = ReturnWhatIPassIn<12>
type False = ReturnWhatIPassIn<false>

```

> This allows us to create functions which return other types

```

type ReturnWhatIPassIn<T> = T;

```

> `ReturnWhatIPassIn` is name of function

> `<T>` is agument to the function

> `T` is what the function returns

> `type Miau = string` is a static type

> If I add `<T>` to the type, I convert it to a function: `type Miau<T> = T`

> If we remove `<T>` from `ReturnWhatIPassIn` it would no longer be a function, it would be a static value:

```

type ReturnWhatIPassIn = 12

```

> We can add as many arguments to the function as I want:

```

type ReturnWhatIPassIn<T, K, U> = T;

```

> I can give it default values

> Imagine this example where we want to have a generic which will take the value and add / to its front:

```

type AddRoutePrefix<TRoute> = `/${TRoute}`;

AddRoutePrefix<"about"> will be "/about"
AddRoutePrefix<""> will be "/"
AddRoutePrefix<"about/team"> will be "/about/team"

```

> There is a problem that this will also work with numbers and booleans and TS will not complain:

```

AddRoutePrefix<boolean>
AddRoutePrefix<number>

```

> How can we limit this only to strings?

```

type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

```

> The syntax extends is like gving a type to the Type Parameter. We can imagine it as if it was really a function:

```

const addRoutePrefix = (route: string) => {}

```

> What if our Type Helper should work with more arguments?

```

type CreateDataShape<T, U> = {
data: T;
error: U;
};

```

> Now imagine that we not always want to pass in the U and if we dont pass it, then we want it to be undefined.

```

type CreateDataShape<T, U = undefined> = {
data: T;
error: U;
};

```

> Then we can use this in 2 different ways:

```

type MyNewType = CreateDataShape<string>
type MyNewType = CreateDataShape<string, number>

```

> What if I know that I will always pass a function to my type?

```

type GetParametersAndReturnType<T extends (a: any, b: any) => any> = {
params: Parameters<T>;
returnValue: ReturnType<T>;
};

```

> Look at the type above and its usage below:

```

type MyType1 = GetParametersAndReturnType<() => string>
// { params: []; returnValue: string }

type MyType2 = GetParametersAndReturnType<(s: string) => void>
// { params: [string]; returnValue: void }

type MyType3 = GetParametersAndReturnType<(n: number, b: boolean) => number>
// { params: [number, boolean]; returnValue: number }

```

> This will work with 2 parameters, but what if we need more?

```

type GetParametersAndReturnType<T extends (...args: any) => any> = {
params: Parameters<T>;
returnValue: ReturnType<T>;
};

```

> Not there is a mind blowing type for generics where we want to make sure we can pass in anything EXCEPT for null or undefined

> We will start with a code like this:

```

export type Maybe<T> = T | null | undefined;

```

We want that all these tests pass

```

type Yes1 = Maybe<string>,
type Yes2 = Maybe<false>,
type Yes3 = Maybe<0>,
type Yes4 = Maybe<"">,

```

> But these test should fail:

```

type No1 = Maybe<null>,
type No2 = Maybe<undefined>,

```

> And we want to narrow down T to be anything except for null or undefined:

```

export type Maybe<T extends string | number | boolean> = T | null | undefined;

```

> But another mind-blowing way to do it is here:

```

export type Maybe<T extends {}> = T | null | undefined;

```

> `{}` in typescript has a very special meaning. It represents anything that is not null or undefined. It is different from truthy values, cause we can pass there false or 0

> Actually if we type something as an empty object, we can assign a string, or number to it

```

const whatever: {} = "abc"
const whatever: {} = 123
const whatever: {} = false
const whatever: {} = 0
const whatever: {} = true
const whatever: {} = {}
const whatever: {} = []

```

> Why is it? Everything in Javascript is an object - array, string with various methods, etc.

> Moreover, Typescript does structural comparisons when checking if something is comparable. If I need a type: { name: string }, it does not care that I pass { name: string, surname: string, age: number }. It only cares about the name being present and all additional properties are ignored. So if I have a type of empty object {}, I can pass any property in there.

> null and undefined are not objects. whereas false is still an object, 0 is an object

> Now how to declare a type which is a non-empty array?

> If we do this:

```

type NonEmpty<T> = Array<T>

```

> then we actually can pass empty array

> We could use tuples for that:

```

type NonEmpty<T> = [T, T, T]

```

> but then we would need to know exactly the length of that array, but if we want to be more flexible and to allow for any length, then it wont work.

> A neat trick is to us following syntax with rest parameter:

```

type NonEmpty<T> = [ T, ...T[]]

```

> Or similarly:

```

type NonEmpty<T> = [ T, ...Array<T>]

```

> This syntax means that I need to have at least one element in the array and then as many as I like, even 0

> If we want an array that needs to have at least 2 parameters:

```

type NonEmpty<T> = [ T, T, ...Array<T>]

```

**Conditional types**

> Now how can we conditionally render a type?

> Imagine if I pass "hello" to my type, I want to return "goodbye" and if I pass "goodbye", I want to return "hello"

```

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type MyType = YouSayGoodbyeAndISayHello<"hello"> // "goodbye"
type MyType = YouSayGoodbyeAndISayHello<"goodbye"> // "hello"

```

> In this context `T extends "hello"` is actually a logical check. Does T extend "hello"?

> This conditional type is mega powerful and turns typescript from just some static type checks to a its own language

> Ternary statements can be nested :)

**Infer**

> `infer` keyword is often being used in conditional types

> Imagine we want to create a type that will accept { data: "ABC" } and it will return "ABC"

> If it accepts { data: { name: "DEF"} }, it will return { name: "DEF"}

> We can do it like this:

```

type GetDataValue<T> = T extends { data: infer E } ? E : never;

type No = GetDataValue<string> // returns never cause we didnt pass object with data
type Yes1 = GetDataValue<{ data: "hello" }> // returns "hello"
type Yes2 = GetDataValue<{ data: { name: "hello" } }> // returns { name: "hello" }
type Yes3 = GetDataValue<{ data: { name: "hello"; age: 20 } }> // returns { name: "hello"; age: 20 }

```

> how does the infer keyrowd work? Whatever is passed into the data key in an object, the TS will infer its type and save it to a variable called E (can be any name). We can then use that variable later to say what the function should return in case this condition is true!

> Notice that the E will only be defined for the positive branch and not in the else case. Because in else case, E is not declared. SO we cant do this:

```

type GetDataValue<T> = T extends { data: infer E } ? E : E; // ERROR E is not declared

```

> This whole infer allows us to declare a new type variable inside of the conditional check.

> Another way to do this is exercise is:

```

type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

```

**Template literals with infer**

> Imagine we have type like this:

```

type Names = [
"Matt Pocock",
"Jimi Hendrix",
"Eric Clapton",
"John Mayer",
"BB King",
];

```

> and we want to infer another type from it which will be Pocock, Handrix, Claptop, Mayer

```

type GetSurname<T> = unknow
type New1 = GetSurname<Names[0]> // returns "Pocock"
type New2 = GetSurname<Names[1]> // returns "Hendrix"
type New3 = GetSurname<Names[2]> // returns "Clapton"
type New4 = GetSurname<Names[3]> // returns "Mayer"
type New5 = GetSurname<Names[4]> // returns "King"

```

> How ot declare the GetSurname type?

> One way is using S and spliting it:

```

import { S } from "ts-toolbelt";
type GetSurname<T extends string> = S.Split<T, " ">[1];

```

> But we can also use template literal and word infer:

```

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

```

**Mapped types**

> Imagine we have a union type:

```

type Route = "/" | "/about" | "/admin" | "/admin/users";

```

> And we want to create a type for an object where both keys and values will be the members of the union:

```

type Result = {
"/": "/";
"/about": "/about";
"/admin": "/admin";
"/admin/users": "/admin/users";
}

```

> In order to do this we can use mapped types which iterated through each member of a union, defines a variable, for example Key and then allows us to use this variable:

```

type RoutesObject = {
[Key in Route]: Key;
};

```

> Variable name is anything we want

```

type RoutesObject = {
[R in Route]: R;
};

```

> What `in` basically does is for every member of a union, extract R and add it as a key and value

> We can also use it like this:

```

type RoutesObject = {
[Key in "hi" | "there"]: Key;
};

```

> It would resolve into an object

```

{
hi: "hi",
there: "there",
}

```

> Values also dont need to be same as keys:

```

type RoutesObject = {
[Key in "hi" | "there"]: string;
};

```

> Mapped types also work with objects. Imagine we have an object type like this:

```

interface Attributes {
firstName: string;
lastName: string;
age: number;
}

```

> And we want to extract from it a type that will look like this:

```

{
firstName: () => string;
lastName: () => string;
age: () => number;
}

```

> We can do it like this:

```

type AttributeGetters = {
[K in keyof Attributes]: () => Attributes[K];
};

```

> Keyof Attributes also creates a union of all the keys in Attribute type

> We can even create a same type as Attributes using mapped type:

```

type MyNewAttribute = {
[K in keyof Attributes]: Attributes[K];
};

```

> MyNewAttribute is now equivalent type as Attribute. Why would we want to do that? If we needed a new type where all keys are optional or readonly:

```

type MyNewAttribute = {
[K in keyof Attributes]?: Attributes[K];
};

type MyNewAttribute = {
readonly [K in keyof Attributes]: Attributes[K];
};

```

> now what if we want to rename the keys of the new object type?

```

type NowThis = {
getFirstName: () => string;
getLastName: () => string;
getAge: () => number;
}

```

> We can use as property which allows us to use template literals

```

type AttributeGetters = {
[K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

```

> This `as` works as a remapper

> Now if we have an object type like this

```

interface Attributes {
greet1: [ "hi", "there" ];
greet2: [ "hello", "you" ];
}

```

> And we wanted to extract a type that would be

```

type GreetOnly = {
greet1: "hi";
greet2: "hello";
}

```

> We can do it like this

```

type NewType = {
[K in keyof Attributes]: Attributes[K][0]
}

```

> Now imagine we have a type like this:

```

interface Example {
name: string;
age: number;
id: string;
organisationId: string;
groupId: string;
}

```

> And we want to extract a type from it which has such keys, which contain `id` in it. Resulting type should look like this:

```

type Result: {
id: string;
organisationId: string;
groupId: string;
}

```

> We will need conditional type, remapping and a generic

```

type OnlyIdKeys<T> = {
[K in keyof T as `${K extends "id" | "organisationId" | "groupId"
? K
: never}`]: T[K];
};

```

> Then we use this type like this:

```

type Result = OnlyIdKeys<Example>;

```

> Another even more generic and elegant way is to use template literals to search for an anything that contains id in it (WOW)

```

type OnlyIdKeys<T> = {
[K in keyof T as K extends `${string}${"id" | "Id"}${string}`
? K
: never]: T[K];
};

```

> Now assume we have a discriminated union like this:

```

type Route =
| {
route: "/";
search: {
page: string;
perPage: string;
};
}
| { route: "/about"; search: {} }
| { route: "/admin"; search: {} }
| { route: "/admin/users"; search: {} };

```

> and we want to extract a type of it, which will look like this:

```

type Interesting = {
"/": {
page: string;
perPage: string;
};
"/about": {};
"/admin": {};
"/admin/users": {};
}

```

> How can we do it? Tip: We will need mapped type, indexed access aaaaand an Extract.

```

type RoutesObject = {
[K in Route["route"]]: Extract<Route, { route: K }>["search"];
};

```

> And a super elegant way to do it is:

```

type RoutesObject = {
[K in Route as Route["route"]]: Route["search"];
};

```

> We keep K as a Route and then we have access to the entire object including route and search. The key is then remapped to be Route["route"] and value to Route["search"]. Wow

**Object to union**

> What if we have an object like this?

```

interface Values {
email: string;
firstName: string;
lastName: string;
}

```

> And from this we want to create a union o tuples:

```

type UN = ["email", string] | ["firstName", string] | ["lastName", string]

```

> First we will create an intermediary type which looks like this:

```

type F = {
[K in keyof Values]: [K, Values[K]];
};

```

> Which will then look like this:

```

type F = {
email: ["email", string];
firstName: ["firstName", string];
lastName: ["lastName", string];
}

```

> And then the only thing we need to do it so simply extract value of object to a union type, which we did before:

```

type ImUnion = F[keyof F]

```

> So the whole magic looks like this:

```

interface Values {
email: string;
firstName: string;
lastName: string;
}

type F = {
[K in keyof Values]: [K, Values[K]];
};

type ValuesAsUnionOfTuples = F[keyof F];

```

> And to even make it nicer:

```

type ValuesAsUnionOfTuples = {
[K in keyof Values]: [K, Values[K]];
}[keyof Values];

```

> Similarly if we have such an object:

```

interface FruitMap {
apple: "red";
banana: "yellow";
orange: "orange";
}

```

> And we want a union type of it like this:

```

type MyBreakfast: "apple:red" | "banana:yellow" | "orange:orange"

```

> We can do it like this:

```

type TransformedFruit = {
[K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

```

**Array to union / Tuple to union type**

> Imagine I have an array type like this:

```

type X = [ "user", "id", "name"]

```

> What if I want a union type of it?

```

type Y = X[number] // "user" | "id" | "name"

```

**Generics in functions**

> How to type a function with generics to return what is passed in?

```

const returnWhatIPassIn = <E>(t: E) => {
return t;
};

```

> We add `<T>` in front of the parameters parentheses. And we are creating a type helper out of this function

> The function then receives T and also returns T

> It is equivalent to creating such a type:

```

type ReturnWhatIPassIn<T> = T
type One = ReturnWhatIPassIn<1> // returns 1
type Two = ReturnWhatIPassIn<2> // returns 2

```

> We could also anotate the return type explicitely. But TS infers it correctly:

```

const returnWhatIPassIn = <E>(t: E):E => {
return t;
};

```

> We can also restrict T to only accept strings, but still be inferred as what literal value what is passed in and not as a generic string

```

export const returnWhatIPassIn = <T extends string>(t: T) => t;

```

> What if we want to pass in 2 parameters?

```

const returnBothOfWhatIPassIn = <T, U>(a: T, b: U) => {
return {
a,
b,
};
};

```

> Above syntax is same as

```

type Result<A, B> = {
a: A,
b: B
}

```

> T will be infered as string and U as a number if we pass in values like this:

```

const result = returnBothOfWhatIPassIn("a", 1);

```

> If we want them to be literal, we can extend each

```

const returnBothOfWhatIPassIn = <T extends string, U extends number>(a: T, b: U) => {
return {
a,
b,
};
};

```

> This is pretty important charcteristics of generics and how we can use literal values

> Similar example. What if we have a function like this which receives array of statuses and returns them? We dont want however the return type to be array of strings, we want it to be array of individual status (their literal values).

```

const makeStatus = <TStatuses extends string[]>(
statuses: TStatuses
) => {
return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

```

> Solution:

```

const makeStatus = <TStatuses extends string>(
statuses: Array<TStatuses>
): Array<TStatuses> => {
return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

```

> Important is that we can make in braces <> whatever we want, it can be array of something or the something.

**Generics and components**

> Imagine we have a component like this

```

export class Component{
private props: unknown;

constructor(props: unknown) {
this.props = props;
}

getProps = () => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });

```

> And we want to make sure that whatever props we pass in, we will also infer the type from them

> Solution looks like this

```

export class Component<TProps> {
private props: TProps;

constructor(props: TProps) {
this.props = props;
}

getProps = () => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });

```

> Now what if we want our clone function to infer the props of the object we are passing in?

```

export class Component<TProps> {
private props: TProps;
constructor(props: TProps) {
this.props = props;
}
getProps = () => this.props;
}

const cloneComponent = (component) => {
return new Component(component.getProps());
};

```

> Solution

```

export class Component<TProps> {
private props: TProps;
constructor(props: TProps) {
this.props = props;
}
getProps = () => this.props;
}

const cloneComponent = <TProps>(component: Component<TProps>) => {
return new Component(component.getProps());
};

```

**How to create generics with Sets**

> Set is just an array with unique values.

> Imagine we have a set like this:

```

export const createSet = ()=> {
return new Set();
};
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

```

> And we want this to be infered as set of strings for the first one, set of number for seconds one and set of unknown for third one. Here is how:

```

export const createSet = <T>(): Set<T> => {
return new Set();
};
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

```

> Another way ho to do it:

```

export const createSet = <T>() => {
return new Set<T>();
};
const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

```

> We can create sets like this

```

contt mySet = new Set<number>()
mySet.add(123) // works
mySet.add("hi") // error

```

> In above problem, how to set a default type if we dont pass anything? TS would infer unknown, but what if we want it to be string?

```

export const createSet = <T = string>() => {
return new Set<T>();
};
const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

```

**Typing asynchronous functions with generics**

> How to type in a fetch function which should receive a type?

```

const fetchData = async <T>(url: string): Promise<T> => {
const data = await fetch(url).then((response) => response.json());
return data;
};

```

> Then when we call it we should prove its type:

```

async () => {
const data = await fetchData<{ name: string }>(
"https://swapi.dev/api/people/1"
);

```

> We could also do it like this:

```

const fetchData = async <T>(url: string) => {
const data = await fetch(url).then((response) => response.json());
return data as T;
};

```

> But there is a better way:

```

const fetchData = async <T>(url: string) => {
const data: T = await fetch(url).then((response) => response.json());
return data;
};

```

> Or even:

```

const fetchData = async <T>(url: string) => {
const data: T = await fetch(url).then((response): Promise<T> => response.json());
return data;
};

```

> Goal is to not let any sneaky any leave this line of code

**Function overloading**

> Based on an amazing article from Dmitri Pavlutin:
> https://dmitripavlutin.com/typescript-function-overloading/#:~:text=Function%20overloading%20in%20TypeScript%20lets,the%20function%20should%20be%20invoked

> Most of the functions accept a fixed set of arguments. But some functions can accept a variable number of arguments, arguments of different types, and could even return different types depending on how you invoke the function. To annotate such function TypeScript offers the function overloading feature. Let's see how function overloading works.

> Let's consider a function that returns a welcome message to a particular person:

```

function greet(person: string): string {
return `Hello, ${person}!`;
}

```

> The function above accepts 1 argument of type string: the name of the person. Invoking the function is pretty simple:

```

greet('World'); // 'Hello, World!'

```

> What if you'd like to make the greet() function more flexible? For example, make it additionally accept a list of persons to greet. Such a function would accept a string or an array of strings as an argument, as well as return a string or an array of strings.

> How to annotate such a function? There are 2 approaches.

> The first approach is straightforward and involves modifying the function signature directly by updating the parameter and return types.

> Here's how greet() looks after updating the parameter and return types:

```

function greet(person: string | string[]): string | string[] {
if (typeof person === 'string') {
return `Hello, ${person}!`;
} else if (Array.isArray(person)) {
return person.map(name => `Hello, ${name}!`);
}
throw new Error('Unable to greet');
}

```

> Now you can invoke greet() in 2 ways:

```

greet('World'); // 'Hello, World!'
greet(['Jane', 'Joe']); // ['Hello, Jane!', 'Hello, Joe!']

```

> Updating the function signature directly to support the multiple ways of invocation is the usual and a good approach. However, there are situations when you might want to take an alternative approach and define separately all the ways your function can be invoked. This approach is called function overloading.

> The second approach is to use the `function overloading` feature. I recommend it when the function signature is relatively complex and has multiple types involved.

> Putting the function overloading in practice requires defining the so-called overload signatures and an implementation signature.

> The overload signature defines the parameter and return types of the function, and doesn't have a body. A function can have multiple overload signatures: corresponding to the different ways you can invoke the function.

> The implementation signature, on the other side, also has the parameter types and return type, but also a body that implements the function. There can be only one implementation signature.

> Let's transform the function greet() to use the function overloading:

```

// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string[];

// Implementation signature
function greet(person: unknown): unknown {
if (typeof person === 'string') {
return `Hello, ${person}!`;
} else if (Array.isArray(person)) {
return person.map(name => `Hello, ${name}!`);
}
throw new Error('Unable to greet');
}

```

> The greet() function has 2 overload signatures and one implementation signature.

> Each overload signature describes one way the function can be invoked. In the case of greet() function, you can call it 2 ways: with a string argument, or with an array of strings argument.

> The implementation signature function greet(person: unknown): unknown { ... } contains the proper logic how the function works.

> Now, as before, you can invoke greet() with the arguments of type string or array of strings:

```

greet('World'); // 'Hello, World!'
greet(['Jane', 'Joe']); // ['Hello, Jane!', 'Hello, Joe!']

```

> You should think carefully, because function overloads are at their best when you have a different return type based on something that you pass in. If you just have the same return type, no matter what happens, it's always going to return a string, then you should probably be using a union to express these parameters instead.

**Casting**

> When we think we know better what this type is we can use `as` keyword which will say to typescript - I know what the type is so use it as I say. TYpescript will be: OK, Master.

```

sendEmail("abc" as EmailAddress)

```

> In general this is not a good idea in Typescript

**Type aliases**

> When we create our own types with some random name:

```

type RandomWord = string

```

> RandomWord is a type alias

**Branded types**

> Also known as nominal types. These types are really interesting, because they let you specify logic on the type level.

> Imagine that throughout your application you will deal with emails. But to defined them as a string is too broad. You want to make sure they follow a pattern of an email address. We will use branded types for that

> Branded types allows us to create a type to which within normal rules of Typescript no value would be possible to bed assigned to them. They are so called illegal types.

> Example of illegal type is intersection between string and number:

```

type Illegal = string & number

```

> This will result in never type because you cant have something that is both string and number. We cannotassign anything to never types.

> Branded type is created as a base type and then intersection with object, where we label the Brand as for example Email:

```

type Mail = string & { \_\_brand: "Email" }

```

> String cannot be intersected with an object but notice that this is now not typed as never! Assigning value to this type will now not be possible.

```

const a: Mail = "abc" //ERROR

```

> What we are missing still is a rule which will detect if it is a valid email address, like contains @, etc.

```

const isEmail = (email: string): email is Mail => {
return email.includes("@gmail.com")
}

```

> Notice that the output of the `email is Mail`. This is also called casting where we say to the typescript that we know better than Typescript what the return type is going to be. Such a statement now means that if the isEmail returns true, then we can safely assume that email is of a type Mail. Else it cannot be assumed it is of type Mail and it will only be a string

> We can then use our function like this:

```

type Mail = string & { \_\_brand: "Email" }

const isEmail = (email: string): email is Mail => {
return email.includes("@gmail.com")
}

const sendWelcomeEmail = (email: Mail) => {
//
}

const signUp = (email: string) => {
if (isEmail){
sendWelcomeEmail(email) // email will be correctly typed as Mail
}
}

```

> Another way to approach this topic is to use assert and then throw error if the condition for email address is not met:

```

type Mail = string & { \_\_brand: "Email" }

const asserEmail = (email: string): asserts email is Mail => {
if (!email.includes("@gmail.com")){
throw new Error(`Invalid argument: [${email}] is not a valid email`)
}
}

const sendWelcomeEmail = (email: Mail) => {
//
}

const signUp = (email: string) => {
assertEmail(email);
sendWelcomeEmail(email) // email will be correctly typed as Mail, cause we reached so far here without error
}

```

**Global scope**

> howto declare and type in global scope

```

declare global {
function myFunc(): boolean;
var myVar: number;
}

globalThis.myFunc = () => true;
globalThis.myVar = 1;

```

> noteice that in global scope we can only declare and type. We cannot write the implementation or assignment

> Only vars work in global scope. No const or let.

> Cool thing about global scope is that it support ambient merging. I can declare a global in one file and the same global in other file and the result will be a merged global from both files:

> File 1

```

declare global {
interface DispatchableEvent {
LOG_IN: {
username: string;
password: string;
};
}
}

```

> File 2

```

declare global {
interface DispatchableEvent {
LOG_OUT: {};
UPDATE_USERNAME: {
username: string;
};
}
}

```

> Result:

```

interface DispatchableEvent {
LOG_IN: {
username: string;
password: string;
};
LOG_OUT: {};
UPDATE_USERNAME: {
username: string;
};
}

```

> It's a combination of declaration merging and declaring global. Having this global interface that you can append to gives you a really nice solution for certain problems.

> With multiple files we're really solving the problem of colocation. We want a pattern that we can just copy and paste over several files in our application and make sure that we're declaring the types really close to where the implementation is. Of course, we could just declare this in a single interface and just import that to all the places that we need it. Then, of course, it's not colocated. Whereas when they're colocated together, even though you're putting it inside a global scope, it means that if you delete this entire file, then log out just disappears from the ether and it doesn't matter anymore. Weirdly, by using a global here, we're able to get a more modular approach to our types.

**Process.env**

> In Node.js, process.env is a `global variable` injected during runtime. It is a view of the state of the system environment variables.

**Type predicates**

> sometimes you want more direct control over how types change throughout your code.

> To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:

```

function isFish(pet: Fish | Bird): pet is Fish {
return (pet as Fish).swim !== undefined;
}

```

> `pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`, where parameterName must be the name of a parameter from the current function signature.

> Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.

> Please note that we can need to return the Fish in this case.

> If we have a function which does not return anything (is void) and maybe only throws error,it would not be enough to use the predicate. We will need to use `asserts` keyword

```

interface User {
id: string;
name: string;
}

interface AdminUser extends User {
role: "admin";
organisations: string[];
}

interface NormalUser extends User {
role: "normal";
}

function assertUserIsAdmin(
user: NormalUser | AdminUser
): asserts user is AdminUser {
if (user.role !== "admin") {
throw new Error("Not an admin user");
}
}

```

> please note that asserts only works with function declaration and not with arrow functions. workaround is always to use function declaration or such a workaround:

```

const assertUserIsAdmin: (
user: NormalUser | AdminUser
) => asserts user is AdminUser = (user) => {
if (user.role !== "admin") {
throw new Error("Not an admin user");
}
};

```

> as per this comment: https://github.com/microsoft/TypeScript/issues/34523#issuecomment-700491122

**CHATGPT**

> My very first chat with CHATGPT and it already solved my problem:

> Q: How do I use predicates with generics in typescript

> A: In TypeScript, you can use generics to create reusable components that work with different types. Predicates can be used to narrow down the type of a generic parameter based on some condition. Here is an example of how to use predicates with generics in TypeScript:

```

type FilterFunction<T> = (item: T) => boolean;

function filter<T>(items: T[], predicate: FilterFunction<T>): T[] {
return items.filter(predicate);
}

function isNumber(value: unknown): value is number {
return typeof value === "number";
}

const numbers = [1, 2, 3, "four"];
const filteredNumbers = filter(numbers, isNumber);

console.log(filteredNumbers); // [1, 2, 3]

```

> In this example, we define a FilterFunction type that takes a generic parameter T and returns a boolean. We then define a filter function that takes an array of type T and a FilterFunction<T> predicate as arguments. The filter function returns a new array that contains only the items that match the predicate.

> We also define an isNumber function that takes an unknown value and returns a boolean. This function is used as the predicate in the filter function to filter out non-numeric values from the numbers array.

> Note that the isNumber function returns a type predicate value is number. This tells TypeScript that if the isNumber function returns true for a value, that value is of type number. This allows TypeScript to narrow down the type of the numbers array from Array<number | string> to Array<number>.

> By using generics and predicates in TypeScript, you can write more reusable and type-safe code.

> Q: given the above explanation, how would you then turn isNode to a predicate in this piece of code?

```

interface DOMNodeExtractorConfig<T, Result> {
isNode: (node: unknown) => boolean;
transform: (node: T) => Result;
}

```

> To turn isNode into a predicate, you need to change its return type to node is T. This tells TypeScript that if isNode returns true for a value, that value is of type T. Here's how you can update the DOMNodeExtractorConfig interface with a predicate type for isNode:

```

interface DOMNodeExtractorConfig<T, Result> {
isNode: (node: unknown) => node is T;
transform: (node: T) => Result;
}

```

> Now, when you use DOMNodeExtractorConfig, TypeScript will know that isNode is a type predicate and can narrow down the type of node accordingly. For example, if T is HTMLDivElement, TypeScript will be able to determine if a value is an HTMLDivElement or not based on the return value of isNode.

> Here's an example of how you can use DOMNodeExtractorConfig with a predicate for isNode:

```

function extractNodes<T, Result>(config: DOMNodeExtractorConfig<T, Result>, nodes: unknown[]): Result[] {
return nodes.filter(config.isNode).map(config.transform);
}

const divExtractor: DOMNodeExtractorConfig<HTMLDivElement, string> = {
isNode: (node: unknown): node is HTMLDivElement => node instanceof HTMLDivElement,
transform: (div: HTMLDivElement) => div.textContent || "",
};

const nodes: unknown[] = [document.createElement("div"), document.createElement("p")];
const divs = extractNodes(divExtractor, nodes);

console.log(divs); // [ <div></div> ]

```

> In this example, we define a divExtractor object with a predicate for isNode that checks if a value is an instance of HTMLDivElement. We then call extractNodes with the divExtractor and an array of unknown nodes. extractNodes uses the predicate to filter out non-div nodes and returns an array of transformed HTMLDivElement nodes.

> By using a predicate for isNode, TypeScript can ensure that only nodes of the correct type are passed to the transform function.

> Q: wow, you are amazing. thank you!
> A: You're welcome! I'm glad I could help. If you have any more questions, feel free to ask!

**Typescript and Classes**

> We can actually use the name of the class as a type in Typescript. Classes have this funny property where they can actually cross boundaries a little bit and be used as either a type or a runtime value. Pretty cool!

```

class CustomError extends Error {
constructor(message: string, public code: number) {
super(message);
this.name = "CustomError";
}
}
const handleCustomError = (error: CustomError) => {
console.error(error.code);
};

```

**Builder patterns**

> The builder pattern is a design pattern used in software development to simplify the creation of complex objects. In TypeScript, the builder pattern involves creating a builder class that allows you to construct an object step by step.

> Here's an example to help illustrate how the builder pattern works in TypeScript:

```

class User {
constructor(
public readonly firstName: string,
public readonly lastName: string,
public readonly email: string,
public readonly age: number,
public readonly address?: string
) {}
}

class UserBuilder {
private firstName: string = '';
private lastName: string = '';
private email: string = '';
private age: number = 0;
private address?: string;

setFirstName(firstName: string): UserBuilder {
this.firstName = firstName;
return this;
}

setLastName(lastName: string): UserBuilder {
this.lastName = lastName;
return this;
}

setEmail(email: string): UserBuilder {
this.email = email;
return this;
}

setAge(age: number): UserBuilder {
this.age = age;
return this;
}

setAddress(address: string): UserBuilder {
this.address = address;
return this;
}

build(): User {
return new User(
this.firstName,
this.lastName,
this.email,
this.age,
this.address
);
}
}

```

> In the example above, we have a User class that represents a user with basic information such as their first name, last name, email, age, and address. We also have a UserBuilder class that allows us to construct a User object step by step.

> To create a User object using the builder pattern, you would first create a new UserBuilder object, set its properties using the builder's setXXX methods, and then call the build method to create the User object. Here's an example:

```

const user = new UserBuilder()
.setFirstName('John')
.setLastName('Doe')
.setEmail('john.doe@example.com')
.setAge(30)
.setAddress('123 Main St')
.build();

```

> In the example above, we create a new User object with the UserBuilder class by setting its properties using the builder's setXXX methods and then calling the build method to create the User object.

> Using the builder pattern can make it easier to construct complex objects with many properties because it allows you to break down the construction process into smaller, more manageable steps.

**Definitely typed**

> Definitely Typed is a repository that contains type definitions for lots and lots of libraries, which aren't built in TypeScript. https://github.com/DefinitelyTyped/DefinitelyTyped

**Overriding types from external libraries with d.ts file**

> What if we use a function from external library which is poorly typed and returns a string instead of union of:

```

export const getAnimatingState = (): string => {
if (Math.random() > 0.5) {
return "before-animation";
}

if (Math.random() > 0.5) {
return "animating";
}

return "after-animation";
};

```

> If we use this function, we will get return of string. Which is very loose:

```

import { getAnimatingState } from "external-lib";

const animatingState = getAnimatingState();

```

> In order to override this, we will need to create a new file with d.ts extension: for example abc.d.ts

> In this file we will `declare module` and type our getAnimatingState properly

```

declare module "fake-lib" {
export type Mytype = "before-animation" | "animating" | "after-animation";
export function getAnimatingState(): Mytype;
}

```

> Then in file where we actually use the function we will import the getAnimatingState from our new d.ts file:

```

import { getAnimatingState } from "fake-lib";

const animatingState = getAnimatingState();

```

> Our function now returns "before-animation" | "animating" | "after-animation" instead of string

**Identity functions**

> identity function takes in a value and returns the same value.

```

const asConst = <T>(t: T) => t;

```

> If we call this function with array of object like this:

```

const fruits = asConst([
{
name: "apple",
price: 1,
},
{
name: "banana",
price: 2,
},
]);

```

> The infered return type of asConst function will be Array<{name: string, price: number}>

> But we want it to be literal values of it, not just tring or number. We want the concrete thing.

> How to solve this? We can use an external library ts-toolkit., It exports F and something called Narrow which will help us with the inference:

```

import { F } from "ts-toolbelt";

export const asConst = <T>(t: F.Narrow<T>) => t;

```

> Now the inferred type will be:

```

[
{
name: "apple",
price: 1,
},
{
name: "banana",
price: 2,
},
]

```

**Projects**

**Drag & Drop Project - initial setup**

> Create a new folder on your local machine

> Copy the content of the initial project setup (html, app.ts) provided in the course from folder: `prj-00-initial-starting-setup`

> !!!! OMIT THIS STEP WHEN YOU ARE USING LITE SERVER which actually creates the dist folder with the app.ts in it !!!! In the html change the script tag from `<script src="dist/app.js" defer></script>` to `<script src="src/app.js" defer></script>`

> In the html file add a random h1 tag with some content

> In the app.ts add a random console.log

> The run this code one by one:

```
sudo npm install -g typescript
npm init
npm install --save-dev lite-server
npm install
```

> Go to src folder (where app.ts is) and compile:

```
tsc app.ts
```

> It will generate an app.js file

> Go to package.json file and check if you have those scripts there:

```
"test": "echo \"Error: no test specified\" && exit 1",
"start": "lite-server"
```

then go to main root folder and start the local server:

```
npm start
```

> Your application runs at: `http://localhost:3000/`
> Make sure you dont start: `https://localhost:3000/`

> If it does not work on with http on Chrome, try Firefox

> In order to then see anything, we need to go to src folder where our app.ts lives and then we compile it to app.js via:

```
tsc app.ts
```

> Then go to main folder and initialize git:

```
git init
```

> Add a commit:

```
git add .
git commit -m "Getting started"
```

> Go to github and create new repo. Click + and name your project. Make it private/public. Do not check any other options

> It will give you then these commands, which you paste to your terminal:

```
git remote add origin git@github.com:addania/drag.git
git branch -M main
git push -u origin main
```

> Your code should now be on github in the `drag` repository. Yay

> How to work with the project, alway do:

```
npm start
```

> And then in another terminal window:

```
tsc -w
```

> Then replace the `index.html` with a project skeleton file from: `index.html.zip`

> !!!! OMIT THIS STEP WHEN YOU ARE USING LITE SERVER which actually creates the dist folder with the app.ts in it !!!! Do not forget to overwrite the script tag as well:

```
<script src="src/app.js" defer></script>
```

> Also add the `app.css` file provided in the course next to the `index.html` file.

> `index.html` file contains some template tags. What are template tags? This is a default HTML tag which is not rendered immediately. It is just a template, which then can be rendered when we need it to (for example via scripts).

**Singletons**

> The `Singleton Pattern` ensures that a class can only have a single instance throughout the lifetime of an application. By restricting the instantiation of a class to one object, you can ensure that shared resources or data are managed consistently across different parts of your application. Can be useful for simple state management.

> Let's imagine we have a simple class like this which contains the global list of projects:

```
class ProjectState {
  projects: any[] = [];

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = {
      id: Math.random(),
      title: title,
      description: description,
      people: numberOfPeople,
    };
    this.projects.push(newProject);
  }
}

const projects = new ProjectState();
```

> We want to turn it into singleton, which will then only have 1 single instance of it. The code will look like this:

```
class ProjectState {
  projects: any[] = [];
  private static instance: ProjectState

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = {
      id: Math.random(),
      title: title,
      description: description,
      people: numberOfPeople,
    };
    this.projects.push(newProject);
  }
}

const projects = ProjectState.getInstance();
```

> We added a private constructor, which then guarantees that this is a singleton class. We added a private property called instance which is of type: ProjectState. And we added a static method called getInstance which checks if the this.instance exists and if yes, we return it. Otherwise we create a new one: this.instance = new ProjectState()

> Notice we also initialize it by `ProjectState.getInstance()` instead of `new ProjectState()`

> This guarantees that we always work with the exact same object and that we will always have one object of that type in the entire application. We only want to have one instance of the state object for the entire application.

**Classes as types**

> Interestingly enough classes can be used as types 😱

```
class Project {
    public id: string,
    public title: string,
    public description: string,
    ...
}

class ProjectState {
  projects: Project[] = [];
  ...
}
```

**Classes - property declaration shortcut**

> Normally if we wanted to have some properties in our class, we would need to declare them and initialize them in the constructor like so:

```
class Project {
  title: string;
  description: string;
  people: number;

  constructor(t: string, d: string, p: number) {
    this.title = t;
    this.description = d;
    this.people = p;
  }
}
```

> But we can use shorthand properties in the constructor, which will declare them and initialize them:

```
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
  ) {
  }
}
```

**Abstract classes and abstract methods**

> Abstract classes should never be instantiated directly, they are only used as inheritance

```
abstract class Component {
  ...
}
```

> Abstract class can have abstract methods, which means, abstract class will not implement any details for those methods, but it forces other classes which inherit from the abstract class, to implement those methods. Example:

```
abstract class Component {
  ...
  abstract configure(): void;
  abstract render(): void;
}
```

> This means that each class which inherits from Component needs to have configure and render methods! These methods cant be private though. This is a restriction.

**Super in a class**

> `super()` calls the constructor of the base class from which our class inherits. Example:

```
abstract class Component {
  constructor() {
    ...
  }
  ...
}

class ProjectList extends Component {
  constructor() {
    super();
  }
  ...
}
```

> In above, ProjectList extends Component. And in order to call the constructor of Component in ProjectList we need to call: `super()`

> If the constructor of the bse class needs some arguments, we need to pass them to super:

```
abstract class Component {
  constructor(title: string, id: string) {
    ...
  }
  ...
}

class ProjectList extends Component {
  constructor() {
    super("this is my title", "this is my id");
  }
  ...
}
```

**Class getters**

> By convention you declare getters after the properties in the class

> Getter is a function with a specific name. Example:

```
class ProjectItem{
  project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(project: Project) {
    this.project = project;
    const text = this.persons;
  }
}
```

> Getter is not triggered with `this.persons()`. It is accessed as a property: `this.persons`

**Implementing drag & drop with interfaces**

> Let's implement 2 interfaces: `Draggable` and `DragTarget`.

> `Draggable` is an item we want to drag. For example an item list.

> `DragTarget` is where we want to drop our Draggable item. For example a Box with all finished projects, where we want to drag it the items to.

> `Draggable` interface will have two methods: `dragStartHandler` and `dragStopHandler`.

```
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}
```

> Each of them will receive an event of a TS built-in type: `DragEvent`.

> Each dragging event has a start and an end of it and for each we need an event listener.

> `DragTarget` will implement 3 methods: `dragOverHandler`, `dropHandler` and `dragLeaveHandler`.

```
interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
```

> `dragOverHandler` signals to browser that the target of the drag is a valid drag target, so basically that the box we are dragging our item over, is a valid target. Dropping wont be possible if we dont have a valid target. `dragOverHandler` permits the drop

> `dropHandler` is needed to react to an actual drop when it happens. We will use it to handle the drop. We can update data and ui.

> `dragLeaveHandler` can be used to revert the visual update, if no drop happens, or if the drag is cancelled or user moves the element away.

> We can then use those defined interfaces not only as a TS object type, but we can use it as a contract on a class with the keyword `implements`, in order to force the class to implement methods defined in the interface:

```
class ListItem extends Component implements Draggable {
  dragStartHandler(event: DragEvent){
    console.log("Drag starts")
  };
  dragEndHandler(event: DragEvent){
    console.log("Drag ends")
  };
}
```

> What we firther need to do is to add our eventListeners which will listen to the DOM events `dragstar` and `dragend`. We can do this in configure method for our item which we want to drag:

```
class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    console.log("Drag Starts");
    console.log("Event", event);
  }

  @autobind
  dragEndHandler(_: DragEvent) {
    console.log("Drag Ends");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
```

> This alone wont trigger the draggin though. We need to go tonour HTML file and add draggable="true" to our list item element.

```
<template id="single-project">
      <li draggable="true">
        <h2></h2>
        <h3></h3>
        <p></p>
      </li>
</template>
```

> Now we can successfully drag it! Yay 🎉🎉🎉. This prop tells the browser, that this item will be draggable.

> Now let's handle the drag target. This will be the ProjectList box/class which then needs to implement DragTarget interface and add the 3 methods: `dragOverHandler`, `dropHandler` and `dragLeaveHandler`

```
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];
  // private type: "active" | "inactive" means that now we will have type property on the whole ProjectList class
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.element.id = `${this.type}-projects`;
    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    console.log("dragOverHandler fired");
  }

  @autobind
  dropHandler(event: DragEvent) {
    console.log("dropHandler fired");
  }

  @autobind
  dragLeaveHandler(event: DragEvent) {
    console.log("dragLeaveHandler fired");
  }

  configure() {
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }
}
```

> In `dragOverHandler` we want to change the ui, so that the box visually shows, the item can be dropped there. For example, we can add a css class to the ul element like this, which will change the background color of it when item is being dragged over it:

```
 @autobind
  dragOverHandler(event: DragEvent) {
    console.log("dragOverHandler fired");
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.add("droppable");
  }
```

> And when we leave this droppable target, we want to reset the color to white background, by removing the droppable class from the item:

```
  @autobind
  dragLeaveHandler(event: DragEvent) {
    console.log("dragLeaveHandler fired", event);
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }
```

> So overall our ProjectList will look like this:

```
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];
  // private type: "active" | "inactive" means that now we will have type property on the whole ProjectList class
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.element.id = `${this.type}-projects`;
    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    console.log("dragOverHandler fired", event);
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.add("droppable");
  }

  @autobind
  dropHandler(event: DragEvent) {
    console.log("dropHandler fired", event);

  }

  @autobind
  dragLeaveHandler(event: DragEvent) {
    console.log("dragLeaveHandler fired", event);
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }
}
```

> So visually dragging works, but the javascript has no clue about which element from list we are dragging, where we are dropping it and that it needs to update the state when we drop the item to the finished projects list.

> We will need to use a special feature of the `DragEvent` which is called `dataTransfer`. This will attach a data to the `DragEvent` from the `ItemList` and we will be able to retrieve this data in for example Drop Target. Please note that we only want to attach small amount of data. Project id will suffice cause with it we can retrieve the whole project, and the format of the data will be plain text. This all will go to ProjectItem

```
  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain" ,this.project.id )
  }
```

> We can also change cursor to "move" when dragging with: `event.dataTransfer!.effectAllowed = "move";`

```
  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }
```

> Now in te drop target element: ProjectList we wnat to make sure that we only allow dropping such elements which have a data attched to them and of a correct format: `text/plain`. we will need if statement in the dragOverHandler and if the condition we met, we will need to trigger `event.preventDefault()`. Drag and drop in javascript is implemented in a way that only if we call `event.preventDefault()` in dragOverHandler, then dropping is allowed and dropHandler is triggered!!!

```
@autobind
  dragOverHandler(event: DragEvent) {
    if(event.dataTransfer && event.dataTransfer.types[0] === "text/plain"){
      event.preventDefault()
      console.log("dragOverHandler fired", event);
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
}
```

> Now when we allow the dropping for data with project id, we can then retrieve this project id in the dropHandler like this:

```
  @autobind
  dropHandler(event: DragEvent) {
    console.log("dropHandler fired", event);
    const projectId = event.dataTransfer!.getData("text/plain");
    console.log("projectId", projectId);
  }
```

> Last step is then to use the project id to update the status of given project and refresh the interface. We will do so by adding moveProject method to the projectStatus and then using this method in our dropHandler. We will pass in the id pf the project and the new status.

```
  @autobind
  dropHandler(event: DragEvent) {
    console.log("dropHandler fired", event);
    const projectId = event.dataTransfer!.getData("text/plain");
    console.log("projectId", projectId);
    projectState.moveProject(
      projectId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
```

> Then in the ProjectStatus we will add this method:

```
 moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
    }
    this.updateListeners();
  }
```

> Whole project code looks like this:

```
//Drag & Drop interfaces

interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(eent: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

/*class Project {
  title: string;
  description: string;
  people: number;
  id: number;
  status: "active" | "passive";

  constructor(t: string, d: string, p: number) {
    this.title = t;
    this.description = d;
    this.people = p;
    this.id = Math.random();
    this.status = "active";
  }
}*/

enum ProjectStatus {
  Active,
  Finished,
}
// Project
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {
    /* this.title = title;
    this.description = description;
    this.people = people;
    this.id = Math.random();
    this.status = "active";*/
  }
}

type Listener<T> = (items: T[]) => void;

// State class
class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

// Project State Management
class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numberOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numberOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
    }
    this.updateListeners();
  }

  private updateListeners() {
    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}

// global project constant which can be used anywhere
const projectState = ProjectState.getInstance();

// Autobind method decorator instead of this.submitHandler.bind(this) in configure method
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedMethod;
}

//Validation
interface Validatable {
  value: string | number;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.isRequired) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value == "string"
  ) {
    isValid =
      isValid &&
      validatableInput.value.trim().length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value == "string"
  ) {
    isValid =
      isValid &&
      validatableInput.value.trim().length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value == "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value == "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}

// Base Component Class - abstract class, can only be used for inheritance, cant be instantiated directly
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    )!;
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

// Project Item Class

class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    console.log("Drag Starts");
    console.log("Event", event);
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autobind
  dragEndHandler(_: DragEvent) {
    console.log("Drag Ends");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// Project List Class
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];
  // private type: "active" | "inactive" means that now we will have type property on the whole ProjectList class
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.element.id = `${this.type}-projects`;
    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      console.log("dragOverHandler fired", event);
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @autobind
  dropHandler(event: DragEvent) {
    console.log("dropHandler fired", event);
    const projectId = event.dataTransfer!.getData("text/plain");
    console.log("projectId", projectId);
    projectState.moveProject(
      projectId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @autobind
  dragLeaveHandler(event: DragEvent) {
    console.log("dragLeaveHandler fired", event);
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }
}

// Project Input class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLTextAreaElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLTextAreaElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
    this.renderContent();
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDesc = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable = {
      value: enteredTitle,
      isRequired: true,
      minLength: 3,
    };

    const descriptionValidatable = {
      value: enteredDesc,
      isRequired: true,
      minLength: 5,
    };

    const peopleValidatable = {
      value: +enteredPeople,
      isRequired: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, try again");
      return;
    } else {
      return [enteredTitle, enteredDesc, Number(enteredPeople)];
    }
  }
  @autobind
  private sumbitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  configure() {
    this.element.addEventListener("submit", this.sumbitHandler.bind(this));
  }

  renderContent(): void {}
}

const myProject = new ProjectInput();

const myList = new ProjectList("active");
const myList2 = new ProjectList("finished");

```

**Namespaces and modules**

> Instead of writing all code in one single file which can be huge, we can split our code into multiple files and then import from and into each one. But if we have multiple files, we would need to manually import all of the files to the html script tag. But we do not want to make this manually. Then we have 2 options: use namespaces or ES6 modules ( ES6 imports and exports).

> Namespaces is a speacial typescript syntax feature which adds special code to our code. It allows up to group code together below a namespace and then import namespaces to other files. We can have a namespace per file for example. Typescript also bundles our code into one file, so that we can write code in multiple files, and we dont need to manage multiple imports to the HTML file.

> ES6 modules or ES6 imports and exports are modern alternative to namespace. This is a feature of the modern Javascript (it has nothing to do with Typescript) which has a solution to the problem of splitting code to multiple files. Moder JS out of the box supports imports and export statements which define which file depends on which file and modern browsers manage that automatically so that we dont need to import files manually. We only need one import to HTML script tag, browsers will resolve the file dependencies. One disadvantage here is that we still have multiple files we work with, even if we only have one import to HTML script tag. This means that we will have multiple http requests to download each file individually. But in order to sihp to production only one file, and still have multiple files in development, we will need 3rd party tools like Webpack which will take care of bundling.

**Namespaces**

> From our big file, we will create a new file with name: `drag-drop-interfaces.ts` where we add all interfaces under a given namespace called App like this:

```
namespace App{
 interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(eent: DragEvent): void;
 }

 interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
 }
}
```

> Notice how we need to use a keyword namespace, then the name of the namespace and then curly braces. To that namespace we then add anything that we want: const, let, class, interface, etc. The TS will then create a namespace object and Draggable and Dragtarget will be the properties of that object.

> Our interfaces will then be only available inside of that namespace. In order to be able to use them insode of other files, we can then also export our interfaces from inside of the namespace.

```
namespace App{
 export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(eent: DragEvent): void;
 }

 export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
 }
}
```

> How to then import this to our file where we need them? We will use 3 forward slashes - which is a special syntax TS understand - like a special comment. After that we write a self-closing HTML tag with reference and path to the file with the namespace we want to import:

```
/// <reference path="drag-drop-interfaces.ts" />
```

> Please note this is not vanilla Javascript. This ensures though that the DDInterfaces namespace is available in the file where we need it.

> But there is a plot twist, to make this work, we will also need `namespace App{}` in our file where we need those interfaces and we need to wrap the entire code in in that App namespace.

```
/// <reference path="drag-drop-interfaces.ts" />

namespace App{
  all the code that depends on the interfaces
}
```

> When we want to create another file with other stuff in it, we need ot use same namespace App:

```
namespace App {
  export class ..
  export const ..
  export let ..
}
```

> The concept of namespaces will only work properly on all features TS and JS when we go to tsconfig.json file and enable: `"outFile": "./dist/bundle.js"` and when we change the module to for example amd: `"module": "amd"`

> outFile tells TS that we want to concatenate all namespace files (all those references we set in our main file) and add them to a single javascript file at the location: `./dist/bundle.js` instead of compiling multiple js files.

**ES6 modules**

> This is to export something from one file with export keyword and import it to another file with import keyword:

```
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(eent: DragEvent): void;
 }
```

```
import { Draggable } from "../interfaces/draggable.js"
```

> Please note we import from .js files, not ts.files. We will need to specify the file extension! We will only be able to not specify the file extension when we add Webpack

> Please note that in Network tab, we will then need to fetch all our files! As soon as a file imports something, browser will need to fetch that file

> When we want to import multiple things from a single file under a certain name, we use `*` and `as` and a name/alias we want to give it, for example React. Then we access all the item from that file whic are exported with a dot notation: `React.useState`

```
import * as React from "react"
const x = React.useState()
```

> We can assign an alias even if we import stuff individually with `as` keyword:

```
import { Draggable as Drag } from "../interfaces/draggable.js"
```

> All of above are called named exports, cause they are exported and then imported with their corresponding names (and we need to import them by the exact name).

> We can also use default exports if we only export one thing from a file. Although I can still have named exports in the file, but we can only have one default export per file.

```
export default class Abc {}
```

```
import WhateverILike from ""
```

> Advantage is that I can name the thing Im exporting whatever I want. Notice that we omit the curly braces with default import.

> Recommendation is to use named exports for organization and auto-completion.

> Interesting fact is that if we have a file from which we export a const for example and we use it in 5 other files, how mayn times, will that file run? 5 times? No. Actually it only runs once and hence the first time any other file imports it, it will run.

> ES modules (import/exports) are recommended way to go. But they only run on modern browsers. When we build applications, we also need to support older browsers. In order to make that work in older browsers, we can using a bundling tool, for example Webpack - to bundle all of our individual files into one big Javascript file. So that when we develop we have all those nicely split files, but when we deliver it to production, we have only 1 file which is served. Advantage is that browser does not have to download all those multiple files, only one. Cause each file that needs to be downloaded is an extra http request, extra roundtrip. Each http request takes time to setup, even for small files. So doing less requests is a good idea anyway.

**Webpack**

> Disadvantage of splitting code into multiple files is that we will then in production have mutiple http requests and each file needs to be fetched separately. This is not performant because each http request has an base overhead (base duration it always takes) becasue the request needs to be setup, which takes time, even for small files. We can see this in the Network time in the waterfall as a white box in front of the actual doanloading time. Plus then it also needs to download the file, which is another waiting time. This gets even worse in production and there can be a lot of latency, just due to the sheer amount of http requests.

> Solution to this problem is a Webpack which will bundle our fiels together: https://webpack.js.org/

> Webpackis bundling and Build Orchestration tool. It helps us to reduce the amount of http requests, by bundling code together, so that we can write code split up across multiple files, but Webpack then takes all these files and bundles them together.

> Webpack also does more: optimizes our code (it is called minify the code) and allows to add more build steps or more build tools (for example to help with the CSS files, and so on).

> Code optimization means that the code is as small as possible - for example: shorten function and variable names. As a developer we want to write a readable code, which is self-explanatory, but Webpack can shorten the code automatically, use some abbreviation when we build our code. Less code means users can download the code faster, which can start up our application faster.

> At the moment we use `npm start` to start our project and another package - development server: lite server (which we run with `tsc -w`) which then makes sure that when we change the code in a file, it reloads the localhost page automatically. It would be nice to have one command which will do both. Webpack can help with this as well.

> Let's then install Webpack. We will want to install it to the dev dependencies which are dependencies only for development, so in our terminal we run this statement and install couple of packages:

```
npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
```

> webpack package which we installed is the heart of our new setup. It is package for bundling and tranforming code: transform our typescript code to javascript and then emit a bundled javascript file.

> webpack-cli - we need it to run webpack commands in our project

> webpack-dev-server - we need it to have that built-in development server which starts webpack under the hood which watches our files for changes, automatically triggers webpack to re-compile when something changes and automatically serve our page.

> typescript - this installs the copy of typescript for this specific project with a certain version (even though we installed typescript globally on our machine - good practice is to do it also per project). Advantage is that we can lock in a specific version of typescript per project and then change our global version of typescript if we want to.

> ts-loader is a package which will work together with Webpack. It tells Webpack how to convert Typescript to Javascript. Webpack compiles our code with the help of ts-loader (which uses typescript compiler under the hood from the typescript package) anf then the webpack package is able to bundle our code and emit one javascript file.

> to get started let's go to tsconfig.json.

> `target` should be es5 (support also for older browsers) or es6 (support of only more modern browsers)

> set `module` to `es2015` or to `es6`

> `outDir` should be `./dist` folder, or any other where you want your bundled code to be outputted.

> We dont need `rootDir` anymore, so we can comment it out, because Webpack will take over and determine where your root files are.

> Next to `tsconfig.json` file, let's create a new one: `webpack.config.js` file. Not json but js file. This must be exact that name, it tells Webpack how to work with our project. This file is a config file for Webpack and it uses node.js syntax.

>
