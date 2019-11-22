import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Info from "../components/info/Info"
import About from "../components/about/About"
import Details from "../components/details/Details"
import More from "../components/more/More"
import Onboard from "../components/onboard/Onboard"
import Plan from "../components/plan/Plan"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Info />
    <About />
    <Details />
    <More />
    <Onboard />
    <Plan />
  </Layout>
)

export default IndexPage
