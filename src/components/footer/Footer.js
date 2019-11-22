import React from "react"
import { FaCheck } from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col">
                <h5>Get in touch</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam ipsa aspernatur alias similique blanditiis numquam
                  voluptate ex minus. Aperiam odio nobis laboriosam nemo dolorum
                  amet cum tempora ad. Dolor facilis fugiat, doloremque laborum
                  sapiente voluptates repellendus quaerat ad. Repellendus illo
                  magni iusto ex sint? Velit, praesentium!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <h5>Resources</h5>
                <ul>
                  <li>Tour</li>
                  <li>Customers</li>
                  <li>Pricing nd plans</li>
                  <li>New features</li>
                  <li>Education</li>
                </ul>
              </div>
              <div className="col-4">
                <h5>Features</h5>
                <ul>
                  <li>Tour</li>
                  <li>Customers</li>
                  <li>Pricing nd plans</li>
                  <li>New features</li>
                  <li>Education</li>
                </ul>
              </div>
              <div className="col-4">
                <h5>How to's</h5>
                <ul>
                  <li>Tour</li>
                  <li>Customers</li>
                  <li>Pricing nd plans</li>
                  <li>New features</li>
                  <li>Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <label className="label" htmlFor="validationServerUsername">
              Username
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control form"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3"
                required
              />
              <div className="input-group-prepend">
                <span
                  className="input-group-text input-btn"
                  id="inputGroupPrepend3"
                >
                  <FaCheck />
                </span>
              </div>
            </div>
            <span className="input-info">
              We don’t send spam. Actually, who are we kiding, we’ll spam the
              shit out of you’r inbox
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
