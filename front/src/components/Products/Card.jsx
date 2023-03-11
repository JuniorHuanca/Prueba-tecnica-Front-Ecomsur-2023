import React from 'react'
import styles from './Product.module.css'
import generateStars from '../../shared/util'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Redux/actionsCart'
import { toast } from "react-hot-toast";

const Card = ({ _id, name, image, description, brand, category, price, countInStock, rating, numReviews }) => {
    const cart = useSelector(store => store.Cart.items)
    const dispatch = useDispatch()
    const itemInCart = cart.find(e => e._id === _id);
    const handleCart = () => {
        if (!itemInCart) {
            dispatch(addToCart({ _id, name, image, description, brand, category, price, countInStock, rating, numReviews }));
            toast.success(`"${name}" has been successfully added to your cart.`, {
                duration: 3000,
            });
        } else if (itemInCart.quantity < itemInCart.countInStock) {
            dispatch(addToCart({ _id, name, image, description, brand, category, price, countInStock, rating, numReviews }));
            toast.success(`"${name}" is already in your cart. Quantity has been updated.`, {
                duration: 3000,
            });
        } else {
            toast.error(`There is not enough stock for "${name}"`, {
                duration: 3000,
            });
        }
    }

    return (
        <div className={`${styles.container}`}>
            <a href={`/product/${_id}`} className={`${styles.link}`}>
                <h2>{brand} - {category}</h2>
                <img className={`${styles.image}`} src={`http://localhost:5000${image}`} alt={name} />
                <h3 className={`${styles.name}`}>{name}</h3>
                <h4>{numReviews} Reseñas {generateStars(rating)}</h4>
                <h4>$ {price} </h4>
            </a>
            <button className={`${styles.btn}`} onClick={() => handleCart()} disabled={itemInCart ? countInStock <= itemInCart.quantity ? true : false : false}>ADD TO CART</button>
        </div>
    )
}

export default Card