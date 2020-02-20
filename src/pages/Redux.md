---
title: "Redux"
date: "2020-02-15"
---

![](https://i.imgur.com/DzveM7R.png "Photo by Traversy Media
 from https://www.youtube.com/watch?v=93p3LxR9xfM")

Redux is a global state manager. It is a predictable state container for JavaScript (apps.redux.js.org). Redux helps write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

We use Redux when we want to <code>share state</code> between components.

Instead of individual <code>Component level state</code> you will have <code>Application level state</code>.

Redux concept incorporates some teminilogy:

> <code>View</code> - your components

> <code>Store</code> - your state (it sends the state **to** components)

> <code>Action creator</code> - one of components might be a button which when clicked will create an **action** - therefore it is called **action creator**. It will dispatch the action to the store.

> <code>Reducers</code> - pure functions which define how application state changes, in response to that **action**. They receive old state and action and respond with the new state. This new state is sent to component and component will react to this new state


Reference:

https://www.youtube.com/watch?v=93p3LxR9xfM
