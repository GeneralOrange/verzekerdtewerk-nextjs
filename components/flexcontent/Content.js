import MarkDown from '../../processing/MarkDown'
import styles from '../../styles/flexcontent/Content.module.css'

const Content = ({ data }) => {
    if(!data){
        return (
            <>
            </>
        )
    }

    return (
        <div className={styles.Content}>
            <MarkDown data={data.content}/>
        </div>
    )
}

export default Content;