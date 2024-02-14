const ProductCard = ({ id, title, price, description, category, image }) => {
  return (
    <div className='col-sm mb-3'>
      <div className='card'>
        <img
          src={image}
          className='card-img-top'
          height={300}
          width={400}
          alt={title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title} </h5>
          <p className='card-text'>{description.substring(0, 20)}..</p>
          <p className='lead'>{price}</p>
          <a href='#' className='btn btn-primary'>
            Fav
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
