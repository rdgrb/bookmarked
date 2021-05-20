import { BookFavorites } from 'components/BookFavorites';
import React from 'react'
import useCollapse from 'react-collapsed';

import styles from "./styles.module.scss";

export function BottomNav() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        duration: 600,
    });

    return (
        <nav className={styles.bottomNavContainer}>
            <button {...getToggleProps()}>
                { isExpanded ? "Fechar" : "Meus favoritos" }
            </button>

            <section className={styles.favContainer}
                {...getCollapseProps()}
            >
                <BookFavorites />
            </section>
        </nav>
    )
}
