import React from "react";
import Layout from "../components/layout.js";
import Header from "../components/header.js";
import { graphql } from "gatsby";
import SEO from "../components/seo.js";
import { Carousel } from "../components/carousel.js";

export default ( {data}) => (
  
  <Layout>

    <h2 style={{textAlign: "center"}}>About {data.site.siteMetadata.title}</h2>
    <p style={{textAlign: "center"}}>with Addania</p>
    <Carousel/>
    <p style={{  textAlign: "justify",  textJustify: "inter-word"}}>
    <blockquote>Programming has always been for me like looking at another galaxy from the surface of Earth and admiring its endless beauty. 
      Something so distant and daunting, yet tempting and mystical.</blockquote>
      <br/>
      On many occassions in my life I had a chance to take out a focus glass and look at one or two stars within. 
      <br/><br/>
      In the high school I opted out for programming as one of subject for my school-leaving exam. 
      This was a place where we played with robot <code>Karl</code> and building blocks. So much fun!
      At that time I was already considering going for university and pursuiting coding as my future career.
      Despite, graduating with the highest score in this subject and teachers advising me to go forward with it during my studies,
      I got discouraged seeing all my other classmates (all males for that matter) and their already andvanced skills in programming. 
      Feeling completely green and inexperienced compared to them, I decided not to follow this path and went for Economy and Management.
      <br/><br/>
      During my studies I found my interest in Marketing but the coding universe has always been lurking somewhere at the back of my mind.
      <br/><br/>
      In my free time I took couple of truly amazing online courses about Python fundamentals,
       Building intereactive Python games, Building websites with HTML, CSS and Javascript.
      Every course I took I got impressed how much I can be intrigued and happy playing around with words and (almost) literally building a new world.
      <br/><br/>
      At certain point accidetally an offer landed on my plate to build a mini sub-site for a company 
      and this project completely swallowed my attention for 4 weeks and boosted my motivation for coding. 
      I remember coming back home in the evening after my full-time job. 
      Normally I would be tired and desiring to only take shower, dinner and sleeeeeeep.
      Rather, I was coming home looking forward to opening my computer and forgetting the space-time for the next couple of hours and working on my project.
      <br/><br/>
      Interesting how much extra energy which we are not even aware of we have within our stock, dormant, waiting to be awaken by motivation.
      After this experience I thought, what if ... And then:
      <br/><br/>
      <code>
      JERONIMO!!
      </code>
      </p>
  </Layout>
)

export const query = graphql`
query {
  site {
    siteMetadata{
      title
    }
  }
}
`