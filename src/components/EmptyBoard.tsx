import styles from './EmptyBoard.module.css'
// import { Clipboard } from '@phosphor-icons/react'
import Clipboard from '../assets/Clipboard.svg'

export function EmptyBoard() {
  return (
    <div className={styles.wrapper}>
      <img src={Clipboard} />
      <strong>
        Você ainda não tem tarefas cadastradas
      </strong>
      <p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}