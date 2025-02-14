import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../style/pages/FastLinksStyle/PrivacyPolicy.css'; // Import CSS for styling

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <header className="privacy-policy__header">
        <h1 className="privacy-policy__title">{t('privacy_policy.privacy_policy_title')}</h1>
      </header>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.intro_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.intro_text')}</p>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.information_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.information_text')}</p>
        <ul className="privacy-policy__list">
          {t('privacy_policy.information_list', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.use_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.use_text')}</p>
        <ul className="privacy-policy__list">
          {t('privacy_policy.use_list', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.sharing_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.sharing_text')}</p>
        <ul className="privacy-policy__list">
          {t('privacy_policy.sharing_list', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.rights_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.rights_text')}</p>
      </section>
      <section className="privacy-policy__section">
        <h2 className="privacy-policy__section-title">{t('privacy_policy.changes_title')}</h2>
        <p className="privacy-policy__text">{t('privacy_policy.changes_text')}</p>
      </section>
      <footer className="privacy-policy__footer">
        <p className="privacy-policy__text">{t('privacy_policy.footer_text')}</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
