import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Lankan flavor pvt</a>
      </header>
      <main>
        <h1>Featured product</h1>
        <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
