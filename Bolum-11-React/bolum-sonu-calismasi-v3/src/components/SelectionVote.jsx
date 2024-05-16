const SelectionVote = ({ numberLists, getVoteValue }) => {
  return (
    <div className='get-selection-vote'>
      <span>
        You Selected {getVoteValue} out of {numberLists.length}
      </span>
    </div>
  );
};

export default SelectionVote;
