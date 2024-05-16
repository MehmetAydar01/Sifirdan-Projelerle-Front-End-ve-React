import starIcon from '../images/icon-star.svg';
import Icon from './Icon';
import Content from './Content';
import VoteList from './VoteList';

const BeforeVoting = ({
  numberLists,
  getVoteFunc,
  getVoteValue,
  setIsGiveVote,
}) => {
  const cardContent = {
    cardTitle: 'How did we do?',
    cardText:
      'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
  };

  return (
    <section className='before-vote'>
      <Icon starIcon={starIcon} />
      <Content cardContent={cardContent} />
      <VoteList
        numberLists={numberLists}
        getVoteFunc={getVoteFunc}
        getVoteValue={getVoteValue}
      />
      <button type='button' className='btn' onClick={() => setIsGiveVote(true)}>
        submit
      </button>
    </section>
  );
};
export default BeforeVoting;
