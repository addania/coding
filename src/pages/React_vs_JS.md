---
title: "React vs JS"
date: "2019-11-23"
---
HTML scripts equivalent to React

Create a new file with .html extention. For example: site.html

You can open this file in the browser (simply double-clicking on the file). Browser will open up a completely blank page.

Now we can open it in editor (for example note++, etc) and add a div tag in it id of root:
```
<div id="root">Hi</div>

```

Refresh the browser and you wil see <code>Hi</code> displayed. But lets remove hard coded Hi and we will play wround how we can place other elements within the root div.

In HTML in between of script tags, we can write regular javascript
```
<div id="root"></div>
<script type="text/javascript">

</script>
```

In between script tags we will now write a script that will add a new element to the div root
.

To target a div with id root, we write <code>document.getElementById</code>
```
const rootElement = document.getElementById("root");
```


To create a new element we use <code>document.createElement</code>
```
const element = document.createElement("div");
```

To add attributes to our new div, we use following syntax:
```
element.textContent = "Hello World!";
element.className = "container";
```

It is equivalent and will eventually  look like:
```
<div className="container">Hello World!</div>
```

Now we need to add this element to our root div by syntax:
```
rootElement.appendChild(element);
```

Entire code will look like this:
```
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById("root");
const element = document.createElement("div");
element.textContent = "Hello World!";
element.className = "container";
rootElement.appendChild(element);
</script>
```

Now we will do the same with REACT.

First we need to import react to our HTML using script tags. Add following to your HTML file:
```
<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

Now we will use react to create our elements.
```
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById("root");

</script>
```

In order to create new element we will use React.createElement which has 3 paramenters:
1/ which element it is - div
2/ are ther eany atributes - className
3/ and the text itself
```
const element = React.createElement("div", {className: "container" }, "Yuhuu");
```

In React.createElement, we can have any number of childeren like "Yuhuu" there:
```
const element = React.createElement("div", {className: "container" }, "Yuhuu", "Cool", "Hell yeah");
```

The above ones will be an array of children in the backend.

Another way to generate children is to use className called children and add the array of children there:
```
const element = React.createElement("div", {className: "container", children: ["Yuhuu", "Cool", "Hell yeah"]});
```

Then we will render this element:
```
ReactDOM.render(element, rootElement);
```

Entire code looks like this:
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById("root");
const element = React.createElement("div", {className: "container" }, "Yuhuu");
ReactDOM.render(element, rootElement)
</script>
```

Writing entire app with React.createElement is possible but not practical. It would be better if we could use regular html tags in the html. For example const element = <div>Hello world</div>

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById("root");
const element = <div>Hello world</div>
ReactDOM.render(element, rootElement)
</script>
```


But if we run this, we will get a syntax error, where < is not a valid syntax.

Such constract like <code>```<div>Hello world</div>```</code> is called JSX. And in order to be interpreted as React.createElement, it needs to be TRANSPILED and we can use Babbel to do it - Babbel is a transpiler, which takes JSX and converts it to regular Javascript.

In order to use Babbel to transpile our JSX code to pure Javascript code, we need to import Babbel standalone using script
```
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
```
And we need to change <code>text/javascript</code> to <code>text/babel</code>
```
<script type="text/javascript">
```

Entire code: 
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script><div id="root"></div>
<div id="root"></div>
<script type="text/babel">
const rootElement = document.getElementById("root");
const element = <div className="container">Yuhuu</div>;
ReactDOM.render(element, rootElement);
</script>
```

Differences between HTML and JSX:

In HTML you write <code>class</code> in JSX <code>className</code>

Our children in the div tag can be EXTERNALIZED which means made as a variable by:
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script><div id="root"></div>
<div id="root"></div>
<script type="text/babel">
const rootElement = document.getElementById("root");
const greeting="HOLA!"
const element = <div className="container">{greeting}</div>;
ReactDOM.render(element, rootElement);
</script>
```

<code>{greeting}</code> with curly brackets is called interpolation! Interpolation is injecting pure JS into the JSX. Interpolation is denoted by curly brackets.  Interpolation allows us to dive int land of Javascript from the land of JSX.

In the interpolation, we can use anything that evaluates to an expression. It can as well be an anonymous function:
```
const element = <div className="container">{( ()=> greeting ) () ) }</div>;
```

We can do interpolation within the properties:

```
const greeting="HOLA!";
const myClassName = "container";
const element = <div className={myClassName + "__hi-there"}>{greeting}</div>;
```

Another way how to give component props is:
```
const props = {
className: "container",
children: "Hello there",
};
const element = (
<div {...props} />
)

```

Or these props can be stored in a function:
```
const message= props => <div>{props.msg}</div>
const element =(
<div className="container">
	{message({msg: "ahoj"})}
	{message({msg: "hi"})}
</div>
)

```

But this will unfortunatelly NOT run. Babbel will interpret message as undefined variable. We need to capitalize message. Capitalization tells dom that this is not a regular variable, rather it is a DOM element.

```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

<script type="text/babel">
const rootElement = document.getElementById("root")
const Message= props => <div>{props.msg}</div>
const element =(
<div className="container">
	<Message msg="ahoj" />
	<Message msg="hi" />
</div>)
ReactDOM.render(element, rootElement)
</script>

