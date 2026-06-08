'use client';

import styles from './LeftColumn.module.css';
import MainPhoto from '../ProductMainPhoto/MainPhoto';
import ActionPanel from '../ActionPanel/ActionPanel';
import type { Product } from '@/store/useStore';

type Props = { product: Product };

const LeftColumn = ({ product }: Props) => {
    return (
        <>
            <div className={styles.leftColumn}>
                <MainPhoto />
                <ActionPanel product={product} />
            </div>
        </>
    );
}

export default LeftColumn;