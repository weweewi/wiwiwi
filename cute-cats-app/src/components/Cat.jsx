import React from 'react';

const Cat = ({ position }) => {
    const catImages = [
        'https://placekitten.com/200/300',
        'https://placekitten.com/250/350',
        'https://placekitten.com/300/400',
        'https://placekitten.com/220/330',
        'https://placekitten.com/280/380'
    ];

    const randomCatImage = catImages[Math.floor(Math.random() * catImages.length)];

    return (
        <img
            src={randomCatImage}
            alt="Cute Cat"
            style={{
                position: 'absolute',
                ...position,
                transition: 'transform 0.5s',
                width: '100px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
        />
    );
};

export default Cat;