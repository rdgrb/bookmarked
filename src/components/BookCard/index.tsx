import { BookImage } from 'components/BookImage';
import React from 'react'

import styles from "./styles.module.scss";

export default function BookCard() {
    return (
        <div className={styles.bookCardContainer}>
            <BookImage />

            <h3>Título</h3>
            <h4>Subtitulo</h4>
        </div>
    )
}
