// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Countdown for the next event
const eventDate = new Date('2024-12-31T23:59:59'); // Replace with actual event date
const countdownElement = document.createElement('div');
countdownElement.id = 'countdown';
document.body.prepend(countdownElement);

function updateCountdown() {
  const now = new Date();
  const timeDifference = eventDate - now;

  if (timeDifference <= 0) {
    countdownElement.textContent = "The event has started!";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
