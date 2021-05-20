import React, { useContext, useEffect, useState } from 'react'
import Router from "next/router";

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";
import { Button } from 'components/Button';

export default function BookArea() {
    const { 
        showBookCover, 
        selectedBook, 
        setFavs, 
        favoritesBook, 
        bookRetrieved,
        removeFavoriteBook,
    } = useContext(BookContext);

    const [favoriteBook, setFavoriteBook] = useState<boolean>(false);

    function redirectToBookPage() {
        Router.push(`/book/${ selectedBook.id }`)
    }

    function addBookToFavorites() {
        setFavs(selectedBook);
        setFavoriteBook(true);
    }

    function removeBookFromFavorites() {
        removeFavoriteBook(selectedBook);
        setFavoriteBook(false);
    }

    useEffect(() => {
        let favorite: boolean = false;
        if(selectedBook) {
            for (let i = 0; i < favoritesBook.length; i++) {
                if (favoritesBook[i].id === selectedBook.id) {
                    console.log(favoritesBook[i].id, selectedBook.id)
                    favorite = true;
                    break;
                }
            }
        }

        setFavoriteBook(favorite);
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

                    {favoriteBook ? (
                        <Button cancelButton
                            primaryAction={redirectToBookPage}
                            secondaryAction={removeBookFromFavorites}
                        />
                    ) : (
                        <Button 
                            primaryAction={redirectToBookPage}
                            secondaryAction={addBookToFavorites}
                        />
                    )}
                </div>
            )}

            {showBookCover && (
                <div className={styles.bookCoverContainer}>
                    <BookImage uri={selectedBook.cover} />

                    {favoriteBook ? (
                        <button className="btnCancel" onClick={removeBookFromFavorites}>
                            Remover dos favoritos
                        </button>
                    ) : (
                        <button className="btnPrimary" onClick={addBookToFavorites}>
                            Adicionar aos favoritos
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
