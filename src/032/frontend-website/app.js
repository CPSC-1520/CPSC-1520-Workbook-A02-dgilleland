// app.js
import 'clam.css';
import './styles.css'
import { marked } from 'marked';

// This will read and write to the backend server's JSON database.
const URL = 'http://localhost:5000/'
const routes = [ 'posts', 'comments', 'profile' ];
// Functions to generate URLs for the backend server.
const search = (text) => `?q=${text}`;
const getItemById = (route, id) => `${URL}${route}/${id}`;
const list = (route) => `${URL}${route}`;

const setupNav = () => {
    const nav = document.querySelector('nav');
    let html = '';
    for(let index = 0; index < routes.length; index++) {
        html += `<li data-route="${routes[index]}"><a href="#">${routes[index]}</a></li>`;
    }
    html = `<ul>${html}</ul>`;
    nav.innerHTML += html;
    nav.addEventListener('click', (ev) => {

    })
}

const app = document.getElementById('app');

const renderPosts = (posts, tag='div') => {
    // posts is an array of objects where each object has an id, title and author.
    // We want to generate a string of HTML where each post is a div with this information.
    // Let's use a simple loop to do this.
    let html = '';
    for (let post of posts) {
        html += `<${tag} class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>By ${post.author}</p>
        </${tag}>`;
    }
    return html;
} // end of renderPosts

const renderArticle = (postId, content) => {
    // content is a string of markdown text.
    // We want to generate a string of HTML where the content is rendered as markdown.
    // Let's use the marked library to do this.
    return `<article data-id="${postId}">
        ${marked(content)}
    </article>`;
} // end of renderArticle

const listPosts = () => {
    // This function will fetch the posts from the backend server and render them.
    fetch(list('posts'))
        .then(response => response.json())
        .then(data => {
            app.innerHTML = renderPosts(data, 'article');
            const articles = app.querySelectorAll('article h2');
            console.log(articles);
            articles.forEach((el) => {
                el.addEventListener('click', loadPostOnClick);
            })
        });
} // end of listPosts

const loadPostOnClick = (ev) => {
    const heading = ev.target;
    console.log(`${loadPostOnClick.name} --> '${heading.innerText}'`);
    const container = heading.parentElement;
    console.log(container.dataset.id);
    const postUrl = getItemById('posts', container.dataset.id);
    console.log(postUrl);
} // end of loadPostOnClick

const savePostOnClick = (ev) => {
    ev.preventDefault();
    const myForm = ev.target;
    // Get my input elements
    const postTitleInput = myForm.elements["postTitle"];
    const authorInput = myForm.elements["author"];
    // Build the data that I'm sending in the POST request
    const data = {
        title: postTitleInput.value,
        author: authorInput.value
    }
    console.log("data:", data);
    // Generate the URL for the POST request
    const postUrl = list('posts');
    console.log(postUrl);
    // To send the info, I will use the Fetch API
    const requestInfo = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    fetch(postUrl,requestInfo).then(response => {
        if(response.status === 201) { // 201 means a "created" response
            console.log("Info posted to server");
            listPosts();
        } else {
            console.log("Error:", response.status, response.statusText)
        }
    })
}

document.querySelector('form').addEventListener('submit', savePostOnClick);

// Run the app
setupNav();
listPosts();