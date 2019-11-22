import React from "react"
import "./onboard.scss"

const onboard = [
  {
    id: 0,
    title: "Web Based",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et accusamus aliquam labore reprehenderit! Quaerat, optio molestiae! Aut perferendis voluptate nemo laborum porro ipsa tempore unde, voluptatem rerum minima eum, fuga asperiores tenetur magni velit perspiciatis corporis possimus. Voluptatibus!",
  },
  {
    id: 1,
    title: "Team Login",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et accusamus aliquam labore reprehenderit! Quaerat, optio molestiae! Aut perferendis voluptate nemo laborum porro ipsa tempore unde, voluptatem rerum minima eum, fuga asperiores tenetur magni velit perspiciatis corporis possimus. Voluptatibus!",
  },
  {
    id: 2,
    title: "Great Support",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea et accusamus aliquam labore reprehenderit! Quaerat, optio molestiae! Aut perferendis voluptate nemo laborum porro ipsa tempore unde, voluptatem rerum minima eum, fuga asperiores tenetur magni velit perspiciatis corporis possimus. Voluptatibus!",
  },
]

const Onboard = () => {
  return (
    <section className="onboard">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Reasons to get on board</h2>
          </div>
        </div>
        <div className="row">
          {onboard.map(item => (
            <div key={item.id} className="col-lg-4">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Onboard
