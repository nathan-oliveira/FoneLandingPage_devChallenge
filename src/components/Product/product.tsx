import React from "react"
import "./product.scss"
import Img from "../Image/image"

const Product = () => {
  return (
    <section className="row">
      <div className="pagination">
        <ul>
          <li className="pagination-circle-nav pagination-bottom"></li>
          <li className="pagination-circle active"></li>
          <li className="pagination-circle"></li>
          <li className="pagination-circle"></li>
          <li className="pagination-circle-nav pagination-top"></li>
        </ul>
      </div>
      <div className="container-product">
        <div className="col-12 col-product">
          <div className="product">
            <Img name="fone" />
          </div>
          <div className="info">
            <div className="content">
              <div className="title">
                <h1>Hyper X ON-EAR</h1>
                <p>Wireless over-ear headphones</p>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
              </div>
              <div className="description">
                <div className="item-description">
                  <h1>Driver unit</h1>
                  <p>70 mm, dome type (CCAW Voice Col)</p>
                </div>
                <div className="item-description">
                  <h1>Frequency Response</h1>
                  <p>4 Hz + 100.000 Hz</p>
                </div>
              </div>
              <div className="action">
                <h1>$89.99</h1>
                <a>ADD TO CART</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;