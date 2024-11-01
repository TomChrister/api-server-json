// fetch the api
fetch('db.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayLaptops(data.laptops);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });







/*
// function for getting the laptop info
function displayLaptops(laptops) {
    const container = document.getElementById('laptop-container');

    laptops.forEach(laptop => {
        const laptopDiv = document.createElement('div');
        laptopDiv.className = 'laptop';

        laptopDiv.innerHTML = `
        <h2>${laptop.title}</h2>
        <img src="${laptop.image}" alt="${laptop.title}">
        <p>${laptop.description}</p>
        <p>Price: $${laptop.price}</p>
        <p>In Stock: ${laptop.stock}</p>
        `;

        container.appendChild(laptopDiv);
    });
}*/
