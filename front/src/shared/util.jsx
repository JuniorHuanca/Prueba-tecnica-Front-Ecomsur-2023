import styles from '../components/Products/Product.module.css';
import React from 'react';
function generateStars(value) {
    const stars = [];
    const totalStars = 5;
    const starValue = 5 / totalStars;
    const activeStars = Math.floor(value / starValue);
    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <span
                key={i}
                className={`${styles.star} ${i < activeStars ? `${styles.active}` : ''}`}
            >&#9733;</span>
        );
    }
    return stars;
}
export default generateStars;