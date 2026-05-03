'use client';

import styles from './LeftColumn.module.css';
import MainPhoto from '../MainPhoto/MainPhoto';
import Thumbnails from '../Thumbnails/Thumbnails';
import ActionPanel from '../ActionPanel/ActionPanel';

const LeftColumn = () => {
    return (
        <>
            {/* ЛІВА КОЛОНКА */}
            <div className={styles.leftColumn}>
                <MainPhoto />
                <ActionPanel />
            </div>
        </>
    );
} 

export default LeftColumn;