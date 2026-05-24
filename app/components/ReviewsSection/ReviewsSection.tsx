"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ReviewsSection.module.css";

// Дані для відгуків
const reviews = [
  {
    id: 1,
    name: "Світлана К.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Замовила цей гаманець і залишилася в повному захваті! Якість шкіри просто неймовірна — вона приємна на дотик і виглядає дуже солідно. Доставка була швидкою, а пакування ідеальним!"
  },
  {
    id: 2,
    name: "Олександр М.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Чудовий гаманець! Шкіра якісна, шви рівні. Використовую вже місяць — ніяких подряпин чи зносу. Дуже задоволений покупкою, рекомендую!"
  },
  {
    id: 3,
    name: "Марія П.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    rating: 4,
    text: "Купила гаманець на подарунок чоловікові. Він у захваті! Якість на висоті, дизайн стильний і сучасний. Єдине, що хотілося б — більше відділів для карток."
  },
  {
    id: 4,
    name: "Андрій В.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Найкращий гаманець, який я коли-небудь мав! Шкіра натурального кольору, приємна на дотик. Всі мої картки та готівка поміщаються ідеально. Дякую за чудову роботу!"
  },
  {
    id: 5,
    name: "Олена К.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    text: "Замовляла гаманець з доставкою по Києву. Прийшов за 2 дні! Якість просто супер — шкіра м'яка, але міцна. Дуже задоволена сервісом та якістю товару!"
  },
  {
    id: 6,
    name: "Дмитро Б.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    rating: 4,
    text: "Дуже добрий гаманець за свою ціну. Шкіра якісна, шви рівні. Використовую вже 3 тижні — все добре. Єдине, що хотілося б — трохи більше відділів для карток."
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Визначаємо кількість елементів на екрані залежно від розміру вікна
  useEffect(() => {
    const updateItemsPerScreen = () => {
      if (window.innerWidth < 768) {
        setItemsPerScreen(1);
      } else if (window.innerWidth < 992) {
        setItemsPerScreen(2);
      } else {
        setItemsPerScreen(3);
      }
    };

    updateItemsPerScreen();
    window.addEventListener('resize', updateItemsPerScreen);
    return () => window.removeEventListener('resize', updateItemsPerScreen);
  }, []);

  // Функції навігації (оголошені першими)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerScreen >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, reviews.length - itemsPerScreen) : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Функції автопрокрутки (оголошені перед useEffect)
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Автоматична прокрутка (використовує функції, які вже оголошені)
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [itemsPerScreen, nextSlide]);

  const totalPages = Math.ceil(reviews.length / itemsPerScreen);
  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerScreen);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <h2 className={styles.title}>Відгуки</h2>

        {/* Карусель */}
        <div className={styles.carousel}>
          <div className={styles.reviewsContainer}>
            {visibleReviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
                
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? styles.starFilled : styles.starEmpty}>
                      ★
                    </span>
                  ))}
                </div>
                
                <div className={styles.author}>
                  <img src={review.avatar} alt={review.name} className={styles.avatar} />
                  <span className={styles.authorName}>{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Пагінація */}
        <div className={styles.pagination}>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${styles.pageDot} ${index === Math.floor(currentIndex / itemsPerScreen) ? styles.active : ''}`}
              onClick={() => goToSlide(index * itemsPerScreen)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}