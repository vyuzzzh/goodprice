import React, { Component } from 'react';
import './cart-element.css';
import { Link } from 'react-router-dom';

export default class CartElement extends Component {
  render() {
    return (
     <li className="catalog-market__item cart-element-item">
     <Link to={`/home/${this.props.id}`} className="product-picture__link js-product__image" >
        <div className="catalog-market__link cart-element-flex-column">
          <span className="catalog-market__text" >{this.props.name}</span>
          <span ><button type="button" class="btn btn-success" onClick={(e, operation, product) => this.props.onClick(e, 'decrease', this.props.product)}>-</button>  {this.props.quantity}  шт <button type="button" class="btn btn-success" onClick={(e, operation, product) => this.props.onClick(e, 'increase', this.props.product)}>+</button> </span>
        </div>
        </Link>
    </li>
    );
  }
}
