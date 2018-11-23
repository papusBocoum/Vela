import * as React from 'react';

import ReactWordCloud from 'react-wordcloud';

const words = [
  {word: 'hello', value: 3},
  {word: 'world', value: 1},
  {word: 'github', value: 1},
  {word: 'code', value: 1},
  {word: 'hello', value: 2},
  {word: 'world', value: 1},
  {word: 'github', value: 1},
  {word: 'code', value: 1},
  {word: 'hello', value: 3},
  {word: 'world', value: 1},
  {word: 'github', value: 1},
  {word: 'code', value: 1},
  {word: 'hello', value: 2},
  {word: 'world', value: 1},
  {word: 'github', value: 1},
  {word: 'code', value: 1},
];

const WORD_COUNT_KEY = 'value';
const WORD_KEY = 'word';

const MyWordCloud = () => {
  return (
    <div style={{width: "100%", height:"100%"}}>
      <ReactWordCloud
	words={words}
	wordCountKey={WORD_COUNT_KEY}
	wordKey={WORD_KEY}
      />
    </div>
  );
};

export default MyWordCloud;