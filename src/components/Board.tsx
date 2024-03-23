import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'
import { Task } from './Task'
import { ITask } from './App'


interface Board {
  tasks: ITask[]
  updateTask: (id: number, isChecked: boolean) => void
}

export function Board({tasks, updateTask}: Board) {
  const finishedCount = tasks.filter(task => task.isChecked).length
  const tasksCount = tasks.length

  return (
    <>
      <header className={styles.header}>
        <div>
          <strong className={styles.newTasks}>Tarefas Criadas</strong>
          <strong className={styles.number}>{tasks.length}</strong>
        </div>
        <div>
          <strong className={styles.finishedTasks}>Concluidas</strong>
          <strong className={styles.number}>
            <strong>
              {
                tasksCount > 0? `${finishedCount} de ${tasksCount}`
                : tasksCount
              }
            </strong>
          </strong>
        </div>
      </header>

      <main className={styles.mainSection}>
        {
          tasks.length == 0?  <EmptyBoard />
          : tasks.map(task => {
              return (
                <Task 
                  id={task.id}
                  text={task.description} 
                  updateTask={updateTask}
                />
              )
            }
          )
        }

      </main>
    </>
  )
}