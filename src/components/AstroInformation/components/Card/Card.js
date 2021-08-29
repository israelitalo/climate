import React from 'react';
import './card.scss';

const Card = (props) => {
    const {
        title = "",
        value = "",
        after = false
    } = props;
    return (
        <div className="astro-column">
            <div className={`astro-column-content ${after ? 'after-column' : null}`}>
                <div className="astro-content-children">
                    <p>{title}</p>
                    <p>{value || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;