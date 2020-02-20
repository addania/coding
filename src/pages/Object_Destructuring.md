---
title: "Object Destructuring"
date: "2020-02-16"
---

![](https://i.imgur.com/vPArtow.jpg "Photo by Grimbeorn the Old from https://steamcommunity.com/sharedfiles/filedetails/?id=1139259633")

> Let's assume we have an object which looks like this:
```
const character = {
  name: "Tyrande", 
  surname: "Whisperwind", 
  race: "Night Elf",
  profession: "Priest"
}
```

> Object destructuring means taking each of the object elements and assigning them to a new variable. Object destructuring looks like this:

```
let { name, surname, race, profession } = character
```

> We can then use those variables for example:
```
console.log(name)
// Tyrande
```

Reference:

https://www.youtube.com/watch?v=G4T2ZgJPKbw
