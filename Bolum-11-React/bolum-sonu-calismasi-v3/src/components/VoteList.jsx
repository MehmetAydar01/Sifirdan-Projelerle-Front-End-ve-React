const VoteList = ({ numberLists, getVoteFunc, getVoteValue }) => {
  return (
    <div className='vote-list'>
      {numberLists.map((number, index) => {
        return (
          <div
            key={index}
            className={getVoteValue === number ? 'vote active' : 'vote'}
            onClick={() => getVoteFunc(number)}
          >
            <span>{number}</span>
          </div>
        );
      })}
    </div>
  );
};
export default VoteList;
