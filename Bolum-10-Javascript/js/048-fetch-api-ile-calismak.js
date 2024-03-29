// fetch api

const JSONPlaceHolderApi = 'https://jsonplaceholder.typicode.com/todos';

// fetch(JSONPlaceHolderApi)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

const app = document.querySelector('#app');
const createUlElement = document.createElement('ul');
app.append(createUlElement);

// fetch(JSONPlaceHolderApi)
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((item) => {
//       const liElement = document.createElement('li');
//       liElement.innerHTML = item.title;
//       createUlElement.append(liElement);
//     });
//   });

// fetch('../js/047-json-file.json')
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

async function getTasks(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = item.title;
    createUlElement.append(liElement);
  });
}

getTasks(JSONPlaceHolderApi);
