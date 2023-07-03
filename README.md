<h1 align="center"> Blog - Compass </h1>

## Project requirements

Introduction
Thinking about a project that has a list of "Posts," each containing an image, title, and
a brief description. Each post needs to have a list of comments that users have left
when entering that specific post.
The challenge consists of:
• Create an "Posts" initial page with a list of posts, where each post should have
a link to a second screen called "Post Details."
• Create a "Post Details" screen that should contain the post details, related
comments with the user's email, and a link to return to the previous screen.
In a data.ts (TypeScript) file, create a list of posts with the following information:
List of posts with:
• id - number
• title - text
• imageUrl - text
• body – text
List of comments with:
• id - number
• postId - number
• email - text
• body – text

## Technologies Used

- Typescript
- CSS
- HTML

## Functionalities 

- A dynamic generation of cards in TypeScript that involves creating visual elements on the page based on a set of data. In this case, cards represent posts and are displayed both on the homepage and on a post-specific page. Cards are generated according to the number of available objects and display information such as title, image and body text. When clicking on a card, the user is redirected to the page of the corresponding post, where he can see its full content, including related comments. This approach provides an interactive experience, allowing users to explore different posts and their details.

## Run the project 

- Clone this repository on your machine;
- Open the index.html file in your browser;
- Take the opportunity to explore the cards and navigate between them.

## Page

> <strong> Blog homepage: <strong>
>
> <img src="/readme/pag1.jpg"/>
> <img src="/readme/pag2.jpg"/>

> <strong> One of the posts: <strong>
>
> <img src="/readme/Pag3.jpg"/>
> <img src="/readme/pag4.jpg"/>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=FINISHED&color=GREEN&style=for-the-badge"/>
</p>
