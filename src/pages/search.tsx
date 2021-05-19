import React, { useContext, useEffect } from 'react'

import { SearchForm } from 'components/SearchForm'
import BookCard from 'components/BookCard';
import { BookContext } from 'src/contexts/BookContext';
import { MainLayout } from 'src/templates/MainLayout'

import styles from "styles/Search.module.scss";

import { api } from "src/services/api";
import { NextPageContext } from 'next';
import { Book } from 'src/models/book';

interface Props {
    books: Array<Book>;
    page: any;
    q: string;
    total: number;
}

export default function Search({
    books,
    page,
    q,
    total,
}: Props) {
    const { setShowCover } = useContext(BookContext);

    useEffect(() => {
        setShowCover(false);
    }, []);

    return (
        <MainLayout>
            <div className={styles.searchContainer}>
                <header>
                    <SearchForm />
                    <p>
                        Exibindo resultados para 
                        <span> { q } </span> - <span> { total } </span> 
                        livros encontrados
                    </p>
                </header>
            </div>

            <div className={styles.bookListContainer}>
                {books.map(book => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        subtitle={book.subtitle}
                        description={book.description}
                        cover={book.cover}
                    />
                ))}
            </div>
        </MainLayout>
    )
}

Search.getInitialProps = async(ctx: NextPageContext) => {
    const { q, page }: any = ctx.query;

    const { data } = await api.get("volumes", {
        params: {
            q: q,
            startIndex: Math.floor((page * 8) - 8),
            maxResults: 8,
            langRestrict: "BR"
        }
    });

    const books = data.items ? data.items.map(book => {
        return {
            id: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle || undefined,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description || "Nenhuma descrição",
            cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : undefined
        }
    }) : undefined;

    return {
        books: books,
        page: page,
        q: q,
        total: data.totalItems,
    }
}