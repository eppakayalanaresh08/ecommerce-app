import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import './index.css'

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);


  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {

    const Cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find if the product is already in the cart
    const existingProduct = Cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      existingProduct.quantity += quantity;
    } else {
      // If the product is not in the cart, add it as a new item
      Cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
      });
    }

    // Save the updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(Cart));
    console.log(`Added ${quantity} ${product.name} to cart`);
    console.log(setQuantity)

    
    // alert('Added to cart!');
  };

  return (
    <div className='products-details-main-container'>
        <h2 className='product-detail-heading'>Product Details</h2>
        <div className='product-detail-container'>
            <img className='product-detail-image' src={product.image} alt={product.name} />
            <div className='product-detail-desc-container'>
                <h3 className='product-detail-name'>{product.name}</h3>
                <p className='product-detail-description'>Price: ${product.price}</p>
                <p className='product-detail-quantity'>Quantity: {product.quantity}</p>
                <p className='product-detail-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
            </div>
    </div>
    </div>
  );
};

export default ProductDetails;
