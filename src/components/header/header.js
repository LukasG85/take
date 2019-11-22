import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./header.scss"

import logo from "../../images/logo.png"
import iphone from "../../images/iPhone.png"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="header"
          className="banner"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner__logo">
                  <img src={logo} alt="logo" />
                  <span>take</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container banner__content">
            <div className="row">
              <div className="col-md-5 banner__info">
                <h1>Picture perfect</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  totam necessitatibus sapiente dolore repellendus aliquid quasi
                  quas ipsa ut!
                </p>
              </div>
              <div className="col-md-7">
                <div className="iphone">
                  <img src={iphone} alt="iphone" />
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Header
