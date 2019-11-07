---
title: "Context"
date: "2019-10-16"
---

> Instead of passing down props through tree of nested child components (often as much as 20+ times from parent to the last child), there is a better way how components can receive props. The way is called **context** and you can think of it as something like a global variable.

> Imagine component structure:
A -> D -> C

> A is parent and only summons D component. Then D summons  C

> A has prop for theme ( value: "green") which needs to be passed to C. But only to C. Other component like D doesnt care about this prop.

> Top level component PROVIDES context and child component CONSUMES the context. 

Provider example: component A.  

Consumer Example: componenet called D

> A: provides theme

> C: consumes theme

> First we create the cotext itself

``` 
// src/ThemeContext.js
import React from 'react';
const ThemeContext = React.createContext(null);
export default ThemeContext;
```
> React.createContext will give us access to Provider and Consumer components.
```
ThemeContext = React.createContext(null);
```
> Then we create component A which will be context provider
```
// src/ComponentA.js
import React from 'react';
import ThemeContext from './ThemeContext';
const A = () => (
  <ThemeContext.Provider value="green">
    <D />
  </ThemeContext.Provider>
);
```
> We need to include new components called ThemeContext.Provider

> A doesnt pass any props to D component. It makes value green available to all child components. A summons D component.

> Lets look at C component. Now that A has made the value green available to all children, C can access that value:


```
// src/ComponentC.js
import React from 'react';
import ThemeContext from './ThemeContext';
const C = () => (
  <ThemeContext.Consumer>
    {value => (
      <p style={{ color: value }}>
        Hello World
      </p>
    )}
  </ThemeContext.Consumer>
);
```

> Complete example:
``` 
import React from "react";
const ColorContext = React.createContext(null);
export function SimpleContext(){
    return (
        <ColorContext.Provider value="green">
        <D />
        </ColorContext.Provider>
        )
    }
const D = () => {
    return (
        <div>
        <p>I am D component which is summoned by Parent component but I dont consume Context</p>
        <C />
        </div>
    )
}
const C = () => {
    return (
        <ColorContext.Consumer>
        { value => (
        <p style={{color: value}}>I am a C component summoned by D but I received beautiful green colour from my dear Parent</p>
        )}
        </ColorContext.Consumer>
    )
}
```

> With HOOKs we can make this even more elegant
```
import React, { useContext } from "react";
const ColorContext = React.createContext(
    { value: "purple"}
);
export function SimpleContextUsewithHook(){
    return (        
        <D />        
        )
    }
const D = () => {
    return (
        <div>
        <p>I am D component which is summoned by Parent component but I dont consume Context</p>
        <C />
        </div>
    )
}
const C = () => {
    const context = useContext(ColorContext);
    return (  
        <p style={{color: context.value}}>I am a C component summoned by D but I received beautiful purple colour from my dear Parent</p> 
    )
}
```

> Complex example with classes where we still use provider because we also want to be able to update the team

```
import React from 'react';
import { render } from 'react-dom';
import './style.css';
const ProfileContext = React.createContext();
class ProfileProvider extends React.Component {
  state = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoka',
    fullName: 'Kendō No Arikata',
    team: 'KendoReact',
    changeTeam: (team) => this.setState({
      team: `Kendo${team}`
    })
  }
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    )
  }
}
const App = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
)
const Profile = () => (
  <div className="profile">
    <ProfileContext.Consumer>
      {context => <img src={context.companyImage} />}
    </ProfileContext.Consumer>
    <User />
  </div>
)
const User = () => (
  <div className="user">
    <ProfileContext.Consumer>
      {context =>
        <React.Fragment>
          <a href={context.url}>
            <img src={context.userImage} width="138px" />
          </a>
          <h1 className="profile-userName">{context.userName}</h1>
          <p className="profile-fullName">({context.fullName})</p>
          <Team />
          <button className="profile-button"
            onClick={() => context.changeTeam('Angular')}>Angular</button>
          <button className="profile-button"
            onClick={() => context.changeTeam('Vue')}>Vue</button>
          <button className="profile-button"
            onClick={() => context.changeTeam('React')}>React</button>
        </React.Fragment>
      }
    </ProfileContext.Consumer>
  </div>
)
const Team = () => (
  <ProfileContext.Consumer>
    {context =>
      <div className="team">
        <p className="profile-team">{context.team}</p>
      </div>
    }
  </ProfileContext.Consumer>
)
render(<App />, document.getElementById('root'));
``` 

> Same with hooks
```
import React, { Component, useContext } from 'react';
import { render } from 'react-dom';
import './style.css';
const ProfileContext = React.createContext();
class ProfileProvider extends Component {
  state = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoken',
    fullName: 'Kendoken No Michi',
    team: 'KendoReact',
    toggleTeam: (team) => this.setState({
      team: `Kendo${team}`
    })
  }
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    )
  }
}
let Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="profile">
      <img src={context.companyImage} />
      <User />
    </div>
  )
}
let User = () => {
  const context = useContext(ProfileContext);
 return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <p className="profile-fullName">({context.fullName})</p>
      <Team />
      <button className="profile-button"
        onClick={() => context.toggleTeam('Angular')}>Angular</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('Vue')}>Vue</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('React')}>React</button>
    </div>
  )
}
let Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    );
  }
}
render(<App />, document.getElementById('root'));
```
> Resource: 

https://www.robinwieruch.de/react-context