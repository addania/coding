import React from "react";
import pic1 from "./img/car1.jpg";
import pic2 from "./img/car2.jpg";
import pic3 from "./img/car3.jpg";

const imageArray = [
  pic1,
  pic2,
  pic3,
];

export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPic: 0 };

    this.interval = null;

    this.nextPic = this.nextPic.bind(this);
  }

  nextPic() {
    let current = this.state.currentPic;
    let next = ++current % imageArray.length;
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