```

This is our first react element. It is defined as a functional element and it is passed a prop called msg to it, which is then displayed in between of div tag.

Definition of the component is here:
```
const Message= props => <div>{props.msg}</div>
```

It can also be defined like this:
```
function Message (props){
 return <div>{props.msg}</div>
}
```

When we want to pass props to components we should make sure we will get correct types (string, number, etc). IN order to do so, we will be using <code>propTypes</code>.

Lets see how this is done:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

<script type="text/babel">
const rootElement = document.getElementById("root")
function SayHello (props){ 
  return (
    <div> Hello {props.firstName} {props.lastName}</div>
  )
}

const PropTypes= {
  string(props, propName, componentName){
    if (typeof props[propName] !== "string"){
     return new Error (
       "you should pass a strin for ${propName} in ${componenetName} but you provided ${typeof props[propName]}"
       )
    }
  }
}

SayHello.propTypes ={
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

const element= (
  <div>
   <SayHello firstName={true} lastName="S" />
  </div>
  )
ReactDOM.render(element, rootElement)
</script>
```

Above is our own implementation of prop types. In console we should get error, because we are passing incorrect type. We pass boolean instead of string.

Alternatively we can use one provided by react:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

<script type="text/babel">
const rootElement = document.getElementById("root")
function SayHello (props){ 
  return (
    <div> Hello {props.firstName} {props.lastName}</div>
  )
}

SayHello.propTypes ={
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

const element= (
  <div>
   <SayHello firstName={true} lastName="S" />
  </div>
  )
ReactDOM.render(element, rootElement)
</script>
```

Again we should get an error. But we only get one, even though we should get two errors.
Reason is that properties are optional, therefore we need to add .isRequired:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")
function SayHello (props){ 
  return (
    <div> Hello {props.firstName} {props.lastName}</div>
  )
}

SayHello.propTypes ={
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

const element= (
  <div>
   <SayHello firstName={true} lastName="S" />
  </div>
  )
ReactDOM.render(element, rootElement)
</script>
```

Above usage is for function components. For class componenets we use static property:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")
class SayHello extends React.Component{ 
static propTypes ={
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
  render () {
  const {firstName, lastName} = this.props
  return (
    <div> Hello {firstName} {lastName}</div>
  )
  }
}

SayHello.propTypes ={
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

const element= (
  <div>
   <SayHello firstName={true} lastName={false} />
  </div>
  )
ReactDOM.render(element, rootElement)
</script>
```

How to render a message "No Message" when we dont provide message to the component:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")

function Message ({message}){
  if (!message){
  return <div>No message</div>
  }
  return <div>{message}</div>
}

ReactDOM.render( <Message message={null} />, rootElement)
 </script>
```

The same thing using ternary:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")

function Message ({message}){
  
  return ( message ? <div>{message}</div> : <div>No message</div>)
}

ReactDOM.render( <Message message={null} />, rootElement)
 </script>
```

If we want to wrap everything in a div compoenent we can will need to do interpolation:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")

function Message ({message}){
  
  return ( 
  <div>
  {message ? <div>{message}</div> : <div>No message</div>}
  </div>
  )
}

ReactDOM.render( <Message message={null} />, rootElement)
 </script>
```

Re-render the component - building a current time displaying component.

```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
<script type="text/babel">
const rootElement = document.getElementById("root")

function tick (){
  const time = new Date().toLocaleTimeString()
  const element = <div> It is {time} </div>
  ReactDOM.render(element, rootElement)
}

tick()
setInterval(tick, 1000)
 </script>
```

Spreading properties on an element. 

Classical way to add properties is this:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>

<style>
.box{
  border-style: solid;
}

.box--small{
  width: 60px;
  height: 60px;
}
</style>

<script type="text/babel">
const rootElement = document.getElementById("root")

const element = (<div>
                  <div className="box box--small" style= {{paddingLeft: "20px"}}>box</div>
				</div>)

ReactDOM.render(element, rootElement)

 </script>
```

But we can also spread properties:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>

<style>
.box{
  border-style: solid;
}

.box--small{
  width: 60px;
  height: 60px;
}
</style>

<script type="text/babel">
const rootElement = document.getElementById("root")
const props ={
  className:"box box--small",
  style: {paddingLeft: "20px"},
}
const element = (<div>
                  <div {...props }>box</div>
				</div>)
ReactDOM.render(element, rootElement)
 </script>
```

We can also store className store in a variable:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>

<style>
.box{
  border-style: solid;
}

.box--small{
  width: 60px;
  height: 60px;
}
</style>

<script type="text/babel">
const rootElement = document.getElementById("root")
const className = "box box--small"
const props ={
  className,
  style: {paddingLeft: "20px"},
}
const element = (<div>
                  <div {...props }>box</div>
				</div>)
ReactDOM.render(element, rootElement)
 </script>
```


How we can manually set the stae in React:
```
<div id="root"></div>
<script src="https://unpkg.com/react@16.0.0-rc.3/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16.0.0-rc.3/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>

<script type="text/babel">
const rootElement = document.getElementById("root")
const state ={eventCount: 0, username: ''}

function App(){
  return (
    <div>
      <p>There have been {state.eventCount}</p>
	  <p><button>Click Me</button></p>
	  <p>You typed: {state.username} </p>
	  <p><input /></p>
	</div>
   )
}

setState({eventCount: 10})
setState({username: "mia"})

function setState(newState){
  Object.assign(state, newState)
  renderApp()
}

function renderApp(){
  ReactDOM.render(
  <App />, 
  rootElement
  )
}
renderApp()
 </script>
```