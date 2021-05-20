import React, { useContext, useEffect } from 'react'

import { Book } from "../../models/book";
import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";
import Router from 'next/router';

interface Props {
    book: Book,
    redirectDirectly?: boolean;
}

export default function BookCard({
    book,
    redirectDirectly = false,
}: Props) {
    const { setBook } = useContext(BookContext);

    function handleCardClick() {
        setBook(book);

        redirectDirectly ? Router.push(`/book/${ book.id }`) : undefined;
    }

    return (
        <div className={styles.bookCardContainer} onClick={handleCardClick}>
            <BookImage uri={ book.cover } />

            <h4>{ book.title }</h4>
            <h5>{ book.subtitle }</h5>
        </div>
    )
}
