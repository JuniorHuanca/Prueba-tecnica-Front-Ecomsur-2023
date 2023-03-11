import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import MiniCard from '../MiniCard/MiniCard'
import { removeAllCart } from '../../Redux/actionsCart'
import DeleteModal from '../Modal/DeleteModal'

const Navbar = () => {
    const cart = useSelector(store => store.Cart.items)
    const [modal, setModal] = useState(false)
    let cartLength = 0;
    cart.forEach(product => {
        cartLength += parseInt(product.quantity);
    });
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0).toFixed(2);
    const dispatch = useDispatch()
    const [cartModal, setCartModal] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setCartModal(false)
        setMounted(true)
    }, [])
    if (!mounted) return null
    return (
        <div className={`${styles.sticky}`}>
            <div className={`${styles.container}`}>
                <a href='/' className={`${styles.tittle}`}><h1> Prueba tecnica front Ecomsur 2021 </h1></a>
                <div className={`${styles.containerB}`}>
                    <button onClick={() => setCartModal(!cartModal)} className={`${styles.btnCart}`}>🛒Cart({cartLength})</button>
                </div>
            </div>
            {cartModal &&
                <div className={`${styles.containerCart}`}>
                    <div className={`${styles.cart}`}>
                        <p className={`${styles.subtitle}`}>Shopping Cart</p>
                        <div className={`${styles.cartBody}`}>
                            <div className={`${styles.body}`}>
                                {cart.length ? cart.map((e, index) => <MiniCard key={index} _id={e._id} name={e.name} image={e.image} description={e.description} brand={e.brand} category={e.category} price={e.price} countInStock={e.countInStock} rating={e.rating} numReviews={e.numReviews} quantity={e.quantity} />) : <div className={`${styles.cartEmpty}`}><h2>Your Cart is empty</h2></div>}
                            </div>
                        </div>
                        <div className={`${styles.flex}`}>
                            <div className={`${styles.containerTotal}`}>
                                <div className={`${styles.subtotal}`}>
                                    <p>Total order</p>
                                    <p className={`${styles.subtitle}`}>{totalPrice}</p>
                                </div>
                            </div>
                            <div className={`${styles.btns}`}>
                                <button
                                    type="button"
                                    className={`${ cart.length === 0 ? styles.btnDelD : styles.btnDel}`}
                                    onClick={() => setModal(!modal)}
                                    disabled={cart.length === 0}
                                >
                                    Delte all cart
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.btnBuy}`}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                    {modal && <DeleteModal tittle='Delete All Cart' text={`Are you sure you want to remove all items from your cart?`} setModal={setModal} modal={modal} customFuntion={() => removeAllCart()} />}
                </div>
            }
        </div>
    )
}

export default Navbar