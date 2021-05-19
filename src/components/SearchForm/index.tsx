import React from 'react'

import styles from "./styles.module.scss";

import { Search } from "react-bootstrap-icons";
import Router from 'next/router';

export function SearchForm() {
    function handleSearchSubmit(event: any) {
        event.preventDefault();
        const searchString = event.target.search.value;

        Router.push(`/search?q=${ searchString }&page=1`);
    }

    return (
        <form onSubmit={handleSearchSubmit} className={styles.formContainer}>
            <input name="search" placeholder="Pesquisar livro por nome, autor..." type="text" />
            <button type="submit">
                <Search size={19} />
            </button>
        </form>
    )
}
