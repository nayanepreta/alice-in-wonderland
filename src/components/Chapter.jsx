import React from 'react';
import DOMPurify from 'dompurify';


const Chapter = ({ chapterRoman, chapterTitle, image, chapterTexts }) => {
  return (
    <>
      <span className="chapter_subtitle">{chapterRoman}</span>
      <h2 className="chapter_title">{chapterTitle}</h2>

      <img
        className="chapter_img_abertura"
        src={image}
        alt=""
      />

    <div className="chapter_content">
      {chapterTexts.map((paragraph, index) => (
        <p
          className={paragraph.className}
          key={index}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph.text) }}
        ></p>
      ))}
    </div>
    </>
  );
};

export default Chapter;
