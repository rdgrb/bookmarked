import { createContext, useEffect, useState } from "react";

import { Book } from "../models/book";

import Cookie from "js-cookie";

interface BookContextValues {
    selectedBook: Book | undefined;
    setBook: (book: any) => void;
    showBookCover: boolean;
    setShowCover: (show: boolean) => void;
    favoritesBook: any;
    setFavs: (book: any) => void;
    getFavs: () => any;
    bookRetrieved: any;
    addFavoriteBook: (book: any) => void;
    removeFavoriteBook: (book: any) => void;
}

export const BookContext = createContext({} as BookContextValues);

export function BookProvider({ children }) {
    const [bookRetrieved, setBookRetrieved] = useState<boolean>(false);
    const [favoritesBook, setFavoritesBook] = useState<Array<any> | undefined>([]);

    const [selectedBook, setSelectedBook] = useState<Book | undefined>();
    const [showBookCover, setShowBookCover] = useState<boolean>(false)

    useEffect(() => {
        if (favoritesBook && favoritesBook.length > 0) {
            Cookie.set("favorites", JSON.stringify(favoritesBook));
        }
    }, [favoritesBook]);

    useEffect(() => {
        const favorites = Cookie.get("favorites");
        if (favorites && favorites !== "undefined") {
            setFavoritesBook(JSON.parse(favorites));
        }

        setBookRetrieved(true);
    }, []);

    function setBook(book: Book): void {
        setSelectedBook(book);
    }

    function setShowCover(show: boolean): void {
        setShowBookCover(show);
    }

    function addFavoriteBook(book: Book): void {
        const cookie = Cookie.get("favorites");
        const smallBookModel = {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle,
            cover: book.cover,
        }

        let favBookList = [];
        if (cookie === "undefined" || !cookie) {
            favBookList.push(smallBookModel);
        } else {
            favBookList = JSON.parse(cookie);
            favBookList.push(smallBookModel);
        }

        Cookie.set("favorites", JSON.stringify(favBookList));
        setFavoritesBook(favBookList);
    }

    function removeFavoriteBook(book: Book): void {
        const cookie = Cookie.get("favorites");
        const smallBookModel = {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle,
            cover: book.cover,
        }

        const favBookList = JSON.parse(cookie);
        favBookList.pop(smallBookModel);

        Cookie.set("favorites", JSON.stringify(favBookList));
        setFavoritesBook(favBookList);
    }

    function setFavs(book: Book): void {
        const favCookie = Cookie.get("favorites");
        const rawBook = {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle,
            cover: book.cover,
        }

        let favList = [];

        if (favCookie == "undefined" || !favCookie) {
            favList.push(rawBook);
        } else {
            favList = JSON.parse(favCookie);
            favList.push(rawBook);    
        }

        Cookie.set("favorites", JSON.stringify(favList));
        setFavoritesBook(favList);
    }

    function getFavs() {
        const favCookie = Cookie.get("favorites");

        return JSON.parse(favCookie);
    }

    return (
        <BookContext.Provider value={{
            selectedBook,
            setBook,
            showBookCover,
            setShowCover,
            setFavs,
            getFavs,
            favoritesBook,
            bookRetrieved,
            addFavoriteBook,
            removeFavoriteBook,
        }}>
            {bookRetrieved && children }
        </BookContext.Provider>
    )
}