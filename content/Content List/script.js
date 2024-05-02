document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const animeList = document.getElementById('anime-list').getElementsByTagName('li');

    searchBox.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        Array.from(animeList).forEach(function(anime) {
            const title = anime.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                anime.style.display = '';
            } else {
                anime.style.display = 'none';
            }
        });
    });
});