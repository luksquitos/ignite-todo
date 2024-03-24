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
    const newId = tasks.length > 0
      ? tasks[tasks.length - 1].id + 1
      : 1

    setTasks(
      [...tasks, 
        {
          id: newId,
          description: description,
          isChecked: false
        }
      ]
    )
  }

  function updateTask(id: number, isChecked: boolean){
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.isChecked = isChecked
      }

      return task
    })

    setTasks([...updatedTasks])

  }

  function deleteTask(id: number) {
    setTasks(
      [...tasks.filter(task => task.id != id)]
    )
  }

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Input createTasks={createTask}/>
        <Board 
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </section>
    </>
  )
}

