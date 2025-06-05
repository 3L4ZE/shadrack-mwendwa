function explore() {
  alert("Let the rhythm take over! 🎶");
}

// Scroll animation
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Newsletter submission (mock)
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  document.getElementById('newsletterMessage').textContent = `Thanks for subscribing, ${email}! 🎉`;
  this.reset();
});

// Live filter for artist list
document.getElementById('artistSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('#artistList li').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
});

// Live filter for album list
document.getElementById('albumSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll('#albumList li').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
});
