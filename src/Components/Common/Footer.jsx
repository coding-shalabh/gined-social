import React from 'react';

const Footer = () => {
    return (
        <>
            {/* footer area start */}
            <footer className="d-none d-lg-block">
                <div className="footer-area reveal-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-wrapper">
                                    <div className="footer-card position-relative">
                                        <div className="friends-search">
                                            <form className="search-box">
                                                <input type="text" placeholder="Search Your Friends" className="search-field" />
                                                <button className="search-btn"><i className="flaticon-search"></i></button>
                                            </form>
                                        </div>
                                        <div className="friend-search-list">
                                            <div className="frnd-search-title">
                                                <button className="frnd-search-icon"><i className="flaticon-settings"></i></button>
                                                <p>search friends</p>
                                                <button className="close-btn" data-close="friend-search-list"><i className="flaticon-cross-out"></i></button>
                                            </div>
                                            <div className="frnd-search-inner custom-scroll">
                                                <ul>
                                                    {[
                                                        { id: 1, name: 'Jon Wilime', img: './src/assets/images/profile/profile-35x35-1.jpg', text: 'Many desktop publishing' },
                                                        { id: 2, name: 'Jon Wileyam', img: './src/assets/images/profile/profile-35x35-2.jpg', text: 'add friend' },
                                                        { id: 3, name: 'Mili Raoulin', img: './src/assets/images/profile/profile-35x35-3.jpg', text: 'add friend' },
                                                        { id: 4, name: 'Jon Wilime', img: './src/assets/images/profile/profile-35x35-4.jpg', text: '10 mutual friends' },
                                                        { id: 5, name: 'Robart faul', img: './src/assets/images/profile/profile-35x35-6.jpg', text: '12 mutual friends' },
                                                        { id: 6, name: 'Mili Raoulin', img: './src/assets/images/profile/profile-35x35-7.jpg', text: 'add friend' },
                                                        { id: 7, name: 'Jon Wilime', img: './src/assets/images/profile/profile-35x35-8.jpg', text: '10 mutual friends' },
                                                        { id: 8, name: 'Robart faul', img: './src/assets/images/profile/profile-35x35-9.jpg', text: '12 mutual friends' }
                                                    ].map(profile => (
                                                        <li key={profile.id} className="d-flex align-items-center profile-active">
                                                            <div className="profile-thumb active">
                                                                <a href="#">
                                                                    <figure className="profile-thumb-small">
                                                                        <img src={profile.img} alt="profile picture" />
                                                                    </figure>
                                                                </a>
                                                            </div>
                                                            <div className="posted-author">
                                                                <h6 className="author"><a href="profile.html">{profile.name}</a></h6>
                                                                <button className="add-frnd">{profile.text}</button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-small mb-0 active-profile-wrapper d-flex justify-content-center" style={{ padding: '0px' }}>
                                        <div className="active-profiles-wrapper">
                                            <div className="active-profile-carousel slick-row-20 slick-arrow-style d-flex justify-content-between">
                                                {[
                                                    './src/assets/images/profile/profile-35x35-1.jpg',
                                                    './src/assets/images/profile/profile-35x35-2.jpg',
                                                    './src/assets/images/profile/profile-35x35-3.jpg',
                                                    './src/assets/images/profile/profile-35x35-4.jpg',
                                                    './src/assets/images/profile/profile-35x35-5.jpg',
                                                    './src/assets/images/profile/profile-35x35-6.jpg',
                                                    './src/assets/images/profile/profile-35x35-7.jpg',
                                                    './src/assets/images/profile/profile-35x35-8.jpg',
                                                    './src/assets/images/profile/profile-35x35-9.jpg',
                                                    './src/assets/images/profile/profile-35x35-10.jpg',
                                                    './src/assets/images/profile/profile-35x35-11.jpg',
                                                    './src/assets/images/profile/profile-35x35-12.jpg',
                                                    './src/assets/images/profile/profile-35x35-13.jpg'
                                                ].map((img, index) => (
                                                    <div key={index} className="single-slide">
                                                        <div className="profile-thumb active profile-active">
                                                            <a href="javascript:void(0)">
                                                                <figure className="profile-thumb-small">
                                                                    <img src={img} alt="profile picture" />
                                                                </figure>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-card position-relative">
                                        <div className="live-chat-inner">
                                            <div className="chat-text-field">
                                                <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                                <button className="chat-message-send" type="submit" value="submit">
                                                    <img src="./src/assets/images/icons/plane.png" alt="" />
                                                </button>
                                            </div>
                                            <div className="chat-output-box">
                                                <div className="live-chat-title">
                                                    <div className="profile-thumb active">
                                                        <a href="#">
                                                            <figure className="profile-thumb-small">
                                                                <img src="./src/assets/images/profile/profile-35x35-13.jpg" alt="profile picture" />
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    <div className="posted-author">
                                                        <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                                        <span className="active-pro">active now</span>
                                                    </div>
                                                    <div className="live-chat-settings ms-auto">
                                                        <button className="chat-settings"><i className="flaticon-settings"></i></button>
                                                        <button className="close-btn" data-close="chat-output-box"><i className="flaticon-cross-out"></i></button>
                                                    </div>
                                                </div>
                                                <div className="message-list-inner">
                                                    <ul className="message-list custom-scroll">
                                                        {[
                                                            { id: 1, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text', time: '10 minute ago' },
                                                            { id: 2, text: 'Many desktop publishing packages and web page editors', time: '5 minute ago' },
                                                            { id: 3, text: 'packages and web page editors', time: '2 minute ago' },
                                                            { id: 4, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text', time: '10 minute ago' },
                                                            { id: 5, text: 'Many desktop publishing packages and web page editors', time: '5 minute ago' },
                                                            { id: 6, text: 'packages and web page editors', time: '2 minute ago' }
                                                        ].map(message => (
                                                            <li key={message.id} className={message.id % 2 === 0 ? 'text-author' : 'text-friends'}>
                                                                <p>{message.text}</p>
                                                                <div className="message-time">{message.time}</div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer area end */}
            {/* footer area start */}
            <footer className="d-block d-lg-none">
                <div className="footer-area reveal-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-footer-inner d-flex">
                                    <div className="mobile-frnd-search">
                                        <button className="search-toggle-btn"><i className="flaticon-search"></i></button>
                                    </div>
                                    <div className="mob-frnd-search-inner">
                                        <form className="mob-frnd-search-box d-flex">
                                            <input type="text" placeholder="Search Your Friends" className="mob-frnd-search-field" />
                                        </form>
                                    </div>
                                    <div className="card card-small mb-0 active-profile-mob-wrapper">
                                        <div className="active-profiles-mob-wrapper slick-row-10">
                                            <div className="active-profile-mobile">
                                                {[
                                                    './src/assets/images/profile/profile-small-1.jpg',
                                                    './src/assets/images/profile/profile-small-8.jpg',
                                                    './src/assets/images/profile/profile-small-2.jpg',
                                                    './src/assets/images/profile/profile-small-3.jpg',
                                                    './src/assets/images/profile/profile-small-4.jpg',
                                                    './src/assets/images/profile/profile-small-5.jpg',
                                                    './src/assets/images/profile/profile-small-9.jpg'
                                                ].map((img, index) => (
                                                    <div key={index} className="single-slide">
                                                        <div className="profile-thumb active profile-active">
                                                            <a href="javascript:void(0)">
                                                                <figure className="profile-thumb-small profile-active">
                                                                    <img src={img} alt="profile picture" />
                                                                </figure>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer area end */}
        </>
    );
};

export default Footer;