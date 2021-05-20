import React, { useContext } from 'react'

import styles from "./styles.module.scss";

import { BookContext } from 'src/contexts/BookContext';
import BookCard from 'components/BookCard';

export function BookFavorites() {
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
                    />
                ))}
            </div>

            {!favoritesBook && (
                <span>Nenhum livro favorito adicionado</span>
            )}
        </div>
    )
}
