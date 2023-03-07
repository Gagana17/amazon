/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
function HomeScreen() {
  return (
    <div>
      <h1>Featured product</h1>
      <div className="products">
        // eslint-disable-next-line no-undef
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
