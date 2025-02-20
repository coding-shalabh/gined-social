import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header'; // Import the Header component
import ShareBox from '../Components/ShareBox';
import Post from '../Components/Common/Post';
import WidgetArea from '../Components/Common/WidgetArea';
import postJson from '../TemporaryData/postJson';
import ScrollTop from '../Components/Common/ScrollTop';
import coursesData from '../TemporaryData/coursesJson';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';



const Profile = () => {
const currentUser = useSelector(state => state.auth.currentUser);
const navigate = useNavigate();
const [isAuthenticated, setIsAuthenticated] = useState(false)

// #viewAccess
    useEffect(() => {
        if(currentUser){
            setIsAuthenticated(true)
        }else{
            setIsAuthenticated(false)
            navigate('/login')

        }
    }, [currentUser]);
    //#EditAccess
    return (
        
            isAuthenticated ? (
                <>
                <Header />
                <div className="main-wrapper">
                    <div className="profile-banner-large bg-img" data-bg="assets/images/banner/profile-banner.jpg"></div>
                    <div className="profile-menu-area bg-white">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3">
                                    <div className="profile-picture-box">
                                        <figure className="profile-picture">
                                            <a href="profile.html">
                                                <img src="assets/images/profile/profile-1.jpg" alt="profile picture" />
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 offset-lg-1">
                                    <div className="profile-menu-wrapper">
                                        <div className="main-menu-inner header-top-navigation">
                                            <ul className="main-menu">
                                                <li className="active"><a href="#">timeline</a></li>
                                                <li><a href="/about">about</a></li>
                                                <li><a href="/photos">photos</a></li>
                                                <li><a href="/friends">friends</a></li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 d-none d-md-block">
                                    <div className="profile-edit-panel">
                                        <button className="edit-btn">edit profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                <aside className="widget-area profile-sidebar">
                                    <div className="card widget-item">
                                        <h4 className="widget-title">Erik Jhonson</h4>
                                        <div className="widget-body">
                                            <div className="about-author">
                                                <p>I Don’t know how? But I believe that it is possible one day if I stay with my dream all the time</p>
                                                <ul className="author-into-list">
                                                    <li><a href="#"><i className="bi bi-office-bag"></i>Web Developer</a></li>
                                                    <li><a href="#"><i className="bi bi-home"></i>Melbourne, Australia</a></li>
                                                    <li><a href="#"><i className="bi bi-location-pointer"></i>Pulshar, Melbourne</a></li>
                                                    <li><a href="#"><i className="bi bi-heart-beat"></i>Travel, Swimming</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card widget-item">
                                        <h4 className="widget-title">Sweets Memories</h4>
                                        <div className="widget-body">
                                            <div className="sweet-galley img-gallery">
                                                <div className="row row-5">
                                                    <div className="col-4">
                                                        <div className="gallery-item">
                                                            <figure className="post-thumb">
                                                                <a className="gallery-selector" href="assets/images/gallery/gallery-1.jpg">
                                                                    <img src="assets/images/gallery/gallery-1.jpg" alt="sweet memory" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="gallery-item">
                                                            <figure className="post-thumb">
                                                                <a className="gallery-selector" href="assets/images/gallery/gallery-2.jpg">
                                                                    <img src="assets/images/gallery/gallery-2.jpg" alt="sweet memory" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="gallery-item">
                                                            <figure className="post-thumb">
                                                                <a className="gallery-selector" href="assets/images/gallery/gallery-3.jpg">
                                                                    <img src="assets/images/gallery/gallery-3.jpg" alt="sweet memory" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="gallery-item">
                                                            <figure className="post-thumb">
                                                                <a className="gallery-selector" href="assets/images/gallery/gallery-4.jpg">
                                                                    <img src="assets/images/gallery/gallery-4.jpg" alt="sweet memory" />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                {/* {postJson ? (
                                    postJson.filter( item => {
                                        return item.id ==  
                                    })
     
                                )} */}
                            </div>
                            <div className="col-lg-3 order-3">
                                <aside className="widget-area">
                                    {coursesData ? (
                                        <WidgetArea widgetTitle="Courses" listData={coursesData} />
                                    ) : (
                                        <p>No trending courses available</p>
                                    )}
                                </aside>
                            </div>
                        </div>
                    </div>
                    <ScrollTop />
                </div>
            </>
            ):(
                <></>
            )
    );
};

export default Profile;
