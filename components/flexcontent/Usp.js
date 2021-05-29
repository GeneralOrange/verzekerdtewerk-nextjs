import { FaBookOpen, FaEye, FaEuroSign, FaHammer, FaHandshake, FaComments } from 'react-icons/fa'
import MarkDown from '../../processing/MarkDown'
import styles from '../../styles/flexcontent/Usp.module.scss'

function handleIconsBackground(iconData){
    switch(iconData){
        case 'phone':
            return styles.Usp__iconWrapperPhone;
            break;
        case 'book':
            return styles.Usp__iconWrapperBook;
            break;
        case 'euro':
            return styles.Usp__iconWrapperEuro;
            break;
        case 'eye':
            return styles.Usp__iconWrapperEye;
            break;
        case 'hammer':
            return styles.Usp__iconWrapperHammer;
            break;
        case 'handshake':
            return styles.Usp__iconWrapperHandshake;
            break;
        default:
            return null;
            break;
    }
}

function handleIcons(iconData){
    switch(iconData){
        case 'phone':
            return (
                <FaComments className={styles.Usp__icon} />
            )
            break;
        case 'book':
            return (
                <FaBookOpen className={styles.Usp__icon} />
            )
            break;
        case 'euro':
            return (
                <FaEuroSign className={styles.Usp__icon} />
            )
            break;
        case 'eye':
            return (
                <FaEye className={styles.Usp__icon} />
            )
            break;
        case 'hammer':
            return (
                <FaHammer className={styles.Usp__icon} />
            )
            break;
        case 'handshake':
            return (
                <FaHandshake className={styles.Usp__icon} />
            )
            break;
        default:
            return null;
            break;
    }
}

export default function Usp({ uspData }){
    if(!uspData || !uspData.icon){
        return null;
    }

    const uspBackground = handleIconsBackground(uspData.icon);

    return (
        <>
            <div className={styles.Usp}>
                <div className={`${styles.Usp__iconWrapper} ${uspBackground}`}>
                    { handleIcons(uspData.icon) }
                </div>
                <h2 className={styles.Usp__title}>
                    { uspData.title }
                </h2>
                <MarkDown data={ uspData.content }/>
            </div>
        </>
    )
}