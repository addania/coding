---
title: "React Course Notes"
date: "2020-06-20"
category: "knowledge-base"
---

![](https://i.imgur.com/jX7rNIv.jpg "Photo by PhotoMIX Ltd. from Pexels")

**Basics**
> Javascript is a programming language that can be executed in browsers.

> Advantage of Javascript is that web applications written in Javascript are fast and behave like mobile apps - user do not need to wait for page reload

> React is a Javascript library which makes it easy to build interactive and fast Javascrip driven web applications and user interfaces.

> Because React apps are written in Javascript, they can run in users's browser. They do NOT run on server. Using users's browser makes it way faster! Things happen instantly, we do not have to wait for server response to get the new page rendered.

> User interface in this context means what user sees and React is all about building components to use those.

> Component is a contained piece of code which can be re-used multiple times

>We do not need to rebuild whole page every time. Web page will consist of tiny little components and only those that change will be refreshed.

>Components keep our code manageable

>If we want to change the headline component, we can change it in one place, instead of 20 places.

>React componenets can be thought as custom HTML elements

>In order to use react we need to import react to our application. We actually need to import react and react-dom

>React imports a library which hold entire logic of building components

>React DOM imports possibility to insert our react to an actual DOM.

>React uses next generation Javascript syntax, such as JSX and for that we need a special compiler called Babel which will make sure our code can run in the browser! Basicaly we write code with all fancy features and Babel then ships to browser, so that it can run

**Pure HTML and CSS compared to React**
> We can write a code like this:

HTML:
```
<div class="person">
  <h1>Addania</h1>
  <p>Nick: Adda</p>
  <p>Location: Meadows</p>
</div>
<div class="person">
  <h1>Sam</h1>
  <p>Nick: Nam</p>
  <p>Location: Gym</p>
</div>
<div class="person">
  <h1>Ditulienka</h1>
  <p>Nick: Slniecko</p>
  <p>Location: Cafe</p>
</div>
<div class="person">
  <h1>Lubo</h1>
  <p>Nick: Captain</p>
  <p>Location: Satellite</p>
</div>
```

CSS:
```
.person {
  display: inline-block;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  padding: 10px;  
}
```

![](https://i.imgur.com/33tZHVA.png)

> With react we can write a component which looks like a function and returns what looks like html elements! Normally we cannot user html in javascript, it would throw an error, but because we use Babel as a compiler, we can use html in javascript and this is called JSX. In reality it only looks like html, behind the scenes it will be converted to pure javascript. It is just for us to make our life easier.
JS
```
function Person () { 
  return (
  <div className="person">
      <h1>Addania</h1>
       <p>Nick: Adda</p>
      <p>Location: Meadows</p>
   </div>
  )
}
```
>Pleas note that in React we need to use classNanme instead of class, because class is a reserved name for class components. This is a proof that our HTML in Javascript actually is not an HTML.

>But this will do nothing yet. We need to tell react where in website we want to render it. For that we imported react-dom. react-dom exposes an object called React-DOM where we define which component we want to render where in website. ReactDOM has a render method allows us to render javascript function as a component to the real dom.
JS
```
function Person () { 
  return (
  <div class="person">
      <h1>Addania</h1>
       <p>Nick: Adda</p>
      <p>Location: Meadows</p>
   </div>
  )
}

ReactDOM.render(<Person/>,document.getElementById('root'));
```
HTML:
```
<div id="root"></div>
```

![](https://i.imgur.com/s0xy9Lf.png)

>Yay, we generated our beautiful component. But it is static only for Mia. How about we want to make it more dynamic? Instead of hard coded values, we can use props which is an object that holds values for all attributes we give to our component Person (such as name, location and nickname):

JS
```
function Person (props) { 
  return (
  <div class="person">
      <h1>{props.name}</h1>
       <p>Nick: {props.nickname}</p>
      <p>Location: {props.location}</p>
   </div>
  )
}

ReactDOM.render(<Person name="Addania" nickname="Adda" location="meadows"/>,document.getElementById('root'));
```

>And now drumroll, power of React will come, we can reuse our component:
HTML:
```
<div id="p1"></div>
<div id="p2"></div>
```
JS
```
function Person (props) { 
  return (
  <div class="person">
      <h1>{props.name}</h1>
       <p>Nick: {props.nick}</p>
      <p>Location: {props.location}</p>
   </div>
  )
}

ReactDOM.render(<Person name="Addania" nick="Adda" location="meadows"/>,document.getElementById('p1'));
ReactDOM.render(<Person name="Sam" nick="Nam" location="Gym"/>,document.getElementById('p2'));
```
![](https://i.imgur.com/rPfOuIR.png)

>We used only one component and rendered it twice with different values! OP React!

>We can optimize it even further. Instead of having multiple render methods, we can only have one and create a variable which will then render all our elements. This way is much more popular in real life applications.

HTML:
```
<div id="root"></div>
```

JS:
```
function Person (props) { 
  return (
  <div class="person">
      <h1>{props.name}</h1>
       <p>Nick: {props.nick}</p>
      <p>Location: {props.location}</p>
   </div>
  )
}

var element =  (
  <div>
    <Person name="Addania" nick="Adda" location="meadows"/>
    <Person name="Sam" nick="Nam" location="Gym"/>
      <Person name="Ditulienka" nick="Slniecko" location="Cafe"/>
    <Person name="Lubino" nick="Captain" location="Satellite"/>
  </div>
)

ReactDOM.render(element,document.getElementById('root'));
```

![](https://i.imgur.com/33tZHVA.png)

**Why React**
- UI state becomes easier to manage compared to Vanilla Javascript
- Focus is on business logic, not on preventing your app from exploding
- High performance
- Huge community

**Application types**
- Single page applications
- Multi page applications

> Single page application - we only get back one single HTML file from the server and we get back this file the first time the user visits. Afterwards everything else is managed by Javascript with react. Entire page consist of components which are handled and rendered by Javascript! You never need to go back to server to reload the page!! Which is amazing user experience. Everything happens instantly. Entire page/ app is handled by React. We typically only have one ReactDOM.render() call.

> Multi page application - we get back multiple HTML pages where each page has the content for a given route (a given URL we visited). For example.com and example.com/users, we get back two different pages. Here entire page is just HTML and CSS and maybe only some elements are react (but the dont know about existance of each other). Typically have multiple  ReactDOM.render() to call react components

**Next generation JS - refresher**

**Variables**

> Let and const are different way of creating variables. Var used to be only way to create variables, with ES6 we have const and let as well. Let is a new var - used for creating variable values. Const creates a constant value which does not change

**Functions**

> Normal function in JS looks like this:
```
function myFun () {}
```
> Arrow functions is another syntax for creating functions in Javascript:
```
const myFun = () => {}
```
>Arrow functions solve a lot of previous issues with `this` keyword. Before `this` could change its context unexpectedly. IN arrow functions it will not.

>To shorten the arrow function, we can omit brackets around arguments if there is EXATLY ONE argument. Imagine we have following function:
```
const myFun = (name) => {}
```
> We can shorten it to: 
```
const myFun = name => {}
```
> To shorten arrow function, we can omit curly braces and word `return` in case the whole body of the function is just one return statement.  Imagine we have following function:
```
const multiply = number => {
    return number*2
}
console.log(multiply(4))
```
> We can shorten it to: 
```
const multiply = number => number*2
console.log(multiply(4))
```

**Exports and imports**
> Javascript code is odular, we can split it to multiple files. IN one file we can then import other files or export current content of file.
> There are two way to import and export files - default exports and named exports
> Default export - the only thing that gets exported from this file is personObject:
person.js
```
const personObject = {
    name="Adda"
}
export default personObject
```
>Default import - we can give it any name we want, it will always be just that personObject, which in other files we might want to call differently:
app.js
```
import anything from './person.js'
import prsn from './person.js'
import user from './person.js'
```
>Name export - we have multiple things exported from one file, each by its own unique name:
users.js
```
export const person = {
    name="Adda"
}
export const animal = {
    name="Tiger"
}
export const plant = {
    name="Bamboo"
}
```
> Named import - we can only import object by their own name. We can also deicde which objects we actually want to import:
app.js
```
import { person } from './users.js'
import { animal } from './users.js'
```
> Named imports - if we want to still change the name, we can assign it an alias:
app.js
```
import { person as Emperor } from './users.js'
import { animal as Pet } from './users.js'
```
> Named imports - if we want to change name for everything what we import from some place, we can use `* as` followed by an `alias`. This alis is a Javascript object which exposes all the constants which are named exported from that file. These are then accessible by `alias.constant`:
app.js
```
import * as users ' from ./users.js'

console.log(users.person, users.animal, users.plant)
```

**Classes:**
> Classes are blueprints for objects.
> 
>Defining a class with  keyword `class`
```
class Person {
    name="Adda"
    call = () => {...}
}
```
> Above class Person has one property `name` and a method `call`.
> `Method` is just a function attached to classes.
> `Properties` are variables attached to classes.

>One specific example of a class is instantiated with a keyword `new` (usage of classes):
```
const adda= new Person()
adda.call()
console.log(adda.name)
```
>Classes are a more convenient way how to write constructor functions in javascript

>Idea is - we create javascript objects with classes as blueprints
>Clases support inheritance - meaning child class can take all the properties and methods from the parent class and use them and potentially adding its own new properties and method:
```
class Person extends Human
```
>Each and everyclass has a default function/method called `constructor`, which is always called when class is created and it adds initial properties to the class:
```
class Person {
    constructor(){

    }
}
```
>Within constructure we can setup our properties with `this` keyword:
```
class Person {
    constructor(){
        this.name="Mia";
    }
}
```
>Let's add a method which prints out person's name:
```
class Person {
    constructor() {
        this.name = 'Mi';
    }
  
    printMyName() {
        console.log(this.name);
    }
}
```
>Now we can create a new instance of the class and store it in a variable:
```
const adda = new Person();
adda.printMyName();
```
>Let's create a class human:
```
class Human {
    constructor() {
        this.gender = 'female';
    }
  
    printGender() {
        console.log(this.gender);
    }
}
```
>If Person inherits from Human, person can also have gender available. We can create inheritance by keyword `extends`

```
class Person extends Human{
    constructor() {
        super();
        this.name = 'Mi';
    }
  
    printMyName() {
        console.log(this.name);
    }
}
```
>Please note that if we use constructor and extends, we need to also use special method called `super`. It executes parent constructor. Which we have to do in order to correctly initiate parent class

>Now we can call printGender method on our adda variable (instance of class Person):
```
const adda = new Person();
adda.printGender();
```
>Even if class Person inherits gender from class Human, we can set our own gender in the Person class:

``` es6
class Person extends Human{
    constructor() {
        super();
        this.name = 'Mi';
        this.gender = 'unknown'
    }
  
    printMyName() {
        console.log(this.name);
    }
}
```

>Why to bother with classes? React uses classes to create components. There is also another way how to create components - functional components.

>New generation JS - ES7 lets us ommit `constructor` within classes and `this` when creating properties(variables)
``` es6
myProperty="value"
``` 

>The same goes for methods, instead of defining method like this:
``` es6
myFunction() {}
```
>We can use syntax like this (think of it as a property and then arrow function):
``` es6
myFunction = () => {}
```
>Example:
``` es6
class Person {
  name="Adda";
  printName = () => {
    console.log (this.name)
  }
}
const m= new Person();
m.printName()
```

>Please note, that we still need to use `this`keyword when accessing the property.

> Similarly, we can also omit `super`
``` es6
class Human {
  home = "Earth";
printHome = () => {
  console.log(this.home)
 }
}
class Person extends Human {  
  name="Adda";  
  printName = () => {
    console.log (this.name)
  }
}
const m= new Person();
m.printName()
m.printHome()
```
**Spread and Rest operator**
>Both spread and rest operator is just ... yes, literally, just three dots `...`. If it is spread or rest depends on where we use it.

>Spread - splits array elements OR object properties

> Imagine we have oldArray which we want to cpy and add new elements:
``` es6
const oldArray= [0, 1, 2]
const newArray= [...oldArray, 3, 4]
console.log(newArray)
```
>Reasult will be [0, 1, 2, 3, 4]

>Same goes for objects:
``` es6
const oldObject= {name: "Adda", title: "Invincible"}
const newObject= {...oldObject, mount: "Spectral Steed"}
console.log(newObject.name, newObject.mount)
```
>These three dots pull out `all` the properties of the old object and we are able to add new one

>If old object had the same property as we assign it in the new one, old property will be overwritten
``` es6
const oldObject= {name: "Adda", title: "Invincible"}
const newObject= {...oldObject, title: "The Queen"}
console.log(newObject.name, newObject.title)
```

>Result will be `Adda` and `The Queen`

>Spread operator is a convenietn way also to copy array or object and create a new one without modifying the old one.

>Rest operator is used to merge a list of function arguments into an array.  We use it in functions for arguments., for example when a function can receive unlimited amount of arguments. We want then create an array from those arguments and use array methods on it.
``` es6
function sort(...args){
    return args.sort()
}
```
>Another example:
``` es6
const filter = (...args) => {
    return args.filter(element => element === 1);
}
console.log(filter(1,2,3)) // [1]
```

**Desctructuring**
> Destructuring allows easily extract array elements or object properties and store them in variables.

> Sounds like spread operator. But spread operator takes out `all` properties, all elements and distributes them in new `array` or `object`.

>Destructuring allows to pull out `single` elements or properties and store them in `variables`.
``` es6
[ name, title ] = ['Adda', 'The Emperor']
console.log(name) // 'Adda'
console.log(title) // 'The Emperor'
```
>It looks like we are creating a new array, but we are not, we are `destructuring` and array and creating 2 variables: name and title

>The order defines which property name withh be (the first), title (the second).

>I can skip an element:
``` es6
[ race, ,spec, profession ] = ['Night Elf', 'Druid', 'Restoration', 'Enchanter']
```

>Similarly for objects. But for objects propert name will define which value will be taken out into variable
``` es6
{ pet } = {mount: 'Dragonkin', pet:'The Phoenix'}
console.log(pet) // 'Dragonkin'
console.log(mount) // undefined
```
**Primitive types**
>Primitive type is for example number, string or boolean. These are always copied to a new variable!
``` es6
let number = 8;
let number2 = number;
console.log(number2) //8
number2=4
console.log(number) //8
```
>So practically these are 2 different variables.

**Referenced types**
>Arrays and objects are more complex constructs and they are passed by reference and not copied:
``` es6
const achievement1 = {
  name: 'The Patient',
  skillpoints: 100
}
const achievement2 =achievement1
achievement1.skillpoints= 1000
console.log(achievement2.skillpoints) //1000
```
>How does it work? Object achievement 1 will be pointing to a memory object. Then achievement 2 is referencing achievement 1 which means its pointer is also pointing to the same object in the memory. Achievement 2 was not copied, only referenced, therefore it does not have its own memory address. Therefore both achievement 1 and 2 are pointing to the same memory address.

> It is same for arrays.

>In react referencing and object is tricky, because we can change the object in one place and it will also be visible in other places in app which reference it. 

>Therefore in React we will often you spread operator to really copy the object and create a completely new one, with its own memory address:
``` es6
const achievement1 = {
  name: 'The Patient',
  skillpoints: 100
}
const achievement2 = {...achievement1}
achievement1.skillpoints= 1000
console.log(achievement2.skillpoints) //100
```

**React build workflow**
> In order to have a nice build for our project we will need
- dependency management tool (npm -node package manager or yarn) which will take care of downloading, installing and updating of all our 3rd party libraries / 3rd party Javascript packages we might want to use in the project (react, react-dom, compiler from next gen JS features to older features which will run on older browsers, lodash, moment, etc). We will use NPM in this project. You can get NPM when you install `node.js` from their official site: nodejs.org Since then you will be able to use `npm install` commands in your terminal and node.js also ships the development server which we can run locally on our pc to test the app
- bundler (Webpack) - we want to write modular code and split it up over multiple files so that each file has a clear task/focus and therefore easier to maintain. But upon shipping , we want to bundle it into only couple of files (or even one) because older browsers do not even support splti up files. It is also not optimal to make 1000 or requests to all this tiny files. We will use Webpack which is a standar bundler. Webpack does not only bundle files, but allows us to do couple of steps before bundling. Which can be convenient.
-  compiler (Babel)-  compiling those next gen JS features which are then transpiler into workarounds which work on older browsers. Babel and presets can be hooked into Webpack configuration so that they are part of the bundling and optimization process
-  development server to test our app locally on our computer (machine). Development server is a web server running on our machine. This webserver will emulate how the app woudl be actually running on a real server

**Create React App**
> In order to instal create react app (official way to start react project, type in your command line:
``` es6
sudo npm install -g create-react-app
```

>Then you have create react app installed globally on your pc and can create your own projects:
``` es6
create-react-app hamburger_app 
```

``` es6
create-react-app hamburger_app --scripts-version 1.1.5
```

>Then you can navigate to your project with (cd- change directory) and start the project with npm start
``` es6
cd hambuerger_app
npm start
```

>In your browser then go to url: http://localhost:3000/

>Your app is running there

**File structure of the project provided by create-react-app**
> `package.json` - all dependencies we have in our project plus scripts defined in the project 
> `package-lock.json` or yarn.lock these files lock the versions of dependencies we are using. Why? because package.json would say any version above 4.1 and package-lock.json would lock it to one particular one, so that the app is stable and predictable
>`node_modules` folder holds all dependencies and sub denendencies of the project. When we do npm install, program will look what dependencies are in package.json and remove existing dependencies and install them again into node_modules folder automatically. Therefore never edit anything manually in this fodler
>`public` folder - is a root folder which get served by webserver in the end. It holds only files which we can edit. One important file is there: `index.html`. It is the only html page we will have in the project, we will not add more. In the end the script files will get injected to this html file `by our build workflow` (there is no script import in the html file - will be done by build workflow). Within the filte, there is only important element: `<div id="root"></div>`. This is exactly the place where we mount our React application. What you can however do in the html file is to add some 3rd party libraries, CSS libraries, edit meta tags, etc. 
>`manifest.json` is there because create react app give us progressive web app out of the box. In this file we can define some meta data about our application. What is progressive web app? Progressive Web Apps (PWAs) are web applications that are regular web pages or websites, but can appear to the user like traditional applications or native mobile applications. The application type attempts to combine features offered by most modern browsers with the benefits of a mobile experience.
>`src`is a folder which holds scripts of our React application. These are the files we will work with. `index.js` get access to the DOM's element with the id of "root" (in html file) and mounts our application there. our application is called `<App />` and is imported from `App.js`. `App.js` holds our very first React component. We also have `App.css` with some styles which are however not related to only that one file `App.js`. These styles are global. We also get `index.css` file which also hold global styles which are more general, for example for the body of our app. `registerServiceWorker.js` is important for registering a service worker which is generated automatically because of that progressive web appy which we get out of the box. It will pre-cache our script files automatically. `App.test.js` - a test file which allows us to create `unit tests` for specific units, for example components. Notice also that our file extention is .js but it could also be .jsx - they are eqivalent (jsx only because we write "what-looks-like html code" into javascript files - but it is not really a n html code, it is just a sugar code so that it resembles html, but is easier to write for developers).  


**Dependencies**
- react-scripts -package which offers build workflow, development server, all the next gen JS features and

**Scripts**
> Scripts are found in package.json
>  All can be run with `npm run` and then the script
``` es6
npm run start
npm run build
npm run test
```

> npm run start - starts development server
> npm run build - builds and optimizes the app upon deployment! it would store the optimized code in a folder. At the beginning of the project you would not see the compiled code in the folder structure, compilations happens in the memory
> npm run test - runs the tests

**Components**
> Componenets are reusable custom html elements

>React components can be defined in 2 ways: class components and functional components
>Example of class component definition:
``` es6
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello worlds</h1>
      </div>
    );
  }
}
export default App;
```
>For this claas component will need to import React which will render everything and also Component itself which is our parent Javascript class from which our components will inherit. This class has one important method: `render` method. It needs to have this method because React will call this method to render something to the screen.

>Every React component has 1 job to do: to render some html code which can be rendered to the DOM to the screen.

>There are other things components can do: reach out to internet, do some calculations, listen to some events...

>Then there is a default export for this App component. Which means if you import the whole files somewhere, what will be exported is App component wnd on the import side we can name it anything.

>JSX in our code:
``` es6
 return (
      <div className="App">
        <h1>Hello worlds</h1>
      </div>
    );
```

>can be re-written using react method `React.createElement`. This is what the compilation will do when it see "html" code in javascript file:
``` es6
 return React.createElement('div',null, 'h1', 'Hi')
```

>React.createElement() take at least 3 arguments (but can be infinite).

>First argument is the element we want to rendere to the DOM. For example classical html div, button, etc or our own component `<Header>`

>Second argument is configuration for what we want to render. Configuration is a Javascript objectm but if we do not want to configure anything, we cal pass null. 

>Third argument is any amount of children separated by comas. Children means what is nested inside our div

>But problem is that h1 will be interpreted as a text. So if we really wanted to create h1 tag we would need to write:

``` es6
 return React.createElement('div',null, React.createElement('hi',null,'Hi'))
```

>If we also wanted to pass a class to our element we would pass an JS object as second parameter:
``` es6
 return React.createElement('div',null, React.createElement('hi',{className:'App'},'Hi'))
```
>The code above is actually equivalent to what the original JSX and it is what our JSX will eventually compile to:
>Our JSX (which resembles like html, but is NOT; it is simply suger coated JS) looked originally like this:
``` es6
 return (
      <div className="App">
        <h1>Hello worlds</h1>
      </div>
    );
```

>Compiled equivalent is:
``` es6
 return React.createElement('div',null, React.createElement('hi',{className:'App'},'Hi'))
```

>Writing code with React.createElement soon becomes cumbersome especially when we want to nest elements

>Notice how we cant use word `class` in out JSX when wanting to apply CSS class. Word `class` is a reserved word in JS for creating classes. Therefore for CSS classes we need to use `className`

>The fact that we can use html-resembling tags in JS, is because React library provides it for us

>Another restriction is that when we create a component it can only return 1 root element. 

>Following code will not work
``` es6
 return (
      <div className="App">
        <h1>Hello worlds</h1>
      </div>
      <h2>I am here</h2>
    );
```

>We need to wrap it all in a div, so that it can be rendered
``` es6
 return (
     <div>
      <div className="App">
        <h1>Hello worlds</h1>
      </div>
      <h2>I am here</h2>
      </div>
    );
```

> Components in our project will follow a standard convention of separating each component into a folder and name of the folder will have the component name in capital

**Functional components**
> In the simples form a component is just a function which returns some JSX.
``` es6
import  React from 'react';
export const Person = () => {
    return (
        <h2>I am a person</h2>
    )
}
```
>Notie that we also exported the elements with keyword `export`so that we can use it on other files

>Then we can use it our App.js
``` es6
import React, { Component } from 'react';
import './App.css';
import { Person } from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello worlds</h1>
        <Person />
      </div>
    );
  }
}
export default App;
```
>Notice that we need to import the element first from our Person.js file which resides in Person folder. We can import it with: `import { Person } from './Person/Person.js'` but because of our build we can omit `.js`

>Also notice that in order to use the component we use: `<Person></Person>`or as a self-closing tag `<Person />`

>Components are cool because they are resuable and configurable.

>Configurable means we can have dynamic content in our JSX
``` es6
import  React from 'react';
export const Person = () => {
    return (
        <h2>I am a person and I am {Math.floor(Math.random()*30)} years old</h2>
    )
}
```

>Notice that we need to use curly braces if we want to use JS in our JSX.

>We can also pass some content from App.js to our component with props to configure what we want Person component to output. This is what supply from App.js
``` es6
<Person name="Adda" age="18"/>
<Person name="Sam" age="20">My hobbies: Motor Racing</Person>
```
>Then in Person component we can use those properties in an object called props (but we can choose any other name). This object holds all the properties of this component:
``` es6
import  React from 'react';
export const Person = (props) => {
    return (
        <h2>I am a {props.name} and I am {props.age} years old</h2>
    )
}
```

>Or we can destructure the props:
``` es6
import  React from 'react';
export const Person = ({name, age}) => {
    return (
        <h2>I am a {name} and I am {age} years old</h2>
    )
}
```
>Notice how we still dont display `My hobbies: Motor Racing` for Sam. We can pass not only attributes to the component but also content between starting and closing tags. This special prop which React gives us access to is prop called `children`. It is a reserved word. In code it will look like this:
``` es6
import React from 'react';

export const Person = ({name, age, children}) => {
    return (
        <div>
        <h2>I am a {name} and I am {age} years old</h2>
        <p>{children}</p>
        </div>
    )
}
``` 
>Or alternatively
``` es6
import React from 'react';

export const Person = (props) => {
    return (
        <div>
        <h2>I am a {props.name} and I am {props.age} years old</h2>
        <p>{props.children}</p>
        </div>
    )
}
``` 

**Component State**
>Props are passed from outside to the component. Props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

>State is managed from inside of the component. For example input value, on click from button , etc.

>State in class based components is like a variable that will be saved and updated from the component. The state is actually and object. 

>`state` is a reserved word for class based components and is declared like this:
``` es6
class App extends Component {
  state = {
      persons: []
  }

  render() {
    return (
      <div className="App">
        <h1>Hello worlds</h1>
        <Person />
      </div>
    );
  }
}
```
>More sophisticated example:
``` es6
class App extends Component {
  state = {
      persons: [
        {name: "Adda", age: "18"},
        {name: "Pete", age: "15"},
      ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello worlds</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
    );
  }
}
```

>Word `this`refers to the class (App) which has a property `state`. We can define our own prperties, but state is a special one. State can be changed but if it changes, it will lead React to update the DOM! (Also changes in props lead React to re-render components). Let`s do just that.

>We will have a button to print something to console.
``` es6
class App extends Component {
  state = {
      persons: [
        {name: "Adda", age: "18"},
        {name: "Pete", age: "15"},
      ]
  }

handleClick = () => {
    console.log("Im clicked")
}
  render() {
    return (
      <div className="App">
        <h1>Hello worlds</h1>
        <button onClick={this.handleClick}>Toggle names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
    );
  }
}
```

>Notice how class methods are not written with const `handleClick`

>Notice also we need to use this syntax `onClick={this.handleClick}` and NOT this syntax `onClick={this.handleClick()}`

>`onClick={this.handleClick}` executes when you click the button, function is only passed there (referenced)

>`onClick={this.handleClick()}` will be immediatelly executed as soon as the component renders! (not on the click)

>There are many other events to which we can listen. List is [here](https://reactjs.org/docs/events.html#supported-events)

>Just to mention a few:
- Clipboard events: onCopy onCut onPaste
- Keyboard events: onKeyDown onKeyPress onKeyUp
- Focus events: onFocus
- Form events: onChange onInput onInvalid onSubmit
- Mouse Events: onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp
- Selection events: onSelect
- Touch events: onTouchCancel onTouchEnd onTouchMove onTouchStart
- UI events: onScroll
- Wheel Events: onWheel

>Let's upgrade our button onClick to handle the state:

>NEVER mutate state directly! NO GO:
``` es6
handleClick = () => {
    this.state.persons[0].name= "Addania"
}
``` 
>Instead use `setState` method which comes from React library. This method allows to update the special property: state. It will also make sure that React knows the state was updated and then it triggerst DOM re-render. setState requires and object and whatever I write there, it will merge with what is already there, so if I set one property in setState, it will not touch other properties:
``` es6
handleClick = () => {
    this.setState(
        {
      persons: [
        {name: "Addamia", age: "18"},
        {name: "Pete", age: "16"},
      ]
  }
    )
}
``` 

>If my state was: 
``` es6
  state = {
      persons: [
        {name: "Adda", age: "18"},
        {name: "Pete", age: "15"},
      ],
      animals: "muuu"
  }
```
>then setState person would not change animals. Animals woudl still be available. SetState merges states.

>There are only 2 things that force DOM to update: change of state and change of props

>`this.steState` is only available in the class based components. We will explore functional components next:


**Functional components**
> In order to handle state in functional components, we use HOOKS. Hooks are just simply a collection of fucntions which are exposed to you to use in fucntional componets.

>Let's re-create our class component called App to a functional component.

>The hook that allows us to manipulate state is called `useState`and we need to import from react
``` es6
import React, { useState } from 'react';
```

> We can then use it like this: `useState()` where in between on brackets we pass the initial value of the state. 

>`useState()` returns and array with EXACTLY 2 elements:
- the first element is the value of our current state
- the second element is a function which allows us to change the state, so that React is aware of it and triggers re-render of our component.

>We can store it in a constant:
``` es6
 const stateArray = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ]
    })
```
>Alternativelly we can `destructure` our array into individual variables.

``` es6
 const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ]
    })
