import { ChangeEvent, JSX } from 'react';
function InputAreaA(props: {
  text: string;
  handleText: (e: ChangeEvent<HTMLInputElement>) => void;
  textClear: () => void;
}): JSX.Element {
  return (
    <>
      <label htmlFor="symbol">
        入力欄A{'　'}
        <input id="symbol" type="text" placeholder="入力欄A" onChange={props.handleText} value={props.text} />
      </label>
      {'　'}
      <button className="btn btn-primary" onClick={props.textClear}>
        クリア
      </button>
    </>
  );
}
export default InputAreaA;
