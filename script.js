

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
  const hiddenItems = document.querySelectorAll(".faq-item.hidden");
  hiddenItems.forEach(item => {
    item.style.display = item.style.display === "block" ? "none" : "block";
  });

  toggleBtn.textContent =
    toggleBtn.textContent === "View More" ? "View Less" : "View More";
});

