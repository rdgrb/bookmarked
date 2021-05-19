import React, { useContext, useEffect } from 'react'
import Link from 'next/link';

import { BookImage } from 'components/BookImage';
import { ArrowLeft } from 'react-bootstrap-icons';
import { BookContext } from 'src/contexts/BookContext';
import { MainLayout } from 'src/templates/MainLayout';

import styles from "styles/Book.module.scss";

export default function Book() {
    const { setShowCover } = useContext(BookContext);

    useEffect(() => {
        setShowCover(true);
    }, []);

    return (
        <MainLayout>
            <div className={styles.bookContainer}>
                <Link href="/search">
                    <ArrowLeft size={30} />
                </Link>

                <div className={styles.imageContainer}>
                    <BookImage />
                </div>

                <h1>Título</h1>
                <h2>Subtítulo</h2>

                <div className={styles.bookInfoContainer}>
                    <div>
                        <h3>Autor</h3>
                        <span>Autor</span>
                    </div>
                    <div>
                        <h3>Ano</h3>
                        <span>2000</span>
                    </div>
                    <div>
                        <h3>Categoria</h3>
                        <span>Aventura</span>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veritatis animi rem ducimus similique, optio ipsam aperiam 
                    officiis iste, eius iure nesciunt? Sint ratione quaerat 
                    modi quis, tempore voluptates nobis porro autem quod 
                    perferendis ad assumenda. Voluptates ex velit nihil fugiat 
                    necessitatibus sunt, repellendus, at architecto, est 
                    commodi eaque maiores qui.
                </p>
            </div>
        </MainLayout>
    )
}
