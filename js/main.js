const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();


// Animate metrics on scroll
function animateMetrics() {
	document.querySelectorAll('.metric-counter').forEach(counter => {
	  const target = +counter.dataset.target;
	  const increment = target / 100;
	  let current = 0;
	  
	  const timer = setInterval(() => {
		current += increment;
		counter.textContent = Math.floor(current) + (target < 0 ? '' : '%');
		if (Math.abs(current - target) < Math.abs(increment)) {
		  counter.textContent = target + '%';
		  clearInterval(timer);
		}
	  }, 20);
	});
  }
  
  // Trigger when hero visible
  const observer = new IntersectionObserver(entries => {
	if (entries[0].isIntersecting) animateMetrics();
  });
  observer.observe(document.querySelector('.hero-card'));
  