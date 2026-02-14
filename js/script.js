// Hamburger Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Dropdown Menu Toggle
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.parentElement;
  
  // Close other dropdowns
  document.querySelectorAll('.dropdown').forEach(d => {
    if (d !== dropdown) {
      d.classList.remove('active');
    }
  });
  
  dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.querySelector('.navbar');
  if (!nav.contains(event.target)) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('active');
    });
  }
});

// Close menu when link is clicked
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.querySelector('.nav-links');
      menu.classList.remove('active');
    });
  });
});

// Translations Object
const translations = {
  id: {
    "home": "HOME",
    "about": "TENTANG KAMI",
    "tours": "TOUR KAMI",
    "blog": "BLOG",
    "gallery": "GALERI",
    "contact": "KONTAK",
    "welcome-text": "Selamat Datang di Bali Tour",
    "welcome-desc": "Jelajahi keindahan Bali bersama kami",
    "see-tours": "Lihat Paket Tour",
    "tour-packages": "PAKET WISATA",
    "explore-bali": "Jelajahi keindahan Bali",
    "see-all-tours": "Lihat Semua Paket Tour",
    "car-rental": "SEWA MOBIL BALI",
    "best-fleet": "Armada Kendaraan Terbaik untuk Perjalanan Anda",
    "see-all-cars": "Lihat Semua Mobil & Harga",
    "office-location": "Lokasi Kantor",
    "about-us": "Tentang Kami",
    "footer-home": "Home",
    "footer-about": "Tentang Kami",
    "footer-blog": "Blog",
    "footer-gallery": "Galeri",
    "footer-contact": "Kontak",
    "copyright": "&copy; 2024 Bali Tour. All rights reserved.",
    "contact-info": "Hubungi kami: +62 812 3456 7890 | info@balitour.com"
  },
  en: {
    "home": "HOME",
    "about": "ABOUT US",
    "tours": "OUR TOURS",
    "blog": "BLOG",
    "gallery": "GALLERY",
    "contact": "CONTACT",
    "welcome-text": "Welcome to Bali Tour",
    "welcome-desc": "Explore the beauty of Bali with us",
    "see-tours": "See Tour Packages",
    "tour-packages": "TOUR PACKAGES",
    "explore-bali": "Explore the beauty of Bali",
    "see-all-tours": "See All Tour Packages",
    "car-rental": "BALI CAR RENTAL",
    "best-fleet": "Best Fleet of Vehicles for Your Journey",
    "see-all-cars": "See All Cars & Prices",
    "office-location": "Office Location",
    "about-us": "About Us",
    "footer-home": "Home",
    "footer-about": "About Us",
    "footer-blog": "Blog",
    "footer-gallery": "Gallery",
    "footer-contact": "Contact",
    "copyright": "&copy; 2024 Bali Tour. All rights reserved.",
    "contact-info": "Contact us: +62 812 3456 7890 | info@balitour.com"
  }
};

// Language switcher
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Initialize language on page load
function initializeLanguage() {
  const savedLang = localStorage.getItem('language') || 'id';
  setLanguage(savedLang);
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.querySelector('.nav-links');
      menu.classList.remove('active');
    });
  });
});