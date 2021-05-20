import React, { useContext } from 'react'

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";
import Router from 'next/router';

interface Book {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    cover: string;
    redirectDirectly?: boolean;
}

export default function BookCard({
    id,
    title,
    subtitle,
    description,
    cover,
    redirectDirectly = false,
}: Book) {
    const { setBook } = useContext(BookContext);

    function handleCardClick() {
        setBook({
            id: id,
            title: title,
            subtitle: subtitle,
            description: description,
            cover: cover,
        })

        redirectDirectly ? Router.push(`/book/${id}`) : undefined;
    }

    return (
        <div className={styles.bookCardContainer} onClick={handleCardClick}>
            <BookImage uri={cover} />

            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
        </div>
    )
}
