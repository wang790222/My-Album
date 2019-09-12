import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import './style.css';

import Tags from './Tags'
import ImageList from './ImageList';

const App = () => {

  const [tagIndex, setTagIndex] = useState(0);

  const getTagIndex = (index) => {
    setTagIndex(index);
  }

  return (
    <div>
      <Tags getTagIndex={getTagIndex} />
      <ImageList tagIndex={tagIndex} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));