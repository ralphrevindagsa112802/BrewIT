<!DOCTYPE html>
<html lang="en">
<?php
include("../connection/connection.php");
error_reporting(0);
session_start();
if(isset($_POST['submit']))
{
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	if(!empty($_POST["submit"])) 
     {
	$loginquery ="SELECT * FROM admin WHERE username='$username' && password='".md5($password)."'";
	$result=mysqli_query($db, $loginquery);
	$row=mysqli_fetch_array($result);
	
	                        if(is_array($row))
								{
                                    	$_SESSION["admin_id"] = $row['admin_id'];
										header("refresh:1;url=signup.php");
	                            } 
							else
							    {
										echo "<script>alert('Invalid Username or Password!');</script>"; 
                                }
	 }
	
	
}

?>



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./output.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="admnlogin.js"></script>
    <title>admin login</title>
</head>
<style>
    * {
     font-family: 'Inter', sans-serif;
}
</style>
<body class="flex items-center justify-center min-h-screen bg-gray-100"> 
    <div class="bg-white p-8 rounded-lg shadow-md md:w-1/3 w-100">
        <h2 class="text-2xl font-bold text-center text-blue-800">Yappari Admin Login</h2>
        <p class="text-gray-600 text-center mt-2">Please fill in your unique admin login details below</p>
        
       
  

        <form id="adminLoginForm" class="mt-6" action="dashboard.php" method="post">
            <div class="mb-4">
                <label class="block text-gray-700">Username</label>
                <input type="text" name="username" id="username" class="w-full p-3 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your admin email" required>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700">Password</label>
                <input type="password" name="password" id="password" class="w-full p-3 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your admin password" required>
            </div>

            <div class="text-right mb-4">
                <a href="../adminpage/signup.php" class="text-gray-500 hover:underline">Create account</a>
            </div>

            <button type="submit"  name="submit" value="Login" class="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Sign In
            </button>
        </form>

        <p id="errorMessage" class="text-red-500 text-center mt-4 hidden">Invalid email or password.</p>
    </div>

    <script>
/*
        document.getElementById("adminLoginForm").addEventListener("submit", async function(event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:5000/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                localStorage.setItem("adminToken", data.token);
                window.location.href = "/dashboard.html"; // Redirect to dashboard
            } else {
                document.getElementById("errorMessage").classList.remove("hidden");
            }
        });
    </script>
</body>
</html>