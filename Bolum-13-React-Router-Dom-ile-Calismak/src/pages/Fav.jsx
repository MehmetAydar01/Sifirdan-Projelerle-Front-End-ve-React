import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Fav = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) ?? []);
  }, []);

  return (
    <>
      <h1>Favoriler</h1>
      <div className='list-group'>
        {favs.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/products/product/${item.id}`}
              className='list-group-item list-group-item-action text-uppercase'
            >
              {item.title.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Fav;
