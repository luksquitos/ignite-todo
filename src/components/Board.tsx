import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'
import { Task } from './Task'


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
        {/* <EmptyBoard /> */}
        <Task text={'Trabalho da faculdade de Inteligência Artificial'} />
        <Task text={'Entrar na Kingspan'} />
      </main>
    </>
  )
}