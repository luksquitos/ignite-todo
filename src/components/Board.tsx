import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'


const jsonTasks = []

export function Board() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <strong className={styles.newTasks}>Tarefas Criadas</strong>
          <strong className={styles.number}>0</strong>
        </div>
        <div>
          <strong className={styles.finishedTasks}>Concluidas</strong>
          <strong className={styles.number}>0</strong>
        </div>
      </header>

      <main className={styles.mainSection}>
        <EmptyBoard />
      </main>
    </>
  )
}