import { useState } from 'react'
import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'


interface Task {
  isCompleted?: boolean,
  text: string
}


export function Task({isCompleted = false, text}: Task) {
  const [isChecked, setIsChecked] = useState(isCompleted)
  const taskClassName = isChecked
    ? styles["task-checked"]
    : styles["task-unchecked"]

  const checkboxClassName = isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"]

    function handleCheckbox(){
      // setIsChecked(isChecked ? false : true)
      setIsChecked(!isChecked)
      // Como o valor volta a ser false ?
    }

    function handleDeleteComment(){
      // deleteComment(id)
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
        {isChecked && <Check size={12}/>}
      </span>

      {/* Não é possível utilizar if e else aqui. Apenas operador ternário */}
      {isChecked ? <del>{text}</del>: <p>{text}</p>} 
      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}