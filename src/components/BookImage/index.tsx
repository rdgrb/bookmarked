import React from 'react'

import styles from "./styles.module.scss";

interface ImageProps {
    uri?: string;
}

export function BookImage({ uri }: ImageProps) {
    return (
        <div>
            { uri && <img src={uri} /> }
            {! uri && 
                <div className={styles.emptyBookCover}>
                    <span>Livro sem foto de capa</span>
                </div>
            }
        </div>
    )
}
