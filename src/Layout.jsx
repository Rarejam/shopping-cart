// Layout.jsx
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='header-text'>
          <div>Jam-Mart</div>
          <div>
            <button style={{ backgroundColor: 'wheat' }} className='cart-svg'>
              {/* <img src='cart.svg' /> */}
              <div className='cart-value'>3</div>
            </button>
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
          <div className='footer-svgs'>
            <a href='http://www.instagram.com'>
              <div className='instagram'></div>
            </a>
            {/* </div> */}
            <a href='http://www.linkedin.com'>
              <div className='link'></div>
            </a>
            <a href='http://www.youtube.com'>
              <div className='youtube'></div>
            </a>
          </div>
        </div>
      </div>
      <div className='copyrights'>Copyright 2025. All Rights Reserved.</div>
    </div>
  );
};
