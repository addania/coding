import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"

export default ({ data }) => (
  <Layout>
    <h2 style={{ textAlign: "center" }}>
      About {data.site.siteMetadata.title}
    </h2>
    <p style={{ textAlign: "center" }}>with Addania</p>
    <Carousel />
    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
      <blockquote>
        Programming has always been for me like looking at another galaxy from
        the surface of Earth and admiring its endless beauty. Something so
        distant and daunting, yet tempting and mystical.
      </blockquote>
      <br />
      On many occassions in my life I had a chance to take out a focus glass and
      look at one or two stars within.
      <br />
      <br />
      In the high school I opted out for programming as one of subject for my
      school-leaving exam. This was a place where we learned Pascal and played
      with robot <code>Karl</code> and its building blocks. So much fun! At that
      time I was already considering going for university and pursuiting coding
      as my future career. Despite, graduating with the highest score in this
      subject and teachers advising me to go forward with it during my studies,
      I got discouraged seeing all my other classmates (all males for that
      matter) and their already andvanced skills in programming. Feeling
      completely green and inexperienced compared to them, I decided not to
      follow this path and went for Economy and Management.
      <br />
      <br />
      During my studies I found my interest in Marketing but the coding universe
      has always been lurking somewhere at the back of my mind.
      <br />
      <br />
      In my free time I took couple of truly amazing online courses about Python
      fundamentals, Building intereactive Python games, Building websites with
      HTML, CSS and Javascript. Every course I took I got impressed how much I
      can be intrigued and happy playing around with words and (almost)
      literally building a new world.
      <br />
      <br />
      At certain point accidetally an offer landed on my plate to build a mini
      sub-site for a company and this project completely swallowed my attention
      for 4 weeks and boosted my motivation for coding. I remember coming back
      home in the evening after my full-time job. Normally I would be tired and
      desiring to only take shower, dinner and sleeeeeeep. Rather, I was coming
      home looking forward to opening my computer and forgetting the space-time
      for the next couple of hours and working on my project.
      <br />
      <br />
      Interesting how much extra energy which we are not even aware of we have
      within our stock, dormant, waiting to be awaken by motivation. After this
      experience I thought, what if ... And then:
      <br />
      <br />
      <code>JERONIMO!!</code>
      <br />
      <hr></hr>
      <br />
      <img
        src="https://i.imgur.com/zcYbg1V.jpg"
        alt="Photo by Gereth Davies from Pexels"
      />
      Update: 02.03.2020
      <br />
      <blockquote>
        The day to be remembered... My very very <code>1st </code>
        day as a Front-End Developer... The day <code>0</code>, since obviously
        all acceptably decent indices shall start with zero.
      </blockquote>
      <br />A day a bit chaotic as I was settling in my new corner of the
      office.
      <br />
      <br />
      But a day with a <code>MohnKuchen</code> which propheted an excellent day.
      After all, what can go wrong when you have a prospect of a delicious cake
      and warm cup of tea from our CTO (Chief Tea Officer) to combat literally
      ANY challenge in life? They say <code>piece of cake</code> for a reason,
      don't they? :)
      <br />
      <br />A day when I <i>actually</i> talked to <i>actual</i> developers. And
      they
      <i> actually</i> talked BACK :) Thank you <code>MohnKuchen</code> ;)
      <br />
      <br />A day with <code>muscle tomcat</code>. Yes, yes, dear Austrians: ein
      Tag mit Muskelkater :) from previous day(s) of intense training and ...
      let's admit it... carrying that <code>MohnKuchen</code> all the way to the
      office.
      <br />
      <br />A day deeply satisfying as I finally achieved my long desired goal.
      The hard work for past months has finally paid off. Dream turning
      inevitably into reality right in front of my eyes. It seems a bit surreal,
      it seems a bit... well plain even, earthy maybe. But <code>MINE</code>.
      <br />
      <br />A day with a small <code>victory</code> to setup my first
      professional dev environment.
      <br />
      <br />A day which ended up with an intriguing <code>puzzle</code> to look
      forward to solving the next day :)
      <br />
      <br />A day with an after-work <code>hangout</code> which turned out to be
      more pleasant than expected.
      <br />
      <blockquote>Total score: The day freaking ROCKED :)</blockquote>
      <br />
      And yes, the <code>cake</code> was the most important part of it :)
      <br />
      <img
        src="https://i.imgur.com/aRwy8mP.jpg"
        alt="Photo by Antonio Quagliata from Pexels"
      />
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
