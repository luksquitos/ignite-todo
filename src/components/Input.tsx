import {PlusCircle} from '@phosphor-icons/react'
import styles from './Input.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface IInput{
  createTasks: (description: string) => void
}

export function Input({createTasks}: IInput) {
  const [taskInput, setTaskInput] = useState('')
  const isEmptyInput = taskInput.length == 0;
  
  function handleNewTask(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    createTasks(taskInput)
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
            required
          />
          <button type='submit' disabled={isEmptyInput}>
            Criar
            <PlusCircle size={18}/>
          </button>
      </form>        

    </>
  )
}