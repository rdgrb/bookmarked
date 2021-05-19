import React, { useContext, useEffect } from 'react'
import Router from "next/router";

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";
import { Button } from 'components/Button';

export default function BookArea() {
    const { showBookCover, selectedBook } = useContext(BookContext);

    function redirectToBookPage() {
        Router.push(`/book/${ selectedBook.id }`)
    }

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

                    {/* <Link href={`/book/${ selectedBook.id }`}>
                        <button className="primaryButton">Ver mais detalhes</button>
                    </Link> */}

                    <Button 
                        primaryAction={redirectToBookPage}
                    />
                </div>
            )}

            {showBookCover && (
                <div className={styles.bookCoverContainer}>
                    <BookImage uri={selectedBook.cover} />
    
                    <button className="primaryButton">Adicionar aos favoritos</button>
                </div>
            )}
        </div>
    )
}
