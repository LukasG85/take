import React from "react"
import "./details.scss"

const details = [
  {
    id: 0,
    title: "Web based",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in illo repudiandae laudantium. Magnam maiores accusamus quaerat? Voluptatibus voluptatum accusamus praesentium natus similique ullam voluptatem. Repellendus assumenda laudantium nulla nihil?",
  },
  {
    id: 1,
    title: "Performance",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in illo repudiandae laudantium. Magnam maiores accusamus quaerat? Voluptatibus voluptatum accusamus praesentium natus similique ullam voluptatem. Repellendus assumenda laudantium nulla nihil?",
  },
  {
    id: 2,
    title: "Clultral",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in illo repudiandae laudantium. Magnam maiores accusamus quaerat? Voluptatibus voluptatum accusamus praesentium natus similique ullam voluptatem. Repellendus assumenda laudantium nulla nihil?",
  },
  {
    id: 3,
    title: "Sustainability",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in illo repudiandae laudantium. Magnam maiores accusamus quaerat? Voluptatibus voluptatum accusamus praesentium natus similique ullam voluptatem. Repellendus assumenda laudantium nulla nihil?",
  },
]

const Details = () => {
  return (
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>A look at the details</h2>
          </div>
        </div>
        <div className="row">
          {details.map(item => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Details
