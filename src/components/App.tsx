import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'

export function App() {
  return (
    <>
      <Header />
      <strong className={styles.title}>
        Estou funcionando
      </strong>
    </>
  )
}

