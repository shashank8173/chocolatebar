let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
 searchForm.classList.toggle('active');
 shoppingCart.classList.remove('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
 RegistrationForm.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>{
 shoppingCart.classList.toggle('active');
 searchForm.classList.remove('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
 RegistrationForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>{
loginForm.classList.toggle('active');
searchForm.classList.remove('active');
 shoppingCart.classList.remove('active');
 navbar.classList.remove('active');
 RegistrationForm.classList.remove('active');
}
// registration
let RegistrationForm = document.querySelector('.registration-form');
document.querySelector('#registration').onclick = ()=>{
RegistrationForm.classList.toggle('active');
loginForm.classList.remove('active');
searchForm.classList.remove('active');
 shoppingCart.classList.remove('active');
 navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
navbar.classList.toggle('active');
searchForm.classList.remove('active');
 shoppingCart.classList.remove('active');
 loginForm.classList.remove('active');
 RegistrationForm.classList.remove('active');
}
window.onscroll = ()=>{
 RegistrationForm.classList.remove('active');
 searchForm.classList.remove('active');
 shoppingCart.classList.remove('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
}

var swiper = new Swiper(".products-slider", {
 loop:true,
 spaceBetween: 20,
 autoplay: {
  delay:7500,
  disableOnInteraction:false,
},
centeredSlides:true,
 breakpoints: {
     0: {
     slidesPerView: 1,
   },
   
   768: {
     slidesPerView: 2,
   },
   1020: {
     slidesPerView: 3,
   },
 },
});

var swiper = new Swiper(".review-slider", {
 loop:true,
 spaceBetween: 20,
 autoplay: {
  delay:7500,
  disableOnInteraction:false,
},
centeredSlides:true,
 breakpoints: {
     0: {
     slidesPerView: 1,
   },
   
   768: {
     slidesPerView: 2,
   },
   1020: {
     slidesPerView: 3,
   },
 },
});
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const quantityInput = document.getElementById('quantity');
const totalPriceSpan = document.getElementById('totalPrice');

// Define prices for each chocolate variant
const chocolatePrices = {
  'Dark Chocolate': 2.50,
  'Milk Chocolate': 2.00,
  // Add prices for other chocolate variants
};

// Event listener for checkboxes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateTotalPrice);
});

// Event listener for quantity input
quantityInput.addEventListener('input', updateTotalPrice);

// Function to calculate and update total price
function updateTotalPrice() {
  let totalPrice = 0;
  let selectedCount = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const chocolateName = checkbox.value;
      const price = chocolatePrices[chocolateName];
      const quantity = parseInt(quantityInput.value);
      totalPrice += price * quantity;
      selectedCount++;
    }
  });

  if (selectedCount > 8) {
    alert("You can select up to 8 items.");
    quantityInput.value = 8;
    updateTotalPrice();
    return;
  }

  totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}


const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatically rotate slides
setInterval(nextSlide, 5000); // Change slide every 5 seconds
