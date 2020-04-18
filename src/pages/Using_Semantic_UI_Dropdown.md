---
title: "Semantic UI Dropdown"
date: "2019-12-24"
category: "knowledge-base"
---

![](https://i.imgur.com/HkbIUiu.png "Semantic UI React logo")

Semantic UI is a library of React components which are ready to be used. Let's take an example where we want to use a multiple selection Dropdown.

First we visit the page of semantic ui:

https://react.semantic-ui.com/modules/dropdown/

We can scroll to <code>Multiple Selection</code> and click to see the entire code in CodeSandbox:

https://codesandbox.io/s/9h0ck?module=/example.js

Here we can see entire code and how it can be integrated:

```
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
]

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)

export default DropdownExampleMultipleSelection

```

Then we also need a component like App, which will display the component:
```
<DropdownExampleMultipleSelection />
```

Such component can be for example App component

Please note we will also need to add STYLES to the semantic ui components, else theey will not generate correctly. There are two ways how to do it:

**1//** got to public folder and find index.html and integrate link tag there like this:
```
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
```

or

**2//** you can use a small hack to add to your DropdownExampleMultipleSelection component:
```
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
```

Entire code loos then like this:
```
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
]

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)

export default DropdownExampleMultipleSelection

```

When using this dropdown, it is very importnat to generate options!!! These will be the values in the dropdown:
```
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
]

```

They are then passed into the Dropdown component as prop called options.

My real work integration of the dropdown was to create a filter component which would be based on Datasource and Campaign columns from my dataset. Original integration looked like this:
```
import React from "react";
import { Dropdown } from "semantic-ui-react";

export function Filter({ styling, filterColumns, onChange, dataSet }) {
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  const columns = [];
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  for (let item = 0; item < filterColumns.length; item++) {
    const genOptions = generateOptions(filterColumns[item], dataSet);
    columns.push(
      <div key={item}>
        <p style={{ textAlign: "left", color: "#828282", marginTop: "20px" }}>
          {filterColumns[item]}
        </p>
        <Dropdown
          key={item}
          style={styleLink}
          placeholder={filterColumns[item]}
          fluid
          multiple
          selection
          options={genOptions}
          onChange={onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  }
  return (
    <div>
      <h2 style={styling}>Filters</h2>
      {columns}
    </div>
  );
}

function generateOptions(inputItem, inputDataSet) {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  let uniqueValues = [];
  for (let entry = 0; entry < inputDataSet.length; entry++) {
    if (!uniqueValues.includes(inputDataSet[entry][inputItem])) {
      uniqueValues.push(inputDataSet[entry][inputItem]);
    }
  }
  let newOptions = [];
  for (let optionItem = 0; optionItem < uniqueValues.length; optionItem++) {
    let optionRow = {
      key: uniqueValues[optionItem],
      text: uniqueValues[optionItem],
      value: uniqueValues[optionItem]
    };
    newOptions.push(optionRow);
  }
  return newOptions;
}
```

Then a re-worked integration looked like this:

filter.js
```
import React from "react";
import { filterHelperFunction } from "../functions/filterHelperFunction";

export const Filter = ({ styling, filterColumns, onChange, dataSet }) => {
  // Defines a filter which allows users to filter data displayed on graph
  // by selecting certain datasources and/or campaigns.
  const columns = filterHelperFunction(filterColumns, onChange, dataSet);

  return (
    <div data-testid="filter">
      <h2 style={styling}>Filters</h2>
      {columns}
    </div>
  );
};
```

filterHeelperFunction.js
```
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { generateOptionsFilter } from "./generateOptionsFilter";

export const filterHelperFunction = (filterColumns, onChange, dataSet) => {
  const getColumns = item => {
    const genOptions = generateOptionsFilter(item, dataSet);
    return (
      <div key={item}>
        <p style={{ textAlign: "left", color: "#828282", marginTop: "20px" }}>
          {item}
        </p>
        <Dropdown
          key={item}
          placeholder={item}
          fluid
          multiple
          selection
          options={genOptions}
          onChange={onChange}
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  };
  const columns = filterColumns.map(getColumns);
  return columns;
};
```

generateOptionsFilter.js
```
export const generateOptionsFilter = (inputItem, inputDataSet) => {
  // Receives input data and input item (based on filters) and dynamically generated options to be used for Dropdown component.
  const uniqueValues = [...new Set(inputDataSet.map(item => item[inputItem]))];
  const newOptions = uniqueValues.map(item => {
    return {
      key: item,
      text: item,
      value: item
    };
  });
  return newOptions;
};
```

index.html (notice the link integration for semantic ui)
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```