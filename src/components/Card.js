import React from 'react';

const Card = ({title, tags, image}) => {
    return (
        <div className="card-container">
            <div className="card-item title">{title}</div>
            <div className="card-item tags">{tags}</div>
            <img src={image} alt="" className="card-item image" />
        </div>
    )
}

export default Card;