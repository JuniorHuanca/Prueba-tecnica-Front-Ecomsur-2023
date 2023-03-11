import React, { useEffect, useRef, useState } from 'react';
import { getProductById } from '../../Redux/actionsProducts';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import generateStars from '../../shared/util';
import { addToCart, minusOneProduct, plusOneProduct, removeFromCart } from '../../Redux/actionsCart';
import { Toaster, toast } from 'react-hot-toast';
import DeleteModal from '../Modal/DeleteModal';


const ProductDetail = () => {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.Cart.items)
    const [modal, setModal] = useState(false)
    const { id } = useParams();
    const product = useSelector(store => store.Products.product);
    const { _id, name, image, description, brand, category, price, countInStock, rating, numReviews } = product;
    const itemInCart = cart.find(e => e._id === _id);

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch]);

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
            <div className={`${styles.containerImage}`}>
                <img
                    className={`${styles.image}`}
                    src={`http://localhost:5000${image}`}
                    alt={name}
                />
            </div>
            <div className={`${styles.body}`}>
                <h2 className={`${styles.category}`}>{category}</h2>
                <h3>{name} - {brand}</h3>
                <h4>{generateStars(rating)} {numReviews} Reseñas</h4>
                <p>{description}</p>
                <h4>$ {price} </h4>
                <div>
                    <div className={`${styles.btns}`}>
                        <div>
                            <button className={`${styles.less}`} onClick={() => itemInCart ? itemInCart.quantity > 1 ? dispatch(minusOneProduct(_id)) : setModal(!modal) : toast.error(`"${name}" no hay productos`, {
                                duration: 1500,
                            })}>-</button>
                            <button className={`${styles.counter}`} >{itemInCart ? itemInCart.quantity : 0}</button>
                            <button className={`${styles.more}`} onClick={() => handleCart()}>+</button>
                        </div>
                        <button className={`${itemInCart ? styles.trash : styles.trashD}`} onClick={() => setModal(!modal)} disabled={itemInCart ? false : true}>🗑</button>
                    </div>
                    <button className={`${styles.btn}`} onClick={() => handleCart()} disabled={itemInCart ? countInStock <= itemInCart.quantity ? true : false : false}>ADD TO CART</button>
                </div>
            </div>
            <Toaster position="top-left" gutter={10} />
            {modal && <DeleteModal tittle='Delete Product' text={`Are you sure you want to remove "${name}" from your cart?`} setModal={setModal} modal={modal} customFuntion={() => removeFromCart(_id)} />}
        </div>
    );
};

export default ProductDetail;
