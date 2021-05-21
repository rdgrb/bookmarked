import Head from "next/head";
import { SearchForm } from 'components/SearchForm';

import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>bookmarked</title>
      </Head>
      <img src="logo.svg" alt="Logo do Bookmarked" />

      <SearchForm />
    </div>
  )
}
