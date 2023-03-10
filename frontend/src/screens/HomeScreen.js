/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCES':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
      // eslint-disable-next-line no-labels, no-unreachable, no-unused-labels
      deafault: return state;
  }
};

function HomeScreen() {
  // eslint-disable-next-line no-undef, no-unused-vars
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.create('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Storage Management</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/ ${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div classname="product-info">
              <Link to={`/product/ ${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.quantity}</strong>{' '}
              </p>

              <button>More detais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
