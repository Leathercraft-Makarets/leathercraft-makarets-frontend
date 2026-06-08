'use client';

import { useState } from 'react';
import styles from './FilterSidebar.module.css';
import ArrowUpLogoWhite from '@/logo/ArrowUpLogo/ArrowUpLogoWhite.svg';
import AccordionArrow from '@/components/AccordionArrow/AccordionArrow';

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

export default function FilterSidebar() {
  const [activeColorFirstSet, setActiveColorFirstSet] = useState(COLORS_FIRST_SET[0]);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(true);
  const [isForWhomOpen, setIsForWhomOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isSortingOpen, setIsSortingOpen] = useState(true);

  const toggleColor = () => setIsColorOpen((value) => !value);
  const toggleMaterial = () => setIsMaterialOpen((value) => !value);
  const toggleType = () => setIsTypeOpen((value) => !value);
  const toggleSorting = () => setIsSortingOpen((value) => !value);
  const toggleForWhom = () => setIsForWhomOpen((value) => !value);

  const renderColorRow = (colors: string[]) => (
    <div className={styles.colorsList}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => setActiveColorFirstSet(color)}
          className={` ${styles.colorSwatch} ${activeColorFirstSet === color ? styles.activeSwatch : ''}`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={toggleMaterial}>
          <span>Матеріал</span>
          <AccordionArrow isOpen={isMaterialOpen} arrowIcon={ArrowUpLogoWhite} />
        </div>
        <div className={`${styles.accordionContent} ${isMaterialOpen ? styles.open : styles.closed}`}>
          <div className={styles.accordionInner}>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Екошкіра
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Замшева шкіра
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" /> Натуральна шкіра
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Текстиль
            </label>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={toggleType}>
          <span>Тип</span>
          <AccordionArrow isOpen={isTypeOpen} arrowIcon={ArrowUpLogoWhite} />
        </div>
        <div className={`${styles.accordionContent} ${isTypeOpen ? styles.open : styles.closed}`}>
          <div className={styles.accordionInner}>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Картхолдер
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Портмоне
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" /> Затискач
            </label>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={toggleForWhom}>
          <span>Для кого</span>
          <AccordionArrow isOpen={isForWhomOpen} arrowIcon={ArrowUpLogoWhite} />
        </div>
        <div className={`${styles.accordionContent} ${isForWhomOpen ? styles.open : styles.closed}`}>
          <div className={styles.accordionInner}>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Чоловічі
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" defaultChecked /> Жіночі
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" /> Дитячі
            </label>
            <label className={styles.checkboxLabel}>
              <input className={styles.checkboxInput} type="checkbox" /> Для вечірки
            </label>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={toggleColor}>
          <span>Кольори</span>
          <AccordionArrow isOpen={isColorOpen} arrowIcon={ArrowUpLogoWhite} />
        </div>
        <div className={`${styles.accordionContent} ${isColorOpen ? styles.open : styles.closed}`}>
          <div className={styles.accordionInner}>
            <div className={styles.colorsListInner}>
              {renderColorRow(COLORS_FIRST_SET)}
              {renderColorRow(COLORS_SECOND_SET)}
              {renderColorRow(COLORS_THIRD_SET)}
              {renderColorRow(COLORS_FOURTH_SET)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterHeader} onClick={toggleMaterial}>
          <span>Розмір</span>
          <AccordionArrow isOpen={isMaterialOpen} arrowIcon={ArrowUpLogoWhite} />
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
          <AccordionArrow isOpen={isSortingOpen} arrowIcon={ArrowUpLogoWhite} />
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
              <div className={styles.rangeTrack} />
              <div className={styles.rangeProgress} />
              <div className={styles.rangeThumb} style={{ left: '20%' }} />
              <div className={styles.rangeThumb} style={{ left: '80%' }} />
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
  );
}
