import ProductCard from './ProductCard';

function ImgContainer({ products, handleProductSelect }) {
  return (
    <div className='grid'>
      {products
        .filter((item) => {
          return item.isAvailable;
        })
        .map((product) => {
          return (
            <ProductCard
              handleProductSelect={handleProductSelect}
              {...product}
              key={product.id}
            />
          );
        })}
    </div>
  );
}
export default ImgContainer;
