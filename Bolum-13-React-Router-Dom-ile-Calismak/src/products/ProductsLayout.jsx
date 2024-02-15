import { Outlet } from 'react-router-dom';
import Category from './Category';

const ProductsLayout = () => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-8'>
          <Outlet />
        </div>
        <div className='col-sm-4 mb-3'>
          <Category />
        </div>
      </div>
    </>
  );
};

export default ProductsLayout;
