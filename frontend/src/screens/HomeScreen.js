function HomeScreen() {
  return (
    <div>
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
    </div>
  );
}
export default HomeScreen;
