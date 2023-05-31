import React from 'react';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

export default function Developers() {
  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, '_blank');
  };

  const backendTeam = [
    {
      name: 'Integrante 1',
      photo: '/path/to/photo1.jpg',
      linkedin: 'https://www.linkedin.com/profile1',
    },
    {
      name: 'Integrante 2',
      photo: '/path/to/photo2.jpg',
      linkedin: 'https://www.linkedin.com/profile2',
    },
    {
      name: 'Integrante 3',
      photo: '/path/to/photo3.jpg',
      linkedin: 'https://www.linkedin.com/profile3',
    },
    {
      name: 'Integrante 4',
      photo: '/path/to/photo4.jpg',
      linkedin: 'https://www.linkedin.com/profile4',
    },

  ];

  const frontendTeam = [
    {
      name: 'Integrante 5',
      photo: '/path/to/photo5.jpg',
      linkedin: 'https://www.linkedin.com/profile5',
    },
    {
      name: 'Integrante 6',
      photo: '/path/to/photo6.jpg',
      linkedin: 'https://www.linkedin.com/profile6',
    },
    {
      name: 'Integrante 7',
      photo: '/path/to/photo7.jpg',
      linkedin: 'https://www.linkedin.com/profile7',
    },
    {
      name: 'Integrante 8',
      photo: '/path/to/photo8.jpg',
      linkedin: 'https://www.linkedin.com/profile8',
    },
  ];

  return (
    <div className={styles.developers}>
      <div className={styles.team}>
        <div>
        <Typography variant="h3" component="h3">
          Equipo Backend
        </Typography>
        </div>
        <div>
        {backendTeam.map((member, index) => (
          <div key={index} className={styles.member}>
            <img src={member.photo} alt={member.name} />
            <Typography variant="h4" component="h4">
              {member.name}
            </Typography>
            <a href="#" onClick={() => handleLinkedInClick(member.linkedin)}>
              <LinkedInIcon />
            </a>
          </div>
        ))}
        </div>
      </div>
  
      <div className={styles.team}>
        <div>
        <Typography variant="h3" component="h3">
          Equipo Frontend
        </Typography>
        </div>
        <div>
        {frontendTeam.map((member, index) => (
          <div key={index} className={styles.member}>
            <img src={member.photo} alt={member.name} />
            <Typography variant="h4" component="h4">
              {member.name}
            </Typography>
            <a href="#" onClick={() => handleLinkedInClick(member.linkedin)}>
              <LinkedInIcon />
            </a>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
