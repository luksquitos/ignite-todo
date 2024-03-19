import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export function Task({text}) {
  return (
    <div className={styles.task}>
      <button className={styles.checkbox}>
        <Check className={styles.checkImg} size={10} />
      </button>
      <p>
        {text}
      </p>
      {/* <del>Fazer trabai</del> */}
      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}