import React, { useContext, useState, useEffect } from 'react'

import { 
    Bookmark,
    BookmarkCheckFill
} from "react-bootstrap-icons";
import { BookContext } from 'src/contexts/BookContext';
import { FavoriteBook } from 'src/models/book';

import styles from "./styles.module.scss";

export function FloatingButton() {
    const { 
        addFavoriteBook, 
        removeFavoriteBook, 
        selectedBook,
        isBookInFavoriteList
    } = useContext(BookContext);
    const [isRemoveButton, setIsRemoveButton] = useState<boolean>(false);

    useEffect(() => {
        if (selectedBook) {
            setIsRemoveButton(isBookInFavoriteList(selectedBook.id));
        }
    }, [selectedBook])

    function handleBookmarkClick(): void {
        const favoriteBook: FavoriteBook = {
            id: selectedBook.id,
            title: selectedBook.title,
            subtitle: selectedBook.subtitle,
            cover: selectedBook.cover,
        }

        if (isRemoveButton) {
            removeFavoriteBook(favoriteBook);
            setIsRemoveButton(false);
        } else {
            addFavoriteBook(favoriteBook);
            setIsRemoveButton(true);
        }
    }

    return (
        <button onClick={handleBookmarkClick}
            className={ isRemoveButton ? styles.floatingButtonRemove : styles.floatingButtonAdd}
        >
            { isRemoveButton ? <BookmarkCheckFill size={20} /> : <Bookmark size={20} /> }
        </button>
    )
}
