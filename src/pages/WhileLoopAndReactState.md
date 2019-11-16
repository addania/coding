---
title: "While Loop and React State"
date: "2019-11-15"
---

Imagine have a while look in which you are updating state:
```
export const CodeAdvent20180102 = () => {
  const [frequencyChanges, setFrequencyChanges] = useState([
    3,
    -3,
    -2,
    5,
    4,
    0
  ]);
  const [frequencySum, setFrequencySum] = useState(0);
  const [uniques, setUniques] = useState([0]);
  const [reiterate, setReiterate] = useState(true);
  const [duplicateFrequency, setDuplicateFrequency] = useState();

  function handleClick() {
    let result = 0;
    let newArray = [...uniques];

 while (reiterate) {

    frequencyChanges.map((item, index) => {
      result = result + item;
      console.log("Im here");
      if (uniques.includes(result) && reiterate) {
        setReiterate(false);
        debugger;
        setDuplicateFrequency(result);
      } else if (reiterate) {
        newArray = newArray.concat(result);
        setUniques(newArray);
        setFrequencySum(result);
      }
    });
   }
  }

```

Updating state within while loop risks running into infinite loop especially if the loop condition is based on the state.

Why??? 

It is bcause the way state works in the React. For performance reasons, when we update thee state and use that state info immeediateellz afterwards, it is not guaranteed that it will be updated. State updated asznchronously and sometimes state updates are batched (groupeed) for performance reasons! 

So dont rely on states too much!