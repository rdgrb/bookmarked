import React from 'react'
import Router from "next/router";

import ReactPaginate from "react-paginate";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

import styles from "./styles.module.scss";

interface Props {
    pageCount: number;
    searchString: string;
    page: number;
}

export function Pagination({ pageCount, searchString, page }: Props) {
    function handlePageClick(page: { selected: string }) {
        Router.push(`/search?q=${searchString}&page=${page.selected + 1}`)
    }
    
    return (
        <ReactPaginate
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            breakLabel="..."

            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            pageLinkClassName={styles.pageLink}
            containerClassName={styles.pagesContainer}
            breakClassName={styles.pageButton}
            pageClassName={styles.pageButton}
            previousClassName={styles.backButton}
            nextClassName={styles.nextButton}
            activeClassName={styles.pageButtonActive}
            forcePage={page - 1}
        />
    )
}
