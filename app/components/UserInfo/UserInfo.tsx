// app/components/UserInfo/UserInfo.tsx
'use client';

import Link from 'next/link';
import styles from './UserInfo.module.css';

interface UserInfoData {
  name: string;
  surname: string;
  phone: string;
  email: string;
}

interface UserInfoProps {
  data: UserInfoData;
  onEdit?: () => void;
}

export default function UserInfo({ data, onEdit }: UserInfoProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Особисті дані</h2>
      
      <div className={styles.infoCard}>
        <div className={styles.infoGrid}>
          <div className={styles.infoField}>
            <span className={styles.label}>{"Ім'я"}</span>
            <span className={styles.value}>{data.name}</span>
          </div>
          <div className={styles.infoField}>
            <span className={styles.label}>Прізвище</span>
            <span className={styles.value}>{data.surname}</span>
          </div>
          <div className={styles.infoField}>
            <span className={styles.label}>Телефон</span>
            <span className={styles.value}>{data.phone}</span>
          </div>
          <div className={styles.infoField}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{data.email}</span>
          </div>
        </div>

        <button 
          className={styles.editButton}
          onClick={onEdit}
        >
          Редагувати ✏️
        </button>
      </div>
    </section>
  );
}