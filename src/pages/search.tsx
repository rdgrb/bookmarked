import BookCard from 'components/BookCard';
import { SearchForm } from 'components/SearchForm'
import React from 'react'

import { MainLayout } from 'src/templates/MainLayout'

import styles from "styles/Search.module.scss";

export default function Search() {
    return (
        <MainLayout>
            <div className={styles.searchContainer}>
                <header>
                    <SearchForm />
                    <p>Exibindo resultados para <span>livro</span> - <span>100.000</span> livros encontrados</p>
                </header>
            </div>

            <div className={styles.bookListContainer}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </MainLayout>
    )
}
