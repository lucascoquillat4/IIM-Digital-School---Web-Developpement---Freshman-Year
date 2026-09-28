//--START SWIPER.js--//
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });
//--END SWIPER.js--//



//--START--Modal Button1 (icon) & Modal Button (exchanges)--//
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('exchangeModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const exchangeForm = document.querySelector('.exchange-form');
    const cardSelect = document.getElementById('cardSelect');

    // Fonction pour mettre à jour la liste des œuvres dans le modal
    function updateExchangeModal() {
        const collection = JSON.parse(localStorage.getItem('collection') || '[]');
        cardSelect.innerHTML = ''; // Vide la liste existante
        
        // Ajoute une option par défaut
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Sélectionnez une œuvre';
        cardSelect.appendChild(defaultOption);
        
        // Ajoute chaque œuvre de la collection
        collection.forEach(artwork => {
            const option = document.createElement('option');
            option.value = artwork.id;
            option.textContent = artwork.title;
            cardSelect.appendChild(option);
        });
    }

    openBtn.addEventListener('click', function() {
        // Vérifie si l'utilisateur est connecté
        if (!isLoggedIn()) {
            alert('Veuillez vous connecter pour proposer un échange');
            return;
        }

        // Vérifie si la collection n'est pas vide
        const collection = JSON.parse(localStorage.getItem('collection') || '[]');
        if (collection.length === 0) {
            alert('Vous devez avoir des œuvres dans votre collection pour proposer un échange');
            return;
        }

        updateExchangeModal(); // Met à jour la liste des œuvres
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeBtn.click();
        }
    });

    exchangeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const person = document.getElementById('personSelect').value;
        const cardId = cardSelect.value;
        
        // Trouve l'œuvre sélectionnée dans la collection
        const collection = JSON.parse(localStorage.getItem('collection') || '[]');
        const selectedArtwork = collection.find(artwork => artwork.id == cardId);

        if (selectedArtwork) {
            console.log('Échange proposé :', {
                person: person,
                artwork: selectedArtwork
            });
            alert(`Échange proposé : ${selectedArtwork.title} avec ${person}`);
        }
        
        closeBtn.click();
    });

    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe slide-in-right
    document.querySelectorAll('.slide-in-right').forEach(element => {
        observer.observe(element);
    });
});
//--END--Modal Button1 (icon) & Modal Button (exchanges)--//

//--START--Contact Form//
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        pseudo: document.getElementById('contactPseudo').value,
        object: document.getElementById('contactObject').value,
        message: document.getElementById('contactMessage').value
    };
    
    console.log('Formulaire de contact soumis:', formData);

    this.reset();
    alert('Message envoyé avec succès!');
});
//--END--Contact Form//


// Configuration de l'API Harvard Art Museums
const apiKey = 'f8d91983-f617-4667-9946-f1d6c3aba244';
const baseUrl = 'https://api.harvardartmuseums.org/object';

// Fonction pour charger les œuvres d'art
async function loadArtworks() {
    try { // Gestion des erreurs
        const params = new URLSearchParams({
            apikey: apiKey,
            classification: 'Paintings',
            size: 5,
            hasimage: 1,
            sort: 'random'
        });

        const response = await fetch(`${baseUrl}?${params}`);
        const data = await response.json();
        
        const artworkContainer = document.getElementById('artworkContainer');
        const infoDiv = document.querySelector('.artwork-info');
        artworkContainer.innerHTML = '';

        // Créer les slides
        data.records.forEach(artwork => {
            if (artwork.primaryimageurl) {
                const slide = createArtworkSlide(artwork);
                artworkContainer.appendChild(slide);
            }
        });

        // Initialiser Swiper
        if (window.swiper) {
            window.swiper.destroy();
        }

        window.swiper = new Swiper('.mySwiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                init: function() {
                    updateArtworkInfo(data.records[0]);
                },
                slideChange: function() {
                    const realIndex = this.realIndex;
                    updateArtworkInfo(data.records[realIndex]);
                }
            }
        });

        function updateArtworkInfo(artwork) {
            infoDiv.innerHTML = `
                <h3>${artwork.title}</h3>
                <p>Date: ${artwork.dated || 'Non disponible'}</p>
            `;

            // Ajouter un bouton pour ajouter à la collection
            const addButton = document.querySelector('.add-collection-btn');
            addButton.onclick = () => addToCollection({
                id: artwork.id,
                title: artwork.title,
                image: artwork.primaryimageurl
            });
        }

    } catch (error) { // Gestion des erreurs
        console.error('Erreur lors du chargement des œuvres:', error);
    }
}

