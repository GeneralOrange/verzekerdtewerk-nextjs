import Link from 'next/link'
import { ClassNames } from '../../lib/defaultData'
import { FaChevronRight } from 'react-icons/fa'
import styles from '../../styles/atoms/Button.module.scss'

export default function Button({ link, scheme, children }){
    let classes = [
        styles.Button
    ]

    switch(scheme){
        case 'green':
            classes.push(styles.ButtonGreen);
            break;
        case 'red':
            classes.push(styles.ButtonRed);
        default:
            //
            break;
    }

    classes = ClassNames(classes);

    return (
        <>
            <Link
                href={ link }>
                    <a className={classes}>
                        { children }
                        <FaChevronRight className={styles.Button__icon}/>
                    </a>
            </Link>
        </>
    )
}