const Icon = ({ starIcon, thankyouIcon }) => {
  return (
    <div className={`${starIcon ? 'icon' : 'thank-you-image'}`}>
      <img src={starIcon || thankyouIcon} alt={starIcon ? 'icon' : 'image'} />
    </div>
  );
};
export default Icon;
