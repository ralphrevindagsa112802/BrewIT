/*

document.addEventListener('DOMContentLoaded', async () => {
  const userId = 'YOUR_USER_ID'; // Replace with dynamic session ID or user token
  
  try {
    // Fetch user details
    const response = await fetch(`/api/user/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user details');
    const user = await response.json();

    // Populate dropdown
    document.getElementById('username').textContent = user.username;
    if (user.profilePicture) {
      document.getElementById('profilePicture').style.backgroundImage = `url(${user.profilePicture})`;
      document.getElementById('profilePicture').style.backgroundSize = 'cover';
    }

    // Account and Cart links
    document.getElementById('accountLink').href = `/account/${userId}`;
    document.getElementById('cartLink').href = `/cart/${userId}`;
  } catch (error) {
    console.error(error);
  }

  // Logout button
  document.getElementById('logoutButton').addEventListener('click', async () => {
    try {
      const logoutResponse = await fetch('/api/logout', { method: 'POST' });
      if (!logoutResponse.ok) throw new Error('Logout failed');
      alert('Logged out successfully');
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      console.error(error);
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {


  
  const profileButton = document.getElementById('profileButton');
  const profileDropdown = document.getElementById('profileDropdown');

  // Show the dropdown when the profile button is clicked
  profileButton.addEventListener('click', (e) => {
    // Prevent the event from bubbling up to the document
    e.stopPropagation();

    // Toggle the 'hidden' class to show/hide the dropdown
    profileDropdown.classList.toggle('hidden');
    console.log('Dropdown visibility toggled:', profileDropdown.classList.contains('hidden') ? 'Hidden' : 'Visible');
  });

  // Close the dropdown when clicking anywhere else on the page
  document.addEventListener('click', (e) => {
    // Check if the clicked target is not the profile button or dropdown
    if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
      if (!profileDropdown.classList.contains('hidden')) {
        profileDropdown.classList.add('hidden');
        console.log('Dropdown closed because of outside click');
      }
    }
  });

  // Prevent closing the dropdown if clicking inside the dropdown
  profileDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Clicked inside dropdown');
  });
});

*/

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  // Check if navbar content is dynamically loaded
  const observeNavbar = new MutationObserver(() => {
    const profileButton = document.getElementById('profileButton');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileButton && profileDropdown) {
      console.log('Navbar loaded, attaching dropdown logic.');

      // Stop observing once we find the elements
      observeNavbar.disconnect();

      // Toggle dropdown visibility on button click
      profileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('hidden');
        console.log('Dropdown toggled:', profileDropdown.classList.contains('hidden') ? 'Hidden' : 'Visible');
      });

      // Close dropdown on clicking outside
      document.addEventListener('click', (e) => {
        if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
          profileDropdown.classList.add('hidden');
          console.log('Dropdown closed because of outside click');
        }
      });

      // Prevent dropdown closure when clicking inside it
      profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    } else {
      console.log('Navbar content not yet loaded.');
    }
  });

  // Start observing navbar for content changes
  observeNavbar.observe(navbar, { childList: true, subtree: true });
});



