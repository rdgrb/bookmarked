import React from 'react'
import Image from "next/image";

import styles from "./styles.module.scss";

interface ImageProps {
    uri?: string;
}

export function BookImage({ uri }: ImageProps) {
    return (
        <div>
            {/* { uri && (
                <Image 
                    src={uri || "https://via.placeholder.com/230x280/202020/202020/?text=IPaddress.net%20C/O%20https://placeholder.com/ "} 
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
            } */}
            <Image 
                src={uri || "https://via.placeholder.com/230x280/202020/202020/?text=IPaddress.net%20C/O%20https://placeholder.com/ "} 
                layout="intrinsic" 
                width={230}
                height={280}
                className={styles.bookCover}
            /> 
        </div>
    )
}
