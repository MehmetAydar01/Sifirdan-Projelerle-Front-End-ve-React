import ProductCardBtn from './ProductCardBtn';

function ProductCard({ name, thumbnail, id, handleProductSelect }) {
  return (
    <>
      <article>
        <header>{name}</header>
        <img src={thumbnail} alt='' />
        <footer>
          <ProductCardBtn
            handleProductSelect={handleProductSelect}
            productId={id}
          />
        </footer>
      </article>
    </>
  );
}

export default ProductCard;
