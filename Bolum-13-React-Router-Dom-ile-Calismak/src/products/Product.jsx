import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ user }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <>
      <h1>{product?.title}</h1>
      <img src={product?.image} alt='' className='w-50 img-thumbnail' />
      <p className='py-3'>{product?.description}</p>
    </>
  );
};

export default Product;
