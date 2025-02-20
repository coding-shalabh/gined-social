import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import logoWhite from '../../assets/images/logo/logo-white.png';

const ComingSoon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ()=> {
        setTimeout(() => {
            navigate('/');
        }, 5000);
    }
  }, []);

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper login-new">
          <div className="container">
            <div className="login-content user-login text-start" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="login-logo">
                <img src={logo} alt="logo" />
                <Link to="/" className="login-logo logo-white">
                  <img src={logoWhite} alt="logo-white" />
                </Link>
              </div>
              <div className="login-userset">
                <div className="login-userheading">
                  <h3>Coming Soon</h3>
                  <h4>We are working hard to bring you this page. Stay tuned!</h4>
                </div>
                <div className="form-login">
                  <button className="btn btn-login" onClick={() => navigate('/')}>Go to Home</button>
                </div>
                <div className="signinform text-start">
                  <h4>Or <Link to="/login" className="hover-a">Sign In</Link> to access your account.</h4>
                </div>
              </div>
            </div>
            <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright &copy; 2023 DreamsPOS. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
