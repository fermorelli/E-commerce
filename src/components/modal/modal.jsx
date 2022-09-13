import styles from './modal.module.css';
import { appendErrors, useForm } from 'react-hook-form';
import { schema } from './validations';
import { joiResolver } from '@hookform/resolvers/joi';

export const Modal = ({ setIsOpen })=>{

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: joiResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

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
                                    <div className={styles.select}>
                                        <label htmlFor="">Payment method</label>
                                        <select {...register('payment')} htmlFor="">
                                            <option name="pay" value="credit">Credit</option>
                                            <option name="pay" value="debit">Debit</option>
                                        </select>
                                    </div>
                                </div>
                                <label htmlFor="">Card Number</label>
                                <input type="number" {...register('cardNumber')} error={appendErrors.cardNumber?.message}/>
                                    {errors.cardNumber && <span>{errors.cardNumber?.message}</span>}
                                <label htmlFor="">Expire date</label>
                                <input type="text" {...register('expireDate')} error={appendErrors.expireDate?.message}/>
                                    {errors.expireDate && <span>{errors.expireDate?.message}</span>}
                                <label htmlFor="">Security code</label>
                                <input type="number" {...register('code')} error={appendErrors.code?.message}/>
                                    {errors.code && <span>{errors.code?.message}</span>}
                                <input type="submit" className={styles.button} value="pay" />
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
};