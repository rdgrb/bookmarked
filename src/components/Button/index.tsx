import React from 'react'
import styles from "./styles.module.scss";

import { Heart } from "react-bootstrap-icons";

interface Props {
    primaryAction: () => void;
}

export function Button({
    primaryAction,
}: Props) {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={primaryAction} className="primaryButton">
                Ver mais detalhes
            </button>
            <button className="primaryButton">
                <Heart size={20} />
            </button>
        </div>
    )
}
