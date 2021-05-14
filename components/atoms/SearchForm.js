import styles from '../../styles/atoms/SearchForm.module.scss';

export default function SearchForm()
{  
    return (
        <>
            <div className={`input-group ${styles.SearchForm__wrapper}`}>
                <input type="text" className={`form-control ${styles.SearchForm}`} placeholder="Bijvoorbeeld badkamer specialist..."/>
                <button className={`btn ${styles.SearchForm__button}`} type="button">Zoek jouw specialist</button>
            </div>
        </>
    )
}