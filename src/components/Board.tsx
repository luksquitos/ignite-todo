import styles from './Board.module.css'
import { EmptyBoard } from './EmptyBoard'
import { Task } from './Task'
import { ITask } from './App'
import { useState } from 'react'


interface Board {
  tasks: ITask[]
  updateTask: (id: number, isChecked: boolean) => void
}

export function Board({tasks, updateTask}: Board) {
  console.log("Quantidade finalizada")
  console.log(tasks.filter(task => task.isChecked).length)

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
            <strong>{tasks.filter(task => task.isChecked).length}</strong>
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