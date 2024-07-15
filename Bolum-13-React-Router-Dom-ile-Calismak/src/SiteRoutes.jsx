import { Route, Routes } from 'react-router-dom';
import { About, Contact, Fav, Home, Login, PageNotFound } from './pages';
import { Category, Product, Products, ProductsLayout } from './products';
import PrivateRoute from './PrivateRoute';

const SiteRoutes = ({ handleLogin, user }) => {
  return (
    <Routes>
      <Route path='/' element={<Home user={user} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<ProductsLayout />}>
        <Route index={true} element={<Products user={user} />} />
        <Route
          path='category/:categoryName'
          element={<Category user={user} />}
        />
        <Route path='product/:productId' element={<Product user={user} />} />
      </Route>
      <Route path='/login' element={<Login handleLogin={handleLogin} />} />
      <Route
        path='/fav'
        element={
          <PrivateRoute user={user}>
            <Fav />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
