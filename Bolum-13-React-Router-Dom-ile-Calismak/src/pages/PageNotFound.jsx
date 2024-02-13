import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h1>404 - Sayfa Bulunamadi..</h1>
      <Link to='/' className='btn btn-info'>
        Ana Sayfaya Gitmek Icin Tiklayiniz..
      </Link>
    </>
  );
};

export default PageNotFound;
