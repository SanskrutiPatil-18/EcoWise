// Waste type data
const wasteData = {
  organic: {
    title: "Organic Waste",
    icon: "fas fa-apple-alt",
    description:
      "Organic waste includes biodegradable materials that can be composted to create nutrient-rich soil. This type of waste makes up the largest portion of household waste and has significant environmental benefits when properly managed.",
    details: {
      title: "What to Include",
      items: [
        "Fruit and vegetable peels and scraps",
        "Coffee grounds and tea bags",
        "Eggshells and nutshells",
        "Garden trimmings and leaves",
        "Bread, pasta, and grain products",
        "Paper towels and napkins (if not contaminated)",
        "Houseplant trimmings",
      ],
    },
    stats: [
      { number: "60%", label: "Of household waste" },
      { number: "30%", label: "Methane reduction" },
      { number: "50%", label: "Less landfill space" },
    ],
  },
  plastic: {
    title: "Plastic Waste",
    icon: "fas fa-wine-bottle",
    description:
      "Plastic waste is one of the most challenging environmental issues. While plastic is versatile and durable, its non-biodegradable nature means it persists in the environment for hundreds of years, causing pollution and harm to wildlife.",
    details: {
      title: "Recycling Codes",
      items: [
        "PET (1) - Water bottles, food containers",
        "HDPE (2) - Milk jugs, detergent bottles",
        "PVC (3) - Pipes, vinyl products",
        "LDPE (4) - Plastic bags, wraps",
        "PP (5) - Yogurt containers, straws",
        "PS (6) - Styrofoam, disposable cups",
        "Other (7) - Mixed plastics, bioplastics",
      ],
    },
    stats: [
      { number: "8.3B", label: "Tons produced" },
      { number: "9%", label: "Recycled globally" },
      { number: "400", label: "Years to decompose" },
    ],
  },
  ewaste: {
    title: "E-Waste",
    icon: "fas fa-mobile-alt",
    description:
      "Electronic waste contains valuable materials like gold, silver, and copper, but also hazardous substances like lead and mercury. Proper e-waste recycling recovers valuable resources while preventing environmental contamination.",
    details: {
      title: "Common Items",
      items: [
        "Smartphones and tablets",
        "Laptops and desktop computers",
        "Batteries and chargers",
        "TVs and computer monitors",
        "Small household appliances",
        "Gaming consoles and devices",
        "Audio and video equipment",
      ],
    },
    stats: [
      { number: "53.6M", label: "Tons in 2019" },
      { number: "17.4%", label: "Properly recycled" },
      { number: "$57B", label: "Value of materials" },
    ],
  },
  metal: {
    title: "Metal & Glass",
    icon: "fas fa-cube",
    description:
      "Metal and glass are among the most recyclable materials on Earth. They can be melted and reformed indefinitely without losing quality, making them perfect examples of circular economy principles.",
    details: {
      title: "Materials",
      items: [
        "Aluminum cans and foil",
        "Steel and tin containers",
        "Clear and colored glass bottles",
        "Copper and brass items",
        "Scrap metal pieces",
        "Aerosol cans (empty)",
        "Metal lids and caps",
      ],
    },
    stats: [
      { number: "∞", label: "Recyclable" },
      { number: "95%", label: "Energy saved" },
      { number: "100%", label: "Quality maintained" },
    ],
  },
  paper: {
    title: "Paper Waste",
    icon: "fas fa-newspaper",
    description:
      "Paper waste is highly recyclable and can be processed into new paper products multiple times. Recycling paper saves trees, reduces water usage, and decreases energy consumption compared to producing new paper.",
    details: {
      title: "Paper Types",
      items: [
        "Newspapers and magazines",
        "Office paper and envelopes",
        "Cardboard boxes and packaging",
        "Paper bags and wrapping paper",
        "Books and notebooks",
        "Paperboard containers",
        "Greeting cards and stationery",
      ],
    },
    stats: [
      { number: "68%", label: "Recycled in US" },
      { number: "40%", label: "Less energy used" },
      { number: "7", label: "Times recyclable" },
    ],
  },
  textile: {
    title: "Textile Waste",
    icon: "fas fa-tshirt",
    description:
      "Textile waste includes clothing, fabrics, and other textile materials. While some textiles can be recycled into new products, many end up in landfills where they contribute to environmental pollution.",
    details: {
      title: "Textile Items",
      items: [
        "Clothing and accessories",
        "Bedding and linens",
        "Towels and rags",
        "Curtains and upholstery",
        "Shoes and bags",
        "Fabric scraps",
        "Carpets and rugs",
      ],
    },
    stats: [
      { number: "92M", label: "Tons annually" },
      { number: "12%", label: "Recycled globally" },
      { number: "200", label: "Years to decompose" },
    ],
  },
};

// Modal functionality
const modalOverlay = document.getElementById("modalOverlay");
const modalCard = document.getElementById("modalCard");
const modalTitle = document.getElementById("modalTitle");
const modalTitleText = document.getElementById("modalTitleText");
const modalIcon = document.getElementById("modalIcon");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBtn");

// Add click event to waste cards
document.querySelectorAll(".waste-card").forEach((card) => {
  card.addEventListener("click", function () {
    const wasteType = this.getAttribute("data-waste-type");
    const data = wasteData[wasteType];

    if (data) {
      // Add flip animation
      this.classList.add("flipping");

      // Populate modal content
      modalTitleText.textContent = data.title;
      modalIcon.className = data.icon;

      modalContent.innerHTML = `
        <p class="modal-description">${data.description}</p>
        
        <div class="modal-details">
            <h4><i class="fas fa-info-circle"></i> ${data.details.title}:</h4>
            <ul>
            ${data.details.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
        
        <div class="modal-stats">
            ${data.stats
              .map(
                (stat) => `
            <div class="modal-stat">
                <span class="modal-stat-number">${stat.number}</span>
                <span class="modal-stat-label">${stat.label}</span>
            </div>
            `
              )
              .join("")}
        </div>
        `;

      // Show modal
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";

      // Remove flip animation after animation completes
      setTimeout(() => {
        this.classList.remove("flipping");
      }, 600);
    }
  });
});

// Close modal functions
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Parallax effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".parallax-bg");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

// Smooth hover effects for cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Active page highlighting
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkText = link.textContent.trim().toLowerCase();
    
    // Check if current page matches the link text
    if (currentPath.includes('chatbot') && linkText === 'chatbot') {
      link.classList.add('active');
    } else if (currentPath.includes('dashboard') && linkText === 'dashboard') {
      link.classList.add('active');
    } else if (currentPath.includes('home') && linkText === 'home') {
      link.classList.add('active');
    } else if (currentPath.includes('faq') && linkText === 'faqs') {
      link.classList.add('active');
    }
  });
});


