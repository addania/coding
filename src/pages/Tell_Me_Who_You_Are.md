---
title: "Tell me who you are error"
date: "2019-12-03"
category: "knowledge-base"
---

![](https://i.imgur.com/J4QhoGt.jpg "Photo by 
Kristin De Soto from Pexels")

If you run into an <code>Please tell me who you are.</code>error:
```
*** Please tell me who you are.
Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
to set your account's default identity.
Omit --global to set the identity only in this repository.
fatal: unable to auto-detect email address (got 'addania@addania-Lenovo-IdeaPad-Z510.(none)')

```

You can solve it with following steps:
```
1.git init
2.git config user.name "someone"
3.git config user.email "someone@someplace.com"
4.git add *
5.git commit -m "some init msg"
```

Reference:

https://stackoverflow.com/questions/11656761/git-please-tell-me-who-you-are-error