```

> And this is how the whole component looks:
``` es6
import React, { useState } from 'react';
import './App.css';
import { Person } from './Person/Person'
const App = () => {
    const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ]
    })
    const handleClick = () => {
        setPersonsState(
            {
          persons: [
            {name: "Addania", age: "18"},
            {name: "Pete", age: "16"},
          ]
      }
        )
    }
      return (
        <div className="App">
          <h1>Hello worlds</h1>
          <button onClick={handleClick}>Click Me!</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        </div>
      );
}
export default App;
```

>Notice how in functional component we can remove `this` keyword.

>Very very important note about updating state with hook useState and how we do it in class-based component with setState. 

>SetState merges the states, we if we update persons, we wont lose info about animals

``` es6
state = {
      persons: [
        {name: "Adda", age: "18"},
        {name: "Pete", age: "15"},
      ],
      animals: "muuu"
  }
handleClick = () => {
    this.setState(
        {
      persons: [
        {name: "Addamia", age: "18"},
        {name: "Pete", age: "16"},
      ]
  }
    )
}
```
>But in using useState - we would lose this info:
``` es6
const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ], 
        animals: "some value"
    })
    const handleClick = () => {
        setPersonsState(
            {
          persons: [
            {name: "Addania", age: "18"},
            {name: "Pete", age: "16"},
          ]
      }
        )
    }
