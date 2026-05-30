'use client';

import styles from './LeftColumn.module.css';
import MainPhoto from '../MainPhoto/MainPhoto';
import ActionPanel from '../ActionPanel/ActionPanel';

const LeftColumn = () => {
    return (
        <>
            <div className={styles.leftColumn}>
                <MainPhoto />
                <ActionPanel />
            </div>
        </>
    );
} 

export default LeftColumn;