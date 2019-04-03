console.log("running");

function fetchBooks() {
  const URL = 'https://anapioficeandfire.com/api/books';
  fetch(URL)
  .then(resp => resp.json())
  .then(data => {
    console.log(data);

    let ul = document.getElementById('book-form');

    for (let i = 0; i < data.length; i++) {
      let li = document.createElement('li');
      let bookName = data[i].name;
      li.textContent = i+1 + ". " + bookName;
      ul.appendChild(li)
    };
  });
};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
