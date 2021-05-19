import React, { useContext } from 'react'

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";

interface Book {
    id: string;
    title: string;
    subtitle: string;
    description: string;
}

export default function BookCard({
    id,
    title,
    subtitle,
    description,
    cover,
}) {
    const { setBook } = useContext(BookContext);

    function handleCardClick() {
        setBook({
            id: id,
            title: title,
            subtitle: subtitle,
            description: description,
            cover: cover,
        })
    }

    return (
        <div className={styles.bookCardContainer} onClick={handleCardClick}>
            <BookImage uri={cover} />

            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
        </div>
    )
}
