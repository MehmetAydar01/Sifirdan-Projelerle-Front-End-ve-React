const SelectionVote = ({ numberLists, getVoteValue }) => {
  if (!getVoteValue) {
    return (
      <div className='get-selection-vote'>
        <span>You did not select out of {numberLists.length}</span>
      </div>
    );
  }

  return (
    <div className='get-selection-vote'>
      <span>
        You Selected {getVoteValue || 0} out of {numberLists.length}
      </span>
    </div>
  );
};

export default SelectionVote;
