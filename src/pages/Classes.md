---
title: "Classes"
date: "2022-01-15"
category: "knowledge-base"
---

![](https://i.imgur.com/Kz6Bpsu.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

**Intro to object oriented programming**

> Object oriented programming uses objects which represent REAL LIFE entities in code

> Easier to reason about the code. Example, we can create a ProductList object which has addProduct, removeProduct method and we use it to fetch from server and render in browser a list of products.A product itself can also be an object on its own with a method to display details, add to cart method, etc. ProductList and Product objects are related.

> This is one way we can think about our application and split it into pieces that make sense to us humans. In JS and TS such objects are supported but we also have classes.

> What is difference between an object and a class? Objects are concrete things you with with in code. They are data structures we use to store data. Classes are blueprints for objects (theoretical definition of object), they allow us to define how objects should look like., which data and methods they should hold, do that we can easily build objects based on these classes called instances of classes. Object is an instance of a class if it is based on such a class. We can thus quickly replicate objects with same structure and methods.

> Classes exist to speed up creation of objects. What we used so far was literal notation of objects.

**Objects**

> Objects can be created in two ways:

- as object literal: const a = {name: 'Pete'}
- as an instance of a class const a = new Person("Pete")

**Our first class**

> Classes are defined with a keyword `class` and names are by convention capitalized:

```
class Department {
  name: string;
}
```

> Class above has a field called `name`. Please note this is not the same as a key - value pair in objects. Field in a class only defines a name of a key which we want to have in an object which we will create based on the class. And here furthermore we defined the value type our key `name` will hold in the end.

> We can also set an initial value of our field with equal sign (but we dont have to do that, it is optional)

```
class Department {
  name: string = "DEFAULT";
}
```

> What we also can have in the class is a **method**. What are methods? They are simply `functions in objects`. We can define those functions our object will have (methods) in a class too.

> One of the default method (function in object) is called `constructor`. It is a special function tied to this class and therefore tied to any object we create based on this class and is executed when the object is being created. It allows to do some initialization work for the object we are building.

> This function accepts arguments, such as below `n` and we can for example those n in our field `name`

```
class Department {
    name: string;
    constructor (n: string) {
    this.name = n
    }
}
```

> We get the value of the `n` when we are creating and instance of the class. This value will be passed there and constructor will initialize this `n` to be assigned to name field (name property) in our class.

> Please note that we need to access fields this keyword `this`.

> Please also note that code below only says that we will have a field name, but it does not assign any value to it.

```
class Department {
  name: string;
}
```

> Our constructor function makes sure that when the instance of the class (object) is created it will pass provided `n` value and store it in our name field.

**How to create an instance of the class**

> So we defined the blueprint (architectural design) of our object. And now how to bring it to life and create one example of that class (a house based on the design)?

> We use keyword `new` + name of the class + parenthesis:

```
new Deprtment()
```

> This will create and instance of a Department class.

> But beware - when we initialize an instance of a class with `new Department()` its constructor is called and it expects `n` as an argument!

> This means we need to provide it else we get a TS error.

```
new Deprtment("Marketing")
```

> We can then store our new instance of a class (object) to a variale and console log it for example:

```
const ourFirstClass = new Department2("Marketing");

console.log("ourFirstClass", ourFirstClass);
```

> Result will look like this:

![](https://i.imgur.com/GjKUh8l.png "Photo by Addania")<p style="font-size: 12px; text-align: right">_Photo by Addania_</p>

> And this is a regular JS object! 🤯

**Methods**

> Classes do not only have properties, but also methods - object functions.

> Special one is constructor which is triggered when we instantiate our class as `const accounting = new Department("Accounting")`;

> In oder to add a method we just write its name parenthesis and curly braces such as `describe` method as below:

```
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log("Department: " + name);
  }
}
const accounting = new Department("Accounting");
const marketing = new Department("Marketing");
accounting.describe();
```

> However there is a problem! `"Department: " + name` assumes that we have a const / variable called name.

> But the class method has only access to its own scope - code block of the describe method (so anything within curly braces), so we would need to have a variable called name in the method itself:

```
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {
    const greeting = "HELLO"
    console.log("Department: " + greeting);
  }
}
const accounting = new Department("Accounting");
const marketing = new Department("Marketing");
accounting.describe();
```

> Class method also has access to global variable above the class:

```
const global = "I AM TOTALY GLOBAL"

class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {

    console.log("Department: " + global);
  }
}
const accounting = new Department("Accounting");
const marketing = new Department("Marketing");
accounting.describe();
```

> Class method however, does not have access to properties within the class. So describe method cannot access name property. We will get an error: "Cannot find name"

> In order to give access to the class properties and other methods, we need to use a special keyword: `this`.

```
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log("Department: " + this.name);
  }
}
const accounting = new Department("Accounting");
const marketing = new Department("Marketing");
accounting.describe();  // Department: Accounting
```

> `This` refers back to the CONCRETE INSTANCE of this class that was created. But there is a trick too. It does not refer to the class, but to its instance. So in above example `this` refers to the `accounting` object (which was based on Department class).

> Even more interestingly `this` refers to the place which called it. So `this` can be tricky. Let's demonstrate.

> We add another object which is declared as an object literal:

```
const accountingCopy = { describe: accounting.describe}
accountingCopy.describe()
```

> Console output will be: `Department: undefined`

> Reason is that I created an object literal called accountingCopy which contains one property describe which is pointing to the describe method of accounting object. In other words our accountingCopy contains describe property which is passing the describe method from accounting object - we are not executing it at that point, it is `executed with accountingCopy.describe()`. When this function executes `this` will not refer to the accounting object where the method was part of originally and hence its name. It will refer to the thing which is responsible for calling this method. Resonsible for calling this method was `accountingCopy` exactly in this place:

```
accountingCopy.describe()
```

> So `this` refers to accountingCopy and accountingCopy does not have any name property. Therefore we get undefined.

> This is something to keep in mind when working with classes. In order for compiler to yell at us when we assume that this refers to original method, we can improve our code:

```
describe(this: Department) {
    console.log("Department: " + this.name);
  }
```

> We can add `this` as a parameter to descrie method which is of a type: Department. This is not a parameter per se. We can still call describe method without any parameter:

```
accounting.describe()
```

> But it is understood by Typescript, in order to define what `this` refers to. And since we assign type `Department` we are saying that when describe is executed, `this` refers to the instance of the class `Department`. Which is at the end just an object of a type `Department`.

> Using this approach will then yield a typescript error if we try to use describe with a different object - our object literal accountingCopy which is not an instance of the class Department:

```
accountingCopy.describe()
```

> Using `describe(this: Department){}` adds an extra safety check. We would get otified and we would need to fix this, for example by adding name property to our object literal: `accountingCopy`

```
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

const accountingCopy = { name: "Addy", describe: accounting.describe };

accountingCopy.describe();
```

**Private and public access**

> Imagine we have a method to add employees to our Department class:

```
class Department {
  name: string;
  employees: Array<string> = [];

  constructor(n: string) {
    this.name = n;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log("Number of slaves: ", this.employees.length);
    console.log("List of slaves: ", this.employees);
  }
}
const accounting = new Department("Accounting");
accounting.addEmployee("Pete");
accounting.addEmployee("Steve");
accounting.printEmployees();
```

> Code above will console log, that we have 2 slaves and their names are Pete and Steve. Which is cool and we can add new slaves by using `accounting.addEmployee`.

> But we can also modify employees from outside of the class and by direct assignment:

```
accounting.employees[2] = "Anna"
```

> Anna is an infiltrator and should not be on the list. But she is now! :( Our poor precious class was compromised! Now there are two ways we can manipulate with the property inside of our class. This may be desired behaviour but in larger applications this is typically not what we want. We tend to want to have one single way how to do things - one source of truth. Therefore `accounting.employees[2] = "Anna"` may not be the desired way how to change <s>employees</s> slaves list.

> More over maybe our `addEmployee` method does not ONLY add an employee but does more - like some validation, adding some default information about the employee atc. And if we had 2 ways of doing it, they might differ.

> In order to prevent such direct assignments from outside of the class, we can turn employees property (field) to a private property. How? Super ultra easy: add `private` keyword in front of a property or a method

```
class Department {
  name: string;
  private employees: Array<string> = [];

  constructor(n: string) {
    this.name = n;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log("Number of slaves: ", this.employees.length);
    console.log("List of slaves: ", this.employees);
  }
}
```

> This means that emplyoees property is only accessible from `inside` of the Department class. Not from outside. Now we cant access employees like this: `accounting.employees[2] = "Anna"`

> `private` keyword is a modifier. We also have a `public` keyword, which is a default, so we do not have to add it. FOr example class name is public by default (because we did not set it to private):

```
class Department {
  name: string;
  ....
}
```

> But we could also write it like this (although it is redundant):

```
class Department {
  public name: string;
  ....
}
```

**Shorthand initialization**

> Often we will have classes with many properties which need to be initialized when creating instance of the class:

```
class Department {
  name: string;
  id: number;
  size: number;
  employees: Array<string> = [];

  constructor(n: string, id: number, size: number) {
    this.name = n;
    this.id = id
    this.size = size
  }
}
const accounting = new Department("Accounting", 1, 500);
```

> Defining the properties beneath the class and also initializing them all in the constructor is kind of tedious and double work. Typescript allows us to use shorthand initialization which looks like this:

```
class Department {
  employees: Array<string> = [];
  constructor(private name: string, private id: number, private size: number) {}
}
const accounting = new Department("Accounting", 1, 500);

```

> Please note two things.

- We cannot anymore have any random name of the variable, such as `n`. It needs to be `name`.
- We must use `private` or `public` keyword to define its access type. We cannot ommit `public`, though
