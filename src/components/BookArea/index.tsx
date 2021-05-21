import React, { useContext, useEffect, useState } from 'react'

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";
import { FavoriteButton } from 'components/FavoriteButton';

export default function BookArea() {
    const { 
        showBookCover, 
        selectedBook, 
        isBookInFavoriteList, 
    } = useContext(BookContext);

    const [favoriteBook, setFavoriteBook] = useState<boolean>(false);

    useEffect(() => {
        if (selectedBook) {
            setFavoriteBook(isBookInFavoriteList(selectedBook.id));
        }
    }, [selectedBook])

    return (
        <div className={styles.bookAreaContainer}>
            {!selectedBook && (
                <div className={styles.emptyBook}>
                    <span>Nenhum livro selecionado</span>
                </div>
            )}

            {selectedBook && !showBookCover && (
                <div className={styles.bookInfoContainer}>
                    <BookImage uri={selectedBook.cover} />
                    <h3>{ selectedBook.title }</h3>
                    <h4>{ selectedBook.subtitle }</h4>

                    <p>
                        { selectedBook.description }
                    </p>

                    <FavoriteButton
                        setFavoriteBookState={setFavoriteBook}
                        isRemoveButton={favoriteBook}
                    />
                </div>
            )}

            {showBookCover && (
                <div className={styles.bookCoverContainer}>
                    <BookImage uri={selectedBook.cover} />

                    <FavoriteButton 
                        smallButton
                        setFavoriteBookState={setFavoriteBook}
                        isRemoveButton={favoriteBook}
                    />
                </div>
            )}
        </div>
    )
}
