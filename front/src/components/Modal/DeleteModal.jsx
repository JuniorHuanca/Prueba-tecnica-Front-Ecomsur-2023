import React from 'react'
import styles from './DeleteModal.module.css'
import { useDispatch } from 'react-redux'

const DeleteModal = ({ tittle, text, setModal, modal, customFuntion }) => {
    const dispatch = useDispatch()

    return (
        <div className={`${styles.modal}`}>
            <form className={`${styles.modal_content}`}>
                <span className={`${styles.close}`} onClick={() => setModal(!modal)}>×</span>
                <div className={`${styles.container}`}>
                    <h1>{tittle}</h1>
                    <p>{text}</p>
                    <div className={`${styles.clearfix}`}>
                        <button type="button" className={`${styles.cancelbtn} ${styles.button}`} onClick={() => setModal(!modal)}>Cancel</button>
                        <button type="button" className={`${styles.deletebtn} ${styles.button}`} onClick={() => {
                            dispatch(customFuntion())
                            setModal(!modal)
                        }}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DeleteModal