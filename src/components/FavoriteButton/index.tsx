import React, { SetStateAction, useContext } from 'react'
import styles from "./styles.module.scss";

import { 
    Bookmark,
    BookmarkCheckFill
} from "react-bootstrap-icons";

import Router from 'next/router';
import { BookContext } from 'src/contexts/BookContext';
import { FavoriteBook } from 'src/models/book';

import { useSnackbar } from "react-simple-snackbar";

interface Props {
    setFavoriteBookState: SetStateAction<any>;
    isRemoveButton: boolean;
    smallButton?: boolean;
}

export function FavoriteButton({
    setFavoriteBookState,
    isRemoveButton = false,
    smallButton = false,
}: Props) {
    const { 
        addFavoriteBook, 
        removeFavoriteBook,
        selectedBook,
    } = useContext(BookContext);
    const [openSnackbar, closeSnackbar] = useSnackbar({
        position: "bottom-left",
        style: {
            backgroundColor: "var(--primary)",
            color: "var(--text)",
        }
    });

    function redirectToBookPage(): void {
        Router.push(`/book/${ selectedBook.id }`);
    }

    function handleBookmarkClick(): void {
        const favoriteBook: FavoriteBook = {
            id: selectedBook.id,
            title: selectedBook.title,
            subtitle: selectedBook.subtitle,
            cover: selectedBook.cover,
        }

        if (isRemoveButton) {
            removeFavoriteBook(favoriteBook);
            setFavoriteBookState(false);

            openSnackbar("Livro removido dos favoritos");
        } else {
            addFavoriteBook(favoriteBook);
            setFavoriteBookState(true);

            openSnackbar("Livro adicionado com sucesso aos favoritos!");
        }
    }

    const buttonProps = {
        className: isRemoveButton ? "btnCancel" : "btnPrimary",
        text: isRemoveButton ? "Remover dos favoritos" : "Adicionar aos favoritos",
        icon: isRemoveButton ? <BookmarkCheckFill size={20} /> : <Bookmark size={20} />,
    }

    if (smallButton) {
        return (
            <button 
                className={ buttonProps.className }
                onClick={handleBookmarkClick}
            >
                { buttonProps.text }
            </button>
        )
    }

    return (
        <div className={styles.favoriteButtonContainer}>
            <button 
                onClick={redirectToBookPage} 
                className={ buttonProps.className }
            >
                Ver mais detalhes
            </button>
            <button 
                onClick={handleBookmarkClick} 
                className={ buttonProps.className }
            >
                { buttonProps.icon }
            </button>
        </div>
    )
}
