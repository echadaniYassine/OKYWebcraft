import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook for translations
import '../../style/pages/FastLinksStyle/Careers.css';

const teamMembers  = [
  {
    id: 1,
    name: 'Echadani Yassine',
    role: 'Full Stack Developer',
    location: 'Remote',
    description: 'Yassine is an experienced developer who works on both front-end and back-end technologies. He has a passion for clean code and efficient systems.',
    image: '/images/john.jpg', // Replace with actual image of John
  },
  {
    id: 2,
    name: 'Loukili Oumaima',
    role: 'Frontend Developer',
    location: 'Remote',
    description: 'Oumaima Proficient in creating high-quality user interfaces using HTML5, CSS3, and modern JavaScript frameworks like React and Angular.',
    image: '/images/jane.jpg',
  },
  {
    id: 3,
    name: 'Fouganni Khadija',
    role: 'UI/UX Designer',
    location: 'Remote',
    description: 'Khadija is a creative designer who enhances user experiences and creates beautiful, user-friendly interfaces using Photoshop.',
    image: '/images/alice.jpg', 
  },
];

const Careers = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { t } = useTranslation(); // Initialize the translation function

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="careers">
      <header className="careers__header">
        <h1 className="careers__title">{t('careers.title')}</h1>
        <p className="careers__subtitle">
          {t('careers.subtitle')}
        </p>
      </header>

      <section className="careers__listings">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>

      <div className="careers__apply">
        <button className="careers__apply-button" onClick={handleApplyClick}>
          {t('careers.applyNow')}
        </button>
      </div>

      {isFormVisible && <ApplyForm onClose={() => setIsFormVisible(false)} />}
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <div className="careers__job-card">
      <img src={member.image} alt={member.name} className="careers__job-image" />
      <div className="careers__job-content">
        <h2 className="careers__job-title">{member.name}</h2>
        <p className="careers__job-role"><strong>{t('careers.role')}:</strong> {member.role}</p>
        <p className="careers__job-location"><strong>{t('careers.location')}:</strong> {member.location}</p>
        <p className="careers__job-description">{member.description}</p>
      </div>
    </div>
  );
};

const ApplyForm = ({ onClose }) => {
  const { t } = useTranslation(); // Initialize the translation function
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cv:""
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      const validFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!validFormats.includes(selectedFile.type)) {
        setError(t('careers.fileError'));
        setFile(null);
      } else if (fileSizeMB > 10) {
        setError(t('careers.fileSizeError'));
        setFile(null);
      } else {
        setError('');
        setFile(selectedFile);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setError(t('careers.uploadFile'));
      return;
    }

    // Simulating email submission
    const emailData = {
      to: 'yassinechadani113@gmail.com',
      subject: `Job Application from ${formData.fullName}`,
      body: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
      attachment: file.name,
    };

    console.log('Sending email with:', emailData);

    alert(t('careers.applicationSuccess'));
    onClose();
  };

  return (
    <div className="apply-form-overlay">
      <div className="apply-form">
        <h2>{t('careers.applyFormTitle')}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder={t('careers.fullName')} required onChange={handleInputChange} />
          <input type="email" name="email" placeholder={t('careers.email')} required onChange={handleInputChange} />
          <input type="tel" name="phone" placeholder={t('careers.phone')} required onChange={handleInputChange} />

          <input type="file" accept=".pdf,.docx" required onChange={handleFileChange} />
          {file && <p>{t('careers.selectedFile')}: {file.name}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">{t('careers.submitApplication')}</button>
        </form>
        <button className="apply-form-close" onClick={onClose}>{t('careers.close')}</button>
      </div>
    </div>
  );
};

export default Careers;
