import { useState } from 'react';
import ImgThumbnail from './ImgThumbnail';

// usestate ornegi

export default function MultipleImages() {
  const [imageCounter, setImageCounter] = useState(1);

  // function handleAddImage() {
  /*
    setImageCounter((prev) => {
      return prev + 1
    });
  */
  //   setImageCounter((prev) => {
  //     return prev < 1 ? 1 : prev + 1;
  //   });
  // }

  // function handleSubtrackImage() {
  //   setImageCounter((prev) => {
  //     return prev < 1 ? 0 : prev - 1;
  //   });
  // }

  function handleClick(event) {
    console.log(event.target.id);

    event.target.id === 'add'
      ? setImageCounter((prev) => prev + 1)
      : setImageCounter((prev) => (prev > 0 ? prev - 1 : prev));
    console.log(imageCounter);
  }

  return (
    <>
      <button type='button' id='add' onClick={handleClick}>
        Yeni Gorsel Ekle
      </button>
      <button type='button' id='subtrack' onClick={handleClick}>
        Gorsel Sil
      </button>
      <hr />
      {[...Array(imageCounter)].map((item, index) => {
        return (
          <ImgThumbnail
            key={index}
            imgSrc={`https://picsum.photos/id/${100 + index}/200/100`}
          />
        );
      })}
    </>
  );
}
