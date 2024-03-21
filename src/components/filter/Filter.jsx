
import styles from './Filter.module.css'

export default function Filter({actionFilterBook}) {
    return(
        <div className={styles.containerFilter}>
            <input className={styles.inputFilter} type="text" onChange={(evt) => actionFilterBook(evt.target.value)}/>
        </div>
    )
}

