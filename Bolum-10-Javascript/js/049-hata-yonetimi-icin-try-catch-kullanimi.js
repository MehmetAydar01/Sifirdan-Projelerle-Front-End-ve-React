// try catch

try {
  console.log(LOREM);
} catch (err) {
  console.error('Error:::', err);
}

async function getData(url) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.error('Error:::', err);
  }
}

getData('../js/047-json-file.json');
