import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, PageNotFound } from './pages';

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
