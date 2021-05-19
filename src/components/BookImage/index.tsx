import React from 'react'
import Image from "next/image";

import styles from "./styles.module.scss";

interface ImageProps {
    uri?: string;
}

export function BookImage({ uri }: ImageProps) {
    return (
        <div>
            { uri && (
                <Image 
                    src={uri} 
                    layout="intrinsic" 
                    width={230}
                    height={280}
                    className={styles.bookCover}
                /> 
            )}
            {! uri && 
                <div className={styles.emptyBookCover}>
                    <span>Livro sem foto de capa</span>
                </div>
            }
        </div>
    )
}
