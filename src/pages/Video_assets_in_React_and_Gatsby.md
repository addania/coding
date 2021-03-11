---
title: "Add video assets to React"
date: "2019-10-02"
category: "knowledge-base"
---

![](https://i.imgur.com/WSj6CoM.jpg "Photo by Donald Tong from Pexels")

Being able to display videos in your website is very cool. Here is how you can easily do it in React apps.

> Go to pages folder and create vid subfolder

> Upload your video there for example called <code>myVideo.mp4</code>

> Open your <code>index.js</code> files and import your video

```
import vid from "./vid/myVideo.mp4";
```

> Create a video tag with source tag. In video tag write controls if you want to display controls like play and pause. In source tag write the src either as a URL where your video is hosted or file path to your imported video. Also add type, in this case video/mp4

```
<video  controls>
    <source src={vid} type="video/mp4">
    </source>
</video>
```

> Now how about Gatsby? Gatsby is tricky cause it uses markdown files. Let's see if their official documentation and plug-ins work: https://www.gatsbyjs.com/plugins/gatsby-remark-embed-video/?=video

> First install this plug-in from the terminal:

```
npm i gatsby-remark-embed-video
```

> Then go to `gatsby-config.js` and add following code:

```
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
      },
    },
```

> to the module.exports plugins:

```
module.exports = {
  plugins: [
    ...
  ]
}
```

> then your config file could look something like this:

```
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Coding Adventures",
    author: "Addania",
    description: `Coding experience blog`,
  },
  pathPrefix: "/coding",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
      },
    },
  ],
}
```

> Great! Now restart your gatsby-app

> Find your mark down file and add your video (for example from youtube) like this:

```
`video: https://www.youtube.com/embed/2Xc9gXyf2G4`
`youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
`youtube: 2Xc9gXyf2G4`
`vimeo: https://vimeo.com/5299404`
`vimeo: 5299404`
`videoPress: https://videopress.com/v/kUJmAcSf`
`videoPress: kUJmAcSf`
`twitch: https://player.twitch.tv/?channel=dakotaz`
`twitch: https://player.twitch.tv/?autoplay=false&video=v273436948`
`twitch: 273436948`
`twitchLive: dakotaz`
video: [VideoTitle](https://www.youtube.com/embed/2Xc9gXyf2G4) youtube: [Cool Youtube Video](https://www.youtube.com/watch?v=2Xc9gXyf2G4)
```

> Let's test this here:

`video: https://www.youtube.com/watch?v=ZfZrHWklJdI&ab_channel=BestofMovies%26TV`
