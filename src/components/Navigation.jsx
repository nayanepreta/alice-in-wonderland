import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Navigation = ({ onNext, goToSummary, goToContents, goToCover }) => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Alterna a visibilidade dos botões extras
  const handleFirstButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  // Função para alternar a visibilidade do Header com o clique na tela
  const handleClick = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  // Função para monitorar a rolagem da página
  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se rolou para cima, exibe o Header
    if (currentScrollTop < lastScrollTop) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Evita valores negativos
  };

  useEffect(() => {
    // Adiciona o evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Limpa o evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div>
      {/* Exibe o Header se a visibilidade estiver ativa */}
      {isHeaderVisible && <Header />}

      <div
        className={`navigation ${showAdditionalButtons ? "show-extra-buttons" : ""}`}
        onClick={handleClick} // Quando clicar na tela, alterna a visibilidade do Header
      >
        <button onClick={handleFirstButtonClick}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/menu.png"
            alt="More Options"
            className="nav-icon"
            loading="lazy"
          />
        </button>

        {/* Botões adicionais */}
        <div className={`additional-buttons ${showAdditionalButtons ? "visible" : ""}`}>
          {goToSummary && <button onClick={goToSummary}>S</button>}
          {goToContents && <button onClick={goToContents}>C</button>}
        </div>

        {/* Botão de Capa */}
        {goToCover && (
          <button onClick={goToCover}>
            <img
              src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/casa.png"
              alt="Cover"
              className="nav-icon"
              loading="lazy"
            />
          </button>
        )}

        {/* Botão de Próximo */}
        {onNext && (
          <button onClick={onNext}>
            <img
              src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
              alt="Next"
              className="nav-icon"
              loading="lazy"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
