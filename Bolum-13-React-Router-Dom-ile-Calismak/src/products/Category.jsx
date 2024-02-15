import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return (
    <>
      <h1>Kategoriler</h1>
      <div className='list-group'>
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              to={`/products/category/${category}`}
              className='list-group-item list-group-item-action text-uppercase'
            >
              {category}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
