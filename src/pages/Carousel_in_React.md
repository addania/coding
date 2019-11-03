---
title: "Carousel in React"
date: "2019-10-04"
---

Example code to create carouseel component with 3 images slideshow

``` 
import React from "react"
import "./index.css";

export class Carousel extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      picsForCarousel: [
        "./img/car1.jpg",
        "./img/car2.jpg",
        "./img/car3.jpg"
      ],
      picSelector: 0,
    }
  }

componentDidMount(){
  setTimeout(
    ()=>{
      const number=this.state.picSelector+1;
      this.setState({picSelector: number})},5000)
    }

  componentDidUpdate(){
      setTimeout(
        ()=>{
          const number=this.state.picSelector+1
          this.setState({picSelector: number})},5000)
        }

  render (){
  /*  const number=this.state.picSelector+1;
      this.setState({picSelector: number});*/
    return (
      <div>
      <img src={this.state.picsForCarousel[this.state.picSelector]} style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%"
      }} alt="" />
      </div>
    )
    
    ;
  }
};
```