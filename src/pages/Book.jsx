import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 
import '../control/main';
import '../styles/ebook.css';
import Cover from '../components/Cover';
import Infos1 from '../components/Infos1';
import Contents from '../components/Contents';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };
  
  const pages = [
    <Cover 
      onNext={() => setCurrentPageAndSave(1)} 
      goToContents={() => setCurrentPageAndSave('menu')} />,

    <Infos1 
      onPrev={() => setCurrentPageAndSave(0)} 
      onNext={() => setCurrentPageAndSave(2)} 
      goToContents={() => setCurrentPageAndSave('menu')} 
      goToCover={() => setCurrentPageAndSave(0)} />,

    <Contents 
      onPrev={() => setCurrentPageAndSave(3)} 
      goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)} 
      goToCover={() => setCurrentPageAndSave(0)} />,

    <Chapter1 
      onPrev={() => setCurrentPageAndSave(4)} 
      onNext={() => setCurrentPageAndSave(6)} 
      goToContents={() => setCurrentPageAndSave('menu')} 
      goToCover={() => setCurrentPageAndSave(0)} />,
      
    <Chapter2 
      onPrev={() => setCurrentPageAndSave(5)} 
      onNext={() => setCurrentPageAndSave(7)} 
      goToContents={() => setCurrentPageAndSave('menu')} 
      goToCover={() => setCurrentPageAndSave(0)} />,
    // Continue adicionando os capítulos na ordem desejada
  ];

  //useEffect(() => {
    //const savedPage = localStorage.getItem('currentPage');
    //if (savedPage) {
      //setCurrentPage(savedPage === 'menu' ? 'menu' : parseInt(savedPage, 10));
    //}
  //}, []);

  const handleSwipeLeft = () => {
    if (currentPage !== 'menu' && currentPage < pages.length - 1) {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage !== 'menu' && currentPage > 0) {
      setCurrentPageAndSave(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      {currentPage === 'menu' ? (
        <Contents 
          goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)}
        />
      ) : (
        <div {...swipeHandlers}>
          {pages[currentPage]}
        </div>
      )}
    </>
  );
};

export default Book;
