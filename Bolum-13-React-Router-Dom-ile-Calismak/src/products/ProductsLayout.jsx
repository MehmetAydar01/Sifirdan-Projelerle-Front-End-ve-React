import { Outlet } from 'react-router-dom';
import Categories from './Categories';

const ProductsLayout = () => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-8'>
          <Outlet />
        </div>
        <div className='col-sm-4 mb-3'>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default ProductsLayout;
