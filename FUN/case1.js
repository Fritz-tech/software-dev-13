// Function to show the login overlay
function login() {
  document.getElementById('loginOverlay').style.display = 'flex';
}

// Function to close the login overlay
function closeLogin() {
  document.getElementById('loginOverlay').style.display = 'none';
}

// Function to filter food items based on search input
function myFun() {
  const input = document.getElementById('inp').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      const title = card.querySelector('h2').innerText.toLowerCase();
      if (title.includes(input)) {
          card.style.display = 'block'; // Show card if it matches
      } else {
          card.style.display = 'none'; // Hide card if it doesn't match
      }
  });
}

// Function to toggle navigation (if needed)
function nav() {
  // Placeholder for future navigation logic
  alert('Navigation menu will be here.');
}