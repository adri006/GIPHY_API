const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');

function search(q) {
    const apiKey = 'ZaLweRDNzutCPXYOttmClwCqwMRbjybf';
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`;

    fetch(path)
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            let resultsHTML = '';

            json.data.forEach(function (obj) {
                const url = obj.images.fixed_width.url;
                const title = obj.title;

                resultsHTML += `<div><img 
                src="${url}" 
                class="gif-img"
                alt="${title}"
                ></div> `;
            });

            resultsEl.innerHTML = resultsHTML;
        })
        .catch(function (err) {
            console.log(err.message);
        });
}

search('jdm');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = searchInput.value;

    search(q);
});