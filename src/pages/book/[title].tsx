import React, { useContext, useEffect } from 'react'

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router'

import { BookImage } from 'components/BookImage';
import { ArrowLeft, Heart } from 'react-bootstrap-icons';
import { BookContext } from 'src/contexts/BookContext';
import { MainLayout } from 'src/templates/MainLayout';

import styles from "styles/Book.module.scss";
import { api } from 'src/services/api';

interface Book {
    id: string,
    title: string,
    subtitle: string | null,
    authors: Array<any>,
    publishedDate: string,
    description: string,
    cover: string,
    category: string,
}

interface Props {
    book: Book;
}

export default function Book({ book }: Props) {
    const { setShowCover, setBook } = useContext(BookContext);
    const router = useRouter();

    useEffect(() => {
        setShowCover(true);
        setBook(book);
    }, []);

    function handleBackClick() {
        router.back();
    }

    return (
        <MainLayout>
            <div className={styles.bookContainer}>
                <ArrowLeft onClick={handleBackClick} size={30} />

                <div className={styles.imageContainer}>
                    <BookImage uri={book.cover} />
                </div>

                <h1>{ book.title }</h1>
                <h2>{ book.subtitle }</h2>

                <div className={styles.bookInfoContainer}>
                    <div>
                        <h3>Autor</h3>
                        { book.authors ? (
                            <span>
                                { book.authors.map((author, key) => {
                                    return (key ? ", " : "") + author 
                                })}
                            </span>
                        ) : (
                            <span>Sem informação</span>
                        )}
                    </div>
                    <div>
                        <h3>Publicado em</h3>
                        <span>{ book.publishedDate || "Sem informação" }</span>
                    </div>
                    <div>
                        <h3>Categoria</h3>
                        <span>{ book.category ? book.category[0] : "Sem informação" }</span>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: book.description }} />
                <button className={styles.floatingButton}>
                    <Heart size={25} />
                </button>
            </div>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    return {
        paths: [],
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async(ctx) => {
    const { title } = ctx.params; 

    const { data } = await api.get(`/volumes/${title}`);

    const book = {
        id: data.id,
        title: data.volumeInfo.title,
        subtitle: data.volumeInfo.subtitle || null,
        authors: data.volumeInfo.authors || null,
        publishedDate: data.volumeInfo.publishedDate || null,
        description: data.volumeInfo.description || null,
        cover: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null,
        category: data.volumeInfo.categories || null,
    }

    return {
        props: {
            book,
        },
    }
}