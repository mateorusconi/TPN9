import React from 'react';
import TiltedCard from '../components/TiltedCard';
import ErrorBoundary from '../components/ErrorBoundary';

const Team: React.FC = () => {
  const logoUrl = "https://www.frrq.utn.edu.ar/wp-content/uploads/2023/03/LogoUTN-negro-HQ.png";

  const members = [
    {
      name: 'Mateo Rusconi',
      title: 'Auditoría de Sistemas',
      avatar: '/TPN9/assets/team/mateo.jpg',
      handle: 'mateo_rusconi',
      role: 'Estudiante',
      miniAvatar: '/TPN9/assets/team/mateo.jpg',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.4) 100%)'
    },
    {
      name: 'Nicolas Ruiz Paez',
      title: 'Auditoría de Sistemas',
      avatar: '/TPN9/assets/team/nicolas.jpg',
      handle: 'nico_ruiz',
      role: 'Estudiante',
      miniAvatar: '/TPN9/assets/team/nicolas.jpg',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.4) 100%)'
    },
    {
      name: 'Mauricio Paez',
      title: 'Auditoría de Sistemas',
      avatar: '/TPN9/assets/team/mauricio.jpg',
      handle: 'mauro_paez',
      role: 'Estudiante',
      miniAvatar: '/TPN9/assets/team/mauricio.jpg',
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

      <ErrorBoundary>
        <div className="flex flex-wrap justify-center gap-12">
          {members.map((member, index) => (
            <div key={index} className="flex justify-center">
              <TiltedCard
                imageSrc={member.avatar}
                altText={member.name}
                captionText={member.name}
                subCaptionText={member.role}
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={15}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                behindGlow={true}
                mobileTilt={true}
                showPattern={true}
                overlayContent={
                  <div className="absolute bottom-4 left-4 z-20 flex flex-col items-start space-y-2">
                    <div className="p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                      <p className="text-white font-semibold text-sm">{member.name}</p>
                      <p className="text-xs text-gray-300">@{member.handle}</p>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Team;