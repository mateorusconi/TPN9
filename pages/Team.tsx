import React from 'react';
import ProfileCard from '../components/ProfileCard';

const Team: React.FC = () => {
  const logoUrl = "https://www.frrq.utn.edu.ar/wp-content/uploads/2023/03/LogoUTN-negro-HQ.png";

  const members = [
    {
      name: 'Mateo Rusconi',
      title: 'Auditoría de Sistemas',
      // Ensure these files are in your public folder and use absolute paths
      avatar: '/WhatsApp Image 2025-12-12 at 2.04.33 AM.jpeg',
      handle: 'mateo_rusconi',
      role: 'Estudiante',
      miniAvatar: '/WhatsApp Image 2025-12-12 at 2.04.33 AM.jpeg',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.4) 100%)'
    },
    {
      name: 'Nicolas Ruiz Paez',
      title: 'Auditoría de Sistemas',
      avatar: '/WhatsApp Image 2025-12-12 at 2.02.48 AM.jpeg',
      handle: 'nico_ruiz',
      role: 'Estudiante',
      miniAvatar: '/WhatsApp Image 2025-12-12 at 2.02.48 AM.jpeg',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.4) 100%)'
    },
    {
      name: 'Mauricio Paez',
      title: 'Auditoría de Sistemas',
      avatar: '/WhatsApp Image 2025-12-12 at 2.02.40 AM.jpeg',
      handle: 'mauro_paez',
      role: 'Estudiante',
      miniAvatar: '/WhatsApp Image 2025-12-12 at 2.02.40 AM.jpeg',
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(234, 88, 12, 0.4) 100%)'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Integrantes del Equipo</h1>
        <p className="text-xl text-muted-foreground">
          Estudiantes responsables del Trabajo Práctico Nº9 de Auditoría de Sistemas.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {members.map((member, index) => (
          <div key={index} className="flex justify-center">
            <ProfileCard
              name={member.name}
              title={member.role}
              handle={member.handle}
              avatarUrl={member.avatar}
              miniAvatarUrl={member.miniAvatar}
              innerGradient={member.gradient}
              iconUrl={logoUrl}
              contactText="UTN FRRe"
              onContactClick={() => {}}
              status="Estudiante"
              behindGlowColor={
                index === 0 ? "rgba(100, 150, 255, 0.3)" : 
                index === 1 ? "rgba(100, 255, 150, 0.3)" : 
                "rgba(255, 150, 100, 0.3)"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;