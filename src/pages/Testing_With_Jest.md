---
title: "Testing with Jest"
date: "2019-12-21"
---

![](https://i.imgur.com/cbhYcg2.jpg "Photo by Chokniti Khongchum from Pexels")

Testing with Jest is relatively easy. When you create your project with create-react-app, it will come already with Jest installed and with the <code>App.test.js</code> in the <code>src</code> folder.

And immediatelly out of the box you can simply use following code to run your first test for App.js:
```
npm run test
```
How to proceed then?

By default Jest uses exporting which is different from the ES6 (used in React).

React uses either **NAMED EXPORT**:
```
export functionX(){
	return 1;
}
```
and **NAMED IMPORT**:
```
import {functionX} from "./functionX"
```

or React uses **DEFAULT EXPORT**:
```
functionX(){
	return 1;
}
export default functionX;
```
and **DEFAULT IMPORT**:
```
import functionX from "./functionX"
```


However, what Jest uses are <code>MODULE EXPORTS</code>. These are different and not fully compatible with React.

**MODULE EXPORT**:
```
functionX(){
	return 1;
}
module.exports = functionX;
```

**MODULE IMPORT**:
```
const functionX = require("./functionX");
```

React way of importing is NOT compatible with Jest. If you use import or export in your function or in your test, you will get errors:
```
Cannot use import statement outside a module
```

In order to be able to use Jest tests and export them and import them according to ES6 (React standard way) you will also need to install following dependencies:
```
npm install --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

Afterwards you should easily be able to use import and export for your tests.

Example function in <code>formatImpressions.js</code> which resides in <code>functions</code> folder:
```
export function formatImpressions(input) {
  // Receives an array of objects as inputs and substitutes empty or null impressions with 0.
  for (let row = 0; row < input.length; row++) {
    if (!input[row].Impressions) {
      input[row].Impressions = 0;
    }
    if (!input[row].Clicks) {
      input[row].Clicks = 0;
    }
  }
  return input;
}

```

Example test in <code>formatImpressions.test.js</code> which resides in <code>tests</code> folder:
```
import { formatImpressions } from "../functions/formatImpressions";

test("format Impressions", () => {
  expect(
    formatImpressions([
      { Datasource: "Facebook Ads", Impressions: "", Clicks: "" }
    ])
  ).toStrictEqual([{ Datasource: "Facebook Ads", Impressions: 0, Clicks: 0 }]);
  expect(
    formatImpressions([
      { Datasource: "Facebook Ads", Impressions: 123, Clicks: 50 }
    ])
  ).toStrictEqual([
    { Datasource: "Facebook Ads", Impressions: 123, Clicks: 50 }
  ]);
});

```

In the terminal we are now able to run the test
```
npm run test
```

It should open the <code>watch</code> view where you can see how many tests failed and how many passed. Pressing <code>A</code> button in this view will run ALL tests again (because sometimes only latest test will run). 

Pressing <code>Q</code> will end this watch view and get you back to terminal.

**TESTING REACT COMPONENTS**

Example set of tests possible for React components, where components are in components folder and in this folder we also have a subfolder <code>__test__</code> and <code>__snapshots__</code>(the last one is created automatically when running snapshot tests):
```
import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../Header.js";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

it("renders header correctly", () => {
  render(<Header></Header>);
});

it("renders header correctly", () => {
  const { getByTestId } = render(<Header></Header>);
  expect(getByTestId("header")).toHaveTextContent(
    "Advertising Data ETL-V Challenge"
  );
});

it("matches snapshot", () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
```
PLEASE NOTE that the Header component needs to have a attribute <code>data-testid="header"</code>:
```
import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Header() {
  // Defines a header to be displayed as a title on the pages
  return (
    <div>
      <Row>
        <Col sm={12}>
          <h2
            data-testid="header"
            style={{
              margin: "20px 0px",
              textAlign: "left",
              color: "#7F6A93",
              borderBottom: "0.5px solid #E8E8EA",
              paddingBottom: "20px"
            }}
          >
            Advertising Data ETL-V Challenge
          </h2>
        </Col>
      </Row>
    </div>
  );
}
```

According to official Higcharts forum https://www.highcharts.com/forum/viewtopic.php?t=42324 trying to use snapshot test with Highcharts will not work because:
```
It seems that React Test Renderer works only on pure JavaScripts objects without depending on the DOM, while Highcharts needs integration with HTML structure (to find container where the chart will be rendered etc.) - more: https://reactjs.org/docs/test-renderer.html.
```

Resources: 

https://jestjs.io/docs/en/tutorial-react
