---
title: "Event Handlers"
date: "2019-10-24"
---

Event handlers like onClick will by default pass in some metadata, which we can use afterwards. For example: name and id of the element which triggered it or trigger type (onClick, onMouseOver, onChange, etc)

We access them by:
```
event.target.name
event.target.id
```
These names are predefined by default!

But we can also access all our custom properties by:
```
event.target.attribute.XXX
```

where XXX is name of our custom property. Please note however, that this is not a reliable way to retrieve data. This way uses DOM and DOM does not keep this data longer than the moment when the event triggered. For that reason we might also need to include 
```
event.persist()
```

Example:
```
function handleClick(event) {
    console.log("Event: ", event);
    console.log("Event type: ", event.type);
    console.log("Event name: ", event.target.name);
    console.log("Event id: ", event.target.id);
    console.log("Event custom property: ", event.target.attributes.custom);
    console.log("Event innerHTML: ", event.target.attributes.innerHTML);
  }
<button onClick={handleClick} name={"clicker"} id={"click01"} custom="I am the best in clicking">
    Click ME!
</button>
```

> PLEASE NOTE: console.log("Event: ", event); will return the whole event OBJECT (on which we can click and see all nodes). If we wrote console.log("Event: " + event); event object would be stringyfied and we wont have opportunity to explore the OBJECT!!


We might need to get some info from the element which called our event handler. For example onClick. With the onClick, we can use the information provided in event object and retrieve data about our componenet which triggered the event from event object. But this approach is not good, becasue it retrieves data from the DOM. In React we dont want to rely on DOM because it is outside of the React world. 

``` 
function handleClick(event) {
    setMyArray(
      myArray.concat({
        firstName: event.target.attributes.name,
        lastName: event.target.attributes.last,
        display: event.target.innerHTML,
      })
    );
  }
<button onClick={handleClick} name={"pete"} id={"grey"} last="IM HIDDEN">
        Add Pete
      </button>
```

It is better to use it in this way:
``` 
<Button
        onClickZ={(name, id) => {
          console.log(name, id);
        }}
        name="I AM NAME"
        id="IM ID"
        children="We are the children"
        last="IM LAST NAME"
      />
function Button({ onClickZ, name, last, children }) {
  return <button onClick={() => onClickZ(name, last)}>{children}</button>;
}
```