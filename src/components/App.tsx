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

const tasksJson = [
  {
    id: 1,
    isChecked: false,
    description: "Tarefa 1"
  },
  {
    id: 2,
    isChecked: false,
    description: "Tarefa 2"
  },
  {
    id: 3,
    isChecked: false,
    description: "Tarefa 3"
  },
  {
    id: 4,
    isChecked: false,
    description: "Tarefa 4"
  },
  {
    id: 5,
    isChecked: false,
    description: "Tarefa 5"
  },

]

export function App() {
  const [tasks, setTasks] = useState<ITask[]>(tasksJson)

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
      // Ao apagar uma task. Está tendo um bug visual
      // no Checkbox
    )
  }

  console.log(tasks)
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

