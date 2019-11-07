---
title: "Gatsby fonts"
date: "2019-10-08"
---

> In order to use custom fonts you need to install a package (plug in) and then restart the local host
```
npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```
> Then you need to open gatsby-config.js file. This is the file where we need to add plugins or site configuration. In order to use typography plugin we need to change this:
```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

> Create new folder under src called "utils"

> Add a new js file called: typography.js

> Add this code to the file:
```
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography
```

> Start development server
```
gatsby develop
```

