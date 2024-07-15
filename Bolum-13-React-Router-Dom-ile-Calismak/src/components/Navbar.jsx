import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  return (
    <>
      <nav
        className='navbar navbar-expand bg-body-tertiary mb-3'
        data-bs-theme='dark'
      >
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Q-Store
          </Link>
          <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
              <NavLink className='nav-link' to='/'>
                Ana Sayfa
              </NavLink>
              <NavLink className='nav-link' to='/products'>
                Ürünler
              </NavLink>
              <NavLink className='nav-link' to='/about'>
                Hakkımızda
              </NavLink>
              <NavLink className='nav-link' to='/contact'>
                İletişim
              </NavLink>
              {user ? (
                <>
                  <NavLink className='nav-link' to='/fav'>
                    Favoriler
                  </NavLink>
                  <button className='nav-link' onClick={handleLogout}>
                    Logout ({user.name})
                  </button>
                </>
              ) : (
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
