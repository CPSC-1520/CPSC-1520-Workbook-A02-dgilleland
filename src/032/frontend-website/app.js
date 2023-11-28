// app.js
// This will read and write to the backend server's JSON database.
const URL = 'http://localhost:5000/'
const routes = [ 'posts', 'comments', 'profile' ];

const app = document.getElementById('app');

const renderPosts = (posts) => {
    // posts is an array of objects where each object has an id, title and author.
    // We want to generate a string of HTML where each post is a div with this information.
    // Let's use a simple loop to do this.
    let html = '';
    for (let post of posts) {
        html += `<div class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>By ${post.author}</p>
        </div>`;
    }
    return html;
}
const listPosts = () => {
    // This function will fetch the posts from the backend server and render them.
    fetch(URL + 'posts')
        .then(response => response.json())
        .then(data => {
            app.innerHTML = renderPosts(data);
        });
}
listPosts();