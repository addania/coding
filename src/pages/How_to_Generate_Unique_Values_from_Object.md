---
title: "How to generate Unique values from an object"
date: "2019-12-23"
---

![](https://i.imgur.com/STxfgmb.jpg "Photo by João Jesus from Pexels")

In order to get unique values from an array, we can use <code>Set</code> and <code>map</code>:
```
const uniqueValues = [...new Set([1,1,1,2,2,2,3,3,3,3,4,5].map(item => item))];
console.log(uniqueValues);
// result: [1,2,3,4,5]
```

In order to get unique values from an object, imagine we have an object like this:
```
const data = [
{Datasource: "FB", Campaign: "A"},
{Datasource: "FB", Campaign: "B"},
{Datasource: "Adwords", Campaign: "A"},
{Datasource: "Adwords", Campaign: "C"}]
```

Now we want to get and array of unique datasources:
```
["FB", "Adwords"]
```
and an array of unique campaigns:
```
["A", "B", "C"]
```

In order to do it, we can use <code>Set</code> and <code>map</code> again:

Unique datasources:
```
const uniqueDatasources = [...new Set(data.map(item => item.Datasource))];
console.log("uniqueDatasources", uniqueDatasources);
// result: ["FB", "Adwords"]
```

Unique campaigns:

```
const uniqueCampaigns = [...new Set(data.map(item => item.Campaign))];
console.log("uniqueCampaigns", uniqueCampaigns);
// result: ["A", "B", "C"]
```

Resources: 

https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set