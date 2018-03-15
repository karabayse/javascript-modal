// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for click outside of modal window
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
  console.log('in openModal function');
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  console.log('in closeModal function');
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
  console.log('in outsideClick function');
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
