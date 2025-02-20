import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const WidgetArea = ({ widgetTitle, listData }) => {
    const widgetRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [widgetWidth, setWidgetWidth] = useState('auto');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const widget = widgetRef.current;
            if (widget) {
                const rect = widget.getBoundingClientRect();
                const shouldFix = rect.top <= 0;
                if (shouldFix !== isFixed) {
                    setIsFixed(shouldFix);
                    setWidgetWidth(shouldFix ? `${rect.width}px` : 'auto');
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);

    return (
        <aside className="widget-area" ref={widgetRef}>
            {/* widget single item start */}
            <div
                className={`card widget-item ${isFixed ? 'fixed-widget' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h4 className="widget-title" style={{ color: 'black', textAlign: 'left' }}>{widgetTitle}</h4>
                <div className="widget-body"
                style={{ overflowY: isHovered ? 'auto' : 'hidden'}}>
                    <ul className="like-page-list-wrapper">
                        {listData.map((item, index) => (
                            <li className="unorder-list" key={index}>
                                {/* profile picture end */}
                                <div className="profile-thumb">
                                    <a href="#">
                                        <figure className="profile-thumb-small">
                                            <img src={item.imgSrc} alt="profile picture" />
                                        </figure>
                                    </a>
                                </div>
                                {/* profile picture end */}

                                <div className="unorder-list-info">
                                    <h3 className="list-title"><a href="#">{item.title}</a></h3>
                                    <p className="list-subtitle">{item.subtitle}</p>
                                    <p className="list-subtitle">{item.subscribers}</p>
                                </div>
                                {item.button && widgetTitle !== 'Advertisements' && widgetTitle !== 'Courses' && widgetTitle !== 'Subscribed Topics' && (
                                    <button className={`like-button ${item.button.active ? 'active' : ''}`}>
                                        {/* Display a heart icon */}
                                        <img className="heart" src="./src/assets/images/icons/heart.png" alt="heart icon" />
                                        {/* Display a colored heart icon when active */}
                                        <img className="heart-color" src="./src/assets/images/icons/heart-color.png" alt="colored heart icon" />
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* widget single item end */}
        </aside>
    );
};

WidgetArea.propTypes = {
    widgetTitle: PropTypes.string.isRequired,
    listData: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        button: PropTypes.shape({
            active: PropTypes.bool
        })
    })).isRequired
};

export default WidgetArea;