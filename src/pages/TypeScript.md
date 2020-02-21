---
title: "TypeScript"
date: "2020-02-13"
---

![](https://i.imgur.com/xI4DXv7.jpg "Photo by ELEVATE from Pexels")

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