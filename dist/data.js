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
                body: "Excelente post! kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk dshkah dadlhskhdak",
            },
            {
                id: 2,
                postId: 1,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 3,
                postId: 1,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 1,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
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
                id: 1,
                postId: 2,
                email: "joao@gmail.com",
                body: "Awesome!",
            },
            {
                id: 2,
                postId: 2,
                email: "julia@gmail.com",
                body: "Well done!",
            },
            {
                id: 3,
                postId: 2,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 2,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
                postId: 2,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
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
                id: 1,
                postId: 3,
                email: "ana@gmail.com",
                body: "Nice article!",
            },
            {
                id: 2,
                postId: 3,
                email: "paulo@gmail.com",
                body: "Keep up the good work!",
            },
            {
                id: 3,
                postId: 3,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 3,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
                postId: 3,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
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
                id: 1,
                postId: 4,
                email: "davi@gmail.com",
                body: "Interesting read!",
            },
            {
                id: 1,
                postId: 4,
                email: "leticia@gmail.com",
                body: "I learned something new!",
            },
            {
                id: 3,
                postId: 4,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 4,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
                postId: 4,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
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
                id: 1,
                postId: 5,
                email: "pedro@gmail.com",
                body: "Well articulated!",
            },
            {
                id: 2,
                postId: 5,
                email: "carol@gmail.com",
                body: "Great insights!",
            },
            {
                id: 3,
                postId: 5,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 5,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
                postId: 5,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
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
                id: 1,
                postId: 6,
                email: "samantha@gmail.com",
                body: "I enjoyed reading this!",
            },
            {
                id: 2,
                postId: 6,
                email: "lucas@gmail.com",
                body: "Keep up the great work!",
            },
            {
                id: 3,
                postId: 6,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 4,
                postId: 6,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
            {
                id: 5,
                postId: 6,
                email: "camilo@gmail.com",
                body: "Muito interessante o conteúdo do post, parabéns!!",
            },
        ],
    },
];
function redirectToPostPage(postId) {
    const url = `post.html?id=${postId}`;
    window.location.href = url;
}
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'card-post';
    const postLink = document.createElement('a');
    postLink.href = `post.html?id=${post.id}`;
    const postImage = document.createElement('div');
    postImage.className = 'post';
    const image = document.createElement('img');
    image.src = post.imageUrl;
    image.alt = post.title;
    postImage.appendChild(image);
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = post.title;
    const paragrafo = document.createElement('div');
    paragrafo.className = 'paragrafo';
    const maxBodyLength = Math.floor(post.body.length / 2);
    const truncatedBody = post.body.slice(0, maxBodyLength);
    paragrafo.textContent = truncatedBody;
    postLink.appendChild(postImage);
    postLink.appendChild(title);
    postLink.appendChild(paragrafo);
    postElement.appendChild(postLink);
    const expandLink = document.createElement('a');
    expandLink.className = 'expand';
    expandLink.textContent = 'Expand...';
    expandLink.href = `post.html?id=${post.id}`;
    postElement.appendChild(expandLink);
    postLink.addEventListener('click', function (event) {
        event.preventDefault();
        redirectToPostPage(post.id);
    });
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
function getPostIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postIdString = urlParams.get('id');
    if (postIdString) {
        return parseInt(postIdString);
    }
    return null;
}
function getPostById(postId) {
    return publicacoes.find((post) => post.id === postId);
}
function renderPostDetails() {
    const postId = getPostIdFromURL();
    if (postId === null) {
        console.error('Invalid post ID');
        return;
    }
    const post = getPostById(postId);
    if (!post) {
        console.error('Post not found');
        return;
    }
    const postDetailsContainer = document.querySelector('.post-details');
    if (!postDetailsContainer)
        return;
    postDetailsContainer.innerHTML = '';
    const arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrow-bottom';
    const arrowImg = document.createElement('img');
    arrowImg.src = './images/ArrowIcon.png';
    arrowImg.alt = 'Arrow';
    arrowDiv.appendChild(arrowImg);
    arrowDiv.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    postDetailsContainer.appendChild(arrowDiv);
    const postDetails = document.createElement('div');
    postDetails.className = 'post-div';
    const postImage = document.createElement('div');
    postImage.className = 'post-image';
    const image = document.createElement('img');
    image.src = post.imageUrl;
    image.alt = post.title;
    postImage.appendChild(image);
    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;
    const postBody = document.createElement('p');
    postBody.textContent = post.body;
    postDetails.appendChild(postImage);
    postDetails.appendChild(postTitle);
    postDetails.appendChild(postBody);
    postDetailsContainer.appendChild(postDetails);
    const commentsList = document.createElement('address');
    commentsList.className = 'comments-list';
    postDetailsContainer.appendChild(commentsList);
    for (const comment of post.comments) {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        const userId = document.createElement('div');
        userId.className = 'user-id';
        userId.textContent = '' + comment.id + ':';
        commentItem.appendChild(userId);
        const userEmail = document.createElement('Strong');
        userEmail.textContent = comment.email;
        const commentText = document.createElement('p');
        commentText.textContent = comment.body;
        commentText.style.wordWrap = 'break-word';
        const commentSeparator = document.createElement('div');
        commentSeparator.className = 'comment-separator';
        commentItem.appendChild(userEmail);
        commentItem.appendChild(commentText);
        commentsList.appendChild(commentItem);
        commentsList.appendChild(commentSeparator);
    }
}
renderPostDetails();
//# sourceMappingURL=data.js.map