/*!
* [Module name]
*
* Copyright (c) [year] [fullname]
*
* This software is released under the MIT License.
* http://opensource.org/licenses/mit-license.php
*/

import './App.scss';
import { JSX, ChangeEvent, useState } from 'react';
import InputAreaA from './modules/inputAreaA';
import InputAreaB from './modules/inputAreaB';

function App(): JSX.Element {
  const [text, setText] = useState('');
  const [textvisiblity, setTextVisiblity] = useState(false);
  const [price, setPrice] = useState('');
  const [pricevisiblity, setPriceVisiblity] = useState(false);

  function handleText(e: ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
    if (e.target.value === '') {
      setTextVisiblity(false);
      console.log(`'': ${textvisiblity}`);
    } else {
      setTextVisiblity(true);
      console.log(`'any': ${textvisiblity}`);
    }
  }

  function handlePrice(e: ChangeEvent<HTMLInputElement>): void {
    setPrice(e.target.value);
    if (e.target.value === '') {
      setPriceVisiblity(false);
      console.log(`'': ${pricevisiblity}`);
    } else {
      setPriceVisiblity(true);
      console.log(`'any': ${pricevisiblity}`);
    }
  }

  function allClear(): void {
    setText('');
    setPrice('');
    setTextVisiblity(false);
    setPriceVisiblity(false);
  }

  function textClear(): void {
    setText('');
    setTextVisiblity(false);
  }

  function priceClear(): void {
    setPrice('');
    setPriceVisiblity(false);
  }

  return (
    <>
      <div className="wrap">
        <div className="cols">
          <InputAreaA
            handleText={(e: ChangeEvent<HTMLInputElement>): void => handleText(e)}
            textClear={(): void => textClear()}
            text={text}
          />
          <div className={`text-result ${textvisiblity ? 'active' : ''}`}>
            <p>{text}</p>
          </div>
        </div>
        <div className="cols">
          <InputAreaB
            handlePrice={(e: ChangeEvent<HTMLInputElement>): void => handlePrice(e)}
            priceClear={(): void => priceClear()}
            price={price}
          />
          <div className={`price-result ${pricevisiblity ? 'active' : ''}`}>
            <p>{price}</p>
          </div>
        </div>
      </div>
      <div className="reset">
        <button className="btn" onClick={(): void => allClear()}>
          全クリア
        </button>
      </div>
    </>
  );
}

export default App;
