import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, description, category, image }) => {
  const productUrl = `/products/product/${id}`;
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
          <a href='#' className='btn btn-primary'>
            Fav
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
