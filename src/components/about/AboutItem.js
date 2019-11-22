import React from "react"
import { Link } from "gatsby"
import { FaLongArrowAltRight } from "react-icons/fa"
import heartImg from "../../images/heart.png"

const AboutItem = ({ item }) => {
  const { title, body, heart, link } = item

  return (
    <div className="item">
      <h3 className="item__title">{title}</h3>
      <p className="item__text">{body}</p>
      <div className="item__links">
        <Link className="link" to="/">
          {link} <FaLongArrowAltRight className="arrow" />
        </Link>
        {heart && <img src={heartImg} alt="heart" />}
      </div>
    </div>
  )
}

export default AboutItem
