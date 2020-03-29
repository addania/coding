---
title: "Redux"
date: "2020-02-15"
---

![](https://i.imgur.com/DzveM7R.png "Photo by Traversy Media
 from https://www.youtube.com/watch?v=93p3LxR9xfM")

Redux is a global state manager. It is a predictable state container for JavaScript (apps.redux.js.org). Redux helps write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

We use Redux when we want to <code>share state</code> between components.

Instead of individual <code>Component level state</code> you will have <code>Application level state</code>.

Redux concept incorporates some teminology:

> <code>View</code> - your components

> <code>Store</code> - your state (it sends the state **to** components)

> <code>Action creator</code> - one of components might be a button which when clicked will create an **action** - therefore it is called **action creator**. It will dispatch the action to the store.

> <code>Reducers</code> - pure functions which define how application state changes, in response to that **action**. They receive <code>old state and action </code> from the store, reducers run calculations on how the new state should be based on old state and action and respond with the new state. This new state is sent to component and component will react to this new state


Reference:

https://www.youtube.com/watch?v=93p3LxR9xfM 


In order to implement the redux, we need to import a give script in the htmls file: 

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.js" type="text/javascript"></script>
```

This export single global variable called Redux.


In .js file we need to import createStore which will create the:

```
import {createStore} from "redux";
```
Store hold current application state object and can dispatch actions. For store, we need to define the the <code>reducer</code> - which is a fucntion which handles how the app will react to current state and action and what will be then the new state based on those.
```
const store= createStore(counter)
```

In our case the reducer will be counter which will look like this. Notice how it receives state (with default value 0) and action:
```
const counter = (state=0, action) => {
  switch(action.type) {
      case "INCREMENT": return state+1;
      case "DECREMENT": return state-1;
      default: return state;
  }
}
```

Reduccer manages state updates, in our case it is a pure function counter.

Store has 3 important methods in it:
- getState
- dispatch
- subscribe

<code>getState</code> retrieves current state from the redux store:
```
console.log(store.getState())
```
Result would be 0, because our default state is 0.

<code>dispatch</code> lets you dispatch actions which changes the state
```
store.dispatch({type: "INCREMENT"})
```
If we console log the  state now, we will get a result of 1, becasue we dispactechd and action to increment the state:
```
store.dispatch({type: "INCREMENT"})
console.log(store.getState())
```

<code>subscribe</code> lets you register a callback that redux store will call anytime the action has been dispatched, so that you can update the ui of your application, to reflect the current application state.
```
store.subscribe( () => {
  document.body. innerText = store.getState();
});

document.addEventListener("click", ()=> {
  store.dospatch({type: "INCREMENT"})
});
```
So any time state changes, through subscribe, store will activate this function <code>document.body. innerText = store.getState();</code> and it will show the current state. ANd on every click, we will dispatch an action of "INCREMENT" type, which will change the current state, since there is new state, subscribe will change the text in body to the new state.

Reference: 

https://egghead.io/courses/getting-started-with-redux

Connect is a redux function to connect a react component to a redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store. https://react-redux.js.org/api/connect

