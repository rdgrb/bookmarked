import BookArea from 'components/BookArea';
import React, { ReactNode } from 'react'

import styles from "./styles.module.scss";

interface LayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.bookAreaContainer}>
                <BookArea />
            </div>
            
            <main>
                { children }
            </main>
        </div>
    )
}
