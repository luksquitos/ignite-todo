import {PlusCircle} from '@phosphor-icons/react'
import styles from './Input.module.css'


export function Input() {
  return (
    <>
      <form className={styles.form}>
        <textarea 
          // onChange={}
          placeholder="Adicione uma nova tarefa"
        />
        <button type='submit'>
          Criar
          <PlusCircle />
        </button>
      </form>
    </>
  )
}