import React from 'react'
import Image from "next/image";

import styles from "./styles.module.scss";

interface ImageProps {
    uri?: string;
}

export function BookImage({ uri }: ImageProps) {
    return (
        <div>
            <Image 
                src={uri || "/empty-cover.png"} 
                layout="intrinsic" 
                width={230}
                height={280}
                className={styles.bookCover}
            /> 
        </div>
    )
}
