import styles from './modal.module.css';

export const Modal = ({ setIsOpen })=>{
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Choose Payment Method</h5>
                            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                                <i className='fa-solid fa-x' />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <form action="" className={styles.modalForm}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" />
                                    <label htmlFor="">Credit card</label>
                                    <input type="checkbox" />
                                    <label htmlFor="">Debit card</label>
                                </div>
                                <label htmlFor="">Card Number</label>
                                <input type="text" />
                                <label htmlFor="">Expire date</label>
                                <input type="text" />
                                <label htmlFor="">Security code</label>
                                <input type="text" />
                            </form>
                            <button className={styles.button}>pay</button>
                        </div>
                    </div>
                </div>
        </>
    )
};