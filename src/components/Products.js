import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {products.map((product, index) => {
            return <Product key={index} product={product}/>
          })}
        </div>
      </section>
    );
  }
}


export default Products;
