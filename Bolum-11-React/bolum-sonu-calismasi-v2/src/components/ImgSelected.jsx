function ImgSelected({ thumbnail, name }) {
  return (
    <article>
      <header>{name}</header>
      <img src={thumbnail} alt='' style={{ width: '100%' }} />
    </article>
  );
}

export default ImgSelected;
