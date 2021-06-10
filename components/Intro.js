import MarkDown from '../processing/MarkDown'
import styles from '../styles/Intro.module.scss'

export default function Intro({ content }){
    if(!content){
        return null;
    }

    return (
        <div className={ styles.Intro }>
            <MarkDown data={ content }/>
        </div>
    )
}