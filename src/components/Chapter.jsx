import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import chapters from '../control/chapters';
import Header from '../components/Header';
import Navigation from './Navigation';

const Chapter = ({ chapterNumber, onNext, goToSummary, goToCover, goToContents }) => {
  const { title: chapterTitle, chap: chapterRoman, img: image, texts: chapterTexts } = chapters[chapterNumber];
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Função para monitorar a rolagem da página
  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se rolou para cima, exibe o Header
    if (currentScrollTop < lastScrollTop) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    // Atualiza a posição de rolagem
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Evita valores negativos
  };

  // Função para detectar o toque na tela
  const handleTouch = () => {
    setIsHeaderVisible(prevState => !prevState);
  };

  useEffect(() => {
    // Adiciona o evento para monitorar a rolagem da página
    window.addEventListener("scroll", handleScroll);

    // Adiciona o evento de toque na tela
    window.addEventListener("touchstart", handleTouch);

    // Limpa os eventos quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const bookTitleT = chapters[0].titulo;
    document.title = `${chapterTitle} | ${bookTitleT}`;
    return () => {
      document.title = chapters[0].titulo;
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      {/* Exibe o Header se estiver visível */}
      {isHeaderVisible && <Header />}

      <span className="chapter_subtitle">Capítulo {chapterRoman}</span>
      <h2 className="chapter_title">{chapterTitle}</h2>
      <img className="chapter_img_abertura" src={image} alt="" loading="lazy" />

      <div className="chapter_content">
        {chapterTexts.map((paragraph, index) => (
          <p
            className={paragraph.className}
            key={index}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph.text) }}
          ></p>
        ))}
      </div>

      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        goToContents={goToContents}
      />
    </div>
  );
};

export default Chapter;
