import React from 'react';

const ProfileCard = () => {
    return (
        <div className="card card-profile widget-item p-0" style={{ borderRadius: '8px' }}>
            <div className="profile-banner">
                <figure className="profile-banner-small">
                    <a href="profile.html">
                        <img src="./src/assets/images/banner/banner-small.jpg" alt="" />
                    </a>
                    <a href="profile.html" className="profile-thumb-2">
                        <img src="./src/assets/images/profile/profile-midle-1.jpg" alt="" />
                    </a>
                </figure>
                <div className="profile-desc text-center">
                    <h6 className="author"><a href="profile.html">Erik Jhonson</a></h6>
                    <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;