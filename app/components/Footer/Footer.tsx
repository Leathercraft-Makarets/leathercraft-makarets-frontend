import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import LeathercraftMakaretsLogo from "@/logo/LeathercraftMakaretsLogo/LeathercraftMakaretsLogo.svg";
import InstagramLogo from '@/logo/InstagramLogo/InstagramLogo.png';
import FacebookLogo from '@/logo/FacebookLogo/FacebookIcon.png';
import XLogo from '@/logo/XLogo/XLogo.png';
import TikTokLogo from '@/logo/TikTokLogo/TikTokLogo.svg';
import TelegramLogo from '@/logo/TelegramLogo/TelegramLogo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
            <Link href="/">
                <Image 
                    src={LeathercraftMakaretsLogo} 
                    alt="Makarets Leathercraft" 
                    className={styles.footerLogo}
                />
            </Link>
          <p className={styles.description}>
            Вишукані вироби зі шкіри ручної роботи. Традиції якості, що втілені в кожній деталі з 2024 року.
          </p>
          <div className={styles.socials}>
            <Link href="/">
                <Image 
                  src={InstagramLogo} 
                  alt="Instagram Logo" 
                  className={styles.socialMediaLogo}
                />
            </Link>
            <Link href="/">
              <Image 
                src={FacebookLogo} 
                alt="Facebook Logo" 
                className={styles.socialMediaLogo}
              />
            </Link>
            <Link href="/">
              <Image 
                src={TelegramLogo} 
                alt="Telegram Logo" 
                className={styles.socialMediaLogo}
              />
            </Link>
            <Link href="/">
              <Image 
                src={XLogo} 
                alt="X Logo" 
                className={styles.socialMediaLogo}
              />
            </Link>
            <Link href="/">
              <Image 
                src={TikTokLogo} 
                alt="TikTok Logo" 
                className={styles.socialMediaLogo}
              />
            </Link>
          </div>
        </div>
        <div>
          <h4 className={styles.title}>Меню</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Головна</Link></li>
            <li><Link href="/catalog" className={styles.link}>Каталог</Link></li>
            <li><Link href="/about" className={styles.link}>Про нас</Link></li>
            <li><Link href="/contacts" className={styles.link}>Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>Допомога</h4>
          <ul className={styles.list}>
            <li><Link href="/shipping" className={styles.link}>Доставка</Link></li>
            <li><Link href="/returns" className={styles.link}>Повернення</Link></li>
            <li><Link href="/faq" className={styles.link}>FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>Зв’яжіться з нами</h4>
          <ul className={styles.list}>
            <li className={styles.link}>Київ, Україна</li>
            <li><a href="mailto:info@makarets.com" className={styles.link}>info@makarets.com</a></li>
            <li><a href="tel:+380000000000" className={styles.link}>+380 (00) 000-00-00</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2026 Makarets Leathercraft. Всі права захищено.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/privacy" className={styles.link}>Політика конфіденційності</Link>
          <Link href="/terms" className={styles.link}>Умови використання</Link>
        </div>
      </div>
    </footer>
  );
}