import { FaChevronUp } from 'react-icons/fa'
import styles from '../styles/menu/BacktoTop.module.scss'

export default function BacktoTop() {
    const handleScroll = () => {
        window.scrollTo(0,0);
    }

    return (
        <>
            <div className={styles.BacktoTop} onClick={ ()=> { handleScroll() } }>
                <FaChevronUp className={styles.BacktoTop__icon} />
            </div>
        </>
    )
}