```
>Therefore what we need to do in functional component is to create a new array, spread it from the old one (copy all values) and only update one of them:
``` es6
const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ], 
        animals: "some value"
    })
    const handleClick = () => {
        setPersonsState(
            {...personsState, 
          persons: [
    
            {name: "Addania", age: "18"},
            {name: "Pete", age: "16"},
          ]
      }
        )
    }
```
>Another possibility is that we simply have 2 different states for each. In functional component using useState hook, we can have as many states as we want. While in class- based components we only have 1 single state and this is then a big monster.

>Example of 2 states in functional component:
``` es6
const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ]
    })
const [animalsState, setAnimalsState] = useState ({
        animals: "some value"
    })
```

**Stateful and stateless components**
>Stateful component is a component which manages state (no matter if class or function). They are called smart components or container components.

>Stateless component has no internal state management. They are also called dumb components or presentational components. And good practice is to create as many of such components as possible. Why? So that we have clear flow of data and it is clear where the main logic sits, where data changes which is then distributed to the rest of the app

**Passing methods between components as props**
>What if we want also possibility to switch the name when clicking on a h2 within the Person.js?

>We can pass a reference to the handleClick method from our App.js component to Person.js component as a prop:
``` es6
 <Person name={personsState.persons[0].name} age={personsState.persons[0].age} handleHeaderClick={handleClick} />
 ```

 >And then we can use it from props object in the Person.js:
 ``` es6
