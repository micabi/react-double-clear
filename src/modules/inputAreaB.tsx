import { ChangeEvent, JSX } from 'react';

function InputAreaB(props: {
  price: string;
  handlePrice: (e: ChangeEvent<HTMLInputElement>) => void;
  priceClear: () => void;
}): JSX.Element {
  return (
    <>
      <label htmlFor="number">
        入力欄B{'　'}
        <input type="text" id="number" placeholder="入力欄B" onChange={props.handlePrice} value={props.price} />
      </label>
      {'　'}
      <button className="btn btn-primary" onClick={props.priceClear}>
        クリア
      </button>
    </>
  );
}
export default InputAreaB;
