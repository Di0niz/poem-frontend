"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const poem = `Приветствую тебя, пустынный уголок,
Приют спокойствия, трудов и вдохновенья,
Где льется дней моих невидимый поток
На лоне счастья и забвенья.
Я твой — я променял порочный двор Цирцей,
Роскошные пиры, забавы, заблужденья
На мирный шум дубров, на тишину полей,
На праздность вольную, подругу размышленья.`;

const Poem = () => {
  const [hiddenWords, setHiddenWords] = useState([]);
  const [showRandom, setShowRandom] = useState(false);
  const [randomWordIndex, setRandomWordIndex] = useState(null);

  const toggleWord = (word) => {
    if (hiddenWords.includes(word)) {
      setHiddenWords(hiddenWords.filter(w => w !== word));
    } else {
      setHiddenWords([...hiddenWords, word]);
    }
  };

  const toggleRandom = () => {
    // if (showRandom) {
    //   setHiddenWords(hiddenWords.filter((_, index) => index !== randomWordIndex));
    //   setShowRandom(false);
    //   setRandomWordIndex(null);
    // } else {
      const words = poem.split(/\s+/);
      const index = Math.floor(Math.random() * words.length);
      const index1 = Math.floor(Math.random() * words.length);
      const index2 = Math.floor(Math.random() * words.length);
      const index3 = Math.floor(Math.random() * words.length);
      setHiddenWords([...hiddenWords, words[index], words[index1], words[index2], words[index3]]);
      setRandomWordIndex(index);
    // }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <div className='my-5'>
          <Image
            className="mx-auto"
            src="/pushkin.png"
            alt="Next.js Logo"
            width={180}
            height={180}
            priority
          />
        </div>
        {poem.split('\n').map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.split(/\s+/).map((word, wordIndex) => (
              <span key={`${lineIndex}-${wordIndex}`}>
                {hiddenWords.includes(word) ? <span className="badge text-bg-dark">___</span>: word}{' '}
              </span>
            ))}
            <br />
          </div>
        ))}
        <button onClick={toggleRandom} className="my-3 btn btn-primary">Hide</button>
      </div>
    </div>
  );
};

export default Poem;