export const Person = (props) => {
    return (
        <div>
        <h2 onClick={props.handleHeaderClick}>I am a {props.name} and I am {props.age} years old</h2>
        <p>{props.children}</p>
        </div>
    )
}
 ```


>What if our function also needs to receive some kind of input??
```es6
const handleClick = (newName) => {
        setPersonsState(
            {... personsState,
          persons: [
            {name: newName, age: "18"},
            {name: "Pete", age: "16"},
          ]
      }
        )
    }
```

>We can then pass an arrow function which allows us to use () without execting the function immediatelly as the component renders:
``` es6
<Person name={personsState.persons[0].name} age={personsState.persons[0].age} handleHeaderClick={() => handleClick("The Queen")} />
```

> Whole app.js looks like this:
``` es6
import React, { useState } from 'react';
import './App.css';
import { Person } from './Person/Person'
const App = () => {
    const [personsState, setPersonsState] = useState ({
        persons: [
          {name: "Adda", age: "18"},
          {name: "Pete", age: "15"},
        ], 
        animals: "miaucik"
    })
    console.log("personsState", personsState)
    const handleClick = (newName) => {
        setPersonsState(
            {... personsState,
          persons: [
            {name: newName, age: "18"},
            {name: "Pete", age: "16"},
          ]
      }
        )
    }
      return (
        <div className="App">
          <h1>Hello worlds</h1>
          <button onClick={() => handleClick("The Queen")}>Click Me!</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} handleHeaderClick={() => handleClick("The Queen")} />
        </div>
      );
}
export default App;
```

>The Person.js file looks like this:
``` es6
import React from 'react';
export const Person = (props) => {
    return (
        <div>
        <h2 onClick={props.handleHeaderClick}>I am a {props.name} and I am {props.age} years old</h2>
        <p>{props.children}</p>
        </div>
    )
}
```
>This syntax works for functional as well as class components.

>In class components it would look like this (App.js):
``` es6
import React, { Component } from 'react';
import './App.css';
import {Person} from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Adda', age: 18 },
      { name: 'Pete', age: 15 },
    ],
    otherState: 'some other value'
  }
  handleClick = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 18 },
        { name: 'Pete', age: 15 },
      ]
    } )
  }
  render () {
    return (
        <div className="App">
          <h1>Hello worlds</h1>
          <button onClick={() => this.handleClick("Supeeeeeer")}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} handleHeaderClick={() => this.handleClick("Woooooow")} />
        </div>
    )
  }
}
export default App;
```

>Please also note that arrow functions do not need curly braces and return keyword if they are in one line. But we can equally write:
``` es6
<button onClick={() => { return this.handleClick("Supeeeeeer")}}>Click Me!</button>
```

>But there is also another way how to do this and this way is specific to class-based components. We will use special binding of the method and say that this is bound to the class App itself:
``` es6
this.switchNameHandler.bind(this, "Super")
```

>If we write it in that way, we can also pass list of arguments. in our case one: "Super" but can be multiple

>Full code looks like this:

App.js

``` es6
import React, { Component } from 'react';
import './App.css';
import {Person} from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Adda', age: 18 },
      { name: 'Pete', age: 15 },
    ],
    otherState: 'some other value'
  }
  handleClick = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 18 },
        { name: 'Pete', age: 15 },
      ]
    } )
  }
  render () {
    return (
        <div className="App">
          <h1>Hello worlds</h1>
          <button onClick={this.handleClick.bind(this, "Super")}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} handleHeaderClick={this.handleClick.bind(this, "Wow")} />
        </div>
    )
  }
}
export default App;
```

Person.js
``` es6
import React from 'react';
export const Person = (props) => {
    return (
        <div>
        <h2 onClick={props.handleHeaderClick}>I am a {props.name} and I am {props.age} years old</h2>
        <p>{props.children}</p>
        </div>
    )
}
```


>Now imaginewe want to make the name change on user input

>In Person.js we will add input and onChange handler:
``` es6
<input type="text" onChange={props.nameChanger}/>
```
>In App.js we add method and pass it as prop to Person
``` es6
class App extends Component {
  state = {
    persons: [
      { name: 'Adda', age: 18 },
      { name: 'Pete', age: 15 },
    ],
    otherState: 'some other value'
  }

