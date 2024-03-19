import styles from './Board.module.css'


const jsonTasks = []

export function Board() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <strong className={styles.newTasks}>Tarefas Criadas</strong>
          <strong className={styles.number}>0</strong>
        </div>
        <div>
          <strong className={styles.finishedTasks}>Concluidas</strong>
          <strong className={styles.number}>0</strong>
        </div>
      </header>

      <main>
        {/* { FIXME por que erro aqui ?
          if (!jsonTasks) {
             <EmptyBoard />
          } 
          
          else {
            jsonTasks.map()
          }
        } */}
      </main>
    </>
  )
}