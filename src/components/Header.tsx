import styles from './Header.module.css'
import Rocket from '../assets/rocket.svg'
import TodoLogo from '../assets/todo.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={Rocket} className={styles.rocket}/>
        <img src={TodoLogo} className={styles.logo} />
      </div>
    </header>
  )
}