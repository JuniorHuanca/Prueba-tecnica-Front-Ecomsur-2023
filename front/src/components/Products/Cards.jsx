import React, { useEffect } from 'react'
import styles from './Products.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../Redux/actionsProducts';
import Card from './Card';
import { Toaster } from 'react-hot-toast';

const Cards = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.Products.allProducts)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className={`${styles.container}`}>
            {products.map((e, index) => <Card key={index} _id={e._id} name={e.name} image={e.image} description={e.description} brand={e.brand} category={e.category} price={e.price} countInStock={e.countInStock} rating={e.rating} numReviews={e.numReviews} />)}
            <Toaster position="top-left" gutter={10}/>
        </div>
    )
}

export default Cards