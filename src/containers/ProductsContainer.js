import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Products from '../components/Products';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
           <Products products={products}/> 
        );
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);