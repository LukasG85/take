import React from "react"
import AboutItem from "./AboutItem"
const img1 = "../../images/img1.jpg"
const img2 = "../../images/img2.jpg"
const img3 = "../../images/img3.jpg"

const items = [
  {
    id: 0,
    title: "Design quality",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, aperiam.",
    heart: false,
    link: "Find Out More",
    background: "#f615f7d",
  },
  {
    id: 1,
    title: "Built to last",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, aperiam.",
    background: "#f615f7d",
    heart: false,
    link: "Find Out More",
  },
  {
    id: 2,
    title: "Our clients",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    heart: true,
    link: "Get insights",
    background: img1,
  },
  {
    id: 3,
    title: "How to shoo great",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    heart: false,
    link: "Find Out more",
    background: img1,
  },
  {
    id: 4,
    title: "Sign up & see why",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    heart: true,
    link: "Get Started Now",
    background: img2,
  },
  {
    id: 5,
    title: "Perfect pictures",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    heart: false,
    link: "Find Out more",
    background: img1,
  },
  {
    id: 6,
    title: "Start somthing",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    heart: false,
    link: "Get Started Now",
    background: img3,
  },
]

const AboutItems = () => {
  return (
    <div className="items">
      {items.map(item => (
        <AboutItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default AboutItems
