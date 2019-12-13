---
title: "Fetching Data in React"
date: "2019-12-11"
---

![Fetching](https://i.imgur.com/MqWLXcO.jpg "Photo by Jozef Fehér from Pexels")

Fetching data in REACT from a url or an API is not as straightforward as it might seem. It also has some catches to it.

In order to fetch data, the best place to fetch data is useEffect hook. It is similar to lifecycle methods of class components, so it will be triggered when the component mounts or when it re-renders. Plus it has an advantage of being able to define if it will only run once. So let's take a look at it.

To fetch data from this Amazon aws url: 

<code>"http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"</code> 

or its Github equivalent: 

<code>"https://raw.githubusercontent.com/addania/challenge/master/src/data/source.csv?raw=true"</code> 

we can use following script:
```
1 useEffect(() => { 
2   async function fetchData() {
3      const response = await fetch(
4        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
5      );
6      const csvData = await response.text();
7      const jsonData = csvJSON(csvData);
8      const formattedImpressions = formatImpressions(jsonData);
9      //...more functions which transform initial data
      setState(formattedImpressions);      
10    }
11    fetchData();
12  }, []);

```

Let's break it down. We already know some advantages why we should use useEffect for it. We also need to make sure we import the useEffect in the first place, so the entire code will look like this:
```
import React, { useState, useEffect } from "react";

function App() {
  
const [data, setData] = useState([]);

useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
      );
      const csvData = await response.text();
      const jsonData = csvJSON(csvData);
      const formattedImpressions = formatImpressions(jsonData);
      //...more functions which transform initial data
      setState(formattedImpressions);
    }
    fetchData();
  }, []);

 return (
    <div></div>
    )
}

export default App;
```

When we fetch data we most likely only want to do it once when the component mounts, and not every time when it re-renders. Why? Fetching data (and especially big files) is an expensive operation and it causes delays in when data are available. So we want to do it only once. In order to do it, we pass empty array to the useEffect function as second argument <code>[]</code> on the line number 12. This will tell useEffect to only render once when component mounts.


Then the syntax for fetching is following (lines2-11):
```
 async function fetchData() {
      const response = await fetch(
        "http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv"
      );
      const csvData = await response.text();
      const jsonData = csvJSON(csvData);
      const formattedImpressions = formatImpressions(jsonData);
      //...more functions which transform initial data
      setState(formattedImpressions);      
    }
    fetchData();
```

It is important to understand that fetching is <code>asynchronous</code>. When we fetch data, we only get a promise, that we will get the data as soon as they are available (at some later point in time, can be even in 5 minutes). But they are NOT yet available in the moment when the trigger the fetch. Therefore, we cannot <code>console.log</code> them or work with them immediatelly afterwards. If we do, we will get errors, that our functions cannot run on <code>undefined</code>. This is the reason why we need to include <code>await</code> and then all the functions which need to run on our data will run AFTER the data are available and they need to run **INSIDE** of the useEffect. Then the very last step will be to setState with transformed data. 

<code>Await</code> will make sure that anything after it will first wait until data are available and only trigger it when data are there. If we put our functions **OUSIDE** of the useEffect, all functions will run before the data actually are available and fail.

Another way how we can fetch data:
```
import React, { useState, useEffect } from "react";
export const FetchAPItest = () => {
  const [person, setPerson] = useState(null);
  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item]=data.results;
    setPerson(item);
  }, []);
  return (
    <div>
      {person && <p>{person.name.first}</p>}
    </div>
  )
}
```

Please note: this will only work when you initially set the state to <code>null</code>!
```
const [person, setPerson] = useState(null);
```

If you set your state to empty:
```
const [person, setPerson] = useState();
```

you will get an error that undefined does not have property name.first

Please also note, that we render our component conditionally when the person is there:
```
{person && <p>{person.name.first}</p>}
```

If we just do this:
```
<p>{person.name.first}</p>
```
we will again have error.

Same data, fetched by the first method:
```
import React, { useState, useEffect } from "react";

export const FetchAPItest2 = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchData(){
      
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item]=data.results;
    setPerson(item);
  }
  fetchData();
  }, []);

  return (
    <div>
      {person && <p>{person.name.first}</p>}
    </div>
  )
}
```

![Fetching](https://i.imgur.com/Sb31C68.jpg "Photo by Jozef Fehér from Pexels")