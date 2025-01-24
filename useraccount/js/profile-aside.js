// Function to load components
function loadComponent(containerId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
      return response.text();
    })
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(error => console.error(error));
}

// Load Header and Sidebar
loadComponent('profile-aside', 'profile-aside.html');
