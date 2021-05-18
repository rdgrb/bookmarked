import React from 'react'

import styles from "./styles.module.scss";

import { Search } from "react-bootstrap-icons";

export function SearchForm() {
    return (
        <form className={styles.formContainer}>
            <input placeholder="Pesquisar livro por nome, autor..." type="text" />
            <button type="submit">
                <Search size={19} />
            </button>
        </form>
    )
}
