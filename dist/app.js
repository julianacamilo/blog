// Percorre os objetos do arquivo data.ts
data.forEach(obj => {
    // Cria um elemento de card
    const card = document.createElement('div');
    card.classList.add('card-post');
    card.id = obj.id;
  
    // Cria um elemento de imagem
    const image = document.createElement('img');
    image.src = obj.imageSrc;
    image.style.width = '100%';
    image.style.height = '100%';
  
    // Cria um elemento de texto para o Lorem Ipsum
    const lorem = document.createElement('div');
    lorem.classList.add('lorem-ipsum');
    lorem.textContent = obj.lorem;
  
    // Cria um elemento de texto para o título
    const title = document.createElement('div');
    title.classList.add('the-future');
    title.textContent = obj.title;
  
    // Cria um elemento de link para expandir
    const expand = document.createElement('div');
    const expandLink = document.createElement('a');
    expandLink.href = obj.expandLink;
    expandLink.textContent = 'Expand...';
    expand.appendChild(expandLink);
  
    // Adiciona os elementos ao card
    card.appendChild(image);
    card.appendChild(lorem);
    card.appendChild(title);
    card.appendChild(expand);
  
    // Adiciona o card ao contêiner
    const container = document.getElementById('container');
    container.appendChild(card);
  });
  
