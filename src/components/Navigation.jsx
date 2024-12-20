import React from 'react';

const Navigation = ({ 
  onNext, 
  goToContents, 
  goToCover }) => {
  return (
    <div className="navigation">

      {goToContents && 
        <button onClick={goToContents}>
          <img 
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/menu.png" 
            alt="Sumário" 
            className="nav-icon" />
        </button>}
      
      {goToCover && 
        <button onClick={goToCover}>
          <img 
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png" 
            alt="Capa" 
            className="nav-icon" />
        </button>}
      {onNext && 
        <button onClick={onNext}>
          <img 
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png" 
            alt="Próxima" 
            className="nav-icon" />
        </button>}
    </div>
  );
};

export default Navigation;
