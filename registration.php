<!DOCTYPE html>
<html lang="en">

<?php
session_start(); 
error_reporting(0); 
include("connection/connection.php"); 
if(isset($_POST['submit'] )) 
{
     if(empty($_POST['firstname']) || 
   	    empty($_POST['lastname'])|| 
        empty($_POST['username']) ||
		    empty($_POST['phone'])||
	      empty($_POST['password'])||
        empty($_POST['address'] )||
		    empty($_POST['cpassword']) ||
		    empty($_POST['cpassword']))

		{
			$message = "All fields must be Required!";
		}
	else
	{
	
	$check_username= mysqli_query($db, "SELECT username FROM users where username = '".$_POST['username']."' ");
	$check_email = mysqli_query($db, "SELECT email FROM users where email = '".$_POST['email']."' ");
		

	
	if($_POST['password'] != $_POST['cpassword']){  
       	
          echo "<script>alert('Password not match');</script>"; 
    }
	elseif(strlen($_POST['password']) < 6)  
	{
      echo "<script>alert('Password Must be >=6');</script>"; 
	}
	elseif(strlen($_POST['phone']) < 10)  
	{
      echo "<script>alert('Invalid phone number!');</script>"; 
	}

    elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) 
    {
          echo "<script>alert('Invalid email address please type a valid email!');</script>"; 
    }
	elseif(mysqli_num_rows($check_username) > 0) 
     {
       echo "<script>alert('Username Already exists!');</script>"; 
     }
	elseif(mysqli_num_rows($check_email) > 0) 
     {
       echo "<script>alert('Email Already exists!');</script>"; 
     }
	else{
       
	 
	$mql = "INSERT INTO users(username,f_name,l_name,email,phone,password,address) VALUES('".$_POST['username']."','".$_POST['firstname']."','".$_POST['lastname']."','".$_POST['email']."','".$_POST['phone']."','".md5($_POST['password'])."','".$_POST['address']."')";
	mysqli_query($db, $mql);
	
  header("Location: ./useraccount/homeacc.html");     }
	}

}
?>


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yappari Coffee Bar - Signup</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/css/nav.css">
</head>
<style>
  * {
   font-family: 'Inter', sans-serif;
}
</style>
<body>



  <div class="bg-[#1C359A] flex flex-col md:flex-row items-center justify-center min-h-screen">
    <!-- Left Section -->
    <div class="flex flex-col justify-start w-1/3 md:w-1/2 text-white h-full">
     
      <div class="flex flex-col items-center min-h-screen justify-start">
        <!-- First Image: Larger Image -->
        <div class="w-3/4 md:w-2/3">
          <img src="./img/YCB LOGO (CREAM) (1).png" alt="YCB Logo" class="w-full h-auto object-contain">
        </div>
      
        <!-- Second Image: Smaller Image -->
        <div class="w-2/3 md:w-1/2">
          <img src="./img/cafeviennaNobg.png" alt="Coffee and Croissant" class="w-full h-auto object-contain">
        </div>
      </div>
      
      
    </div>

    <!-- Right Section -->
    <div class="w-2/3 md:w-2/3 bg-white rounded-lg p-8 shadow-lg h-full ">

      <div class="flex justify-between items-center px-4 py-2 text-gray-600 text-sm mb-6">
        <!-- Left Section: Return Home -->
        <a href="home.html" class="flex items-center hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Return Home
        </a>
      
        <!-- Right Section: Join Now -->
          <div>
          <span>Already have an account?</span>
          <a href="login.php" class="text-[#1C359A] font-bold hover:underline">LOGIN NOW</a>
        </div>
      </div>
      
      <!--main content-->
      <div class="text-center">
        <h2 class="text-2xl font-bold text-[#1C359A]">WELCOME TO YAPPARI COFFEE BAR!</h2>
        <p class="mt-2 text-gray-600">"Log in now and enjoy fresh coffee delivered to your door!"</p>
      </div>

      <form method="post" class="mt-6 flex items-center justify-center flex-col">
        <div class="mb-4">
          <label for="exampleInputEmail1" class="sr-only">Firstname</label> <!--Firstname-->
          <input type="text" id="example-text-input" placeholder="Enter Firstname" name="firstname"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4 relative"> <!--lastname-->
          <label for="exampleInputEmail1" class="sr-only">Lastname</label>
          <input type="text" id="example-text-input-2" placeholder="Enter Lastname" name="lastname"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4"> <!--username-->
          <label for="exampleInputEmail1" class="sr-only">Username</label>
          <input type="text" id="example-text-input-2" placeholder="Enter Username" name="username"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4 relative"> <!--location-->
          <label for="exampleTextarea" class="sr-only">Location</label>
          <input type="text" id="exampleTextarea" placeholder="Enter Location" name="address" rows="3"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        
        <div class="mb-4"> <!--number-->
          <label for="exampleInputEmail1" class="sr-only">Number</label>
          <input type="number" id="example-tel-input-3" placeholder="Enter Number" name="phone"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4"> <!--number-->
          <label for="exampleInputEmail1" class="sr-only">Email Address</label>
          <input type="text" id="example-tel-input-3" placeholder="Enter email address" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4 relative"> <!--password-->
          <label for="exampleInputPassword1" class="sr-only">Password</label>
          <input type="password" id="exampleInputPassword1" placeholder="Enter password" name="password"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <button type="button" class="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600">Show</button>
        </div>

        
        <div class="mb-4 relative"> <!--confirm password-->
          <label for="exampleInputPassword1" class="sr-only" >Confirm Password</label>
          <input type="password" id="exampleInputPassword2" placeholder="Enter password" name="cpassword"
            class="w-96 px-4 py-2 border border-[#1C359A] rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <button type="button" class="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-600">Show</button>
        </div>

        <div class="flex items-center justify-between">
          <button type="submit" value="Register" name="submit" id=""
            class="w-96 py-2 px-4 bg-[#1C359A] text-white font-bold rounded-lg hover:bg-blue-700 transition">SIGNUP</button>
        </div>
      </form>

      <div class="text-center mt-4">
        <a href="#" class="text-sm text-[#1C359A] hover:underline">Having issues with your password?</a>
      </div>

      <h1 class="text-sm text-gray-500 text-center mt-4">OR</h1>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <span class="w-1/5 border-b border-gray-300"></span>
          <span class="text-xl text-[#1C359A] font-black">Login with</span>
          <span class="w-1/5 border-b border-gray-300"></span>
        </div>
        <div class="text-center mt-4 flex items-center justify-center flex-col">
          <p class="text-gray-600 mb-2">"Your perfect brew is just a click away!"</p>
          <button type="button"
            class="flex items-center justify-center w-96 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img src="https://www.freepik.com/free-photos-vectors/google-logo" alt="Google" class="mr-2"> Login with Google
          </button>
        </div>
      </div>

    </div>
  </div>

  
  <script src="js/jquery.min.js"></script>
    <script src="js/tether.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/animsition.min.js"></script>
    <script src="js/bootstrap-slider.min.js"></script>
    <script src="js/jquery.isotope.min.js"></script>
    <script src="js/headroom.js"></script>
    <script src="js/foodpicky.min.js"></script>
</body>

</html>