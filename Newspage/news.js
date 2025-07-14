const container = document.getElementById("news-container");
const API_KEY = '95c35dc369f3427990fba8758a6a78f5'; 

const grid = document.createElement('section');
grid.className = 'card-grid';

fetch(`https://newsapi.org/v2/everything?q=food&language=en&pageSize=8&apiKey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    data.articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'news-card';

      card.innerHTML = `
        <img src="${article.urlToImage || 'fallback.jpg'}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available.'}</p>
        <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
        <a href="${article.url}" target="_blank">Read more</a>
      `;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  })
  .catch(err => {
    console.error('Error fetching news:', err);
    container.innerHTML = `<p>Sorry, we couldn't load food news right now.</p>`;
  });

