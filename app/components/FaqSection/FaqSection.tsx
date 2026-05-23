"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

// Дані для питань та відповідей
const faqs = [
  {
    id: 1,
    question: "Яка терміновість доставки замовлень?",
    answer: "Ми працюємо з перевізниками 'Нова Пошта' та 'Укрпошта'. Замовлення обробляється протягом 1-2 робочих днів. Доставка по Києву займає 1-2 дні, по Україні — 2-4 дні. Міжнародна доставка залежить від країни отримувача (зазвичай 7-14 днів)."
  },
  {
    id: 2,
    question: "Чи можна повернути або обміняти товар?",
    answer: "Так, ви можете повернути або обміняти товар протягом 14 днів з моменту отримання, якщо він не був у використанні та збережено фабричне пакування. Повернення коштів здійснюється на картку, з якої було здійснено оплату, протягом 3-5 робочих днів."
  },
  {
    id: 3,
    question: "Яка якість шкіри та як за нею доглядати?",
    answer: "Ми використовуємо лише натуральну шкіру преміум-класу (яловича, іноді крокодилова або зміїна текстура). Для догляду рекомендуємо використовувати спеціальні креми та лосьйони для шкіри, уникати тривалого контакту з водою та зберігати у сухому місці."
  },
  {
    id: 4,
    question: "Як здійснюється оплата замовлення?",
    answer: "Оплата можлива карткою онлайн на сайті під час оформлення замовлення або при отриманні (накладений платіж). При оплаті онлайн ви отримуєте знижку 5% на перше замовлення."
  },
  {
    id: 5,
    question: "Чи робите ви індивідуальні замовлення?",
    answer: "Так! Ми з радістю створимо унікальний виріб за вашим ескізом або параметрами. Натисніть кнопку 'Зв'язатися' або напишіть нам у месенджери для обговорення деталей."
  },
  {
    id: 6,
    question: "Чи є гарантія на вироби?",
    answer: "Так, на всі наші вироби діє 12-місячна гарантія від виробничого браку. У разі виникнення проблем ми безкоштовно відремонтуємо або замінимо виріб."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок секції */}
        <div className={styles.header}>
          <h2 className={styles.title}>Є питання?</h2>
          <p className={styles.subtitle}>
            Відповідаємо на найпоширеніші запитання наших клієнтів
          </p>
        </div>

        {/* Список FAQ (Акордеон) */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.active : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
              >
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка зв'язку (Cta) */}
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>Не знайшли відповідь на своє запитання?</p>
          <a href="/contacts" className={styles.catalogButton}>
            Зв&apos;язатися з нами
          </a>
        </div>
      </div>
    </section>
  );
}