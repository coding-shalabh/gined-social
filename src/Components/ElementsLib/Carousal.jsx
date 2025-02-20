import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ content, postId }) => {
    return (
        <div id={`carousel-${postId}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {content.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target={`#carousel-${postId}`}
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {content.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.imgSrc} className="d-block w-100" alt={item.alt} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${postId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${postId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

Carousel.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            imgSrc: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            title: PropTypes.string,
            description: PropTypes.string
        })
    ).isRequired,
    postId: PropTypes.number.isRequired
};

export default Carousel;
