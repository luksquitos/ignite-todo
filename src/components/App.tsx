import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Input } from './Input'
import { Board } from './Board'

export interface ITask {
  id: number
  isChecked?: boolean
  description: string
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function createTask(description: string){
    setTasks(
      [...tasks, 
        {
          id: tasks.length + 1,
          description: description,
          isChecked: false
        }
      ]
    )
  }

  function updateTask(id: number, isChecked: boolean){
    const updatedTask = tasks.find(task => {
      if(task.id == id){
        return {...task, isChecked: isChecked}
      }
    })

    setTasks(
      [...tasks.filter(task => task.id !== id), updatedTask!]
    )
  }


  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Input 
          createTasks={createTask}
        />
        <Board 
          tasks={tasks}
          updateTask={updateTask}
        />
      </section>
    </>
  )
}

