// Layout.jsx
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-text'>
          <div>Jam-Mart</div>
          <div>
            <button style={{ backgroundColor: 'white' }}>shop</button>
          </div>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
      </div>
      {/* <div className='display-content'> */}
      <Outlet />
      {/* </div> */}
      <div className='footer'>
        <div className='first-footer-div'>
          <div>Blog</div>
          <div>Become an Affiliate</div>
          <div>Product Index</div>
        </div>
        <div className='second-footer-div'>
          <div>Terms and Conditions</div>
          <div>Product Index</div>
          <div></div>
        </div>
        <div className='third-footer-div'>
          <div>
            <b>Follow Us!</b>
          </div>
          <div>some svgs here</div>
        </div>
      </div>
      <div className='copyrights'>Copyright 2025. All Rights Reserved.</div>
    </div>
  );
};
