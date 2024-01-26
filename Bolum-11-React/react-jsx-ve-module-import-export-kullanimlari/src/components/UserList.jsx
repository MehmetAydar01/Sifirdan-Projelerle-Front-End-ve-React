import Button from './Button';
import USERS from '../data/users';

const ITEMS = [1, 2, 3];

function UserList() {
  return (
    <>
      <hr />
      <h2>Kullanici Listesi</h2>
      {/* <ul>
        <li>Lorem.</li>
        <li>Minus.</li>
        <li>Nesciunt!</li>
        <li>Dolor.</li>
        <li>Modi!</li>
      </ul> */}
      <ul>
        {USERS.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
      <Button />
      <hr />
    </>
  );
}

// Not: Bir component dosyasi icinde genellikle 1 component bekleriz. Ikincisini baska dosyaya almak lazim.. :)
function SingleUser() {
  return <h3>SingleUser Component Icindeki Bilgi</h3>;
}

export { ITEMS, SingleUser };
export default UserList;
