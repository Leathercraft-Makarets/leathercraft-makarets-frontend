import Link from 'next/link';
import styles from './ProfileMenu.module.css';

interface ProfileMenuItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

interface ProfileMenuProps {
  items: ProfileMenuItem[];
}

export default function ProfileMenu({ items }: ProfileMenuProps) {
  return (
    <nav className={styles.menu}>
      {items.map((item) => (
        <Link 
          key={item.id} 
          href={item.href} 
          className={styles.menuItem}
        >
          <span className={styles.menuItemLabel}>{item.label}</span>
          <span className={styles.menuItemArrow}>→</span>
        </Link>
      ))}
    </nav>
  );
}