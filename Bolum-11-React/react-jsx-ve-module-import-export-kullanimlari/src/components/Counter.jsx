import { useState } from 'react';

/*
  Ornek:
  function xxx(info) {
    let x = info
    function changeX
    return  [x, changeX]
  }
*/

export default function Counter(params) {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  function handleClick() {
    console.log('handle click butonu');
    setCounter(counter + 1);
    console.log('counter', counter);
  }

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={() => console.log('clicked')}>
        Counter bilgisini arttir..
      </button>
      <button onClick={handleClick}>Counter bilgisini arttir..</button>
      <button onClick={() => setCounter(counter + 1)}>
        Isimsiz Arrow Func ile counter bilgisini arttir..
      </button>
    </>
  );
}
