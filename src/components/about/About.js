import React from "react"
import "./about.scss"
import AboutItems from "./AboutItems"

const About = () => {
  return (
    <section>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col">
            <AboutItems />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
