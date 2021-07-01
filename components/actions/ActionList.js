import ActionItem from './ActionItem'
import styles from '../../styles/actions/ActionList.module.scss'

export default function ActionList({ actions }){
    if(!actions || actions.length < 1){
        return null;
    }

    return (
        <div className={ styles.ActionList }>
            {actions.map((action, index) => (
                <ActionItem key={ index } action={ action } withRank={true}/>
            ))}
        </div>
    );
}