# Reactで複数のinput欄に対して個別にクリアボタン・全部クリアボタンを実装

## 全体のクリア

親コンポーネントのボタンにonClick属性
useStateを使って2つともsetStateにまとめて空にする。

:::note info
この時点では子コンポーネントにはpropsを何も与えていないので同期して動作しない。
:::

```jsx
【親コンポーネント】

function App() {
  const [text, setText] = useState(''); // <InputAreaA />で使う
  const [price, setPrice] = useState(''); // <InputAreaB />で使う

  const allClear = () => {
    setText('');
    setPrice('');
  }

  return (
    <>

      <InputAreaA />

      <InputAreaB />

      <button onClick={() => allClear()}>全体クリア</button>
  );
}
```

## 個別のクリア

親コンポーネントでsetState関数を実行する関数を作り(ここではhandleTextとclearText)を、子コンポーネントにprosとして渡す。
子コンポーネントでは受け取った"setState関数を実行する関数"をイベントハンドラの値として付与する。

```jsx
【子コンポーネント】

function InputAreraA(props) {
return (
  <>
    <input type="text" value={props.text} onChange={props.handleText} />
    <button onClick={props.clearText}>個別クリア</button>
  );
}
```

```jsx
【親コンポーネント】

function App() {
  const [text, setText] = useState('');
  // const [price, setPrice] = useState(''); <InputAreaB />用 ...省略

  // const allClear = () => {
  // ...省略
  // }

  // 親から子コンポーネントにpropsとして渡す関数①
  function handleText(e) {
    setText(e.target.value);
  }

  // 親から子コンポーネントにpropsとして渡す関数②
  function clearText() {
    setText('');
  }

  return (
    <>

      <InputAreaA
        text={text}
        handleText={(e) => handleText(e)}
        clearText={() => clearText()}
      />

      {/* <InputAreaB /> ...省略 */}

      {/*...全体クリア ...省略 */}
  );
}
```

:::note info
同期したい内容が多くなると親コンポーネント内で作る関数が多くなりpropsの数も増えるのが課題。
:::
