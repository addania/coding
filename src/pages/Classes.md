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
