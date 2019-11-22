import React from "react"
import { FaWindows, FaApple } from "react-icons/fa"
import "./plan.scss"

const Plan = () => {
  return (
    <section className="plan">
      <div className="container">
        <div className="row">
          <div className="col-md-6 card-plan">
            <span className="card-plan__bagde">Legacy</span>
            <h4>Go it solo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              asperiores optio! Aliquam numquam, cupiditate repudiandae eaque
              ipsum ex quasi at, quod nemo magni, ab dolor!
            </p>
            <button className="card-plan__btn">By now 9$</button>
            <div className="operating-system">
              <FaApple className="apple" /> <FaWindows />
            </div>
          </div>
          <div className="col-md-6 card-plan card-plan--white">
            <span className="card-plan__bagde card-plan__bagde--popular">
              Most popular
            </span>
            <h4>Team plan</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              asperiores optio! Aliquam numquam, cupiditate repudiandae eaque
              ipsum ex quasi at, quod nemo magni, ab dolor!
            </p>
            <button className="card-plan__btn">By now 18$</button>
            <div className="operating-system">
              <FaApple className="apple" /> <FaWindows />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan
