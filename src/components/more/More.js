import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import { FaLongArrowAltRight } from "react-icons/fa"
import "./more.scss"

const More = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner2.jpg" }) {
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
          Tag="section"
          className="more"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="container more__content">
            <div className="row">
              <div className="col-md-6 more__info">
                <h2>More power behind every pixel</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere maxime id cupiditate dolore doloribus animi? Dolores
                  quae saepe temporibus sunt laudantium commodi numquam.
                  Dignissimos aliquid modi quam magnam repudiandae id totam quia
                  rerum. Dicta libero molestiae necessitatibus ipsum excepturi
                  rem?
                </p>
                <Link className="link" to="/">
                  See the options <FaLongArrowAltRight className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default More
