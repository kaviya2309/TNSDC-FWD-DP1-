// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submit action (demo)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting me!");
  this.reset();
});