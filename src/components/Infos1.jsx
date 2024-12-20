import React from 'react';
import Navigation from './Navigation';
import chapters from '../control/chapters';

const { 
  titulo: titulo, 
  autor: autor,
  editora: editora} = chapters[0]; 

const Infos1 = ({ 
  onNext, 
  goToContents, 
  goToCover }) => {

  return (
    <div className="page info">
      <p className="info_nome_autor">
        {autor}
      </p>

      <h1 className="info_titulo_livro">
        {titulo}
      </h1>
      
      <img 
        className="info_logo_editora" 
        src="https://via.placeholder.com/50" 
        alt={editora}/>
    
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToContents={goToContents} />
    </div>
  );
};

export default Infos1;