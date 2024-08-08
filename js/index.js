document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById('search-bar');
    const posts = document.querySelectorAll('.post');

    searchBar.addEventListener('input', function(e) {
        const searchQuery = e.target.value.toLowerCase();

        posts.forEach(post => {
            const postTitle = post.querySelector('h2').textContent.toLowerCase();
            const postContent = post.querySelector('p').textContent.toLowerCase();

            if (postTitle.includes(searchQuery) || postContent.includes(searchQuery)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postContent = this.previousElementSibling;
            postContent.classList.toggle('expanded');
            this.textContent = postContent.classList.contains('expanded') ? 'See Less' : 'See More';
        });
    });
});
