import './style.css';

const displayItem = (results) => {
  const card = document.querySelector('.cards');
  card.innerHTML = '';
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<p class="movi-title">${item.name}</p>
                         <img src="${item.image.medium}">
                         <button type="submit" class="reservation-btn">Reservation</button>`;
    card.appendChild(scoreLi);
  });
};

const searchShow = (query) => {
  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(BASE_URL)
    .then((respose) => respose.json())
    .then((jsonData) => {
      const results = jsonData.map((item) => item.show);
      displayItem(results);
      console.log(results)
    });
};

window.onload = () => {
  const searchArea = document.querySelector('.Search');
  searchArea.onkeyup = (e) => {
    searchShow(searchArea.value);
  };
};