  handleClick = (newName) => {

    this.setState( {
      persons: [
        { name: newName, age: 18 },
        { name: 'Pete', age: 15 },
      ]
    } )
  }

  handleChange = (event) => {

    this.setState( {
      persons: [
        { name: event.target.value, age: 18 },
        { name: 'Pete', age: 15 },
      ]
    } )
  }

  render () {
    return (

        <div className="App">
          <h1>Hello worlds</h1>
          <button onClick={() => { return this.handleClick("Supeeeeeer")}}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanger={this.handleChange} handleHeaderClick={() => this.handleClick("Woooooow")} />
        </div>
    )
  }
}
```

>Event object is passed automatically to the function by React when input changes.

>Two way binding means that we can also provide initial value to the input, so that input would be pre-populated with whatever is in initial state.

``` es6
<input type="text" onChange={props.nameChanger} value={props.name}/>
```

**Styling components**
>There are two ways of styling components: with dedicaated css file or inline in js file

CSS FILE
> Add a file called Person.css

>Please not that even though I call this fiel Person.css which might misleadingly suggest that this file will only be used in Person.js, it is not so. Any code in this file is a global css. 

>Content of the file will be like this:
``` es6
.Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;
}
```

>Then we can go to Person.js, import it and add the className Person to a div:
``` es6
import React from 'react';
import "./Person.css"
export const Person = (props) => {
    return (
        <div className="Person">
        <h2 onClick={props.handleHeaderClick}>I am a {props.name} and I am {props.age} years old</h2>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChanger}/>
        </div>
    )
}
``` 
>Please note you have to define file extension: .css because only .js can be omitted.

>Also notice that it is Webpack who makes it possible to import css files eventually to our html file. 

INLINE STYLING
>We can create a constant in render method of the App.js and adding property style to the button:
``` es6
 render () {
      const inlineStyle={
          backgroundColor: "orange",
          border: "none",
          cursor: "pointer",
          color: "white"
      }
    return (

        <div className="App">
          <h1>Hello worlds</h1>
          <button style={inlineStyle} onClick={() => { return this.handleClick("Supeeeeeer")}}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanger={this.handleChange} handleHeaderClick={() => this.handleClick("Woooooow")} />
        </div>
    )
  }
  ```
>Or alternatively, we can put all the styles in thestyle property:
``` es6
render () {    
    return (
        <div className="App">
          <h1>Hello worlds</h1>
          <button style={{backgroundColor: "orange",
          border: "none",
          cursor: "pointer",
          color: "white"}} onClick={() => { return this.handleClick("Supeeeeeer")}}>Click Me!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanger={this.handleChange} handleHeaderClick={() => this.handleClick("Woooooow")} />
        </div>
    )
  }
```

>Using inline styles scopes styles. Which means those are not global, they only apply to this element we used it for

>Notice that we then need double curly braces, because styles are an object and the first curly braces tell to the js that these are placeholder

**Conditionally render content**

>What if we want to render some content upon click? Or hide it? We can use a state which will say true or false and they css prop display to be block or none depending on the state:
```es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
    ],
    showPersons: true,
  };

  handleClick = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleVisibility = () => {
    this.setState({ showPersons: !this.state.showPersons })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleVisibility}>hide/show elements</button>
        <div style={{ display: this.state.showPersons ? "block" : "none" }}>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            nameChanger={this.handleChange}
            handleHeaderClick={() => this.handleClick("Woooooow")}
          />
        </div>
      </div>
    );
  }
}

export default App;
```
>Alternatively we can use ternary expression in return statement in order to render content conditionally. Please note we cannot use if statement in return statement `<div>{if(true){<h1>Hi</h1>}</div>`. This will not work, we can only use simple statements (not block statements like if) in return
``` es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
    ],
    showPersons: true,
  };

  handleClick = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleVisibility = () => {
    this.setState({ showPersons: !this.state.showPersons })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleVisibility}>hide/show elements</button>
        <div>
          {this.state.showPersons ? (
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                nameChanger={this.handleChange}
                handleHeaderClick={() => this.handleClick("Woooooow")}
              />
            </div>
          ): null }
        </div>
      </div>
    );
  }
}

export default App;
```

>Alternatively we can also use && syntax to render elements conditionally:
```es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
    ],
    showPersons: true,
  };

  handleClick = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleVisibility = () => {
   this.setState({ showPersons: !this.state.showPersons })
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleVisibility}>hide/show elements</button>
        <div>
          {this.state.showPersons && (
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                nameChanger={this.handleChange}
                handleHeaderClick={() => this.handleClick("Woooooow")}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
```

>Important note about render method of class components. When something needs to be re-rendered, we do not only fire the return statement but also render method of the class componenent. Which can be very useful!
>This is something we can also use to conditionally render some elements:
``` es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
    ],
    showPersons: true,
  };

  handleClick = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleChange = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: "Pete", age: 15 },
      ],
    });
  };

  handleVisibility = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            nameChanger={this.handleChange}
            handleHeaderClick={() => this.handleClick("Woooooow")}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.handleVisibility}>hide/show elements</button>
        <div>{persons}</div>
      </div>
    );
  }
}

export default App;
```
**Outputing lists dynamically**
>Imagine we have list of persons and we dont want to manually add each person as a component in the App.js return statement, we want a function which will map through all persons and output them automatically, so that we can get new person displayed if list has more persons, etc.
>We can use a map function which will iterate through the array of persons and output JSX components for each othem, which can be then displayed in return statement:
``` es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
      { name: "Jess", age: 5 },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.persons.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
```
>What if we also want to render a delete button next to each person, which will then delete the entire person row!! 
App.js
``` es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18 },
      { name: "Pete", age: 15 },
      { name: "Jess", age: 5 },
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
        persons: this.state.persons.filter((person)=>person.name !== toDelete)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.persons.map((person) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
```
Person.js
``` es6
export const Person = (props) => {
    return (
        <div className="Person">
        <h2>I am a {props.name} and I am {props.age} years old</h2>
        <button onClick={()=>props.delete(props.name)}>Delete me</button>
        </div>
    )
}
```
>PLease note any time you deal with a List and maybe iterate through it to generate components, you should always assign it a key property. It helps React to know which element needs to be re-rendered instead of every time rendering the whole list (because for react each element of the list is the same, it does not inspect deeply that maybe one element is Jess another Pete).

>For that, when we render the Person components, we should add the key and its valueshould be unique. We can use index of the array as key. Map function returns second argument index:
``` es6
{this.state.persons.map((person, index) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
              key={index}
            />
          );
        })}
```
> Please note that `key` and `ref` are reserved words and they cannot be used in child component as props. `props.key` or `props.ref` will not work. Alternatively you can use some other prop with same value such as `keyId` which you will be able to use in child component as props:
``` es6
{this.state.persons.map((person, index) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
              key={index}
              keyId={index}
            />
          );
        })}
```
>How to make sure that we also display input for each person and it will update the state of that given person?
App.js
``` es6
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id:"01" },
      { name: "Pete", age: 15, id:"02"},
      { name: "Jess", age: 5, id:"03"},
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
        persons: this.state.persons.filter((person)=>person.name !== toDelete)
    })
  }
