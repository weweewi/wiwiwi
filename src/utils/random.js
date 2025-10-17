export const getRandomCatImage = () => {
    const catImages = [
        'https://placekitten.com/200/300',
        'https://placekitten.com/250/350',
        'https://placekitten.com/300/400',
        'https://placekitten.com/350/450',
        'https://placekitten.com/400/500',
    ];
    return catImages[Math.floor(Math.random() * catImages.length)];
};

export const getRandomPosition = (maxWidth, maxHeight) => {
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    return { x, y };
};