import { createContext, useState } from "react";

import { Book } from "../models/book";

interface BookContextValues {
    selectedBook: Book | undefined;
    setBook: (book: any) => void;
    showBookCover: boolean;
    setShowCover: (show: boolean) => void;
}

export const BookContext = createContext({} as BookContextValues);

export function BookProvider({ children }) {
    const [selectedBook, setSelectedBook] = useState<Book | undefined>();
    const [showBookCover, setShowBookCover] = useState<boolean>(false)

    function setBook(book: Book): void {
        setSelectedBook(book);
    }

    function setShowCover(show: boolean): void {
        setShowBookCover(show);
    }

    return (
        <BookContext.Provider value={{
            selectedBook,
            setBook,
            showBookCover,
            setShowCover,
        }}>
            { children }
        </BookContext.Provider>
    )
}