handleChange = (event, id) => {
const newPersons= this.state.persons.map(person=>{
    if(person.id===id){
        return {...person, name:event.target.value}
    } else { return person}
})
this.setState({persons: newPersons})
}
  render() {
    return (
      <div className="App">
        {this.state.persons.map((person) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
              key={person.id}
              onChange={(event)=>this.handleChange(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
```
Person.js
``` es6
export const Person = (props) => {
    return (
        <div className="Person">
        <h2>I am a {props.name} and I am {props.age} years old</h2>
        <button onClick={()=>props.delete(props.name)}>Delete me</button>
        <input type="text" onChange={props.onChange}/>
        </div>
    )
}
```

**Conditionally style elements**
>We can use ternary statement to render different colors of the background in Person.js
``` es6
export const Person = (props) => {
    const color= props.age >10 ? "green" : "orange"
    return (
        <div className="Person" style={{backgroundColor: color}}>
        <h2>I am a {props.name} and I am {props.age} years old</h2>
        <button onClick={()=>props.delete(props.name)}>Delete me</button>
        <input type="text" onChange={props.onChange}/>
        </div>
    )
}
```
**Setting class named dynamically**
> What if we want to make class names dynamic as well?
Person.css
``` es6
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
```
Person.js
``` es6
export const Person = (props) => {
    const color= props.age >10 ? "green" : "orange"
    let classes= []
    
    if (props.age <=15){
        classes.push("bold")
    }
    if (props.age <=5){
        classes.push("red")
    }
    return (
        <div className="Person" style={{backgroundColor: color}}>
        <p className={classes.join(' ')}>I am a {props.name} and I am {props.age} years old</p>
        <button onClick={()=>props.delete(props.name)}>Delete me</button>
        <input type="text" onChange={props.onChange}/>
        </div>
    )
}
```
**Pseudo selectors and media queries**
>Pseudo selecotrs are for example hover, focus, active, etc
``` es6
button:hover {
    backgroundColor: blue;
}
```
>Pseudo selectors cannot be used inline in React! But if we cannot use them inline, then we would need to import a css stylesheet, which will however mean that now the styles will be GLOBAL and not local (like inline styles are) - scoped to our component.

>Same is true for media queries which cannot be used inline. Media queries are techniques in CSS which use `@media` rule to include a block of CSS properties only if a certain condition is true. For example if the browser window is smaller than 600px, etc.
``` es6
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

``` es6
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
```
>To solve this, we can use a 3rd party software (package) which enables us to use pseudo selectors or media queries in javascript files. It is called radium and is a popular React package. In terminal type:
```
npm install --save radium
```
>In order to use it, we need to import the radium to our file (for example App.js)
``` es6
import Radium from 'radium'
``` 

> Radium is a HOC - higher order component which we can use to wrap our App component upon export
``` es6
export default Radium(App)
```
>It injects some functionality to App component. We can use it on any component.

>Now how to use our hover pseudo selector?
``` es6
 const buttonStyle= {
          border: "none",
          color: "black",
          backgroundColor: "turquoise",
          ':hover': {
            color: "white",
            backgroundColor: "blue"
          }
      }
```
>Whole component looks like this:
``` es6
import React, { Component } from "react";
import "./App.css";
import Radium from 'radium'
import { Person } from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id:"01" },
      { name: "Pete", age: 15, id:"02"},
      { name: "Jess", age: 5, id:"03"},
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
        persons: this.state.persons.filter((person)=>person.name !== toDelete)
    })
  }
handleChange = (event, id) => {
const newPersons= this.state.persons.map(person=>{
    if(person.id===id){
        return {...person, name:event.target.value}
    } else { return person}
})
this.setState({persons: newPersons})
}
  render() {
      let buttonStyle= {
          border: "none",
          color: "black",
          backgroundColor: "turquoise",
          ':hover': {
            color: "white",
            backgroundColor: "blue"
          }
      }    
    return (
      <div className="App">
        <button style={buttonStyle}>Hover State</button>
        {this.state.persons.map((person) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
              key={person.id}
              onChange={(event)=>this.handleChange(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}
export default Radium(App);
```

>We can also conditionally change styles for pseudo selector in if condition. In order ot do it we will write:
``` es6
if (this.state.persons.length<=2){
        buttonStyle.backgroundColor= "orange";
        buttonStyle.color="red";
        buttonStyle[":hover"]={
          color: "white",
          backgroundColor: "green"
        }
    }
```
>Whole App component then looks like this:
``` es6
import React, { Component } from "react";
import "./App.css";
import Radium from 'radium'
import { Person } from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id:"01" },
      { name: "Pete", age: 15, id:"02"},
      { name: "Jess", age: 5, id:"03"},
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
        persons: this.state.persons.filter((person)=>person.name !== toDelete)
    })
  }
handleChange = (event, id) => {
const newPersons= this.state.persons.map(person=>{
    if(person.id===id){
        return {...person, name:event.target.value}
    } else { return person}
})
this.setState({persons: newPersons})
}
  render() {
      const buttonStyle= {
          border: "none",
          color: "black",
          backgroundColor: "turquoise",
          ':hover': {
            color: "white",
            backgroundColor: "blue"
          }
      }
      if (this.state.persons.length<=2){
        buttonStyle.backgroundColor= "orange";
        buttonStyle.color="red";
        buttonStyle[":hover"]={
          color: "white",
          backgroundColor: "green"
        }
    }
    return (
      <div className="App">
        <button style={buttonStyle}>Hover State</button>
        {this.state.persons.map((person) => {
          return (
            <Person
              delete={this.deleteHandler}
              name={person.name}
              age={person.age}
              key={person.id}
              onChange={(event)=>this.handleChange(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}
export default Radium(App);
```
**Media queries**
>We can override styles in css file with media queries. For example we might want to say that for screen width 500px and more, we want to change the width of and item like this:
Person.css
``` es6
.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;
}
@media (min-width: 500px){
    .Person {
        width: 100%
    }
}
```
>With Radium we can also do this inline:
``` es6
const styling={
        "@media (min-width: 500px)": {
            width: "100%"
        }
    }
```
>But in order to make it work, we will need to also import a special component StyleRoot provided by Radium and wrap entire app in it in App.js
``` es6
import Radium, { StyleRoot } from 'radium'
```
>Whole code looks like this:
App.js
``` es6
import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id: "01" },
      { name: "Pete", age: 15, id: "02" },
      { name: "Jess", age: 5, id: "03" },
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
      persons: this.state.persons.filter((person) => person.name !== toDelete),
    });
  };
  handleChange = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      } else {
        return person;
      }
    });
    this.setState({ persons: newPersons });
  };
  render() {
    const buttonStyle = {
      border: "none",
      color: "black",
      backgroundColor: "turquoise",
      ":hover": {
        color: "white",
        backgroundColor: "blue",
      },
    };
    if (this.state.persons.length <= 2) {
      buttonStyle.backgroundColor = "orange";
      buttonStyle.color = "red";
      buttonStyle[":hover"] = {
        color: "white",
        backgroundColor: "green",
      };
    }
    return (
      <StyleRoot>
        <div className="App">
          <button style={buttonStyle}>Hover State</button>
          {this.state.persons.map((person) => {
            return (
              <Person
                delete={this.deleteHandler}
                name={person.name}
                age={person.age}
                key={person.id}
                onChange={(event) => this.handleChange(event, person.id)}
              />
            );
          })}
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
```
Person.js
``` es6
import React from 'react';
import "./Person.css" 
import Radium from 'radium';
const Person = (props) => {
    const styling={
        "@media (min-width: 500px)": {
            width: "100%"
        }
    }
    return (
        <div className="Person" style={styling}>
        <p>I am a {props.name} and I am {props.age} years old</p>
        <button onClick={()=>props.delete(props.name)}>Delete me</button>
        <input type="text" onChange={props.onChange}/>
        </div>
    )
}
export default Radium(Person)
```
**Styled components**
>Styled components is another popular react 3rd party library which makes it easier to style components. In order to install it write in your terminal
``` es6
npm install --save styled-components
```
>Styled components enable using css styling in Javascript. We need to import them with:
``` es6
import styled from "styled-components";
```
>This imports `styled` object which has for example a button method!! It can be used in this way:
``` es6
const Button = styled.button``
```
> Two backticks is a Vanilla javascript for tagged template literals. Two backticks are used instead of two parentheces with function arguments which are used for normal functions. Between two backtics, we can pass some strings which are then passed to the button method in a special way.

> Please note that backticks without being part of a method is also a regular Javascript to create strings

>Object styled allows a method for any HTML element you can create, such as styled.div, styled.input, styled.h1, etc

>Styled object with its methods return React components. Easiest way to use them is to assign them to our own component and the use in code:
``` es6
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;
`;
const Person = (props) => {
  return (
    <StyledDiv>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <button onClick={() => props.delete(props.name)}>Delete me</button>
      <input type="text" onChange={props.onChange} />
    </StyledDiv>
  );
};
export default Person;
```
>Please note, we do not longer need a separate css for Person, as all our styles are coming from StyledComponent.

> Please also note that we pass regular css (not react inline css) between two backticks. So code needs to look like: `text-align: center` and not like `textAlign: "center"`

>Advantage is that we can also pass in pseudo selectors and media queries:
``` es6
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;
  &:hover {
      background-color: blue;
  }
  @media (min-width: 500px){
      width: 100%
  }
`;
const Person = (props) => {
  return (
    <StyledDiv>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <button onClick={() => props.delete(props.name)}>Delete me</button>
      <input type="text" onChange={props.onChange} />
    </StyledDiv>
  );
};
export default Person;
```
>Notice however that for pseudo selectors you need to add `&` in front of the pseudo selector

>If we create for example a StyledButton we can still add onClick handlers just like before.

>How do styled components work in the backend? Outputs of the methods are React components (such as div) together with a class names which are added to each component. 

>Apart from that in the HTML file, you will see that styled component adds in the head tag of the document another tag called style where it imports all the styles for those classes.

>How to use conditional styles with styled components? We can add a prop to our StyledButton with any name and pass there for example state, based on which we want to conditionally render the styles.
``` es6
<StyledButton alt={this.state.persons}>Click me</StyledButton>
```
>Then in the definition of StyledButton we have two backtics which is a template literal and will output a string. But with a special synstax we can inject dynamic values. Syntax is dollar sign and two curly braces: `${}`. In between of curly braces we can pass a function which will receive props from the component and then return something. For its return, we can then use ternary expression to conditionally render different states:
``` es6
const StyledButton= styled.button`
background-color: ${props => props.alt.length <=2 ? "blue" : "orange"};
&:hover {
    background-color: blue;
}
`
```
> Whole App component can look like this:
``` es6
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton= styled.button`
background-color: ${props => props.alt.length <=2 ? "blue" : "orange"};
&:hover {
    background-color: blue;
}
`

class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id: "01" },
      { name: "Pete", age: 15, id: "02" },
      { name: "Jess", age: 5, id: "03" },
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
      persons: this.state.persons.filter((person) => person.name !== toDelete),
    });
  };
  handleChange = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      } else {
        return person;
      }
    });
    this.setState({ persons: newPersons });
  };

  
  render() {
    return (
        <div className="App">
          <StyledButton alt={this.state.persons}>Click me</StyledButton>
          {this.state.persons.map((person) => {
            return (
              <Person
                delete={this.deleteHandler}
                name={person.name}
                age={person.age}
                key={person.id}
                onChange={(event) => this.handleChange(event, person.id)}
              />
            );
          })}
        </div>
    );
  }
}
export default App;
```
>Please note that the function we pass between two backtics, can be anything Javascriptish, but the return should be a string
``` es6
const StyledButton= styled.button`
background-color: ${props => {
    console.log("I do anything")
    return (
        props.alt.length <=2 ? "blue" : "orange")}
    };
&:hover {
    background-color: blue;
}
`
```
**CSS modules**
>By default styles in the .css file are global! They do not only belong to the component, where they are imported. They will be applied to anycomponent in the entire app.

>It can be demonstrated like this:
Person.css
``` es6
button {
    background-color: green;
}
```
Person.js
``` es6
import React from "react";
import './Person.css'

const Person = (props) => {
  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <button onClick={() => props.delete(props.name)}>Delete me</button>
      <input type="text" onChange={props.onChange} />
    </div>
  );
};
export default Person;
```
App.js
``` es6
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id: "01" },
      { name: "Pete", age: 15, id: "02" },
      { name: "Jess", age: 5, id: "03" },
    ],
  };
  deleteHandler = (toDelete) => {
    this.setState({
      persons: this.state.persons.filter((person) => person.name !== toDelete),
    });
  };
  handleChange = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      } else {
        return person;
      }
    });
    this.setState({ persons: newPersons });
  };
  render() {
    return (
        <div className="App">
          <button>Click me</button>
          {this.state.persons.map((person) => {
            return (
              <Person
                delete={this.deleteHandler}
                name={person.name}
                age={person.age}
                key={person.id}
                onChange={(event) => this.handleChange(event, person.id)}
              />
            );
          })}
        </div>
    );
  }
}
export default App;
```
>All buttons also button in App.js will be green.

>CSS modules is another way how we can scope regular css stylesheet only to the specific component.
>In order to use CSS modules, we need to check which `react-scripts` version we are using in Package.json. If we are using version 1 of `react-scripts`, then we need to tweak the configuration.

>We will first quit our local development server and then go to terminal and write: `npm run eject`. It will eject webpack config file which is normally only used under the hood but not ejected. This wil allow us to tweak a bit how our code is bundled together.
>When we confirm this, we will get `scripts` and `config` folder
>In config folder, we can find a `webpack.config.dev.js` and `webpack.config.prod.js`file

>Package.json also changed and we have way more information there

>For CSS modules to work, we need to go to `webpack.config.dev.js` to the section of `test: /\.css$/,`. We will tweak the options.
>That part of the config will look like this:
``` es6
 {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
```
>To the options we add following syntax:
``` es6
modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'
```
>So that the config part will  look like this:
``` es6
 {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
```
> `modules: true` will enable the CSS modules feature we are about to use.
> `[name]__[local]__[hash:base64:5]` will used by CSS modules to dynamically generate unique css class names
> We need to do the same in the `webpack.config.prod.js`file. Please not it should be under `use:` section in `options:`
> Now we can start the app again with `npm start`
> Now we need to import our css file differently:
> Instead of normal import:
``` es6
import "./App.css";
```
>We need to import `classes` object
``` es6
import classes from "./App.css";
```
>This `classes` object will have properties which will be exactly those css selectors we defined in App.css
>Our App.css has a selector for class names "App" 
``` es6
.App {
  text-align: center;
}
```
>So now the `classes` object will have a property `App`:
``` es6
className={classes.App}
```
>Whole App component will look like this:
``` es6
import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id: "01" },
      { name: "Pete", age: 15, id: "02" },
      { name: "Jess", age: 5, id: "03" },
    ],
  };
  deleteHandler = (toDelete) => {
    this.setState({
      persons: this.state.persons.filter((person) => person.name !== toDelete),
    });
  };
  handleChange = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      } else {
        return person;
      }
    });
    this.setState({ persons: newPersons });
  };
  render() {
    return (
        <div className={classes.App}>
          <button>Click me</button>
          {this.state.persons.map((person) => {
            return (
              <Person
                delete={this.deleteHandler}
                name={person.name}
                age={person.age}
                key={person.id}
                onChange={(event) => this.handleChange(event, person.id)}
              />
            );
          })}
        </div>
    );
  }
}
export default App;
```
>CSS module make sure that upon build (bundling and compilation) we do not import css files, as before (globally) but it detects this new way of importing css: `import classes from "./App.css";` and it looks into those css files. It then transforms each css class we define there into an automatically generated (random) unique class name and returns us a map between those randomly genrated class names and class names we assigned in the css file. For example class name: `App__Button__2_NDl`
>Advantage is that then our class names will be completely unique and cannot clash with other components in other files.
>CSS modules allow us to write css styles in css files which will be only scoped to this particular component
>How can we apply dynamic styles on those? We will need to assign a new selector which will have different styling we want to then conditionally apply
Person.css:
``` es6
.blue {
    background-color: blue;
}
.red {
    background-color: red;
}
```
>Then in the Person.js we can use ternary statement to conditionally render the styles:
Person.js
``` es6
import React from "react";
import classes from './Person.css'
const Person = (props) => {
  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <button className={props.age <=5 ? classes.blue : classes.red} onClick={() => props.delete(props.name)}>Delete me</button>
      <input type="text" onChange={props.onChange} />
    </div>
  );
};
export default Person;
```
>Alternatively we can create a styles string:
``` es6
import React from "react";
import classes from './Person.css'
const Person = (props) => {
    let styling=[]
    if(props.age <=5){
        styling.push(classes.red)
    } else {
        styling.push(classes.blue)
    }
    console.log(styling)
  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <button className={styling.join(" ")} onClick={() => props.delete(props.name)}>Delete me</button>
      <input type="text" onChange={props.onChange} />
    </div>
  );
};
export default Person;
```
>CSS modules allow us to use media queries, just like regular css, there is nothing special about it, as long as we use the special import and special way to write className
``` es6
import classes from './Person.css'
className={classes.Person}
```
>If you are using react-scripts version 2 or higher, css modules are enabled automatically, so you do not need to tweak any config, but you need to name your css files as:
``` es6
Person.module.css
```
>And therefore you also need to import classes from `"./Person.module.css"`
>More on css can be found here: https://github.com/css-modules/css-modules
``` es6
```
>But what if I still want to use some global styles? In css file you can prefix the selector with :global .

App.css
``` es6
:global .GlobalStyle { ... } 
```
>Now you can use `className="GlobalStyle"`  anywhere in your app and receive that styling.

**Debugging React Apps**
>We can throw an error like this:
``` es6
const randomNumber = Math.random()
    if(randomNumber >0.5){
        throw new Error("I am error!")
    }
```
>Often the application will encounter errors, our task is to catch those errors and handle them graciously! For that we will create ErrorBoundary component! Name can be something different but convention is ErrorBoundary. 
>Error Boundary is a HOC (Higher order component) which wraps other components with the goala to catch and handle errors caused by its children (components it is wrapped around)
>We will setup a separate folder for it with a ErrorBoundary.js in in
>Component will look like this:
``` es6
import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };
  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
```
>And then we will add it in App.js to wrap it around Person.js component. We also need to move key property to error boundary, because key always need to be on outer component!
``` es6
import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { name: "Adda", age: 18, id: "01" },
      { name: "Pete", age: 15, id: "02" },
      { name: "Jess", age: 5, id: "03" },
    ],
  };

  deleteHandler = (toDelete) => {
    this.setState({
      persons: this.state.persons.filter((person) => person.name !== toDelete),
    });
  };
  handleChange = (event, id) => {
    const newPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: event.target.value };
      } else {
        return person;
      }
    });
    this.setState({ persons: newPersons });
  };

  render() {
    return (
      <div className={classes.App}>
        <button>Click me</button>
        {this.state.persons.map((person) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                delete={this.deleteHandler}
                name={person.name}
                age={person.age}
                onChange={(event) => this.handleChange(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    );
  }
}
export default App;
```
**Class components and props**
>Also calls components such as our App, can receive props. When accessing those props, we will need to use key word `this`.
>Index.js will pass a prop projectTitle to App.js
``` es6
<App projectTitle="Person Manager" />
```
>App will receive the prop and use it for example to pass to another component
``` es6
<Persons title={this.props.projectTitle} />
```
**Lifecycle methods**
>Lifecycle methods are specific to class based components. Functional components have hooks which enable them such functionalities
>Following lifecycle methods are available for class components:
- constructor()
- getDerivedStateFromProps()
- shouldComponentUpdate()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
- componentDidCatch()
- componentDidMount()
- componentWillUnmount()
- render()

>React executes those methods for us and different runtimes and we can use them to do stuff with component at certain point of time. Such as: fetch data from web, do some cleanup work before component is removed from DOM, etc.

**Creation of component**
>Order of execution:
- 1) constructor()
- 2) getDerivedStateFromProps()
- 3) render()
- 4) every child component renders
- 5) componentDidMount()

> constructor(): When component is created, first constructor is called which will receive all props from the component and it `sets up the state`. If you use constructor then you HAVE TO call super(props)
``` es6
constructor(props){
   super(props)
}
```
> Please note, it is not necessary to call constructor. It is only if we want to have our own logic of setting up initial state. But we shold NOT cause any side effects in constructor.

>Side effects are for example sending HTTP request, or storing something in our local storage of the browser or sending some analytics to Google analytics. We do not want to execute these in constructor, because it can impact performance and cause unnecessary re-renders

>getDerivedStateFromProps(props, state): When your props change you can `synch state` to them. This is a VERY VERY niche scenario. But we shold NOT cause any side effects in getDerivedStateFromProps.
``` es6
```
> render(): Rednder methos is a lifecycle method for class based components which returns JSX. It prepares and structures the JSX.
We shold NOT cause any side effects in render.

> After render runs, every CHILD COMPONENT is rendered.

> When all lifecycle methods also of child components have finished, then we proceed with componentDidMount()

>componentDidMount(): When component mounted, this method is called and here we CAN cause side effects, such as HTTP requests from the web! DO NOT update state here! DO NOT call setState in here. Exception is if it is in the the `then` block of the promise of HTTP request. This means that setState will execute at some point in future when HTTP request sends response from server. DO NOT call setState synchronously immediately as component mounts. Why? Cause it will triggere re-render and that is bad for performance.

**Constructor**
>There are 2 ways how to set initial state in the class based components

>Older approach uses constuctor which receives props, where super(props) is called and state is initialized with this.state
``` es6
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        persons: [
           { id: "asfa1", name: "Mia", age: 18 },
           { id: "vasdf1", name: "Sam", age: 19},
           { id: "asdf11", name: "Jess", age: 5 },
        ],
        otherState: "some other value",
        showPersons: false,
        };
    }
  ....
}
```
>Newer approach is to set state outside of the constructor and only use word `state`. Behind the scenes, what happens is that constructor is called, super is called and this.state is called to initialize the state.
``` es6
class App extends Component {
state = {
    persons: [
      { id: "asfa1", name: "Mia", age: 18 },
      { id: "vasdf1", name: "Sam", age: 19 },
      { id: "asdf11", name: "Jess", age: 5 },
    ],
    otherState: "some other value",
    showPersons: false,
  };
  ....
}
```
**GetDerivedStateFromProps**
>getDerivedStateFromProps(props, state) is a static method, so if we want to use it, we need to add word `static` in front of it. We will receive props and state in there. And we should return UPDATED STATE. Example is if some external changes (ex: user input) cause prop changes, you might want to update the state accordingly. But usually there is more elegant way how to update state based on outside/external properties. This simply synchs state to props. (DO NOT cause side effects in this lifecycle method)
``` es6
static getDerivedStateFromProps(props, state){
    ...
    return updatedState
}
```
**Component update**
>2 triggers to re-render a component: when state changes or when props change

>Order of execution:
- 1) getDerivedStateFromProps(props, state)
- 2) shouldComponentUpdate(nextProps, nextState)
- 3) render()
- 4) update all child components
- 5) getSnapshotBeforeUpdate(prevProps, prevState)
- 6) componentDidUpdate()
> shouldComponentUpdate(nextProps, nextState): Allows you to cancel the updating process!!! Here you can decide whether to continue and re-render the component or not. Why do we want to do that? For performance optimization. Here we need to return true or false (doing nothing is not an option). True means it will continue updating, it will return false if it should not update.
``` es6
shouldComponentUpdate(nextProps, nextState){
    return true
}
```
>getSnapshotBeforeUpdate(prevProps, prevState): this method happens right before component updates. It takes previous state and previous props as input and returns a snapshot object which we can freely configure. Niche lifecycle method used for last-minute DOM operations such as getting the current scrolling position of the user. Because then once we do the DOM update, then we can return to the position of the user scroll and getSnapshotBeforeUpdate can give us that scroll position right before the update. We should either return null or snapshot value.
``` es6
getSnapshotBeforeUpdate(prevProps, prevState){
return {message: "I am a snapshot"}
}
```
>componentDidUpdate(previousProps, previousState, snapshot) signals that we are done updating and render has been executed. Here we can cause side effects like HTTP requests. But only setState within then block of a promise of HTTP request to prevent unnecessary re-renders. As props it receives previousProps, previousState, snapshot. The snapshot is from the  getSnapshotBeforeUpdate. Whatever getSnapshotBeforeUpdate method returns will be then passed to componentDidUpdate as the 3rd argument. So snapshot is used in a way, we save some data (scroll position of user) right before the update of component, and then use this data after the update in componentDidUpdate.
``` es6
componentDidUpdate(previousProps, previousState, snapshot){
console.log(snapshot) // {message: "I am a snapshot"}
}
```
**Methods which should not be used anymore**
>There are some lifecycle methods which should not be really used anymore. For example: 
- componentWillMount
- componentWillReceiveProps(props) - where props are the props component is getting for this update
- componentWillUpdate()- runs before the componentDidUpdate()

