'use client';

import CardHeader from '../CardHeader/CardHeader';
import Characteristics from '../Characteristics/Characteristics';
import Colors from '../Colors/Colors';
import Description from '../Description/Description';
import Stars from '../Stars/Stars';
import styles from './RightColumn.module.css';

const RightColumn = () => {
    return (
        <>
            <div className={styles.rightColumn}>
                <Stars />
                <CardHeader />
                <Colors />
                <Characteristics />
                <Description />
            </div>
        </>
    );
} 

export default RightColumn;