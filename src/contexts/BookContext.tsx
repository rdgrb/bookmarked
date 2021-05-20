import { createContext, useEffect, useState } from "react";

import { Book, FavoriteBook } from "../models/book";

import Cookie from "js-cookie";

interface BookContextValues {
    selectedBook: Book | undefined;
    setBook: (book: any) => void;
    showBookCover: boolean;
    setShowCover: (show: boolean) => void;
    favoritesBook: any;
    bookRetrieved: any;
    addFavoriteBook: (book: FavoriteBook) => void;
    removeFavoriteBook: (book: FavoriteBook) => void;
    isBookInFavoriteList: (bookID: string) => boolean;
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

    function addFavoriteBook(book: FavoriteBook): void {
        const cookie = Cookie.get("favorites");

        let favBookList = [];
        if (cookie === "undefined" || !cookie) {
            favBookList.push(book);
        } else {
            favBookList = JSON.parse(cookie);
            favBookList.push(book);
        }

        Cookie.set("favorites", JSON.stringify(favBookList));
        setFavoritesBook(favBookList);
    }

    function removeFavoriteBook(book: FavoriteBook): void {
        const cookie = Cookie.get("favorites");
        
        const favBookList = JSON.parse(cookie);

        for (let i = 0; i < favBookList.length; i++) {
            if (favBookList[i].id === book.id) {
                favBookList.splice(i, 1);
                break;
            }
        }

        Cookie.set("favorites", JSON.stringify(favBookList));
        setFavoritesBook(favBookList);
    }

    function isBookInFavoriteList(bookID: string): boolean {
        let inFavorite: boolean = false;

        for (let i = 0; i < favoritesBook.length; i++) {
            if (favoritesBook[i].id === bookID) {
                inFavorite = true;
                break;
            }
        }

        return inFavorite;
    }

    return (
        <BookContext.Provider value={{
            selectedBook,
            setBook,
            showBookCover,
            setShowCover,
            favoritesBook,
            bookRetrieved,
            addFavoriteBook,
            removeFavoriteBook,
            isBookInFavoriteList,
        }}>
            {bookRetrieved && children }
        </BookContext.Provider>
    )
}