---
title: "Zod"
date: "2023-01-23"
category: "knowledge-base"
---

![](https://i.imgur.com/alxMzwe.png "Photo by from Pexels")

This page is my notes from couple of courses and official zod documentation:

- https://www.youtube.com/watch?v=L6BE-U3oy80&ab_channel=WebDevSimplified
- https://www.totaltypescript.com/tutorials/zod
- https://zod.dev/

<h4>For the Zod tutorial:</h4>

> Clone the repo from https://github.com/total-typescript/zod-tutorial

```
git clone https://github.com/total-typescript/zod-tutorial.git
```

> Install yarn:

```
npm install --global yarn
```

> Install dependencies:

```
yarn install
```

> If you get an error:

```
error vite@3.0.5: The engine "node" is incompatible with this module. Expected version "^14.18.0 || >=16.0.0". Got "15.13.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

> It means you dont use correct version of node.

> Install this version of node:

```
nvm install 14.18.0
```

> or alternatively:

```
nvm install 16.0.0
```

> then try to run dependencies again:

```
yarn install
```

> Start exercises:

```
yarn exercise 01

```

> Interesting facts:

> 1. how to infer type from z schema? Please not that we declare it as a type (not const) and we use angle brackets:

```
const Form = z.object({
  repoName: z.string(),
})

type Output = z.infer<typeof Form>
```

> 2. If we set keywords some defaults, it means if we dont pass anything, we will default to empty array. This means user INPUTS just name (no keyword), but the OUTPUT will be name and keywords. Which means that we will have different input and output type:

```
const Form = z.object({
  repoName: z.string(),
  keywords: z.array(z.string()).default([]),
});

type Input = z.input<typeof Form>;
type Output = z.infer<typeof Form>;
```

> The trick is to use `input` instead of `infer`
