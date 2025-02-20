import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // ✅ Ensure state updates


    const toggleDropdown = (event) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        dispatch(logout()); // ✅ Dispatch logout action
        navigate('/login', { replace: true }); // ✅ Redirect to login
    };
    return (
        isAuthenticated ? (
            <>
          <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            {/* header top navigation start */}
                            <div className="header-top-navigation">
                                <nav>
                                    <ul style={{display: 'flex', justifyContent: 'flex-start'}}>
                                        <li className="active"><a href="index.html">home</a></li>
                                        {/* <li className="msg-trigger"><a className="msg-trigger-btn" href="#a">message</a>
                                        </li> */}
                                        <li className="notification-trigger"><a className="msg-trigger-btn" href="#b">notification</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* header top navigation end */}
                        </div>

                        <div className="col-md-2">
                            {/* brand logo start */}
                            <div className="brand-logo text-center">
                                <a href="index.html">
                                    {/* <img src="./src/assets/images/logo/logo.png" alt="brand logo" /> */}
                                </a>
                            </div>
                            {/* brand logo end */}
                        </div>

                        <div className="col-md-5">
                            <div className="header-top-right d-flex align-items-center justify-content-end">
                                {/* header top search start */}
                                <div className="header-top-search">
                                    <form className="top-search-box">
                                        <input type="text" placeholder="Search" className="top-search-field" />
                                        <button className="top-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                                {/* header top search end */}

                                {/* profile picture start */}
                                <div className="profile-setting-box" ref={dropdownRef}>
                                    <div className="profile-thumb-small">
                                        <a className="profile-triger" onClick={toggleDropdown}>
                                            <figure>
                                                <img src="./src/assets/images/profile/profile-35x35-1.jpg" alt="profile picture" />
                                            </figure>
                                        </a>
                                        {isDropdownOpen && (
                                            <div className="profile-dropdown show" style={{borderRadius: '10px'}}>
                                                <div className="profile-head" style={{textAlign: 'left'}}>
                                                    <h5 className="name"><a href="#" onClick={() => navigate('/profile')}>Madison Howard</a></h5>
                                                    <a className="mail" href="#">mailnam@mail.com</a>
                                                </div>
                                                <div className="profile-body">
                                                    <ul style={{textAlign: 'left'}}>
                                                        <li><a href="/profile" onClick={() => navigate('/profile')}><i className="flaticon-user"></i>Profile</a></li>
                                                        <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                                                        <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                                                    </ul>
                                                    <ul style={{textAlign: 'left'}}>
                                                        <li><a href="#"><i className="flaticon-settings"></i>Setting</a></li>
                                                        <li><a href="/login" onClick={handleLogout}><i className="flaticon-unlock"></i>Sing out</a></li>
                                                   </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* profile picture end */}
                            </div>
                        </div>
                    </div>
                </div>

            {/* Mobile Header */}
            <div className="mobile-header-wrapper sticky d-block d-lg-none">
                <div className="mobile-header position-relative">
                    <div className="mobile-logo">
                        <a href="index.html">
                            <img src="./src/assets/images/logo/logo-white.png" alt="logo" />
                        </a>
                    </div>
                    <div className="mobile-menu w-100">
                        <ul>
                            <li>
                                <button className="notification request-trigger"><i className="flaticon-users"></i>
                                    <span>03</span>
                                </button>
                                <ul className="frnd-request-list">
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="./src/assets/images/profile/profile-midle-1.jpg" alt="profile author" />
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="./src/assets/images/profile/profile-midle-2.jpg" alt="profile author" />
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="frnd-request-member">
                                            <figure className="request-thumb">
                                                <a href="profile.html">
                                                    <img src="./src/assets/images/profile/profile-midle-3.jpg" alt="profile author" />
                                                </a>
                                            </figure>
                                            <div className="frnd-content">
                                                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                                                <p className="author-subtitle">Works at HasTech</p>
                                                <div className="request-btn-inner">
                                                    <button className="frnd-btn">confirm</button>
                                                    <button className="frnd-btn delete">delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className="notification"><i className="flaticon-notification"></i>
                                    <span>03</span>
                                </button>
                            </li>
                            <li>
                                <button className="chat-trigger notification"><i className="flaticon-chats"></i>
                                    <span>04</span>
                                </button>
                                <div className="mobile-chat-box">
                                    <div className="live-chat-title">
                                        {/* profile picture start */}
                                        <div className="profile-thumb">
                                            <a href="profile.html">
                                                <figure className="profile-thumb-small profile-active">
                                                    <img src="./src/assets/images/profile/profile-35x35-13.jpg" alt="profile picture" />
                                                </figure>
                                            </a>
                                        </div>
                                        {/* profile picture end */}
                                        <div className="posted-author">
                                            <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                            <span className="active-pro">active now</span>
                                        </div>
                                        <div className="live-chat-settings ml-auto">
                                            <button className="chat-settings"><img src="./src/assets/images/icons/settings.png" alt="settings" /></button>
                                            <button className="close-btn"><img src="./src/assets/images/icons/close.png" alt="close" /></button>
                                        </div>
                                    </div>
                                    <div className="message-list-inner">
                                        <ul className="message-list custom-scroll">
                                            <li className="text-friends">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                <div className="message-time">10 minute ago</div>
                                            </li>
                                            <li className="text-author">
                                                <p>Many desktop publishing packages and web page editors</p>
                                                <div className="message-time">5 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>packages and web page editors </p>
                                                <div className="message-time">2 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                                <div className="message-time">10 minute ago</div>
                                            </li>
                                            <li className="text-author">
                                                <p>Many desktop publishing packages and web page editors</p>
                                                <div className="message-time">5 minute ago</div>
                                            </li>
                                            <li className="text-friends">
                                                <p>packages and web page editors </p>
                                                <div className="message-time">2 minute ago</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-text-field mob-text-box">
                                        <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                        <button className="chat-message-send" type="submit">
                                            <img src="./src/assets/images/icons/plane.png" alt="send" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="search-trigger">
                                    <i className="search-icon flaticon-search"></i>
                                    <i className="close-icon flaticon-cross-out"></i>
                                </button>
                                <div className="mob-search-box">
                                    <form className="mob-search-inner">
                                        <input type="text" placeholder="Search Here" className="mob-search-field" />
                                        <button className="mob-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-header-profile">
                        {/* profile picture start */}
                        <div className="profile-thumb profile-setting-box" ref={dropdownRef}>
                            <a href="#" className="profile-triger" onClick={toggleDropdown}>
                                <figure className="profile-thumb-middle">
                                    <img src="./src/assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                                </figure>
                            </a>
                            {isDropdownOpen && (
                                <div className="profile-dropdown show">
                                    <div className="profile-head">
                                        <h5 className="name"><a href="#" onClick={() => navigate('/profile')}>Madison Howard</a></h5>
                                        <a className="mail" href="#">mailnam@mail.com</a>
                                    </div>
                                    <div className="profile-body">
                                        <ul>
                                            <li><a href="/profile" onClick={() => navigate('/profile')}><i className="flaticon-user"></i>Profile</a></li>
                                            <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                                            <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#"><i className="flaticon-settings"></i>Setting</a></li>
                                            <li><a href="signup.html"><i className="flaticon-unlock"></i>Sing out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* profile picture end */}
                    </div>
                </div>
            </div>
        </header>
 </>        
) : (
            <></>
        )
    );
};

export default Header;