import React, { useContext } from 'react'

import styles from "./styles.module.scss";

import { BookContext } from 'src/contexts/BookContext';
import BookCard from 'components/BookCard';

export function BookFavorites({ setExpanded }: any) {
    const { favoritesBook } = useContext(BookContext);

    return (
        <div className={styles.bookFavoritesContainer}>
            <h1>Meus favoritos</h1>

            <div className={styles.bookFavoritesList}>
                {favoritesBook && favoritesBook.map(book => (
                    <BookCard 
                        key={book.id}
                        book={book}
                        redirectDirectly
                        setExpanded={setExpanded}
                    />
                ))}
            </div>

            {favoritesBook.length == 0 && (
                <span>Nenhum livro favorito adicionado</span>
            )}
        </div>
    )
}
