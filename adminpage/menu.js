document.addEventListener("DOMContentLoaded", function () {
  // Dropdown
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", () => dropdownMenu.classList.toggle("hidden"));

    document.addEventListener("click", (event) => {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  }

  // Modal
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const productModal = document.getElementById("productModal");
  const discardBtn = document.getElementById("discardBtn");

  if (openModalBtn && closeModalBtn && productModal && discardBtn) {
    openModalBtn.addEventListener("click", () => productModal.classList.remove("hidden"));
    closeModalBtn.addEventListener("click", () => productModal.classList.add("hidden"));

    discardBtn.addEventListener("click", () => {
      document.getElementById("productForm").reset();
      document.getElementById("previewImage").classList.add("hidden");
      document.getElementById("drop-text").classList.remove("hidden");
      productModal.classList.add("hidden");
    });

    productModal.addEventListener("click", (event) => {
      if (event.target === productModal) {
        productModal.classList.add("hidden");
      }
    });
  }

  // Image Upload
  const dropArea = document.getElementById("drop-area");
  const fileInput = document.getElementById("fileInput");
  const previewImage = document.getElementById("previewImage");
  const dropText = document.getElementById("drop-text");

  if (dropArea && fileInput && previewImage && dropText) {
    dropArea.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImage.src = e.target.result;
          previewImage.classList.remove("hidden");
          dropText.classList.add("hidden");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Form Submission
  const productForm = document.getElementById("productForm");
  if (productForm) {
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Product added successfully! (Implement database saving here)");
      productModal.classList.add("hidden");
    });
  }

  // Sidebar Active Indicator
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.sidebar-indicator').forEach(ind => ind.classList.remove('bg-blue-700'));
      this.querySelector('.sidebar-indicator').classList.add('bg-blue-700');
    });
  });

  // Sign Out
  document.getElementById('signOutBtn')?.addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' })
      .then(response => {
        if (response.ok) {
          window.location.href = '/login';
        } else {
          console.error('Logout failed:', response.statusText);
        }
      })
      .catch(error => console.error('Logout error:', error));
  });
});




/*
// action dropdown availability
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });

//------------------ end here

//add product popup form
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const productModal = document.getElementById("productModal");
  const discardBtn = document.getElementById("discardBtn");

  // Show modal when clicking "Add Product"
  openModalBtn.addEventListener("click", () => {
    productModal.classList.remove("hidden");
  });

  // Hide modal when clicking "X" button or "Discard"
  closeModalBtn.addEventListener("click", () => {
    productModal.classList.add("hidden");
  });

  discardBtn.addEventListener("click", () => {
    document.getElementById("productForm").reset();
    document.getElementById("previewImage").classList.add("hidden");
    document.getElementById("drop-text").classList.remove("hidden");
    productModal.classList.add("hidden");
  });

  // Close modal when clicking outside it
  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      productModal.classList.add("hidden");
    }
  });

  // Image upload preview
  const dropArea = document.getElementById("drop-area");
  const fileInput = document.getElementById("fileInput");
  const previewImage = document.getElementById("previewImage");
  const dropText = document.getElementById("drop-text");

  dropArea.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.classList.remove("hidden");
        dropText.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submission alert (connect to database in the backend)
  document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Product added successfully! (Implement database saving here)");
    productModal.classList.add("hidden");
  });

//------------------ end here


//side bar
  // Handle active section styling
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.sidebar-indicator').forEach(ind => ind.classList.remove('bg-blue-700'));
      this.querySelector('.sidebar-indicator').classList.add('bg-blue-700');
    });
  });

  // Sign Out button functionality
  document.getElementById('signOutBtn').addEventListener('click', function () {
    fetch('/api/logout', { method: 'POST' }) // Backend logout endpoint
      .then(response => {
        if (response.ok) {
          window.location.href = '/login';
        }
      })
      .catch(error => console.error('Logout failed:', error));
  });
*/