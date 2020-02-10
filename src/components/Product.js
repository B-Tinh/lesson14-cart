import React, { Component } from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css';
import './../App.css';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a href="/">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
            <Rater total={5} rating={product.rating} interactive={false}  style={{color: "yellow"}}/>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  href="/"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Product;
