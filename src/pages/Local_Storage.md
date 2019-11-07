---
title: "Local Storage"
date: "2019-10-15"
---

Sometimes we want to store some data in the local storage of the browser, so that we can use them on the next session. Command to set the local storage is:
```
window.localStorage.setItem('myInput', value)
```
Example code:
```
import React from "react";

export class LocalStorage1 extends React.Component {
  constructor(props){
      super(props);
      this.state={value: ""}
      this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({value: e.target.value});
    window.localStorage.setItem('myInput', e.target.value)
  }
render () {
    return (
        <div>
            <p>{this.state.value}</p>
            <input type="text" name="stats" onChange={this.handleChange}></input>
        </div>
    )
}
}
```
> In order to retrieve item from the local storage we use code
```
window.localStorage.getItem('myInput')
```