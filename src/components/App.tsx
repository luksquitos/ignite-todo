import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Input } from './Input'
import { Board } from './Board'

export interface ITask {
  description: string
}

export function App() {
  const [task, setTask] = useState<ITask[]>([])

  function updateTasks(description: string){
    setTask([...task, {description: description}])
  }

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Input 
          updateTasks={updateTasks}
        />
        <Board 
          tasks={task}
        />
      </section>
    </>
  )
}

