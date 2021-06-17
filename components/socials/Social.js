import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from '../../styles/socials/Social.module.scss' 

export default function Social({ socialItem }){
    if(!socialItem || !socialItem.link || !socialItem.icon || !socialItem.title){
        return null;
    }

    return (
        <li>
            <Link
                href={socialItem.link}
                target="_blank"
                rel="nofollow">
                <a className={styles.Social}>
                    {handleSocialIcons(socialItem.icon)}{socialItem.title}
                </a>
            </Link>
        </li>
    )
}

function handleSocialIcons(socialIcon){
    switch(socialIcon){
        case 'Facebook':
            return <FaFacebookSquare className={styles.Social__icon}/>
            break;
        case 'Instagram':
            return <FaInstagramSquare className={styles.Social__icon}/>
            break;
        case 'LinkedIn':
            return <FaLinkedin className={styles.Social__icon}/>
            break;
        case 'TikTok':
            return <FaSnapchatSquare className={styles.Social__icon}/>
            break;
        case 'Snapchat':
            return <FaSnapchatSquare className={styles.Social__icon}/>
            break;
        case 'Twitter':
            return <FaTwitter className={styles.Social__icon}/>
            break; 
        case 'Youtube':
            return <FaYoutube className={styles.Social__icon}/>
            break;    
        default:
            //
            break;
    }
}