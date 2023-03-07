import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Lankan flavor pvt</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured product</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a herf={`/product/ ${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div classname="product-info">
                  <a herf={`/product/ ${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>{product.quantity}</strong>{' '}
                  </p>

                  <button>More detais</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
