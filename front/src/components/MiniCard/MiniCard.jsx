import React, { useState } from 'react'
import styles from './MiniCard.module.css'
import { useDispatch } from 'react-redux'
import { minusOneProduct, plusOneProduct, removeFromCart } from '../../Redux/actionsCart'
import { toast } from "react-hot-toast";
import DeleteModal from '../Modal/DeleteModal';


const MiniCard = ({ _id, name, image, description, brand, category, price, countInStock, rating, numReviews, quantity }) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const subTotal = (quantity * price).toFixed(2)
    const handlePlusCart = () => {
        if (countInStock > quantity) {
            dispatch(plusOneProduct(_id))
        } else {
            toast.error(`"${name}" no hay stock suficiente`, {
                duration: 1500,
            });
        }
    }
    return (
        <div>
            <div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.containerImage}`}>
                        <img className={`${styles.image}`} src={`http://localhost:5000${image}`} alt={name} />
                    </div>
                    <div>
                        <p className={`${styles.name}`}>{name}</p>
                        <p className={`${styles.category}`}>{category}  - <span className={`${styles.span}`}>${price}</span></p>
                        <div className={`${styles.infoItem}`}>
                            <div className={`${styles.btns}`}>
                                <button className={`${styles.less}`} onClick={() => quantity > 1 ? dispatch(minusOneProduct(_id)) : setModal(!modal)}>-</button>
                                <button className={`${styles.counter}`} >{quantity}</button>
                                <button className={`${styles.more}`} onClick={() => handlePlusCart()}>+</button>
                            </div>
                            <p>subtotal: {subTotal}</p>
                            <button className={`${styles.trash}`} onClick={() => setModal(!modal)}>🗑</button>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <DeleteModal tittle='Delete Product' text={`Are you sure you want to remove "${name}" from your cart?`} setModal={setModal} modal={modal} customFuntion={() => removeFromCart(_id)} />}
        </div>
    )
}

export default MiniCard