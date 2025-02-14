import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../style/pages/FastLinksStyle/TermsOfService .css'; // Import CSS for styling

const TermsOfService = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-of-service">
      <h1>{t('terms_of_service.terms_of_service_title')}</h1>
      <p>{t('terms_of_service.last_updated')}</p>

      <section>
        <h2>{t('terms_of_service.intro_title')}</h2>
        <p>{t('terms_of_service.intro_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.use_title')}</h2>
        <p>{t('terms_of_service.use_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.account_title')}</h2>
        <p>{t('terms_of_service.account_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.content_title')}</h2>
        <p>{t('terms_of_service.content_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.termination_title')}</h2>
        <p>{t('terms_of_service.termination_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.limitation_title')}</h2>
        <p>{t('terms_of_service.limitation_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.privacy_title')}</h2>
        <p>{t('terms_of_service.privacy_text')} <a href="/privacy-policy">Privacy Policy</a></p>
      </section>

      <section>
        <h2>{t('terms_of_service.changes_title')}</h2>
        <p>{t('terms_of_service.changes_text')}</p>
      </section>

      <section>
        <h2>{t('terms_of_service.contact_title')}</h2>
        <p>
          {t('terms_of_service.contact_text')} <a href="mailto:okywebcraft@gmail.com">okywebcraft@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
