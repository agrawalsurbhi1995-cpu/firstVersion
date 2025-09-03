// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission success message (works with Formspree's redirect)
document.getElementById('booking-form').addEventListener('submit', function(e) {
  const msg = document.getElementById('form-msg');
  msg.textContent = "Submitting...";
  setTimeout(() => { msg.textContent = "Thank you! We have received your appointment request."; }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close others
      faqs.forEach(item => {
        if (item !== faq) item.classList.remove("active");
      });
      // Toggle this one
      faq.classList.toggle("active");
    });
  });
});
