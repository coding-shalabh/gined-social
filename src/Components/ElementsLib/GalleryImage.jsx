import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ images }) => {
    return (
        <div className="post-thumb-gallery img-gallery">
            <div className="row g-0">
                <div className="col-8">
                    <figure className="post-thumb">
                        <a className="gallery-selector" href={images[0].imgSrc}>
                            <img src={images[0].imgSrc} alt="post image" />
                        </a>
                    </figure>
                </div>
                <div className="col-4">
                    <div className="row">
                        {images.slice(1, 4).map((image, index) => (
                            <div className="col-12" key={index}>
                                <figure className="post-thumb">
                                    <a className="gallery-selector" href={image.imgSrc}>
                                        <img src={image.imgSrc} alt="post image" />
                                    </a>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

GalleryImage.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            imgSrc: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired
};

export default GalleryImage;
