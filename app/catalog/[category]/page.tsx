import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../page.module.css";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryTitles: Record<string, string> = {
  men: 'Чоловічий каталог',
  women: 'Жіночий каталог',
  kids: 'Дитячий каталог',
  business: 'Діловий каталог',
  gifts: 'Подарункові набори',
  style: 'Стильні аксесуари',
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const title = categoryTitles[params.category] || 'Каталог';

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          Переглядайте доступні товари в категорії «{params.category}».
        </p>
      </main>
      <Footer />
    </div>
  );
}
