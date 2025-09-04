

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

// Toggle individual FAQ
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
    button.classList.toggle("active");
  });
});

// Toggle view more / view less
const toggleBtn = document.getElementById("toggle-faqs");
toggleBtn.addEventListener("click", () => {
  const extraItems = document.querySelectorAll(".faq-item.extra");
  const isHidden = extraItems[0].style.display === "" || extraItems[0].style.display === "none";

  extraItems.forEach(item => {
    item.style.display = isHidden ? "block" : "none";
  });

  toggleBtn.textContent = isHidden ? "View Less" : "View More";
});


<!-- SwiperJS CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }
  });
</script>

let currentSlide = 1;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n - 1);
    dots[i].classList.toggle("active", i === n - 1);
  });
  currentSlide = n;
}

// Auto slide every 4s
setInterval(() => {
  currentSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
  showSlide(currentSlide);
}, 4000);

// Manual navigation
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const n = parseInt(dot.getAttribute("data-slide"));
    showSlide(n);
  });
});

// Initialize first slide
showSlide(currentSlide);


