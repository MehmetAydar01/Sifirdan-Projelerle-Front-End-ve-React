import { Link } from 'react-router-dom';

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  user,
}) => {
  const productUrl = `/products/product/${id}`;
  const item = { id, title, price, description, image, category };

  const handleClick = (product) => {
    let localFavs = JSON.parse(localStorage.getItem('favs')) ?? [];
    const itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );

    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title });
    }

    localStorage.setItem('favs', JSON.stringify(localFavs));
  };

  return (
    <div className='col-sm mb-3'>
      <div className='card'>
        <Link to={productUrl}>
          <img
            src={image}
            className='card-img-top p-2'
            height={300}
            width={400}
            alt={title}
          />
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{title} </h5>
          <p className='card-text'>{description.substring(0, 20)}..</p>
          <p className='fw-bold'>{price.toFixed(2)}$</p>
          {user && (
            <a className='btn btn-primary' onClick={() => handleClick(item)}>
              Fav
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
