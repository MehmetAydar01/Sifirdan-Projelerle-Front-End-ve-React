import { USERS } from '../data';

function ConditionalRenderedUserList(props) {
  if (!props.isActive) {
    return;
  }

  if (props.isLoading) {
    return <div>veriler yukleniyor...</div>;
  }

  return (
    <>
      <h2>ConditionalRendered User List</h2>

      <ul>
        {USERS.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </>
  );
}

export default ConditionalRenderedUserList;
