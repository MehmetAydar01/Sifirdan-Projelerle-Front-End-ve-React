const ProductCardBtn = ({ productId, handleProductSelect }) => {
  return (
    <button className='outline' onClick={() => handleProductSelect(productId)}>
      Sec..
    </button>
  );
};

export default ProductCardBtn;
