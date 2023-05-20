import React from "react"
import Layout from "../components/layout.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import mia1 from "../images/mia1.jpg"
import { Polygons } from "../components/animationEffects/Polygons"
import adverity from "../assets/logos/adverity.png"
import universal from "../assets/logos/universal.png"
import a1 from "../assets/avatars/a1.png"
import a2 from "../assets/avatars/a2.png"
import a3 from "../assets/avatars/a3.png"
import a4 from "../assets/avatars/a4.png"
import a5 from "../assets/avatars/a5.png"
import a6 from "../assets/avatars/a6.png"
import a7 from "../assets/avatars/a7.png"
import a8 from "../assets/avatars/a8.png"
import a9 from "../assets/avatars/a9.png"

const containerStyle = {
  display: "flex",
  alignItems: "center",
  height: "80vh",
  justifyContent: "flex-end",
  position: "relative",
}

const imageStyle = {
  flex: "0 0 50%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right",
  alignItems: "flex-end",
  margin: 0,
}

const Tag = ({ title, position, timer }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        position: "absolute",
        left: 0,
        top: position,
        transform: `translateY(-${position})`,
        transform: `translateX(-100%)`,
        width: "50%",
        height: "10%",
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: 1,
        animation: `slide-in ${timer}s forwards`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h3 style={{ color: "white", alignItems: "center" }}>{title}</h3>
      </div>
    </div>
  )
}

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <div id="container" style={{ ...containerStyle, zIndex: 1 }}>
          <div id="tsparticles">
            <Polygons style={{ width: "100%", height: "300px" }} />
          </div>
          <Tag title="Frontend Developer" position="30%" timer={2} />
          <Tag title="Passionate about coding" position="50%" timer={2.5} />
          <Tag title="Experienced Team Lead" position="70%" timer={3} />
          <img
            src={mia1}
            alt="Portrait Image"
            style={{ ...imageStyle, zIndex: 0 }}
          />
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "32px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Professional Experience
          </div>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              flexDirection: "row",
              flexGrowth: 1,
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
              }}
            >
              <img
                src={adverity}
                width="70px"
                alt="adverity"
                style={{ marginBottom: "8px" }}
              />
              <div>Adverity</div>
              <div>2020 - now</div>
              <div>Team Lead Frontend Engineer</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
              }}
            >
              <img
                src={adverity}
                width="70px"
                alt="adverity"
                style={{ marginBottom: "8px" }}
              />
              <div>Adverity</div>
              <div>2016 - 2020</div>
              <div>Team Lead Account Management</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
              }}
            >
              <img
                src={universal}
                width="70px"
                alt="universalMcCann"
                style={{ marginBottom: "8px" }}
              />
              <div>Universal McCann</div>
              <div>2012 - 2016</div>
              <div>Media Specialist</div>
            </div>
          </div>
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "32px",
              display: "flex",
              justifyContent: "center",
              marginBottom: "24px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Said about me
          </div>
          <div
            style={{
              fontSize: "12px",
              display: "flex",
              flexDirection: "row",
              flexGrowth: 1,
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a1}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Mia and Sara, I could not wish for a better team to shape and
                design the new Explore Facelift with. Thank you, Mia and Sara
                for your hard work, and for being open, kind, supportive, and
                smart. You both made this journey so easy and fun. You are
                superstars!
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a8}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Mia, you know im your fan 🙂 Your professionalism, delivery
                focus, and leadership attitude - it's something I will take with
                me. You're a lifetime learner, and I'm confident you will grow
                and succeed in your current and every future role.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a7}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Mia's leadership style is one that I admire. You constantly go
                the extra mile to keep your Pod informed with everything that is
                happening around them. That's true leadership.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a3}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Secondly, to Mia Schwabova, my first female boss, THANK YOU for
                being my guide in transitioning from creative marketing to tech
                sales. You supported me with your knowledge, skills and friendly
                approach, and you showed me that it's possible to be a strong
                and skilled woman in a male-dominated industry while breaking
                down stereotypes and following your dreams.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a9}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Mia & Sara, thanks and congrats on the Bazaar. There where{" "}
                {`>70`}
                people listening and giving feedback and were clearly happy to
                see already implemented feedback from bazaars earlier this
                quarter implemented. This is true role modeling of getting
                feedback early and improving with quick feedback cycles. I think
                every other team can benefit from adopting the way you
                participate in this format regularly, gathering feedback and
                improving iteratively. This is a great example of very good
                product development practices in work.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a5}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                I admire the progress you've made in the last year and how well
                you're handling things as a pod owner. Keep on rocking
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a6}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                It’s really a pleasure working with you. I’m much obliged and
                grateful for your help, support and for that you exist in our
                team.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a4}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Thanks for all the support you provided to QA team over this
                year! ❤️ And thank you for always inspiring everyone who works
                with you! 🚀 I hope I'll have opportunity to work with you more
                next year!
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a9}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                This year me and Dan joined the Adverity and I feel lucky to
                cooperate with such an amazing and helpful person like you.
                Sending my heartiest appreciation for everything you do for me
                and the QA team
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a5}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Is there somebody else who will be testing this that could
                benefit from Mia’s stellar work on writing the testing
                requirements. Maybe @qa-engineering?
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a8}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Managing the pod really really good!
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrowth: 1,
                alignItems: "center",
                minWidth: "200px",
                padding: "24px",
              }}
            >
              <img
                src={a7}
                width="70px"
                alt="avatar1"
                style={{ marginBottom: "8px" }}
              />
              <div
                style={{
                  display: "flex",
                  maxWidth: "200px",
                  textAlign: "justify",
                }}
              >
                Mia should be cloned. You do a great job!
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
