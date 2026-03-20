import { useState } from 'react';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  const logoUrl =
    'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1773931112/logo.png-removebg-preview_rcjrg3.png';

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden p-1.5 bg-white/95 shadow-sm">
              {!logoError ? (
                <img
                  src={logoUrl}
                  alt="Valor Infotech logo"
                  className="w-full h-full object-contain scale-110"
                  draggable={false}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-orange-600 font-bold text-xl">V</span>
              )}
            </div>
            <span className="text-xl font-bold">Valor Infotech</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © 2026 Valor Infotech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
