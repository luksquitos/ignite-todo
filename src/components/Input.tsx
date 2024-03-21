import {PlusCircle} from '@phosphor-icons/react'
import styles from './Input.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IInput{
  updateTasks: (description: string) => void
}

export function Input({updateTasks}: IInput) {
  const [taskInput, setTaskInput] = useState('')
  
  function handleNewTask(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    updateTasks(taskInput)
    setTaskInput('')
  }

  function handleTaskInput(e: ChangeEvent<HTMLInputElement>){
    setTaskInput(e.target.value)
  }

  return (
    <>
      <form 
        className={styles.form}
        onSubmit={handleNewTask}>
          <input 
            onChange={handleTaskInput}
            placeholder="Adicione uma nova tarefa"
            value={taskInput}
          />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
      </form>        

    </>
  )
}