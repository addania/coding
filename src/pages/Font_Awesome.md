---
title: "Font Awesome"
date: "2021-03-11"
category: "knowledge-base"
---

`youtube: https://www.youtube.com/watch?v=9cQgQIMlwWw&ab_channel=MarcDonis`

> EVERYTHING'S AWESOOOOOOOOOOOOOOOOOOOOOME

> Yes, now what is `FONT` awesome? It is library which provides lots of cool icons - many of them for free <3 We love free..

> How to work with it?

> First of all you need to install font awesome from your terminal to the root of your project:

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

> Then you need the website, ah, right: https://fontawesome.com/

> Then you need to search for you cool new icon which you want to use in your React app: https://fontawesome.com/icons/optin-monster?style=brands

> These icons come from different groups:

- free-brands
- free-solid

> For each icon you need to import FontAwesomeIcon component:

```
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```

> Then you need to import the icon itself based on its name:

```
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons";
```

> Notice how on the font awesome website the optin-monster icon is categorized in free-brands category, which is then reflected in the import url

> Notice also how to use the names of the icons when importing them as components: `faOptinMonster`

> Then you use your component in the folowing way:

```
<FontAwesomeIcon icon={faOptinMonster} color="turquoise" size="6x" />
```

> You can use `color` prop to set its color or `size` prop which has values: "sm" or "lg" (for small and large). Or use can use something like 6 times the font size - with "6x"

> If your icon is categorized amobg solids, then the import would look like this:

```
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";
```

> Everything else is the same:

```
<FontAwesomeIcon icon={faKiwiBird} color="green" size="6x" />
```

> Dont forget that you need to import this in both cases:

```
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```

> Reference: https://fontawesome.com/how-to-use/on-the-web/using-with/react