**Lifecycle methods in functional components**
>Functional components can use hooks in order to get same funcionality as in class components.

>useEffect is the second most important hook you can use. It is a hook which can handle life cycle methods. First important hook is useState

>useEffect combines functionality of ALL lifecycle methods of class components in one React hook (function you can add to functional components).
> First we need to import it
``` es6
import React, { useEffect } from "react";

```
>We can use it in body of functional componet. This hook receives a `function` which (by default) will run at each render cycle of the component, so for every update or when component is created! We can for example send HTTP request. UseEffect is basically componentDidMount and componentDidUpdate in one effect.
``` es6
useEffect( ()=> {} );
```
>How to use useEffect only the first time. We can pass an array as second argument to useEffect. If the array is empty, it will only be triggered the first time.
``` es6
useEffect( ()=> {}, [] );
```
``` es6
useEffect( ()=> {console.log("Im triggered")}, [] );
```
>What if we only want to run it when our props.persons change? then we can add it to the array
``` es6
useEffect( ()=> {console.log("Im triggered")}, [props.persons] );
```
>If there are more effects which depends on different data, then we can add more then one useEffect to to body of our functional component.

**Cleaning up lifecycle methods in class based components**
>Often in app we want to do some cleanup work. For example to remove some event listeners, etc.

>In class based components we can use componentWillUnmount method. Any code that we want to run before the component is removed from DOM can be placed in componentWillUnmount
``` es6
componentWillUNmount(){
    ...
}
```
>For functional components we can use useEffect also for clean up. Normally we do not return anything from the useEffect!!! But we can return a function and this function will run BEFORE main useEffect function runs but AFTER the (first) render cycle.
>This return function can be used for clean ups
``` es6
useEffect(
    ()=> {
        console.log("Im triggered")
        return () => {console.log("cleanup")}
    }, []
)
```
>
``` es6
```
>
``` es6
```
>
``` es6
```
>
``` es6
```

>
``` es6
```
>
``` es6
```
>
``` es6
```
>
``` es6
```
>Linters are code quality checking tool