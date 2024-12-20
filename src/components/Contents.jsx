import React, { useEffect } from 'react';
import chapters from '../control/chapters';
import Navigation from './Navigation';
import '../styles/ebook.css';
import bookTitle from '../control/title';

const Contents = ({ 
  goToChapter, 
  onPrev, 
  onNext, 
  goToCover }) => {

  const chapterTitle = "Sumário";

  const titulo = chapters[0].titulo; 

  useEffect(() => {
    bookTitle(chapterTitle); 
      return () => {
          document.title = titulo; 
      };
      }, [chapterTitle]);

  return (
    <div 
      className="page menu">
      <img 
        className="icone_cabeco" 
        src="https://via.placeholder.com/25" 
        alt="Imagem Placeholder"/>

    <table 
      className="menu_tabela">
      <tbody>
        <tr>
          <td 
            className="lista_topico">0</td>
          <td>
            <button 
              className="lista-item" 
              onClick={() => goToChapter(0)}>
              Capa
            </button>
          </td>
        </tr>

        {Object.entries(chapters).slice(1).map(([chapterNumber, chapterData], index) => (
          <tr key={chapterNumber}>
            <td 
              className="lista_topico">
                {chapterData.chap}
            </td>
            <td>
              <button 
                className="lista-item" 
                onClick={() => goToChapter(Number(chapterNumber) + 2)}>
                  {chapterData.title}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <Navigation 
      onPrev={onPrev} 
      onNext={onNext} 
      goToCover={goToCover} />
    </div>
  );
};

export default Contents;