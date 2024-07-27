document.addEventListener('DOMContentLoaded', () => {
    const talents = [
        { name: 'Talent/Product 1', description: 'Description 1', image: 'https://via.placeholder.com/250', link: '#' },
        { name: 'Talent/Product 2', description: 'Description 2', image: 'https://via.placeholder.com/250', link: '#' },
        // Add more talents/products here
    ];

    const talentGrid = document.getElementById('talentGrid');

    talents.forEach(talent => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${talent.image}" alt="${talent.name}">
            <h3>${talent.name}</h3>
            <p>${talent.description}</p>
            <a href="${talent.link}" class="btn">Learn More</a>
        `;

        talentGrid.appendChild(card);
    });
});
