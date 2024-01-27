import { nanoid } from 'nanoid';
import './App.css';
// import UserList, { SingleUser, ITEMS } from './components/UserList';
import HebeleUserList, { SingleUser, ITEMS } from './components/UserList';
import ButtonComponent from './components/Button';
import ImgThumbnail from './components/ImgThumbnail';
import { IMAGES } from './data';

function App() {
  // 1: return ederkenken HTML Yapisi Return Etmen Gerekiyor (JSX)
  // 2: return ile sadece bir parent element gonderebilirsin..
  // 2.1: fragment kullanilabilir <> .. </>
  // return (
  // <React.Fragment>
  //   <div>Div icindeki Bilgi</div>
  //   <h1>Merhaba</h1>
  // </React.Fragment>
  // )
  // 3: {susluParantez ici JavaScript Yapisi Calistirmak Icin Kullanilir}
  // 4: Bir Etiketin Muhakkak Bitisi Olmalidir (<etiket>..</etiket> -> <etiket /> )
  // 5: class bilgisi className diye Yazilmali..
  // 6: return icinde aciklama icin yine susluParantez Kullanilmali {/* aciklama.. */}
  // 7: style bilgisi {js icinde {obj olcak sekilde olmalidir}} -> {{backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0}}
  // 8: map kullanirken muhakkak key bilgisini gondermemiz gerekir
  // 9: React Componentlerinin Ilk Harfleri Her Zaman Buyuk Olmali.. BirdenFazlaKelimeIse..HerKelimeninIlkHarfiBuyukOlmali..

  const userName = 'Derya';
  const users = ['Lorem', 'Ipsum', 'Dolor'];

  const products = [
    { id: nanoid(), name: 'MacBook Pro 14', inStock: false },
    { id: nanoid(), name: 'MacBook Pro 13', inStock: true },
    { id: nanoid(), name: 'iPad', inStock: false },
    { id: nanoid(), name: 'Lenovo 14', inStock: true },
    { id: nanoid(), name: 'Dell XPS', inStock: true },
  ];

  const mapUsers = users.map((item, index) => <li key={index}>{item}</li>);

  const isActive = false;

  const styles = {
    h2Style: {
      backgroundColor: 'blue',
      fontSize: '24px',
      color: '#f1f1f1',
    },
  };

  return (
    <>
      <div className='bg-red'>Div icindeki Bilgi</div>
      <h1 style={{ backgroundColor: `${isActive ? 'green' : 'orange'}` }}>
        Merhaba (2 + 2 String Bilgi) {2 + 2} {userName}
      </h1>
      <h2 style={styles.h2Style}>Kullanicilarin Sayisi: {users.length}</h2>
      <img src='https://picsum.photos/300/300' alt='' />
      <div className='bg-red'>BG Red Class ile Eklendi</div>
      {/* Bu Kullanim Dogru Degil */}
      <ul>
        <li>{users[0]}</li>
        <li>{users[1]}</li>
        <li>{users[2]}</li>
      </ul>
      {/* Dogru Kullanim v1 */}
      <ul>
        {users.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      {/* Dogru Kullanim v2 */}
      <ul
        style={{
          backgroundColor: 'yellow',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {mapUsers}
      </ul>

      <ul>
        {products
          .filter((item) => item.inStock)
          .map((item) => (
            <li key={item.id}>{item.name.toUpperCase()}</li>
          ))}
      </ul>
      {/* <ImgThumbnail imgSrc='https://picsum.photos/600/250' /> */}
      <HebeleUserList />
      <SingleUser />
      <SingleUser />
      {/* 10 Adet Single User Component Nasil Olusturulur */}
      {[...Array(10)].map((item, index) => {
        return <SingleUser key={index} />;
      })}
      {ITEMS.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <hr />

      <span btn='info' data='1111'>
        normal html component
      </span>
      <hr />

      <ButtonComponent className='btn btn-primary' info='deneme' dataId='1' />
      <hr />

      <ImgThumbnail imgSrc='https://picsum.photos/600/250' />
      <hr />

      {IMAGES.map((item, index) => {
        return <ImgThumbnail key={index} imgSrc={item} imgAlt='' />;
      })}
    </>
  );
}

export default App;
