import React, { useContext } from 'react'

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";

export default function BookCard() {
    const { setBook } = useContext(BookContext);

    return (
        <div className={styles.bookCardContainer} onClick={() => { setBook("any") }}>
            <BookImage />

            <h3>Título</h3>
            <h4>Subtitulo</h4>
        </div>
    )
}
