"use strict";
const publicacoes = [
    {
        id: 1,
        title: "Cyber Security",
        imageUrl: "./images/CYBER.jpg",
        body: "Cybersecurity is a field dedicated to protecting systems, networks, devices, and data from cyber threats. It involves implementing measures and practices to prevent, detect and respond to cybersecurity incidents. The purpose of cybersecurity is to ensure the confidentiality, integrity and availability of information, as well as to protect the privacy of users. Cyber threats include malware, phishing, denial of service attacks, and vulnerability exploitation. Measures such as firewalls, antivirus and good security practices are essential to protect against these threats. Cybersecurity is a global concern and requires ongoing investment to ensure systems and data are adequately protected.",
        comments: [
            {
                id: 1,
                postId: 1,
                email: "juliana@gmail.com",
                body: "Cybersecurity is of paramount importance in today's digital landscape.",
            },
            {
                id: 2,
                postId: 1,
                email: "heitor@gmail.com",
                body: "Protecting sensitive information from cyber threats is crucial for individuals and businesses alike.",
            },
            {
                id: 3,
                postId: 1,
                email: "camilo@gmail.com",
                body: "The evolving nature of cyber attacks requires constant vigilance and proactive security measures.",
            },
            {
                id: 4,
                postId: 1,
                email: "felipe@gmail.com",
                body: "Implementing robust cybersecurity protocols helps safeguard against unauthorized access and data breaches.",
            },
            {
                id: 5,
                postId: 1,
                email: "cris@gmail.com",
                body: "Educating users about cyber risks and promoting good security practices is essential in combating cyber threats.",
            },
        ],
    },
    {
        id: 2,
        title: "Internet Of Things",
        imageUrl: "./images/IoT.jfif",
        body: "The Internet of Things (IoT) refers to a revolutionary concept that describes the interconnection of everyday objects with the internet. It is a technology that allows physical devices, such as home appliances, vehicles, sensors and industrial machines, to communicate and interact with each other through the exchange of data. The main idea behind IoT is to empower these objects to gather information, share it and make decisions based on that data without relying on direct human intervention. For example, an IoT-connected smart thermostat can automatically adjust the room temperature based on user preferences and information from temperature sensors.",
        comments: [
            {
                id: 1,
                postId: 2,
                email: "joao@gmail.com",
                body: "The Internet of Things (IoT) is revolutionizing the way we interact with everyday objects and transforming our lives.",
            },
            {
                id: 2,
                postId: 2,
                email: "julia@gmail.com",
                body: "IoT devices are seamlessly connecting and sharing data, enabling automation and efficiency across various industries.",
            },
            {
                id: 3,
                postId: 2,
                email: "selma@gmail.com",
                body: "The potential of IoT is vast, from smart homes and cities to industrial automation and healthcare advancements.",
            },
            {
                id: 4,
                postId: 2,
                email: "ellen@gmail.com",
                body: "IoT empowers businesses with real-time insights, improving decision-making processes and enhancing operational efficiency.",
            },
            {
                id: 5,
                postId: 2,
                email: "luisa@gmail.com",
                body: "However, the widespread adoption of IoT also raises concerns about data privacy, security, and the need for robust safeguards.",
            },
        ],
    },
    {
        id: 3,
        title: "Artificial Intelligence",
        imageUrl: "./images/IA.jfif",
        body: "Artificial intelligence (AI) is a field of computer science that develops systems capable of performing tasks that normally require human intelligence. AI has applications in many areas, such as medicine, finance and games, and is constantly evolving. While it offers opportunities, it also presents ethical challenges such as privacy and algorithmic bias. Machine learning is a popular approach in AI, allowing systems to learn from data. The future of AI is promising, but issues such as interpretability of models and social inequalities need to be addressed. Responsibility and ethics are key to enjoying the benefits of AI in a fair and inclusive way.",
        comments: [
            {
                id: 1,
                postId: 3,
                email: "ana@gmail.com",
                body: "Artificial Intelligence (AI) is reshaping industries and revolutionizing the way we approach problem-solving.",
            },
            {
                id: 2,
                postId: 3,
                email: "paulo@gmail.com",
                body: "AI algorithms and machine learning models enable computers to mimic human intelligence and make autonomous decisions.",
            },
            {
                id: 3,
                postId: 3,
                email: "messi@gmail.com",
                body: "The potential applications of AI are vast, ranging from personalized recommendations to autonomous vehicles and medical diagnostics.",
            },
            {
                id: 4,
                postId: 3,
                email: "neyjr@gmail.com",
                body: "AI has the power to optimize processes, increase efficiency, and uncover valuable insights from massive amounts of data.",
            },
            {
                id: 5,
                postId: 3,
                email: "cr7@gmail.com",
                body: "Artificial intelligence is transforming industries and driving innovation in amazing ways.",
            },
        ],
    },
    {
        id: 4,
        title: "5G",
        imageUrl: "./images/5G.jfif",
        body: "5G is the fifth generation of mobile networks, bringing ultra-fast speeds, expanded connection capacity and low latency. With faster downloads and uploads, HD video streaming and lag-free gaming experiences, 5G drives technological advancement in areas such as IoT, virtual reality and artificial intelligence. In addition, its connectivity allows billions of smart devices to interconnect, driving IoT in sectors such as industrial automation and smart cities. Low latency makes real-time communication possible, benefiting remote surgeries, autonomous vehicles and industrial automation. Security and reliability are improved, protecting users' communications and data from cyber-attacks. ",
        comments: [
            {
                id: 1,
                postId: 4,
                email: "davi@gmail.com",
                body: "With 5G, we can expect seamless streaming, immersive virtual reality experiences, and real-time communication like never before.",
            },
            {
                id: 1,
                postId: 4,
                email: "leticia@gmail.com",
                body: "The rollout of 5G networks is set to unleash a new era of connectivity with lightning-fast speeds and low latency.",
            },
            {
                id: 3,
                postId: 4,
                email: "thais@gmail.com",
                body: "The high capacity and reliability of 5G networks will support the widespread adoption of Internet of Things (IoT) devices, enabling a truly interconnected world.",
            },
            {
                id: 4,
                postId: 4,
                email: "gabriela@gmail.com",
                body: "5G has the potential to revolutionize industries such as healthcare, transportation, and manufacturing.",
            },
            {
                id: 5,
                postId: 4,
                email: "gabriel@gmail.com",
                body: "5G: Blazing-fast speed, revolutionary connectivity.",
            },
        ],
    },
    {
        id: 5,
        title: "Augmented Reality",
        imageUrl: "./images/AR.jfif",
        body: "A realidade aumentada (RA) é uma tecnologia que combina elementos virtuais com o mundo real, criando uma experiência interativa. Ela permite a sobreposição de objetos virtuais, como gráficos 3D, informações ou animações, no ambiente real através de dispositivos como smartphones ou óculos de RA. A RA é aplicada em diversos setores, como jogos, varejo, educação e medicina. Ela oferece uma experiência imersiva e interativa, possibilitando aos usuários visualizar produtos, interagir com personagens virtuais ou obter informações adicionais sobre o ambiente ao seu redor. A tecnologia evolui constantemente, com avanços em rastreamento de movimento e renderização gráfica. A adoção em massa ainda enfrenta desafios, como desenvolvimento de conteúdo relevante e aprimoramento dos dispositivos. Em resumo, a realidade aumentada combina o mundo real com elementos virtuais, proporcionando experiências interativas e enriquecedoras para os usuários.",
        comments: [
            {
                id: 1,
                postId: 5,
                email: "pedro@gmail.com",
                body: "Augmented reality is changing the way we experience the world, merging digital and physical realities.",
            },
            {
                id: 2,
                postId: 5,
                email: "carol@gmail.com",
                body: "Augmented reality is transforming how we interact with the world!",
            },
            {
                id: 3,
                postId: 5,
                email: "any@gmail.com",
                body: "Fascinating! Augmented reality offers immersive and engaging experiences.",
            },
            {
                id: 4,
                postId: 5,
                email: "clara@gmail.com",
                body: "I'm impressed with the possibilities of augmented reality. It's incredible to see how it's being applied across various industries.",
            },
            {
                id: 5,
                postId: 5,
                email: "gustavo@gmail.com",
                body: "Augmented reality is changing the game! Excited to see what the future holds for this technology.",
            },
        ],
    },
    {
        id: 6,
        title: "Cloud",
        imageUrl: "./images/Cloud.jpg",
        body: "Cloud computing is a model for delivering computing services over the internet. It provides on-demand access to shared resources such as servers and storage, providing scalability, flexibility and cost savings. There are three main cloud service models: IaaS, PaaS and SaaS. Cloud security is a major concern, with measures implemented by providers and responsibility shared between providers and users. While the cloud brings benefits such as scalability and efficiency, there are also challenges to consider such as regulatory compliance and cost management. Cloud computing remains a popular option for individuals and businesses that want to leverage technology resources quickly and cost-effectively.",
        comments: [
            {
                id: 1,
                postId: 6,
                email: "samantha@gmail.com",
                body: "Cloud computing is transforming businesses, offering scalable solutions and seamless collaboration.",
            },
            {
                id: 2,
                postId: 6,
                email: "lucas@gmail.com",
                body: "The convenience and flexibility of cloud technology are empowering organizations to innovate and stay competitive.",
            },
            {
                id: 3,
                postId: 6,
                email: "cristian@gmail.com",
                body: "Cloud solutions are driving digital transformation, enabling businesses to streamline operations and improve efficiency.",
            },
            {
                id: 4,
                postId: 6,
                email: "aline@gmail.com",
                body: "Securely storing and accessing data in the cloud is revolutionizing the way we work and ensuring data resilience.",
            },
            {
                id: 5,
                postId: 6,
                email: "jv@gmail.com",
                body: "Embracing the cloud allows businesses to focus on their core competencies while benefiting from scalable and cost-effective IT infrastructure.",
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
    paragrafo.textContent = post.body;
    const limiteCaracteres = 100;
    if (post.body.length > limiteCaracteres) {
        paragrafo.textContent = post.body.substring(0, limiteCaracteres);
    }
    else {
        paragrafo.textContent = post.body;
    }
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
        const emailParts = comment.email.split('@');
        const emailPart = emailParts[0];
        userId.textContent = emailPart + ':';
        commentItem.appendChild(userId);
        const userEmail = document.createElement('Strong');
        userEmail.textContent = comment.email;
        const commentText = document.createElement('p');
        commentText.textContent = comment.body;
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