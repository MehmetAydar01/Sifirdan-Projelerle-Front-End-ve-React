import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const Category = ({ user }) => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res))
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <>
      <h1>Kategori: {categoryName.toUpperCase()}</h1>
      <div className='row row-cols-sm-3 row-cols-md-4'>
        {categoryProducts.map((item) => {
          return <ProductCard user={user} key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Category;
