//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
const hamburger = document.getElementById("ham");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("open");
});
});
