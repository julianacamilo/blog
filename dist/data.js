"use strict";
const publicacoes = [
    {
        id: 1,
        title: "Inteligência Artificial",
        imageUrl: "./images/CS.png",
        body: "Inteligência Artificial",
        comments: [
            {
                id: 1,
                postId: 1,
                email: "juliana@gmail.com",
                body: "Excelente post!",
            },
            {
                id: 2,
                postId: 1,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
        ],
    },
    {
        id: 2,
        title: "Second Post",
        imageUrl: "./images/CS.png",
        body: "This is the second post.",
        comments: [
            {
                id: 3,
                postId: 2,
                email: "joao@gmail.com",
                body: "Awesome!",
            },
            {
                id: 4,
                postId: 2,
                email: "julia@gmail.com",
                body: "Well done!",
            },
        ],
    },
    {
        id: 3,
        title: "Third Post",
        imageUrl: "./images/CS.png",
        body: "This is the third post.",
        comments: [
            {
                id: 5,
                postId: 3,
                email: "ana@gmail.com",
                body: "Nice article!",
            },
            {
                id: 6,
                postId: 3,
                email: "paulo@gmail.com",
                body: "Keep up the good work!",
            },
        ],
    },
    {
        id: 4,
        title: "Fourth Post",
        imageUrl: "./images/CS.png",
        body: "This is the fourth post.",
        comments: [
            {
                id: 7,
                postId: 4,
                email: "davi@gmail.com",
                body: "Interesting read!",
            },
            {
                id: 8,
                postId: 4,
                email: "leticia@gmail.com",
                body: "I learned something new!",
            },
        ],
    },
    {
        id: 5,
        title: "Fifth Post",
        imageUrl: "./images/CS.png",
        body: "This is the fifth post.",
        comments: [
            {
                id: 9,
                postId: 5,
                email: "pedro@gmail.com",
                body: "Well articulated!",
            },
            {
                id: 10,
                postId: 5,
                email: "carol@gmail.com",
                body: "Great insights!",
            },
        ],
    },
    {
        id: 6,
        title: "Sixth Post",
        imageUrl: "./images/CS.png",
        body: "This is the sixth post.",
        comments: [
            {
                id: 11,
                postId: 6,
                email: "samantha@gmail.com",
                body: "I enjoyed reading this!",
            },
            {
                id: 12,
                postId: 6,
                email: "lucas@gmail.com",
                body: "Keep up the great work!",
            },
        ],
    },
];
// main.ts
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'card-post';
    const postLink = document.createElement('a');
    postLink.href = `/post.html/${post.id}`;
    const postImage = document.createElement('div');
    postImage.className = 'post';
    const image = document.createElement('img');
    image.src = post.imageUrl;
    image.alt = post.title;
    postImage.appendChild(image);
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = post.title;
    const maxBodyLength = Math.floor(post.body.length / 2);
    const truncatedBody = post.body.slice(0, maxBodyLength) + '...';
    const paragrafo = document.createElement('div');
    paragrafo.className = 'paragrafo';
    paragrafo.textContent = truncatedBody;
    postLink.appendChild(postImage);
    postLink.appendChild(title);
    postLink.appendChild(paragrafo);
    postElement.appendChild(postLink);
    const expandLink = document.createElement('a'); // Link "Expand"
    expandLink.className = 'expand';
    expandLink.textContent = 'Expand';
    expandLink.href = `/post.html/${post.id}`;
    postElement.appendChild(expandLink);
    return postElement;
}
function renderPosts() {
    const postContainer = document.querySelector('.post-container');
    if (!postContainer)
        return;
    for (const post of publicacoes) {
        const postElement = createPostElement(post);
        postContainer.appendChild(postElement);
    }
}
renderPosts();
//# sourceMappingURL=data.js.map