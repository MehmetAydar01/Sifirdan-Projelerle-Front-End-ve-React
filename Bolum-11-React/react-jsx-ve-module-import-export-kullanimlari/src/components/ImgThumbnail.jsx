export default function ImgThumbnail({ imgSrc, imgAlt }) {
  const imgStyles = {
    padding: '0.25rem',
    borderRadius: '0.5rem',
    border: '0.1rem solid #bdc3c7',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '5px',
  };

  return <img src={imgSrc} alt={imgAlt} style={imgStyles} />;
}
