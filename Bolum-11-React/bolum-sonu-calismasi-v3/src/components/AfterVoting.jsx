import Icon from './Icon';
import thankyouIcon from '../images/illustration-thank-you.svg';
import Content from './Content';
import SelectionVote from './SelectionVote';

const AfterVoting = ({ numberLists, getVoteValue }) => {
  const cardContent = {
    cardTitle: 'Thank you!',
    cardText:
      'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!',
  };

  return (
    <section className='after-vote'>
      <Icon thankyouIcon={thankyouIcon} />
      <SelectionVote numberLists={numberLists} getVoteValue={getVoteValue} />
      {getVoteValue && <Content cardContent={cardContent} />}
    </section>
  );
};

export default AfterVoting;
