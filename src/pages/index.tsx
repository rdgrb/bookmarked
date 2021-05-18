import { SearchForm } from 'components/SearchForm';

import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src="logo.svg" alt="Logo do Bookmarked" />

      <SearchForm />
    </div>
  )
}