// Charger les œuvres au chargement de la page
document.addEventListener('DOMContentLoaded', loadArtworks);

function createArtworkSlide(artwork) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    slide.innerHTML = `
        <div class="slide-content">
            <button class="favorite-btn ${isArtworkFavorite(artwork.id) ? 'active' : ''}" 
                    onclick="toggleFavorite(${artwork.id}, '${artwork.title}', '${artwork.primaryimageurl}')">
                <svg class="heart-icon" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
            <img src="${artwork.primaryimageurl}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
        </div>
    `;

    return slide;
}

//--START--DarkMode//
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('.icon');
    const darkModeText = darkModeToggle.querySelector('.text');
    
    // Vérifie si un thème est sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateDarkModeButton(savedTheme === 'dark');
    }

    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateDarkModeButton(newTheme === 'dark');
    });

    function updateDarkModeButton(isDark) {
        darkModeIcon.textContent = isDark ? '🌙' : '☀️';
        darkModeText.textContent = isDark ? 'sombre' : 'clair';
    }
});
//--END--DarkMode//

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.getElementById('accountBtn');
    const loginModal = document.getElementById('loginModal');
    const profileModal = document.getElementById('profileModal');

    // Mettre à jour le texte du bouton compte
    function updateAccountButton() {
        accountBtn.textContent = isLoggedIn() ? 'Mon Compte' : 'Connexion';
    }

    // Gérer le clic sur le bouton compte
    accountBtn.addEventListener('click', () => {
        if (isLoggedIn()) {
            profileModal.style.display = 'flex';
        } else {
            loginModal.style.display = 'flex';
        }
        updateCollectionDisplay();
    });

    // Mettre à jour l'interface après connexion
    function handleLogin(username) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        updateAccountButton();
        loginModal.style.display = 'none';
        // Optionnel : afficher directement le profil
        profileModal.style.display = 'flex';
    }

    // Gérer la déconnexion
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        updateAccountButton();
        profileModal.style.display = 'none';
    });

    // Initialiser l'état du bouton au chargement
    updateAccountButton();
});
//--START--Booster Section//
document.addEventListener('DOMContentLoaded', function() {
    const boosterBtn = document.getElementById('boosterBtn');
    const timerText = document.getElementById('boosterTimer');

    function checkBoosterAvailability() {
        const lastBoosterTime = localStorage.getItem('lastBoosterTime');
        const now = new Date().getTime();
        const cooldownPeriod = 600000; // 24 heures en millisecondes: 24 * 60 * 60 * 1000; 60000ms = 6 min//

        if (lastBoosterTime) {
            const timeElapsed = now - parseInt(lastBoosterTime);
            if (timeElapsed < cooldownPeriod) {
                const timeRemaining = cooldownPeriod - timeElapsed;
                const hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
                const minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
                
                boosterBtn.disabled = true;
                timerText.textContent = `Prochain booster disponible dans ${hoursRemaining}h ${minutesRemaining}m`;
                return false;
            }
        }
        
        boosterBtn.disabled = false;
        timerText.textContent = 'Booster disponible !';
        return true;
    }

    async function openBooster() {
        try {
            const params = new URLSearchParams({
                apikey: apiKey,
                classification: 'Paintings',
                size: 20,
                hasimage: 1,
                sort: 'random'
            });

            const response = await fetch(`${baseUrl}?${params}`);
            const data = await response.json();
            
            // Sélectionner 5 œuvres aléatoires
            const randomArtworks = data.records
                .filter(artwork => artwork.primaryimageurl)
                .sort(() => Math.random() - 0.5)
                .slice(0, 5);

            // Ajouter à la collection
            let collection = JSON.parse(localStorage.getItem('collection') || '[]');
            randomArtworks.forEach(artwork => {
                collection.push({
                    id: artwork.id,
                    title: artwork.title,
                    image: artwork.primaryimageurl
                });
            });
            
            localStorage.setItem('collection', JSON.stringify(collection));
            localStorage.setItem('lastBoosterTime', new Date().getTime().toString());

            // Afficher un message de succès
            alert('Félicitations ! 5 nouvelles œuvres ont été ajoutées à votre collection !');
            
            // Mettre à jour le timer
            checkBoosterAvailability();
            
            // Mettre à jour l'affichage de la collection si le profil est ouvert
            updateCollectionDisplay();

        } catch (error) {
            console.error('Erreur lors de l\'ouverture du booster:', error);
            alert('Une erreur est survenue lors de l\'ouverture du booster.');
        }
    }

    boosterBtn.addEventListener('click', function() {
        if (!localStorage.getItem('isLoggedIn')) {
            alert('Veuillez vous connecter pour ouvrir un booster !');
            return;
        }
        openBooster();
    });

    // Vérifier la disponibilité du booster toutes les minutes
    checkBoosterAvailability();
    setInterval(checkBoosterAvailability, 60000);
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.booster-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function updateSlides(direction) {
        slides.forEach(slide => {
            slide.classList.remove('active', 'left', 'right');
        });

        if (direction === 'next') {
            slides[currentSlide].classList.add('left');
            currentSlide = (currentSlide + 1) % slides.length;
        } else if (direction === 'prev') {
            slides[currentSlide].classList.add('right');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        
        slides[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        updateSlides('prev');
    });

    nextBtn.addEventListener('click', () => {
        updateSlides('next');
    });

    // Modifier la fonction openBooster pour prendre en compte le type de booster
    async function openBooster() {
        const boosterTypes = ['MonaLisa', 'LaNuitEtoilee', 'LeCri'];
        const currentType = boosterTypes[currentSlide];
        try {
            const params = new URLSearchParams({
                apikey: apiKey,
                classification: 'Paintings',
                size: 20,
                hasimage: 1,
                sort: 'random'
            });

            const response = await fetch(`${baseUrl}?${params}`);
            const data = await response.json();
            
            // Sélectionner 5 œuvres aléatoires
            const randomArtworks = data.records
                .filter(artwork => artwork.primaryimageurl)
                .sort(() => Math.random() - 0.5)
                .slice(0, 5);

            // Ajouter à la collection
            let collection = JSON.parse(localStorage.getItem('collection') || '[]');
            randomArtworks.forEach(artwork => {
                collection.push({
                    id: artwork.id,
                    title: artwork.title,
                    image: artwork.primaryimageurl,
                    type: currentType
                });
            });
            
            localStorage.setItem('collection', JSON.stringify(collection));
            localStorage.setItem('lastBoosterTime', new Date().getTime().toString());

            // Afficher un message de succès
            alert(`Félicitations ! 5 nouvelles œuvres (${currentType}) ont été ajoutées à votre collection !`);
            
            // Mettre à jour le timer
            checkBoosterAvailability();
            
            // Mettre à jour l'affichage de la collection si le profil est ouvert
            updateCollectionDisplay();

        } catch (error) {
            console.error('Erreur lors de l\'ouverture du booster:', error);
            alert('Une erreur est survenue lors de l\'ouverture du booster.');
        }
    }
});
//--END--Booster Section//

//--START--Favorite Button//
function isArtworkFavorite(artworkId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(fav => fav.id === artworkId);
}

function toggleFavorite(id, title, image) {
    if (!localStorage.getItem('isLoggedIn')) {
        alert('Veuillez vous connecter pour ajouter des favoris');
        return;
    }

    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.findIndex(fav => fav.id === id);

    if (index === -1) {
        // Ajouter aux favoris
        favorites.push({ id, title, image });
        const btn = event.currentTarget;
        btn.classList.add('active');
    } else {
        // Retirer des favoris
        favorites.splice(index, 1);
        const btn = event.currentTarget;
        btn.classList.remove('active');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}
//--END--Favorite Button//

// Gestion de l'inventaire
function loadInventory() {
    const inventoryGrid = document.querySelector('.inventory-grid');
    
    // Exemple de données (à remplacer par vos données réelles)
    const inventoryItems = [
        {
            id: 1,
            name: "Œuvre 1",
            image: "../images/artwork1.jpg",
            rarity: "Rare",
            date: "2025-04-30"
        },
        // Ajoutez d'autres items selon vos besoins
    ];

    inventoryItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'inventory-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Rareté : ${item.rarity}</p>
            <p>Acquis le : ${item.date}</p>
        `;
        inventoryGrid.appendChild(card);
    });
}

// Charger l'inventaire quand la page est prête
document.addEventListener('DOMContentLoaded', loadInventory);