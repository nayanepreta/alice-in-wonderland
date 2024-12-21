import React from 'react';
import chapters from '../control/chapters';


const Cover = ({ 
  onNext, 
  }) => {

    const { 
      titulo: titulo, 
      autor: autor,
      editora: editora} = chapters[0]; 

  return (
    <div className="cover">
      <h1 className="cover_titulo">{titulo}</h1>

      <img className="capa" src="https://raw.githubusercontent.com/nayanepreta/alice-in-wonderland/refs/heads/main/src/assets/capa.png" alt="" />
      
      <div className="navigation">
      
      <button onClick={onNext}>
          <img
            src="https://raw.githubusercontent.com/nayanesenhorinha/abelhinha/refs/heads/main/src/assets/depois.png"
            alt="Next"
            className="nav-icon"
            loading="lazy"
          />
        </button>
      </div>
      
    </div>
  );
};

export default Cover;
