const titleElement = document.querySelector('#title');

console.log(titleElement.classList);
titleElement.classList.remove('text-primary', 'title');

titleElement.classList.add('text-info', 'display-1');

titleElement.classList.toggle('bg-primary'); // ekle veya cikar...
