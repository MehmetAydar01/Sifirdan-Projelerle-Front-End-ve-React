import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, PageNotFound } from './pages';
import { Products, ProductsLayout } from './products';

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<ProductsLayout />}>
        <Route index={true} element={<Products />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
