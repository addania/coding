---
title: "Classes"
date: "2022-01-15"
category: "knowledge-base"
---

![](https://i.imgur.com/Kz6Bpsu.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

**Intro to object oriented programming**

> Object oriented programming uses objects which represent REAL LIFE entities in code

> Classes make it easier to reason about the code. For example, we can create a `ProductList` object which has `addProduct` & `removeProduct` method and we use it to fetch from server and render in browser a list of products. A product itself can also be an object on its own with a method to display details, add to cart method, etc. `ProductList` and `Product` objects are related.

> This is one way we can think about our application and split it into pieces that makes sense to us humans. In JS and TS such objects are supported but we also have `classes`.

> What is difference between an `object` and a `class`?

> `Objects` are concrete things you work with in code. They are data structures we use to store data.

> `Class` is blueprint for objects. It is a theoretical definition of an object. Class allows us to define how objects should look like, which data and methods they should hold, so that we can then easily build multiple objects based on such a class. Concrete objects which are based on a given class are called `instances` of a class. Object is an instance of a class if it is based on such a class. We can thus quickly replicate objects with same structure and methods.

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

> Class above has a field called `name`. Please note this is not the same as a `key - value` pair in objects. Field in a class only defines a name of a key which we want to have in an object which we will create based on the class. And here furthermore we defined the value type our key `name` will hold in the end.

> We can also set an initial value of our field with equal sign (but we dont have to do that, it is optional):

```
class Department {
  name: string = "DEFAULT";
}
```

**Methods**

> What we also can have in the class is a **method**. What are methods? They are simply `functions in objects`. We can define those functions our object will have (methods) in a class too.

> One of the default methods (function in object) is called `constructor`. It is a special function tied to this class and therefore tied to any object we create based on this class and is executed when the object is being created. It allows to do some initialization work for the object we are building.

> `Constructor` function accepts arguments, such as below `n` and we can for example put this `n` in our field `name`

```
class Department {
    name: string;
    constructor (n: string) {
    this.name = n
    }
}
```

> We get the value of the `n` when we are creating and instance of the class. This value will be passed there and constructor will initialize this `n` to be assigned to `name` field (`name` property) in our class.

> Please note that we need to access class fields with `this` keyword .

> Please also note that code below only says that we will have a field name, but it does not assign any value to it.

```
class Department {
  name: string;
}
```

> Our constructor function makes sure that when the instance of the class (object) is created it will pass provided `n` value and store it in our `name` field.

**How to create an instance of the class**

> So we defined the blueprint (architectural design) of our object. And now how to bring it to life and create one example of that class (a house based on the design)?

> We use keyword `new` + name of the class + parenthesis:

```
new Deprtment()
```

> This will create an `instance` of a Department class.

> But beware - when we initialize an instance of a class with `new Department()` its constructor is called and it expects `n` as an argument!

> This means we need to provide it else we get a TS error.

```
new Department("Marketing")
```

> We can then store our new instance of a class (object) to a variale and console log it for example:

```
const ourFirstClass = new Department("Marketing");

console.log("ourFirstClass", ourFirstClass);
```

> Result will look like this:

![](https://i.imgur.com/GjKUh8l.png "Photo by Addania")<p style="font-size: 12px; text-align: right">_Photo by Addania_</p>

> And this is a regular JS object! 🤯

**Methods**

> Classes do not only have properties, but also methods - object functions.

> Special one is constructor which is triggered when we instantiate our class as `const accounting = new Department("Accounting")`;

> In oder to add a method we just write its name, parenthesis and curly braces such as `describe` method as below:

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

> Or buidling something cooler:

```
class Character {
  name: string;
  level: number;
  hp: number;

  constructor(name: string, level: number, hp: number) {
    this.name = name;
    this.level = level;
    this.hp = hp;
  }
  printWelcomeMessage() {
    console.log("Welcome to the World of Warcraft, " + this.name);
    console.log(
      "As a level " + this.level + " character, you have " + this.hp + " hp"
    );
  }
}

const adda = new Character("Addania", 1, 100);
adda.printWelcomeMessage();
```

> However there is a problem! `"Department: " + name` assumes that we have a const / variable called `name`.

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

> Class method however, does not have access to properties (fields) within the class. So describe method cannot access `name` property. We will get an error: "Cannot find name"

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

> We can add `this` as a parameter to describe method which is of a type: Department. This is not a parameter per se. We can still call describe method without any parameter:

```
accounting.describe()
```

> But it is understood by Typescript, in order to define what `this` refers to. And since we assign type `Department` we are saying that when describe is executed, `this` refers to the instance of the class `Department`. Which is at the end just an object of a type `Department`.

> Using this approach will then yield a typescript error if we try to use describe with a different object - our object literal accountingCopy which is not an instance of the class Department:

```
accountingCopy.describe()
```

> Using `describe(this: Department){}` adds an extra safety check. We would get notified and we would need to fix this, for example by adding name property to our object literal: `accountingCopy`

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

> `private` keyword is a modifier. We also have a `public` keyword, which is a default, so we do not have to add it. For example class name is public by default (because we did not set it to private):

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

> Please note that it is fine that we name parameters of constructor differently from the fields of the class. For example, the constructor uses `n` and then this is assigned to the field `name`.

> Defining the properties beneath the class and also initializing them all in the constructor is kind of tedious and double work. Typescript allows us to use `shorthand initialization` which looks like this:

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

**Readonly modifier**

> What if some of our class fields should not change once they are initialized? In such a case we can use `readonly` modifier.

```
class Character {
  name: string;
  readonly id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const adda = new Character("Addania", 1, 10, 100);
```

> We can also use shorthand initialization and define the readonly in constructor:

```
class Character {
  constructor(private name: string, private readonly id: number) {
    ...
  }
}
const adda = new Character("Addania", 1);
```

> This means that we cannot later on change the value of the id:

```
class Character {
  constructor(private name: string, private readonly id: number) {
    console.log("name", this.name);
    console.log("id", this.id);
  }
  changeId() {
    this.id = 10; // Typescript error
  }
}
const adda = new Character("Addania", 1);
console.log("adda", adda);
```

> Please note that we cant change this property AFTER the initialization. If I still manipulate with the id in the constructure, this is still allowed. 🤔

**Inheritance**

> As in examples above, we might have a Department class which has its name, id and list of employees. But for example IT department would also have list of administrators while Accounting department would have list of reports

> So in general we might have some fields and methods which are common for each department, but some which are specific to the concrete version of Department.

> Inheritance can help to build a new class which will be based on department but will be specific to IT Department:

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
  print(){
    console.log("We are ...", this.name)
  }
}

class IT extends Department {

}

const myIT = new IT("Developer Den", 1, 3)
myIT.print()
```

> You inherit with the `extends` keyword followed by the class from which we are inheriting. Please not that we can only inherit from one class. Now our IT department will have all the properites and methods from the Department, but will have some special ones.

> Please note that as long as the IT class is empty and does not have its own constructor, then the constructor of the parent class Department will be implemented. This also means that when we want to instantiate this IT class, then we need to pass all 3 arguments which constructor of the Department class needs: name, id and size. But to pass the name to our IT class is a bit weird, because we know it should be "IT". So how can we make sure we do not need to pass this information when we are creating our IT instance of the class?

> We can have our own constructor in the IT class. This IT constructor will only accept 2 arguments: id and size when we instantiate it and we will forward the "Information Technology" to the Department class which will consume it as a name.

```
class Department {
  name: string;
  id: number;
  size: number;

  constructor(n: string, id: number, size: number) {
    this.name = n;
    this.id = id;
    this.size = size;
  }
}

class IT extends Department {
  constructor(id: number, size: number) {
    super("Information Technology", id, size);
  }
}

const myIT = new IT(12, 20);
console.log("myIT", myIT);
```

> Whenever we add our own constructor in a class which extends another class, then we need to call special `super()` function in the constructor. And we need to execute it also as a function. `super()` calls the constructor function of the parent class. And for that reason the super also takes the arguments of the parent class (from which we are inheriting). In our case: n (name), id and size.

> It is also super important that we call `super()` before we use `this` keyword in our constructor!

> Now how can we add our new `admins` property? We certainly do not want to forward it to the Department class, because this class does not know about admins. Admins are our secret agents, only for our IT department.

```
class IT extends Department {
  constructor(id: number, size: number, public admins: Array<string>) {
    super("Information Technology", id, size);
  }
}
```

> Above is a shorthand and below is the longhand definition :>

```
class IT extends Department {
  admins: Array<string>;
  constructor(id: number, size: number, admins: Array<string>) {
    super("Information Technology", id, size);
    this.admins = admins;
  }
}
```

> Then we need to list of admins when instantiating our IT class:

```
const myIT = new IT(12, 20, ["Adda"]);
```

> Please also note, that if we have some method on our Department from which we extend, then also we can call those methods on our IT department. Such as `addEmployee()` or `print()`

```
class Department {
  name: string;
  id: number;
  size: number;
  private employees: Array<string> = [];
  constructor(n: string, id: number, size: number) {
    this.name = n;
    this.id = id;
    this.size = size;
  }
  addEmployee(name: string) {
    this.employees.push(name);
  }
  print() {
    console.log("Welcome to ... ", this.name);
    console.log("Please applaud to our employees: ", this.employees);
  }
}
class IT extends Department {
  admins: Array<string>;
  constructor(id: number, size: number, admins: Array<string>) {
    super("Information Technology", id, size);
    this.admins = admins;
  }
}
const myIT = new IT(12, 20, ["Adda"]);
console.log("myIT", myIT);
myIT.addEmployee("Josh");
myIT.print();
```

> Moreover, you can have own methods on the new IT department

```
class IT extends Department {
  admins: Array<string>;
  constructor(id: number, size: number, admins: Array<string>) {
    super("Information Technology", id, size);
    this.admins = admins;
  }
  execute(item: string) {
    console.log("I am processing the ", item);
  }
}

const myIT = new IT(12, 20, ["Adda"]);
myIT.execute("payment");
```

> Now what if we want to have our addEmployees from parent class slightly modified? We could try somthing like this:

```
class IT extends Department {
  admins: Array<string>;
  constructor(id: number, size: number, admins: Array<string>) {
    super("Information Technology", id, size);
    this.admins = admins;
  }
  addEmployee(name: string) {
    if (name === "Mia"){
      return
    } else {
      this.employees.push(name)
    }
  }
}
```

> But here we have a problem, because employees is private in our parent Department class. So we cant access it outside of that class. If employess would not be private, then we could do it and `addEmployee` from our IT class would override the one from the Department!

> Solution is that we can use `protected` keyword instead of `private`. `protected` allows property to be used in a class which inherits from the parent class. But it is not allowed to use it outside of these two classes.

```
class Department {
  name: string;
  id: number;
  size: number;
  protected employees: Array<string> = [];
  constructor(n: string, id: number, size: number) {
    this.name = n;
    this.id = id;
    this.size = size;
  }
  addEmployee(name: string) {
    this.employees.push(name);
  }
}

class IT extends Department {
  admins: Array<string>;
  constructor(id: number, size: number, admins: Array<string>) {
    super("Information Technology", id, size);
    this.admins = admins;
  }
  addEmployee(name: string) {
    if (name === "Mia") {
      return;
    }
    this.employees.push(name);
  }
}

const myIT = new IT(12, 20, ["Adda"]);
myIT.addEmployee("Josh");
myIT.addEmployee("Mia");
```

**Getters and setters**

> Imagine we create ab Accounting department class which has a lastReport which is a private property:

```
class Accounting extends Department {
  private lastReport: string;
  reports: Array<string>;

  constructor(id: number, size: number) {
    super("Accounting", id, size);
    this.reports = [];
    this.lastReport = "";
  }
  addReport(name: string) {
    this.reports.push(name);
    this.lastReport = name;
  }
}

const myAcc = new Accounting(10, 100);
myAcc.addReport("rep1");
myAcc.addReport("rep2");
console.log("myAcc", myAcc);
```

> `lastReport` can only be accessible from within the class. We cannot access it outside with a `dot` notation (`myAcc.lastReport`). But what if we still want to make it accessible from outside, but in a controlled manner with some more complex logic? We can use a getter method in order to do so. To write a getter method we write keyword get and then name of the method. Please note that because it is a method we need parentheses and curly bracers. We also need to return something

```
get mostRecentReport () {
  if (this.reports.length >0){
    return this.lastReport
  }else {
    throw new Error("No report found")
  }
}
```

> How can we then access it? We access it as a `property`, not as a `method`! So we do not need parenthesis:

```
myAcc.mostRecentReport
```

> Behind the scenes myAcc.mostRecentReport will execute that method even when accessed as property. But we do not call it as a method. We do not do this: `myAcc.mostRecentReport()` ❗

> Whole code then looks like this:

```
class Accounting extends Department {
  private lastReport: string;
  reports: Array<string>;

  get mostRecentReport() {
    if (this.reports.length > 0) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  constructor(id: number, size: number) {
    super("Accounting", id, size);
    this.reports = [];
    this.lastReport = this.reports[0];
  }
  addReport(name: string) {
    this.reports.push(name);
    this.lastReport = name;
  }
}

const myAcc = new Accounting(10, 100);
myAcc.addReport("rep1");
myAcc.addReport("rep2");
console.log("what is my last report? ", myAcc.mostRecentReport);
console.log("myAcc", myAcc);
```

> We can also define a setter method. This method will allow us to set some avlues from outside even for a private property like lastReport.

> In order to create a setter, we need a `set` keyword, then name of the setter method. This method then must take an argument. Then in the body, we can write any logic which will store this value.

```
set mostRecentReport(value: string){
 this.addReport(value)
}
```

> Above setter is an alternative to `addReport`. We can even re-use the `addReport` method. But on top of it, maybe we want to add some more logic to it.

> How to then use the setter? IZI:

```
myAcc.mostRecentReport = "hahaaaa";
```

> Please note we cannot access it as a method: `myAcc.mostRecentReport("hahaaaa")`. We access it as a property! Both getters and setters behave like properties, not methods.

> Whole code then looks like this:

```
class Accounting extends Department {
  private lastReport: string;
  reports: Array<string>;

  get mostRecentReport() {
    if (this.reports.length > 0) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  constructor(id: number, size: number) {
    super("Accounting", id, size);
    this.reports = [];
    this.lastReport = this.reports[0];
  }
  addReport(name: string) {
    this.reports.push(name);
    this.lastReport = name;
  }
}

const myAcc = new Accounting(10, 100);
myAcc.addReport("rep1");
myAcc.addReport("rep2");
console.log("what is my last report? ", myAcc.mostRecentReport);
myAcc.mostRecentReport = "hahaaaa";
console.log("what is my last report? ", myAcc.mostRecentReport);
console.log("myAcc", myAcc);
```

> Getters and Setters encapsulate logic and add soem extra logic when we try to read and set some property.

**Static properties and methods**

> `Math` is a class in Javascript which allows you to access for example constant pi with `Math.PI` or many other cool features like `Math.round()`.

> Static methods and properties are called on the class itself. Not on its instance. So on `Department`, `Accounting` or `IT`. Not on `myAcc` or `myIT`. Use case could be that you want to store some globals in the class itself, but you want it to be also used outside.

> Let's create a method in Department class which will help create emlpoyees:

```
class Department {
  ...
  static createEmployee(name: string){
    return { name: name}
  }
  ....
}
const employee1 = Department.createEmployee("Adda")
console.log("emplyoee1", employee1)
```

> Likewise, we can also create a static property which can be called on a class itself without instantiating it:

```
class Department {
  ...
  static fiscalYear = 2022
  ....
}
console.log("year", Department.fiscalYear)
```

> If I add static properties or methods to a class I cant access them from the non-static parts of the class. I wont be able to use them for example in constructor using `this` keyword:

```
class Department {
  ...
  static fiscalYear = 2022
  static createEmployee(name: string){
    return { name: name}
  }
constructor (){
  console.log(this.fiscalYear)
}
  ....
}
```

> Reason is `this` keyword refers to the instance of the class, not the class itself. Static is not available on the instance of the class. Whole idea of static is to use it on the class itself without instantiating it. They are detached from the instances of that class.

> In order to acceess statics from inside of the class we need to use them with the name of the class:

```
class Department {
  ...
  static fiscalYear = 2022
  static createEmployee(name: string){
    return { name: name}
  }
constructor (){
  console.log(Department.fiscalYear)
}
  ....
}
```

**Abstract classes**

> Imagine we have a method like `describe`, which however cannot be generalized for all children, but depends on and is subject to the implementation of child classes. Then instead of providing a generic describe method on Department, we want to `enforce` that all our child classes implement their own describ method. We want to make sure that none of the children misses to implement it.

> To ensure it, we can define an abstact method on the Department which will then require each child to implement their own version of the method.

```
abstract class Department {
  ...
  abstract describe(): void;
  ....
}
```

> Please note that we use `abstract` keyword in front of the method. Instead of curly braces we only define the return type.

> Please also note that if we have 1 or more abstract methods in our class, we also need to use abstract keyword in front of the entire class!

> Now that our Department is abstract, our IT and Accounting department will throw an error, because they dont have their own custom implementations of the describe. Let's implement them:

```
class IT extends Department {
  ...
  describe() {
    console.log("This is an IT department with emplyoees: ", this.employees);
  }
  ...
}
const myIT = new IT(12, 20, ["Adda"]);
myIT.describe();

class Accounting extends Department {
  ...
  console.log(
      "This is an Accounting department with reports: ",
      this.reports
    );
  ...
}
const myAcc = new Accounting(10, 100);
myAcc.describe();
```

> Very important note is that abstract classes can't be instantiated themselves. It is just a class which is there to be inhereted from, so that inheriting classes can be instatiated and it forces its child classes to provide full implementation (of describe method in our example)

> In other words, abstract class is a class which cant be instantiated, it can only be extended.

**Private constructors**

> In object oriented programming we have something called `singleton pattern`. Singleton patter ensures that we always only have 1 single instance of a class. They are useful when we cant use static methods and you dont want to create multiple object from a given class (you only want to have exactly one object based on this class). For example if we know we only have exactly one Accounting Department we might want to only allow for creating one such object based on Accounting class.

> In order to avoid being able to call `new Accounting()` multiple times, we can turn our construtor into private using a `private` keyword in front of it:

```
class Accounting extends Department {
  ...
  private constructor() {
    ...
  }
  ...
}
```

> This will mean we cannot calls `new` on it:

```
const myAcc = new Accounting()
```

> Our constructor is only accessible from the `inside` of the class. But how can we create an object out of it if we cannot call it from outside of the class? The answer are `static` methods which can be called on the class itself without instantiating them.

> We can create a `static` property called for example `instance` (can be other name), which will be undefined initially, but once we instantiate the Accounting class, then we store that instance there. It will be our flag which denotes whether we already have an instance or not.

> Furthermore, we will also add a static method called `getInstance` (can be other name), which will instanciate our class and have there the logic to check if we already have such a class.

```
class Accounting extends Department {
  private static instance: Accounting;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new Accounting(10, 100);
      return this.instance;
    }
  }

  private constructor(id: number, size: number) {
    super("Accounting", id, size);
    this.reports = [];
    this.lastReport = this.reports[0];
  }
}
```

> Please note that in `static getInstance()` method `this` keyword refers to the `class` itself not to its instance. For nont-static methods it referes to the instance of the class.

> Alternative would be that we use `Accounting` instead of this `keyword`:

```
class Accounting extends Department {
  ...
  static getInstance() {
    if (Accounting.instance) {
      return Accounting.instance;
    } else {
      Accounting.instance = new Accounting(10, 100);
      return Accounting.instance;
    }
  }
  ...
}
```

> Please note, that inside of the class we `can` use `new Accounting()` which means we can use the private constructor. Even if it is private it can be used from within the class.

> How can we then create an object out of such class?

```
const myAcc = Accounting.getInstance();
```

> If I call `Accounting.getInstance()` again I will not create two objects, I will get the same object referenced:

```
const myAcc = Accounting.getInstance();
const myAcc2 = Accounting.getInstance();
const myAcc3 = Accounting.getInstance();
```

**Interfaces**

> Interafces are a feature of Typescript, not vanilla Javascript. Interface describes how an object should look like. In order to create on we use keyword `interface` and then its name with capital letter (this is a convention, not a must):

```
interface Person {
  name: string;
  age: number
}
```

> Unlike `class`, `interafce` is not a blueprint. It is a custom `type` which defines which properties and their types it is going to have. It does not store concrete values like "Addania" and "18". If I try to initialize it with a concrete value, I would get an error:

```
interface Person {
  name: string = Mia;
}
```

> We can also define types for methods in the interface:

```
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
```

> `greet` is our method, `phrase` is the parameter which needs to be provided to that method and `void` is its return type.

> Why do we use interfaces? We can use it for type checking. If wecreate a let at the beginning maybe we dont want to give it a value, we just want to make sure later on it is assgined a proper object with a proper type. We can use our new interface as a custom type:

```
let person: Person
```

> Then when we assign a value to person, it needs to follow the structure we defined in the interface:

```
person = {
  name: "Addania",
  age: 18,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
person.greet("Hi, my name is");
```

> But WHY?? Why an interface and not just a regular type? All we need is to remove `interface` keyword and use `type keyword and we also need an equal sign.

```
Person = {
  name: string;
  age: number;
  greet(phrase: string): void;
}
```

> This will also work! We can use them interchangeably. But interafce and a type are not the same. And there are differences.

> `Interfaces` can only be used to describe an object! No other type. `Types` are more generic and we can store any type there: union type, function type, etc. `Type` is more flexible, but `interface` is clearer that conveys the intention on defining an object.

> With interface we can also implement an interface in the class! (Although we can also do it with the custom type). Interface then declares a contract which a class need to adhere to. For example:

```
interface Greetable {
  name: string;
  greet(phrase: string): void;
}
```

> Now how to define that a class should adhere to this contract (interface)? We use `implements` keyword.

```
class Person implements Greetable {...}
```

> Class can implement multiple interfaces:

```
class Person implements Greetable, Admirable {...}
```

> Whole code:

```
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
const queen = new Person("Mia");
queen.greet("Your Majesty");
```

> This class can also have more properties and more methods!

```
class Person implements Greetable {
  name: string;
  age: number = 18;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
  print(){
    console.log("Test run")
  }
}
```

> Often what we want is to share interfaces between different classes, so that they have a common structure to adhere to, but each class can also have its specifics. Please note we still can inherit from such a class.

> Interaface is a bit like an abstract class, but interface does not have any implementation details at all. Abstract classes (because they are classes) can also hld other implementation details (apart from the abstract method)

> Terminology: Person is a class which implements Greetable interface

> Why interfaces? We use them when we want to ensure and force that a class has a certain structures (like a greet method). We can then easily share functionalities among classes, and each class can then have its own implementation of that interface (methods and properties). It is especially useful when other parts of the code rely on that structure.

> Private and public modifiers are not available in the interface. So this code will not work:

```
interface Greetable {
  private name: string;
  public age: number;
}
```

> But we can use `readonly` modifier to mark the property which can only be set once and is readonly thereafter:

```
interface Greetable {
  readonly name: string;
}
```

> We can use readonly also on a type:

```
type Greetable = {
  readonly name: string;
}
```

> Please note that if I use `readonly` in the `interface`, then I don't have to set readonly property inside of the `class`. And still, it will throw an error if I try to re-assign the value to the name.

```
interface Greetable {
  readonly name: string;
}
class Person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let queen: Greetable
queen = new Person("Mia");
queen.name = "Adda";
```

> In above code `queen.name = "Adda";` will throw an error.

> We can also implement inheritance in interfaces. For example, we can have Named and Greetable as two separate interfaces and our class will extend both of them:

```
interface Named {
  name: string;
}
interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let queen: Greetable;
queen = new Person("Mia");
queen.greet("Your Majesty");
```

> Alternatively, perhaps we know that each Greetable object always need to have a name, then we could extend Greetable interface with Named interface, so that together they form a new interface which forces every Greetable object to have a greet method but also to have a name. How to do it? We can simply use extends keyword after the interface name.

```
interface Named {
  name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
```

> Our class then can only implement Greetable but it automatically also needs to have name property:

```
class Person implements Greetable {...}
```

> We could also extend multiple interfaces:

```
interface Named {
  name: string;
}
interface Greetable extends Named, AnotherInterface, CoolInterface {
  greet(phrase: string): void;
}
```

> For classes you can only inherit from one class! We cannot inherit from multiple classes! So you cannot do this:

```
class Person extends Being, Human {...}
```

> Interfaces can also be used in order to define the structure of a function as a replacement of function types. Function types look like this:

```
type Add = ( n1:number, n2:number ) => number
let add: Add;
add = (x: number, y: number) => {
  return x+y
}
```

> Interfaces define structure of objects and functions are objects. So defining a function with and interface we do the following:

```
interface Add {
  (n1:number, n2:number): number
}
```

> This is similar how we would type a method in the class (except we dont have a name of the function, it is an anonymouse function in the interface function definition)

> Optional properties in interfaces are denoted with a questionmark:

```
interface Add {
  name: string;
  age?: number
}
```

> We can also make methods optional:

```
interface Add {
  name: string;
  age?: number
  greet?(phrase: string): void
}
```

> Just like we can make a property in the class optional:

```
class Person {
  name?: string
  constructor(n?: string){
    if(n){
      this.name = n
    }
  }
}

const Dave = new Person()
```

> Notice how we do not have the then pass any argument when instantiating the class `new Person()`. Alternatively, instead of a questionmark, we could provide the default value for n in the constructor:

```
constructor(n: string = "human")
```

> Please note that optional property in interface and class are only loosly related. I can have an optional parameter in interface, but a required parameter in the class!

> Optional parameters can also be in constructor or methods. If we have one, we can use questionmark to denote it or use a default value if that parameter is not provided

> Now let's take a look at the js file and see how interfaces are compiled to js... The answer is... NOTHING! They are not compiled, they are completely absent. It is only typescript feature helping during development helping to write clearer code. No trace will be left in the production.

> One last note: what is the difference between interface and the class: interfaces cant be instantiated and are not compiled to js. Classes can be instantiated and are compiled to js.
