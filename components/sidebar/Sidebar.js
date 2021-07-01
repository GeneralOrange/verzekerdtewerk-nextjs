import ActionList from '../actions/ActionList'
import styles from '../../styles/sidebar/Sidebar.module.scss'

export default function Sidebar({ data }){
    if(!data){
        return null;
    }

    return (
        <>
            <div className={styles.Sidebar}>
                <strong className={styles.Sidebar__title}>{data.title}</strong>
                <p className={styles.Sidebar__description}>{data.description}</p>
                <ActionList actions={ data.actions }/>
            </div>
        </>
    )
}