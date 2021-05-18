import { BottomNav } from 'components/BottomNav';

import styles from 'styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Olá, mundo! 😅</h1>
      <BottomNav />
    </div>
  )
}
