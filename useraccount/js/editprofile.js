async function fetchUserData() {
  try {
    // Replace the URL with your backend API endpoint
    const response = await fetch("https://your-backend-api.com/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("authToken"), // Example: Use token from localStorage
      },
    });

    if (response.ok) {
      const data = await response.json();

      // Populate profile data
      document.getElementById("userInitials").innerText = getUserInitials(data.firstName, data.lastName);
      document.getElementById("userName").innerText = `${data.firstName} ${data.lastName}`;
      document.getElementById("userAddress").innerText = data.address || "Address not provided";
      document.getElementById("firstName").value = data.firstName || "";
      document.getElementById("lastName").value = data.lastName || "";
      document.getElementById("userNameInput").value = data.userName || "";
      document.getElementById("email").value = data.email || "";
      document.getElementById("location").value = data.location || "";
      document.getElementById("phone").value = data.phone || "";
    } else {
      console.error("Failed to fetch user data:", response.status);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Generate initials from the user's name
function getUserInitials(firstName, lastName) {
  return (
    (firstName?.charAt(0) || "").toUpperCase() +
    (lastName?.charAt(0) || "").toUpperCase()
  );
}

// Event listener for edit functionality
document.getElementById("editProfileBtn").addEventListener("click", () => {
  const inputs = document.querySelectorAll("#profileForm input");
  inputs.forEach((input) => input.removeAttribute("disabled"));
  document.getElementById("saveProfileBtn").classList.remove("hidden");
});

// Save functionality placeholder
document.getElementById("saveProfileBtn").addEventListener("click", async () => {
  const updatedData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value, 
    userName: document.getElementById("userNameInput").value, 
    email: document.getElementById("email").value, 
    location: document.getElementById("location").value, 
    phone: document.getElementById("phone").value,
  };
  
    try {
      // Replace the URL with your backend API endpoint for updating user data
      const response = await fetch("https://your-backend-api.com/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("authToken"),
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        alert("Profile updated successfully!");
        fetchUserData(); // Refresh profile data
      } else {
        console.error("Failed to update user profile:", response.status);
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      alert("An error occurred. Please try again.");
    }
  });
  
  // Initially disable form inputs and fetch user data
  document.querySelectorAll("#profileForm input").forEach((input) => input.setAttribute("disabled", true));
  fetchUserData();