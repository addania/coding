---
title: "Mixed content error"
date: "2019-12-13"
category: "knowledge-base"
---

![](https://i.imgur.com/ReyaN6N.jpg "Photo by Pixabay from Pexels")

For example if we want to publish our project on Github pages, it is done over HTTPS (secure HTTP). However, if we fetch some data (or upload an image) on it from not-secured HTTP, we will get an error:
```
Mixed Content: The page at "https://..." 
was loaded over HTTPS, but requestd an 
insecure image "http://...". This content 
should be served over HTTPS.
```

How to solve it? There is not much what we can do:

**1)**Check if the insecure HTTP URL is available over HTTPS by changing it from http:// to https://.

If the resource displayed is the same over HTTP and HTTPS, everything is OK :)

**2)**Change the resource and substitute with a secure one

**3)**Delete the resource from your app completely

Reference:

https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content