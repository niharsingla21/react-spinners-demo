import React from 'react';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';
import './App.css';
import { css } from '@emotion/react';

const loaderCss = css`
margin-top: 25px;
margin-bottom: 25px
`

function App() {
  return (
    <div className="App">
      <BounceLoader css={loaderCss} size={24} color='red' loading/>
      <BarLoader css={loaderCss} size={48} color='pink' loading/>
      <BeatLoader css={loaderCss} size={72} color='green' loading/>
    </div>
  );
}

export default App;
