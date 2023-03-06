import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">Lankan flavor pvt</a>
      </header>
      <main>
        <h1>Featured product</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
