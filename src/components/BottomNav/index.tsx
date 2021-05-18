import React from 'react'
import Link from "next/link";

import styles from "./styles.module.scss";

export function BottomNav() {
    return (
        <nav className={styles.bottomNavContainer}>
            <Link href="#">Meus favoritos</Link>
        </nav>
    )
}
