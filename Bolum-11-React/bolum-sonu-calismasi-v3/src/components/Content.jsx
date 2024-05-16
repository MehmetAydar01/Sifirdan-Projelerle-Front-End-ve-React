const Content = ({ cardContent }) => {
  const { cardTitle, cardText } = cardContent;

  return (
    <div className='content'>
      <h1 className='card-title'>{cardTitle}</h1>
      <p className='card-text'>{cardText}</p>
    </div>
  );
};

export default Content;
