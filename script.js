// Dog breed data
const breeds = [
  {
    name: "Labrador Retriever",
    origin: "Canada",
    size: "Large",
    lifespan: "10-12 years",
    temperament: "Friendly, Outgoing, Gentle",
    grooming: "Low maintenance",
    images: [
      "images/labrador3.jfif",
      "images/labrador1.jfif",
      "images/labrador2.jfif",
      "images/labrador4.jfif"
    ]
  },
  {
    name: "German Shepherd",
    origin: "Germany",
    size: "Large",
    lifespan: "9-13 years",
    temperament: "Loyal, Courageous, Smart",
    grooming: "Moderate",
    images: [
      "images/german.jfif",
      "images/german1.jfif",
      "images/german2.jfif"
    ]
  },
  {
    name: "Beagle",
    origin: "England",
    size: "Medium",
    lifespan: "12-15 years",
    temperament: "Curious, Friendly, Energetic",
    grooming: "Low maintenance",
    images: [
      "images/beagle.jfif",
      "images/beagle1.jfif",
      "images/beagle2.jfif"
    ]
  },
  {
    name: "Pomeranian",
    origin: "Germany/Poland",
    size: "Small",
    lifespan: "12-16 years",
    temperament: "Lively, Bold, Inquisitive",
    grooming: "High maintenance",
    images: [
      "images/pomeranian.jfif",
      "images/pomeranian1.jfif",
      "images/pomeranian2.jfif"
    ]
  },
  {
    name: "Golden Retriever",
    origin: "Scotland",
    size: "Large",
    lifespan: "10-12 years",
    temperament: "Intelligent, Kind, Trustworthy",
    grooming: "Moderate",
    images: [
      "images/golden.jfif",
      "images/golden1.jfif",
      "images/golden2.jfif"
    ]
  },
  {
    name: "Bulldog",
    origin: "England",
    size: "Medium",
    lifespan: "8-10 years",
    temperament: "Docile, Willful, Friendly",
    grooming: "Low maintenance",
    images: [
      "images/bulldog.jfif",
      "images/bulldog1.jfif",
      "images/bulldog2.jfif"
    ]
  }
];

// Load breed grid
function loadBreeds(filter = "") {
  const grid = document.getElementById("breedGrid");
  if (!grid) return;

  grid.innerHTML = "";
  breeds
    .filter(b => b.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(breed => {
      const card = document.createElement("div");
      card.classList.add("breed-card");

      const images = Array.isArray(breed.images) ? breed.images : [breed.images];

      // Card UI
      card.innerHTML = `
        <div class="carousel">
          ${images.map((img, i) => `
            <img src="${img}" class="${i === 0 ? "active" : ""}">
          `).join("")}
          <button class="prev">‹</button>
          <button class="next">›</button>
        </div>

        <h3>${breed.name}</h3>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>Size:</strong> ${breed.size}</p>
      `;

      // Open details page
      card.addEventListener("click", () => {
        localStorage.setItem("selectedBreed", JSON.stringify(breed));
        window.location.href = "breed.html";
      });

      grid.appendChild(card);

      // Carousel functionality
      let imgs = card.querySelectorAll(".carousel img");
      let idx = 0;

      function updateCarousel() {
        imgs.forEach(img => img.classList.remove("active"));
        imgs[idx].classList.add("active");
      }

      // Manual buttons
      card.querySelector(".next").addEventListener("click", (e) => {
        e.stopPropagation();
        idx = (idx + 1) % imgs.length;
        updateCarousel();
      });

      card.querySelector(".prev").addEventListener("click", (e) => {
        e.stopPropagation();
        idx = (idx - 1 + imgs.length) % imgs.length;
        updateCarousel();
      });

      // 🔥 AUTOPLAY (every card independent)
      setInterval(() => {
        idx = (idx + 1) % imgs.length;
        updateCarousel();
      }, 3000);
    });
}

// Search functionality
const searchInput = document.getElementById("breedSearch");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    loadBreeds(searchInput.value);
  });
}

// Load details page
if (window.location.pathname.includes("breed.html")) {
  const breed = JSON.parse(localStorage.getItem("selectedBreed"));
  if (breed) {
    
    document.getElementById("breedName").textContent = breed.name;
    document.getElementById("breedDesc").textContent = 
      `${breed.name} is a ${breed.size} dog breed from ${breed.origin}.`;

    // Render breed details with carousel
    document.getElementById("breedDetail").innerHTML = `
      <div class="breed-card" style="max-width: 800px; margin: auto;">
        
        <div class="carousel">
          ${breed.images.map((img, i) => `
            <img src="${img}" class="${i === 0 ? "active" : ""}">
          `).join("")}
          <button class="prev">‹</button>
          <button class="next">›</button>
        </div>

        <h3>${breed.name}</h3>
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>Size:</strong> ${breed.size}</p>
        <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
        <p><strong>Temperament:</strong> ${breed.temperament}</p>
        <p><strong>Grooming:</strong> ${breed.grooming}</p>
      </div>
    `;

    // Carousel functionality (same as card page)
    const imgs = document.querySelectorAll(".carousel img");
    let idx = 0;

    function updateCarousel() {
      imgs.forEach(img => img.classList.remove("active"));
      imgs[idx].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", () => {
      idx = (idx + 1) % imgs.length;
      updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", () => {
      idx = (idx - 1 + imgs.length) % imgs.length;
      updateCarousel();
    });

    setInterval(() => {
      idx = (idx + 1) % imgs.length;
      updateCarousel();
    }, 3500);
  }
}


// Load breeds
if (document.getElementById("breedGrid")) {
  loadBreeds();
}
// Carousel functionality
let imgs = card.querySelectorAll(".carousel img");
let idx = 0;

function updateCarousel() {
  imgs.forEach(img => img.classList.remove("active"));
  imgs[idx].classList.add("active");
}

// Manual buttons
card.querySelector(".next").addEventListener("click", (e) => {
  e.stopPropagation();
  idx = (idx + 1) % imgs.length;
  updateCarousel();
});

card.querySelector(".prev").addEventListener("click", (e) => {
  e.stopPropagation();
  idx = (idx - 1 + imgs.length) % imgs.length;
  updateCarousel();
});

// 🔥 AUTOPLAY (each card independent)
setInterval(() => {
  idx = (idx + 1) % imgs.length;
  updateCarousel();
}, 3000);
