import React, { useState } from "react";
import Phrase from "./components/phrase/phrase";
import EmptyBlock from "./components/empty-block/empty-block";

import {adjectivesArr, nounsArr} from "./bd.jsx";

import "./App.css";

function App() {
  document.title = "Урок №4 (2-7)";

  const [phrases, setPhrases] = useState([]);

  const clickGenerate = () => {
    //клонируем массив прилогательных
    const adjectives = [...adjectivesArr];

    //генерируем первое прилагательное
    const adjectiveFirst = adjectives[Math.floor(Math.random()*adjectives.length)];
    //удаляем первое прилагательное из массива, чтобы небыло повторов
    adjectives.splice(adjectiveFirst, 1);
    //генерируем второе прилагательное
    const adjectiveSecond = adjectives[Math.floor(Math.random()*adjectives.length)];
    //генерируем сущетсвительное
    const noun = nounsArr[Math.floor(Math.random()*nounsArr.length)];

    const phrase = `${adjectiveFirst} ${adjectiveSecond} ${noun}`;
    setPhrases([phrase, ...phrases]);
  };

  const clickClear = () => {
    setPhrases([]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {phrases.length > 0 ? <Phrase phrases={phrases}/> : <EmptyBlock />}
        <button className="btn btn_generate" onClick={clickGenerate}>Сгенерировать</button>
        <button className="btn btn_clear" onClick={clickClear}>Очистить</button>
      </div>
    </div>
  );
}

export default App;
