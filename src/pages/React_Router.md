---
title: "React Router Dom"
date: "2021-03-11"
category: "knowledge-base"
---

![](https://i.imgur.com/axjkYSi.jpg "Photo by Traversy Media from Pexels")

> React is mainly used to build single page application. But wait, single? Who wants to be single? :) We want more pages, right? Then how to do it in React? How can we redirect to home, about or portfolio page?

> Great solution for that is react router dom

> Install react router dom from terminal:

```
npm install --save react-router-dom
```

> If you use create react app, then you will need to go to `index.js` and import BrowserRouter and then wrap your `App` component with it

```
...
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

```

> Alternatively, you can go to `App.js` and wrap everything the `App` component renders in `BrowserRouter`

```
...
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     ...
    </BrowserRouter>
  );
}
```

> Then we will need to create some components like `Home`, `About` or `Portfolio`

> Then in the `App.js` we will import them together with the `Route` and `Switch` from react-router-dom

```
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { NavigationBar } from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}
```

> Notice how we use Switch around Route components and how Route components will be passed to Home, About and Portfolio components in the component prop.

> Please note that abother way to write this:

```
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
```

> This however, does not render anything per se. We still need to have some component like NavigationBar, which will actually display the navigation items with clickable link, which will then redirect us to the sub-pages.

> How does the `NavigationBar` component look like?

> It imports `Link` component from react-router-dom

```
...
import { Link } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> || </span>
      <Link to="/about">About</Link>
      <span> || </span>
      <Link to="/portfolio">About</portfolio>
    </div>
  );
};
```
