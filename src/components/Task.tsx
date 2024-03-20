import { useState } from 'react'
import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'


interface Task {
  isCompleted?: boolean,
  text: string
}


export function Task({isCompleted = false, text}: Task) {
  const taskClassName = isCompleted
    ? styles["task-checked"]
    : styles["task-unchecked"]

  const checkboxClassName = isCompleted
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"]
  

  return (
    <div className={`${styles.task} ${taskClassName}`}>
      {/* Combinações de CSS's */}  
      <span className={`${styles.checkbox} ${checkboxClassName}`}>
        {/* Isso é chamado de avaliação curto-circuito.
        Caso o primeiro elemento seja verdadeiro, o valor após o '&&' 
        será retornado */}
        {isCompleted && <Check size={12}/>}
      </span>

      {/* Não é possível utilizar if e else aqui. Apenas operador ternário */}
      {isCompleted ? <del>{text}</del>: <p>{text}</p>} 
      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}