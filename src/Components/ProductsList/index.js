import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import './index.css'

const ProductList = () => {
  const updatedData = JSON.parse(localStorage.getItem('updatedData'))
  console.log(updatedData)
  return (
    <div className='products-list-container'>
      <h2 className='products-list-heading'>Product List</h2>
      <div className='products-list'>
      {productsData.map((product) => (
        <Link className='product-details-link' to={`/product/${product.id}`}>
          <div className='product' key={product.id}>
          <img className='product-image' src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className='product-list-description'>Price: ${product.price}</p>
          <p className='product-list-description'>Quantity:{product.quantity}</p>
          </div></Link>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
