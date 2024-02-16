import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, PageNotFound } from './pages';
import { Category, Products, ProductsLayout } from './products';

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<ProductsLayout />}>
        <Route index={true} element={<Products />} />
        <Route path='category/:categoryName' element={<Category />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
