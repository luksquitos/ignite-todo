import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'


interface ITask {
  id: number
  text: string
  isCompleted?: boolean,
  updateTask: (id: number, isChecked: boolean) => void
  deleteTask: (id: number) => void
}


export function Task({id, text, updateTask, deleteTask, isCompleted = false,}: ITask) {
  const taskClassName = isCompleted
    ? styles["task-checked"]
    : styles["task-unchecked"]

  const checkboxClassName = isCompleted
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"]

    function handleCheckbox(){
      updateTask(id, !isCompleted)
    }

    function handleDeleteTask(){
      deleteTask(id)
    }
    
  return (
    <div className={`${styles.task} ${taskClassName}`}>
      {/* Combinações de CSS's */}  
      <span 
        className={`${styles.checkbox} ${checkboxClassName}`}
        onClick={handleCheckbox}
      >
        {/* Isso é chamado de avaliação curto-circuito.
        Caso o primeiro elemento seja verdadeiro, o valor após o '&&' 
        será retornado */}
        {isCompleted && <Check size={12}/>}
      </span>

      {/* Não é possível utilizar if e else aqui. Apenas operador ternário */}
      {isCompleted ? <del>{text}</del>: <p>{text}</p>} 
      <button 
        className={styles.deleteButton}
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  )
}