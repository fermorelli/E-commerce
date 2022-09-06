import styles from './modal.module.css';
import { useForm } from 'react-hook-form';

export const Modal = ({ setIsOpen })=>{
    const { register, handleSubmit, formState: { errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

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
                            <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.modalForm}>
                                <div className={styles.checkbox}>
                                    <input type="checkbox" {...register('credit', {
                                        required: true
                                    })}/>
                                    <label htmlFor="">Credit card</label>
                                    <input type="checkbox" {...register('debit', {
                                        required: true
                                    })}/>
                                    <label htmlFor="">Debit card</label>
                                </div>
                                <label htmlFor="">Card Number</label>
                                <input type="text" {...register('cardNumber', {
                                        required: true,
                                        maxLength: 16,
                                        minLength: 16
                                    })}/>
                                    {errors.cardNumber?.type === 'required' && <span>Card Number is required</span>}
                                <label htmlFor="">Expire date</label>
                                <input type="text" {...register('expireDate', {
                                        required: true,
                                        maxLength: 5,
                                        minLength: 5
                                    })}/>
                                    {errors.expireDate?.type === 'required' && <span>Expire date  is required</span>}
                                <label htmlFor="">Security code</label>
                                <input type="text" {...register('code', {
                                        required: true,
                                        maxLength: 3,
                                        minLength: 3
                                    })}/>
                                <input type="submit" className={styles.button} value="pay" />
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
};