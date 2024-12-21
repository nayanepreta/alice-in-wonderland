import React from 'react';

const Header = ({ goToContents }) => {
  return (
    <header className="header">

      <button
        className="header-button header-button-summary"
        onClick={goToContents}
      >
    Sumário
      </button>
      <button
        className="header-button header-button-nightmode"
        onClick={() => {
          console.log("Botão Modo Noturno clicado!");
        }}
      >
        Noturno
      </button>

      
    </header>
  );
};

export default Header;
