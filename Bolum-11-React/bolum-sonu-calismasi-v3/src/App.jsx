import BeforeVoting from './components/BeforeVoting';
import AfterVoting from './components/AfterVoting';
import { useState } from 'react';

function App() {
  const [isGiveVote, setIsGiveVote] = useState(false);
  const [getVoteValue, setGetVoteValue] = useState(null);
  const [numberLists, setNumberLists] = useState(
    Array.from({ length: 5 }, (_, index) => {
      return index + 1;
    })
  );

  const getVoteFunc = (num) => setGetVoteValue(num);

  return (
    <>
      <div className='card'>
        {isGiveVote ? (
          <AfterVoting numberLists={numberLists} getVoteValue={getVoteValue} />
        ) : (
          <BeforeVoting
            numberLists={numberLists}
            getVoteFunc={getVoteFunc}
            getVoteValue={getVoteValue}
            setIsGiveVote={setIsGiveVote}
          />
        )}
      </div>
    </>
  );
}

export default App;
