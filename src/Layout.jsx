// Layout.jsx
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-text'>Jam-Mart</div>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
      </div>
      {/* <div className='display-content'> */}
      <Outlet />
      {/* </div> */}
      <div>This is the footer of the page</div>
    </div>
  );
};
