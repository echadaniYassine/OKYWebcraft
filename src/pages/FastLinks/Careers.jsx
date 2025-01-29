import React, { useEffect, useState } from 'react';
import '../../style/pages/Careers.css';

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
    role: 'Backend Developer',
    location: 'Remote',
    description: 'Oumaima specializes in building scalable and secure APIs using Node.js, Express, and MongoDB.',
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="careers">
      <header className="careers__header">
        <h1 className="careers__title">Meet Our Team</h1>
        <p className="careers__subtitle">
          At OKY WebCraft, we are a passionate team of developers, designers, and innovators, each with unique skills that contribute to our collective success.
        </p>
      </header>

      <section className="careers__listings">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>

      <div className="careers__apply">
        <button className="careers__apply-button" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>

      {isFormVisible && <ApplyForm onClose={() => setIsFormVisible(false)} />}
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="careers__job-card">
      <img src={member.image} alt={member.name} className="careers__job-image" />
      <div className="careers__job-content">
        <h2 className="careers__job-title">{member.name}</h2>
        <p className="careers__job-role"><strong>Role:</strong> {member.role}</p>
        <p className="careers__job-location"><strong>Location:</strong> {member.location}</p>
        <p className="careers__job-description">{member.description}</p>
      </div>
    </div>
  );
};

const ApplyForm = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      const validFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!validFormats.includes(selectedFile.type)) {
        setError('Only PDF and DOCX files are allowed.');
        setFile(null);
      } else if (fileSizeMB > 10) {
        setError('File size must be at least 10MB.');
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
      setError('Please upload a valid file.');
      return;
    }

    // Simulating email submission (Normally, this would be handled by a backend API)
    const emailData = {
      to: 'yassinechadani113@gmail.com',
      subject: `Job Application from ${formData.fullName}`,
      body: `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
      attachment: file.name,
    };

    console.log('Sending email with:', emailData);

    alert('Application sent successfully!');
    onClose();
  };

  return (
    <div className="apply-form-overlay">
      <div className="apply-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleInputChange} />

          <input type="file" accept=".pdf,.docx" required onChange={handleFileChange} />
          {file && <p>Selected file: {file.name}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Submit Application</button>
        </form>
        <button className="apply-form-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Careers;
