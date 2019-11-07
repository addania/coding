import React from "react";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img/pic2.jpg";
import pic3 from "./img/pic3.jpg";
import pic4 from "./img/pic4.jpg";
import pic5 from "./img/pic5.jpg";
import pic6 from "./img/pic6.jpg";
import pic7 from "./img/pic7.jpg";
import pic8 from "./img/pic8.jpg";
import pic9 from "./img/pic9.jpg";
import pic10 from "./img/pic10.jpg";
import pic11 from "./img/pic11.jpg";
import pic12 from "./img/pic12.jpg";
import pic13 from "./img/pic13.jpg";

const imageArray = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
];

export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPic: Math.floor(Math.random()*12) };

    this.interval = null;

    this.nextPic = this.nextPic.bind(this);
  }

  nextPic() {
    let next = Math.floor(Math.random()*12);
    this.setState({ currentPic: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPic, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = imageArray[this.state.currentPic];
    return (
        <img src={src} alt="" style={{display: "block", marginLeft: "auto", marginRight:"auto", width: "100%"}}/>
    );
  }
}