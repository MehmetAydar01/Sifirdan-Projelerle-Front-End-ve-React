import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand bg-body-tertiary mb-3'
        data-bs-theme='dark'
      >
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            Q-Store
          </NavLink>
          <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
              <NavLink className='nav-link' to='/'>
                Ana Sayfa
              </NavLink>
              <NavLink className='nav-link' to='/urunler'>
                Ürünler
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                Hakkımızda
              </NavLink>
              <NavLink className='nav-link' to='/contact'>
                İletişim
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
