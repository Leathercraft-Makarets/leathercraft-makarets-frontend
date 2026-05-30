'use client';

import { useState } from 'react';
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PageLayout from "@/components/PageLayout/PageLayout";
import styles from './page.module.css';
import HeartButton from "@/components/HeartButton/HeartButton";
import ArrowUpLogoWhite from '@/logo/ArrowUpLogo/ArrowUpLogoWhite.svg';

export default function ProductsList() {
  const products = [
    { id: 1, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 2, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 3, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 4, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 5, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 6, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 7, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 8, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 9, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 10, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 11, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 12, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 13, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 14, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 15, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 16, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 17, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
    { id: 18, title: 'Назва', newPrice: 'Нова ціна', oldPrice: 'Стара ціна', discount: '-30%', isHit: true },
  ];

  const COLORS_FIRST_SET = [
    '#E22D2D', 
    '#FCF3B0', 
    '#D2691E', 
    '#3A2A2A', 
    '#9A8080', 
    '#F5EDE8',
  ];
 
  const COLORS_SECOND_SET = [
    '#bfd41c', 
    '#b4fcb0', 
    '#1e78d2', 
    '#820a14', 
    '#b817bd', 
    '#17d13f',
  ];

  const COLORS_THIRD_SET = [
    '#cb1b73', 
    '#d8531f', 
    '#d7172e', 
    '#c2d815', 
    '#1940cb', 
    '#12c569',
  ];

  const COLORS_FOURTH_SET = [
    '#b2a716', 
    '#0fbcba', 
    '#d77117', 
    '#14a212', 
    '#094d4e', 
    '#8e9a0b',
  ];

  const [activeColorFirstSet, setActiveColorFirstSet] = useState(COLORS_FIRST_SET[0]);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(true);
  const [isForWhomOpen, setIsForWhomOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isSortingOpen, setIsSortingOpen] = useState(true);

  const toggleColor = () => {
    setIsColorOpen(!isColorOpen);
  };

  const toggleMaterial = () => {
    setIsMaterialOpen(!isMaterialOpen);
  };

  const toggleType = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  const toggleSorting = () => {
    setIsSortingOpen(!isSortingOpen)
  }
  
  const toggleForWhom = () => {
    setIsForWhomOpen(!isForWhomOpen);
  };

  return (
    <PageLayout className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs
          items={[
            { label: 'Каталог', href: '/catalog' },
            { label: 'Список товарів', href: '/product-list-with-filter' }
          ]}
        />
        <div className={styles.shopContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleMaterial}>
                <span>Матеріал</span>
                <span className={`${styles.icon} ${isMaterialOpen ? styles.iconNotRotated : styles.iconRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isMaterialOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Екошкіра</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Замшева шкіра</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" /> Натуральна шкіра</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Текстиль</label>
                </div>
              </div>
            </div>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleType}>
                <span>Тип</span>
                <span className={`${styles.icon} ${isTypeOpen ? styles.iconNotRotated : styles.iconRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isTypeOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Картхолдер</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Портмоне</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" /> Затискач</label>
                </div>
              </div>
            </div>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleForWhom}>
                <span>Для кого</span>
                <span className={`${styles.icon} ${isForWhomOpen ? styles.iconNotRotated : styles.iconRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isForWhomOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Чоловічі</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" defaultChecked /> Жіночі</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" /> Дитячі</label>
                  <label className={styles.checkboxLabel}><input className={styles.checkboxInput} type="checkbox" /> Для вечірки</label>
                </div>
              </div>
            </div>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleColor}>
                <span>Кольори</span>
                <span className={`${styles.icon} ${isColorOpen ? styles.iconNotRotated : styles.iconRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isColorOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <div className={styles.colorsListInner}>
                    <div className={styles.colorsList}>
                      {
                        COLORS_FIRST_SET.map((color, index) => (
                          <div 
                            key={index}
                            onClick={() => setActiveColorFirstSet(color)}
                            className={`
                              ${styles.colorSwatch} 
                              ${activeColorFirstSet === color ? styles.activeSwatch : ''}
                            `}
                            style={{ backgroundColor: color }}
                          >
                          </div>
                        ))
                      }
                    </div>
                    <div className={styles.colorsList}>
                      {
                        COLORS_SECOND_SET.map((color, index) => (
                          <div 
                            key={index}
                            onClick={() => setActiveColorFirstSet(color)}
                            className={`
                              ${styles.colorSwatch} 
                              ${activeColorFirstSet === color ? styles.activeSwatch : ''}
                            `}
                            style={{ backgroundColor: color }}
                          >
                          </div>
                        ))
                      }
                    </div>
                    <div className={styles.colorsList}>
                      {
                        COLORS_THIRD_SET.map((color, index) => (
                          <div 
                            key={index}
                            onClick={() => setActiveColorFirstSet(color)}
                            className={`
                              ${styles.colorSwatch} 
                              ${activeColorFirstSet === color ? styles.activeSwatch : ''}
                            `}
                            style={{ backgroundColor: color }}
                          >
                          </div>
                        ))
                      }
                    </div>
                    <div className={styles.colorsList}>
                      {
                        COLORS_FOURTH_SET.map((color, index) => (
                          <div 
                            key={index}
                            onClick={() => setActiveColorFirstSet(color)}
                            className={`
                              ${styles.colorSwatch} 
                              ${activeColorFirstSet === color ? styles.activeSwatch : ''}
                            `}
                            style={{ backgroundColor: color }}
                          >
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleMaterial}>
                <span>Розмір</span>
                <span className={`${styles.icon} ${isMaterialOpen ? styles.iconNotRotated : styles.iconRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isMaterialOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Великі</span>
                  </label>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Середні</span>
                  </label>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Маленькі</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.filterSection}>
              <div className={styles.filterHeader} onClick={toggleSorting}>
                <span>Сортування</span>
                <span className={`${styles.icon} ${!isSortingOpen ? styles.iconRotated : styles.iconNotRotated}`}>
                  <Image 
                    src={ArrowUpLogoWhite} 
                    alt="Makarets Leathercraft" 
                    className={styles.arrowUpLogo}
                  />
                </span>
              </div>
              <div className={`${styles.accordionContent} ${isSortingOpen ? styles.open : styles.closed}`}>
                <div className={styles.accordionInner}>
                  <div className={styles.sortingLabel}>За популярністю:</div>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Спочатку більш<br />популярні</span>
                  </label>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" />
                    <span>Спочатку менш<br />популярні</span>
                  </label>
                  <div className={styles.sortingLabel}>За ціною:</div>
                  <label className={styles.checkboxLabel}>
                    <input className={styles.checkboxInput} type="checkbox" defaultChecked />
                    <span>Спочатку дешевші</span>
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input className={styles.checkboxInput} type="checkbox" />
                    <span>Спочатку дорожчі</span>
                  </label>
                  <div className={styles.priceInputsContainer}>
                    <input type="text" defaultValue="499" className={styles.priceInput} />
                    <span className={styles.priceSeparator}>(грн.) -</span>
                    <input type="text" defaultValue="1650" className={styles.priceInput} />
                    <span className={styles.priceSeparator}>(грн.)</span>
                  </div>
                  <div className={styles.rangeSliderContainer}>
                    <div className={styles.rangeTrack}></div>
                    <div className={styles.rangeProgress}></div>
                    <div className={styles.rangeThumb} style={{ left: '20%' }}></div>
                    <div className={styles.rangeThumb} style={{ left: '80%' }}></div>
                  </div>
                  <div className={styles.sortingLabel}>За знижкою:</div>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Спочатку зі<br />знижкою</span>
                  </label>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" />
                    <span>Спочатку без<br />знижки</span>
                  </label>
                  <div className={styles.sortingLabel}>За новизною:</div>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" defaultChecked />
                    <span>Спочатку нові</span>
                  </label>
                  <label className={styles.checkboxLabelTop}>
                    <input className={`${styles.checkboxInput} ${styles.alignCheckboxTop}`} type="checkbox" />
                    <span>Спочатку старі</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          <main className={styles.mainContent}>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={styles.productCard}
                >
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.badgeContainer}>
                      {product.discount && (
                        <span className={styles.badge}>🏷️ {product.discount}</span>
                      )}
                      {product.isHit && (
                        <span className={`${styles.badge} ${styles.dark}`}>🔥 Хіт</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.productInfoTop}>
                    <div className={styles.productInfoTopWrapper}>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <div className={styles.priceContainer}>
                        <span className={styles.newPrice}>{product.newPrice}</span>
                        {product.oldPrice && 
                          <span className={styles.oldPrice}>{product.oldPrice}</span>
                        }
                      </div>
                    </div>
                    <HeartButton /> 
                  </div>
                  <button className={styles.addToCartBtn}>Додати у кошик 🛒</button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  );
}