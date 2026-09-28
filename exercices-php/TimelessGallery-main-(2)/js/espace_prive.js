document.addEventListener('DOMContentLoaded', function() {
    // Gestion du mode sombre
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.setAttribute('data-theme', 
                document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
            );
            updateDarkModeButton();
        });
    }

    // Gestion du slider booster
    const boosterSlider = document.querySelector('.booster-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.booster-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }

    // Gestion de l'inventaire
    loadInventory();
});

function loadInventory() {
    const inventoryGrid = document.querySelector('.inventory-grid');
    if (!inventoryGrid) return;

    // Simuler le chargement des données (à remplacer par un appel API)
    const inventoryItems = [
        { id: 1, name: "Mona Lisa", rarity: "Légendaire", image: "../img/mona-lisa.jpg" },
        { id: 2, name: "La Nuit étoilée", rarity: "Épique", image: "../img/starry-night.jpg" },
        { id: 3, name: "Le Cri", rarity: "Rare", image: "../img/the-scream.jpg" }
    ];

    inventoryItems.forEach(item => {
        const card = createInventoryCard(item);
        inventoryGrid.appendChild(card);
    });
}

function createInventoryCard(item) {
    const card = document.createElement('div');
    card.className = 'inventory-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="card-content">
            <h3>${item.name}</h3>
            <span class="rarity ${item.rarity.toLowerCase()}">${item.rarity}</span>
        </div>
    `;
    return card;
}