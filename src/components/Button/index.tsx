import React from 'react'
import styles from "./styles.module.scss";

import { 
    Bookmark,
    BookmarkCheckFill
} from "react-bootstrap-icons";

interface Props {
    text?: string;
    primaryAction: () => void;
    secondaryAction?: () => void;
    cancelButton?: boolean;
}

export function Button({
    primaryAction,
    secondaryAction = () => {},
    cancelButton = false,
}: Props) {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={primaryAction} className={`${ cancelButton ? "btnCancel" : "btnPrimary" }`}>
                Ver mais detalhes
            </button>
            <button onClick={secondaryAction} className={`${ cancelButton ? "btnCancel" : "btnPrimary" }`}>
                {cancelButton && <BookmarkCheckFill size={20} />}
                {!cancelButton && <Bookmark size={20} />}
            </button>
        </div>
    )
}
