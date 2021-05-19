import React, { useContext, useEffect } from 'react'

import { SearchForm } from 'components/SearchForm'
import BookCard from 'components/BookCard';
import { BookContext } from 'src/contexts/BookContext';
import { MainLayout } from 'src/templates/MainLayout'

import styles from "styles/Search.module.scss";

export default function Search() {
    const { setShowCover } = useContext(BookContext);

    useEffect(() => {
        setShowCover(false);
    }, [])

    return (
        <MainLayout>
            <div className={styles.searchContainer}>
                <header>
                    <SearchForm />
                    <p>
                        Exibindo resultados para 
                        <span> livro </span> - <span> 100.000 </span> 
                        livros encontrados
                    </p>
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
