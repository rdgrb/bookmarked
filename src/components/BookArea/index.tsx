import React, { useContext } from 'react'
import Link from "next/link";

import { BookImage } from 'components/BookImage';
import { BookContext } from 'src/contexts/BookContext';

import styles from "./styles.module.scss";

export default function BookArea() {
    const { showBookCover, selectedBook } = useContext(BookContext);

    return (
        <div className={styles.bookAreaContainer}>
            {!selectedBook && (
                <div className={styles.emptyBook}>
                    <span>Nenhum livro selecionado</span>
                </div>
            )}

            {selectedBook && !showBookCover && (
                <div className={styles.bookInfoContainer}>
                    <BookImage />
                    <h1>Título</h1>
                    <h2>Subtitulo</h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Omnis dignissimos architecto perferendis pariatur a rerum 
                        ullam labore doloribus laborum, dicta, tempora blanditiis 
                        voluptate laboriosam consectetur voluptatem quod atque 
                        nisi ut temporibus error, excepturi id dolores officia.
                        Amet, omnis quo deleniti id, ipsum accusamus repellat 
                        quasi et placeat tenetur voluptates ut.
                    </p>

                    <Link href="/book/title">
                        <button className="primaryButton">Ver mais detalhes</button>
                    </Link>
                </div>
            )}

            {showBookCover && (
                <h1>Cover</h1>
            )}
        </div>
    )
}
