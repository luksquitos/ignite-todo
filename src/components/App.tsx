import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './Header'
import { Input } from './Input'
import { Board } from './Board'

export function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Input />
        <Board />
      </section>
    </>
  )
}

