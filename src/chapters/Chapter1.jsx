import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import bookTitle from '../control/title';
import chapters from '../control/chapters';
import Chapter from '../components/Chapter';


const Chapter1 = ({ onNext, goToContents, goToCover }) => {
  const chapterNumber = 1; 
  const { 
    title: chapterTitle, 
    chap: chapterRoman, 
    img: image,
    texts: chapterTexts } = chapters[chapterNumber]; 
  const titulo = chapters[0].titulo;

  useEffect(() => {
    bookTitle(chapterTitle); 
    return () => {
      document.title = titulo; 
    };
  }, [chapterTitle]);

  return (
    <div className="page chapter_page">
      <Chapter 
        chapterRoman={chapterRoman}
        chapterTitle={chapterTitle}
        image={image}
        chapterTexts={chapterTexts}
      />
      
      <Navigation 
        goToCover={goToCover}  
        onNext={onNext} 
        goToContents={goToContents} />
    </div>
  );
};

export default Chapter1;
