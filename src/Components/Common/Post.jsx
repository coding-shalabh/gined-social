import React from 'react';
import postData from '../../TemporaryData/postJson';
import Carousel from '../ElementsLib/Carousal'; // Import the Carousel component
import GalleryImage from '../ElementsLib/GalleryImage'; // Import the GalleryImage component

const Post = ({ post }) => {
    const renderContent = () => {
        switch (post.type) {
            case 'image':
                if (post.content.length > 0) { // Corrected condition to check for at least one image
                    return post.content.length > 1 ? (
                        <GalleryImage images={post.content} />
                    ) : (
                        post.content.map((contentItem, index) => (
                            <figure key={index} className="post-thumb img-popup">
                                <a href={contentItem.imgSrc}>
                                    <img src={contentItem.imgSrc} alt={contentItem.alt} />
                                </a>
                            </figure>
                        ))
                    );
                }
                return null;
            case 'video':
                return post.content.map((contentItem, index) => (
                    <div key={index} className="post-thumb video-popup">
                        <iframe
                            width="560"
                            height="315"
                            src={contentItem.videoSrc}
                            title={contentItem.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ));
            case 'carousel':
                return <Carousel content={post.content} postId={post.id} />;
            default:
                return null;
        }
    };

    return (
        <div className="card" style={{ borderRadius: '8px' }}>
            <div className="post-title d-flex align-items-center">
                <div className="profile-thumb">
                    <a href="#">
                        <figure className="profile-thumb-middle">
                            <img src={post.profileImgSrc} alt="profile picture" />
                        </figure>
                    </a>
                </div>

                <div className="posted-author">
                    <h6 className="author"><a href="profile.html">{post.author}</a></h6>
                    <span className="post-time">{post.timeAgo}</span>
                </div>

                <div className="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="post-settings arrow-shape">
                        <ul>
                            <li><button>copy link to adda</button></li>
                            <li><button>edit post</button></li>
                            <li><button>embed adda</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="post-content">
                <p className="post-desc">
                    {post.description}
                </p>
                <div className="post-thumb-gallery">
                    {renderContent()}
                </div>
                <div className="post-meta">
                    <button className="post-meta-like">
                        <i className="bi bi-heart-beat"></i>
                        <span>You and {post.likes} people like this</span>
                        <strong>{post.likes}</strong>
                    </button>
                    <ul className="comment-share-meta">
                        <li>
                            <button className="post-comment">
                                <i className="bi bi-chat-bubble"></i>
                                <span>{post.comments}</span>
                            </button>
                        </li>
                        <li>
                            <button className="post-share">
                                <i className="bi bi-share"></i>
                                <span>{post.shares}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Post;