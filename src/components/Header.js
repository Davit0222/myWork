import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Optional: for styling
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation(); // Initialize translation hook

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Language changed to:', lng);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list-header">
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
        </ul>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
