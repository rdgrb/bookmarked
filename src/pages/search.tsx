import React, { useContext, useEffect } from 'react'
import { NextPageContext } from 'next';

import { SearchForm } from 'components/SearchForm'
import { Pagination } from 'components/Pagination';
import BookCard from 'components/BookCard';
import { MainLayout } from 'src/templates/MainLayout'

import { api } from "src/services/api";
import { Book } from 'src/models/book';
import { BookContext } from 'src/contexts/BookContext';

import styles from "styles/Search.module.scss";

interface Props {
    books: Array<Book>;
    page: any;
    searchString: string;
    total: number;
    pageCount: number;
}

export default function Search({
    books,
    page,
    searchString,
    total,
    pageCount,
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
                        <span> { searchString } </span> - <span> { total } </span> 
                        livros encontrados
                    </p>
                </header>
            </div>

            <div className={styles.bookListContainer}>
                {books.map((book: Book) => (
                    <BookCard 
                        key={book.id}
                        book={book}
                        redirectDirectly={window.innerWidth < 992 ? true : false}
                    />
                ))}
            </div>

            <Pagination 
                searchString={searchString} 
                page={parseInt(page)} 
                pageCount={pageCount} 
            />
        </MainLayout>
    )
}

Search.getInitialProps = async(ctx: NextPageContext) => {
    const { q, page }: any = ctx.query;

    const { data } = await api.get("volumes", {
        params: {
            q: q,
            startIndex: Math.floor((parseInt(page) * 8) - 8),
            maxResults: 8,
            orderBy: "relevance",
        }
    });

    const total = data.totalItems;

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
        searchString: q,
        total: total,
        pageCount: Math.floor(total / 8),
    }
}