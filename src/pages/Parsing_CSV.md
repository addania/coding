---
title: "Parsing CSV"
date: "2019-12-12"
---

![Files](https://i.imgur.com/crZSR9A.jpg "Photo by Mike from Pexels")

CSV files will be interpretted as <code>string</code>. In order to convert them to a JSON object, we will need to parse them first. It is relatively easy as they are comma separated. 

Example CSV parser is here:
```
function csvJSON(csv) {
  // Receives a comma separated csv file as input. 
  Outputs array of objects as result.
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");
  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
    for (var j = 0; j < headers.length; j++) {
      const columnValue = currentline[j];
      if (j === 3 || j === 4) {
        obj[headers[j]] = parseInt(columnValue);
      } else {
        obj[headers[j]] = columnValue;
      }
    }
    result.push(obj);
  }
  let removeLast = result.pop();
  return result;
}
```

Please note, that it can happen that there will be one redundant line at the very end of our JSON object. Which we remove by <code>.pop()</code>. function. If in your case, no extra empty row is included in the JSON, then remove that line <code>let removeLast = result.pop();</code> from the code, else you might remove one last line.

![Files](https://i.imgur.com/YY6Senp.jpg "Photo by Mike from Pexels")