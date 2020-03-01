---
title: "TypeScript"
date: "2020-02-13"
---

![](https://i.imgur.com/xI4DXv7.jpg "Photo by ELEVATE from Pexels")



> To install Typscript you need to have node.js installed:
```
nodejs.org/en/
```

> Node.js will also install NPM tool (node package Manager) which will allow us to intall Typsscript globally with <code>npm install</code> command

> To install Typescript:
```
npm install -g typescript

```

> Maybe you need to add <code>sudo</code> in front of it:
```
sudo npm install -g typescript

```

> To envoke TS compiler we will use command <code>tsc</code>
```
tsc example.ts
```
> **Do not ignore**

Do not use<code>@ts-ignore</code>. It turns off the compilr completely from the next line and prevents from spotting type errors

> **Do not use React.FunctionComponent**
Eee:
```
type Props = { foo: string }
const Foo: React.FunctionComponent<Props> = ({ foo }) => <div>{foo}</div>

```

Approved:
```
const Foo = ({ foo }: Props) => <div>{foo}</div>
```

> **Do not use enums**

Nope:
```
enum Direction { Up, Down, Left, Right}
```
Jaaaa:
```
type Direction = "up" | "down" | "left" | "right"
```

> **Do not us wide types lik objct or any**

Always try to find concrete types

![](https://i.imgur.com/VwFJtH1.jpg "Photo by Anastasiya Lobanovskaya from Pexels")