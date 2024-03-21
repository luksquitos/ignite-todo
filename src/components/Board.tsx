import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'
import { Task } from './Task'
import { ITask } from './App'


interface Board {
  tasks: ITask[]
}

export function Board({tasks}: Board) {
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
        {
          tasks.length == 0?  <EmptyBoard />
          : tasks.map(task => {
              return <Task text={task.description} />
            }
          )
        }

      </main>
    </>
  )
}