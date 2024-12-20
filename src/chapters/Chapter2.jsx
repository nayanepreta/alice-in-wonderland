import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import bookTitle from '../control/title';
import chapters from '../control/chapters';

const Chapter2 = ({ onNext, goToContents, goToCover }) => {
  const chapterNumber = 2; 
  const { title: chapterTitle, chap: chapterRoman, texts: chapterTexts } = chapters[chapterNumber]; 
  const titulo = chapters[0].titulo;

  useEffect(() => {
    bookTitle(chapterTitle); 
    return () => {
      document.title = titulo; 
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      <span className="chapter_subtitle">{chapterRoman}</span>
      <h2 className="chapter_title">{chapterTitle}</h2>
      
      <img 
        className="chapter_img_abertura" 
        src="https://via.placeholder.com/25" 
        alt=""/>
      
      <div className="chapter_content">
        {chapterTexts.map((paragraph, index) => (
          <p className={paragraph.className} key={index}>
            {paragraph.text.split('\n').map((line, i) => (
            <>
              {line}
              {i < paragraph.text.split('\n').length - 1 && <br />}
            </>
    ))}
          </p>
        ))}
        
      </div>
      
      <Navigation 
        goToCover={goToCover}  
        onNext={onNext} 
        goToContents={goToContents} />
    </div>
  );
};

export default Chapter2;
