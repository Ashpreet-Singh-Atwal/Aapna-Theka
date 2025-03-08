const http = require('http');
const qs = require('querystring');
const fs = require('fs'); // Import fs to read files

// Handle errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode;
    res.write(message);
    res.end();
}

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(`Request method: ${req.method} | URL: ${req.url}`);

    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write(beer);
            res.end();
        }
        else if (req.url === "/Select.png") {
            fs.readFile('/Select.png', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/homepage') {
            res.write(homepage);
            res.end();
            // fs.readFile('./beer.html', (err, data) => {
            //     if (err) {
            //         handleError(res, 500, 'Error loading beer');
            //     } else {
            //         res.write(data);
            //         res.end();
            //     }
            // });
        }
        else if (req.url === '/vodka.jpg') {
            fs.readFile('./vodka.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/wine.jpg') {
            fs.readFile('./wine.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/wine') {
            res.write(wine);
            res.end();
        }
        else if (req.url === '/whiskey.jpg') {
            fs.readFile('./whiskey.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/whiskey') {
            res.write(whiskey);
            res.end();
        }
        else if (req.url === '/rum.jpg') {
            fs.readFile('./rum.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/rum') {
            res.write(rum);
            res.end();
        }
        else if (req.url === '/gin.jpg') {
            fs.readFile('./gin.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/gin') {
            res.write(gin);
            res.end();
        }
        else if (req.url === '/champagne') {
            res.write(champagne);
            res.end();
        }
        else if (req.url === '/champagne.jpg') {
            fs.readFile('./champagne.jpg', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/homepagevideo.mp4') {
            fs.readFile('./homepagevideo.mp4', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/aboutusvideo.mp4') {
            fs.readFile('./aboutusvideo.mp4', (err, data) => {
                if (err) {
                    handleError(res, 500, 'Error loading beer');
                } else {
                    res.write(data);
                    res.end();
                }
            });
        }
        else {
            handleError(res, 404, 'Route not found');
        }
    }
});



// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


// Home Page HTML
let homepage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aapna Theka</title>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <style>
    /* Reset margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Navbar Styling */
.navbar {
    background-color: #333;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .navbar-brand {
    color: #FFD700;
    font-size: 40px;
}

.nav-links {
    list-style: none;
}

.nav-links li {
    display: inline;
    margin-left: 20px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.nav-links a:hover {
    text-decoration: underline;
}

/* Home Section */
#home {
    text-align: center;
    padding: 50px 20px;
}

#home h1 {
    font-size: 40px;
    margin-bottom: 20px;
    color: blue;
}

#home h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: purple;
}

#home p {
    font-size: 18px;
    line-height: 1.6;
    color: #e10e0e;
}

/* Product Section */
#products {
    padding: 40px 20px;
}

#home {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  overflow: hidden;
}
#home #bgVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}
#home .container3 {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  margin: 150px 150px;
}

/* Main Drinks Heading */
#products h1 {
    font-size: clamp(40px, 8vw, 60px); /* Responsive font size */
    font-weight: bold;
    color: #FFD700; /* Golden Yellow */
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin: 0 auto 50px auto; /* Center and add spacing */
    max-width: 99%; /* Prevent heading from exceeding the screen */
    perspective: 500px; /* Adds a 3D effect */
    animation: floatEffect 3s ease-in-out infinite;
    word-wrap: break-word; /* Ensures text wraps if needed */
    line-height: 1.2; /* Better spacing between lines */
  }
  
  /* Layered Shadow Effect */
  #products h1::before {
    content: "Drinks"; /* Shadow layer text */
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    color: rgba(255, 215, 0, 0.6); /* Softer Golden Yellow */
    z-index: -1;
    transform: rotateX(15deg) skewX(10deg); /* 3D depth effect */
    filter: blur(4px);
  }
  
  /* Glowing Golden Border */
  #products h1::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 3px solid rgba(255, 223, 0, 0.8); /* Bright Golden Yellow */
    border-radius: 10px;
    animation: glowPulse 2s infinite;
    z-index: -2;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.8);
  }
  
  /* Floating Animation */
  @keyframes floatEffect {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Golden Glow Animation */
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.8);
    }
    50% {
      box-shadow: 0 0 25px rgba(255, 255, 0, 1), 0 0 40px rgba(255, 239, 0, 1);
    }
  }


.container4 {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.product {
    padding-left: 30px;
    display: flex;
    align-items: center;
    gap: 60px;
}

.product.reverse {
    padding-right: 30px;
    justify-content: right;
    align-items: center; /* Align items vertically in the center */
    gap: 60px; /* Maintain spacing between description and image */
}


.product img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description {
    max-width: 800px;
}

.description h5 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.description p {
    font-size: 1em;
    color: #333;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .product {
        flex-direction: column; /* Stack items vertically for smaller screens */
    }

    .product.reverse {
        flex-direction: column; /* No need for reverse on mobile */
    }

    .product img {
        width: 100%;
        height: auto;
    }
}

/* Style for the "Buy Now" button */
.buy-now {
    background-color: #FFD700; /* Gold color for the button */
    color: #000; /* Black text */
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px; /* Space between the product description and button */
  }
  
  .buy-now:hover {
    background-color: #FF8C00; /* Darker gold color on hover */
    transform: translateY(-2px); /* Slight upward movement on hover */
  }
  
  .buy-now:active {
    background-color: #e67e22; /* Slightly darker color when the button is clicked */
    transform: translateY(1px); /* Slight downward movement on click */
  }
  
  .buy-now:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px 2px rgba(255, 140, 0, 0.5); /* Glow effect on focus */
  }
  

/* About Section */
#about {
    padding: 40px 20px;
}

#about h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    color: orange;
}

#about p {
    text-align: center;
    font-size: 18px;
    line-height: 1.8;
    padding-left: 200px;
    padding-right: 200px;
}

#about {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  
}
#about #bgVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 96.5%;
  min-height: 96.5%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}
#about .container2 {
  position: relative;
  z-index: 1;
  color: yellow;
  text-align: center;
}


/* Contact Section */
#contact {
    background-color: #fff;
    padding: 50px 20px;
}

.flex-container {
    display: flex;
    justify-content: space-between;
}

.left-section {
    flex: 1;
    padding: 20px;
}

.right-section {
    flex: 1;
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

form .form-row div {
    width: 48%;
}

form label {
    font-size: 16px;
    margin-bottom: 5px;
}

form input,
form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
}

form button {
    padding: 10px 20px;
    background-color: #FFD700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #FFBF00;
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
    #category-section {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
    }

    .navbar .nav-links {
        display: block;
        text-align: center;
    }

    .flex-container {
        flex-direction: column;
    }

    .left-section,
    .right-section {
        flex: 1 100%;
        padding: 10px;
    }
}
  </style>
</head>
<body>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: #FFD700; font-size: 40px; top: 2px;"><strong>Aapna Theka</strong></a>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>


  <!-- Home Section -->
  <section id="home">
    <video autoplay muted loop id="bgVideo">
      <source src="homepagevideo.mp4" type="video/mp4">
    </video>
    <div class="container3">
      <h1>Welcome to Aapna Theka</h1>
      <h3>Pouring Perfection in Every Pint</h3>
      <p><strong>Welcome to Aapna Theka, your premier destination for quality liquors from around the world. Whether you're an enthusiast or just looking to try something new, we offer a carefully selected range of spirits, wines, and beers to elevate your experience. Discover our rotating menu of best-selling and exclusive products, and find your perfect drink today. Cheers to great spirits and memorable moments!</strong></p>
    </div>
  </section>

  <!-- Category Section -->
  <section id="products" class="section">
    <h1>Drinks</h1>
    <div class="container4">
        <div class="product">
            <img src="beer.jpg" alt="Beer">
            <div class="description">
                <h5>Beer</h5>
                <p>Beer is one of the oldest and most widely consumed alcoholic drinks, made from barley, hops, yeast, and water. Its flavors can range from light and refreshing to rich and robust, with countless varieties such as lagers, ales, stouts, and IPAs to suit all tastes.</p>
                <button class="buy-now"><a href="/beer">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Vodka</h5>
                <p>Vodka is a clear, distilled spirit known for its smoothness and versatility in cocktails. Made primarily from grains or potatoes, it has a neutral flavor that blends well in drinks like the classic Moscow Mule or a Bloody Mary.</p>
                <button class="buy-now"><a href="/vodka">Buy Now</a></button>
            </div>
            <img src="vodka.jpg" alt="Vodka">
        </div>
        <div class="product">
            <img src="wine.jpg" alt="Wine">
            <div class="description">
                <h5>Wine</h5>
                <p>Wine is a sophisticated beverage crafted from fermented grapes or other fruits, offering a wide spectrum of flavors and aromas. Red, white, rosé, and sparkling wines each bring unique characteristics, making it the perfect accompaniment to a variety of cuisines.</p>
                <button class="buy-now"><a href="/wine">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Whiskey</h5>
                <p>Whiskey is a rich, distilled spirit made from fermented grains, aged in wooden barrels, which imparts deep flavors like caramel, vanilla, and oak. Varieties such as Scotch, Bourbon, and Irish whiskey have distinct qualities, offering a smooth, warming experience.</p>
                <button class="buy-now"><a href="/whiskey">Buy Now</a></button>
            </div>
            <img src="whiskey.jpg" alt="Whiskey">
        </div>
        <div class="product">
            <img src="rum.jpg" alt="Rum">
            <div class="description">
                <h5>Rum</h5>
                <p>Rum is a sweet, distilled spirit made from sugarcane byproducts like molasses or cane juice. Available in light, dark, spiced, and aged varieties, rum adds a tropical flair to cocktails like the Mojito or Piña Colada.</p>
                <button class="buy-now"><a href="/rum">Buy Now</a></button>
            </div>
        </div>
        <div class="product reverse">
            <div class="description">
                <h5>Gin</h5>
                <p>Gin is a distilled spirit flavored with juniper berries and other botanicals. Known for its crisp, aromatic profile, gin is the base of many classic cocktails, such as the Gin & Tonic or Martini, making it a favorite for those who appreciate a fragrant, herbal taste.</p>
                <button class="buy-now"><a href="/gin">Buy Now</a></button>
            </div>
            <img src="gin.jpg" alt="Gin">
        </div>
        <div class="product">
            <img src="champagne.jpg" alt="Champagne">
            <div class="description">
                <h5>Champagne</h5>
                <p>Champagne is a sparkling wine produced in the Champagne region of France, made primarily from Pinot Noir, Chardonnay, and Pinot Meunier grapes. Known for its light, bubbly texture and crisp flavor, Champagne is the drink of celebration and luxury.</p>
                <button class="buy-now"><a href="/champagne">Buy Now</a></button>
            </div>
        </div>
    </div>
</section>


  <!-- About Us Section -->
  <section id="about" class="section">
    <video autoplay muted loop id="bgVideo">
      <source src="aboutusvideo.mp4" type="video/mp4">
    </video>
    <div class="container2">
        <h2 class="text-center">About Us</h2>
        <p class="text-center"><strong>
            Welcome to Aapna Theka, where our journey into the world of exceptional liquors began over a decade ago. Our story is one of dedication, craftsmanship, and a deep appreciation for fine spirits.
        </strong></p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Journey</strong><br>
            Founded in 2012, Aapna Theka started as a small, family-owned shop with a vision to bring the finest and most diverse selection of liquors to our community. Our founders, a group of spirit enthusiasts with decades of collective experience, aimed to create a space where people could explore, taste, and appreciate the rich world of alcohol.
        </p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Evolution</strong><br>
            From our humble beginnings, we’ve grown significantly. What started as a modest store has evolved into a premier destination for liquor lovers. We’ve expanded our offerings to include a wide range of international and local spirits, each chosen for its unique flavor profile and quality.
        </p>
        <p class="text-center">
            <strong style="font-size: 23px;">Our Commitment</strong><br>
            At Aapna Theka, we’re committed to offering not just liquors, but experiences. Our rotating selection of best-selling and exclusive products is carefully curated to ensure that every visit brings something new and exciting. Our knowledgeable staff is always on hand to guide you through our selection, answer your questions, and help you find the perfect drink for any occasion.
        </p>
        <p class="text-center" style="font-size: 30px;">
            <strong>Cheers, The Aapna Theka Team</strong>
        </p>
    </div>
</section>


  <!-- Contact Section -->
  <section id="contact">
    <div class="container1">
      <div class="flex-container">
        <div class="left-section">
          <h1><strong>Get in Touch!</strong></h1>
          <p><strong>If you have any questions about our products or would be interested in stocking us, please complete the form and a member of our team will be in touch.</strong></p>
        </div>
    
        <div class="right-section">
          <form>
            <div class="form-row">
              <div>
                <label for="firstName"><strong>First Name</strong></label>
                <input type="text" id="firstName" name="firstName">
              </div>
              <div>
                <label for="lastName"><strong>Last Name</strong></label>
                <input type="text" id="lastName" name="lastName">
              </div>
            </div>
            <div>
              <label for="email"><strong>Email (required)</strong></label>
              <input type="email" id="email" name="email">
            </div>
            <div>
              <label for="message"><strong>Message (required)</strong></label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <script src="homepage.js"></script>
</body>
</html>
`;

let beer = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beer</title>
    <!-- <link rel="stylesheet" href="Beer.css"> -->
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fdf6e3; /* Light beige background */
            color: #333;
            line-height: 1.6;
        }

        /* Navbar Styling */
        .navbar {
            background-color: #333;
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar .navbar-brand {
            color: #FFD700;
            font-size: 20px;
        }

        .nav-links {
            list-style: none;
        }

        .nav-links li {
            display: inline;
            margin-left: 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
        }

        .nav-links a:hover {
            text-decoration: underline;
        }


        /* Header Styles */
        header {
            background-color: #d4af37; /* Golden background */
            color: #fff;
            text-align: center;
            padding: 1px;
            border-bottom: 3px solid #b8860b;
        }

        header h1 {
            margin: 0;
            font-size: 3rem;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px #8b4513;
        }

        /* Section Titles */
        h2 {
            color: #b8860b;
            text-align: center;
            margin-left: 50%;
            font-size: 2rem;
            margin-top: 20px;
            text-transform: uppercase;
            border-bottom: 2px solid #d4af37;
            display: inline-block;
            padding-bottom: 5px;
            transform: translateX(-50%);
        }

        /* Paragraph Styles */
        p {
            max-width: 1300px;
            margin: 0 auto 20px auto;
            padding: 0 15px;
            text-align: justify;
        }

        /* Product Section */
        #products {
            padding: 20px 0;
            background-color: #fff8dc; /* Light gold background for product section */
        }

        /* Product Container */
        .product-container {
            display: flex;
            flex-direction: column;
            gap: 0px;
            padding-left: 60px;
            align-items: flex-start; /* Align to start of container */
        }

        /* Product Item Styles */
        .product-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 50px;
            width: 95%;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        /* .product-item:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        } */

        /* Image Styles */
        .product-image {
            flex: 0 0 250px; /* Fixed width for the image */
            margin-right: 20px;
            padding-top: 50px;
        }

        .product-image img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
        }

        /* Product Details Styles */
        .product-details {
            flex: 1; /* Allow details to take up remaining space */
            padding-left: 50px;
        }

        .product-details h5 {
            color: #8b4513;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .quantity {
            margin-bottom: 10px;
            margin-left: 20px;
        }

        .quantity input {
            padding: 5px;
            width: 60px;
            margin-left: 10px;
        }

        .rate {
            margin-bottom: 10px;
            margin-left: 6px;
        }

        .add-to-cart {
            background-color: #d4af37;
            color: white;
            border: none;
            margin-left: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            width: 12%;
            transition: background-color 0.3s ease;
        }

        .add-to-cart:hover {
            background-color: #b8860b;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.8rem;
            }

            p {
                padding: 0 10px;
            }

            .product-item {
                flex-direction: column; /* Stack product details below the image on small screens */
                align-items: center; /* Center the items */
            }

            .product-image {
                margin-right: 0;
                margin-bottom: 15px; /* Space between image and product details */
            }

            .add-to-cart {
                width: auto;
            }
        }

    </style>
</head>
<body>
    <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: #FFD700; font-size: 40px; top: 2px;"><strong>Aapna Theka</strong></a>
      <ul class="nav-links">
        <li><a href="/homepage">Home</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="/tutorial">Tutorial</a></li>
      </ul>
    </div>
  </nav>



    <header>
        <h1>Beer</h1>
    </header>

    <section id="history">
        <h2>History</h2>
        <p>
            Beer is one of the oldest beverages in human history, dating back to at least 5,000 BCE, 
            with evidence found in ancient Sumerian and Mesopotamian civilizations. Early beer was brewed as a result of 
            fermenting grains like barley and wheat, often combined with water and naturally occurring yeast. In ancient 
            cultures, beer was not just a drink but a staple of daily life, used for religious ceremonies, social 
            gatherings, and even as a form of currency. During the Middle Ages, brewing became an essential craft, with 
            monasteries leading the way in refining recipes and brewing techniques. The Industrial Revolution further 
            transformed beer production, introducing mechanization, refrigeration, and improved brewing processes, making 
            it widely accessible. Today, beer has evolved into a global phenomenon with diverse styles and flavors, 
            reflecting centuries of tradition and innovation.
        </p>
    </section>


    <section id="products">
        <h2>Products</h2>
        <div class="product-container">
            <div class="product-item">
                <div class="product-image">
                    <img src="Select.png" alt="Budweiser Select">
                </div>
                <div class="product-details">
                    <h5>Budweiser Select</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Silver.png" alt="Heineken Silver">
                </div>
                <div class="product-details">
                    <h5>Heineken Silver</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $12</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Zero.png" alt="Budweiser Zero">
                </div>
                <div class="product-details">
                    <h5>Budweiser Zero</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div><div class="product-item">
                <div class="product-image">
                    <img src="Strong1.png" alt="Tuborg Strong">
                </div>
                <div class="product-details">
                    <h5>Tuborg Strong</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Premium.png" alt="Kingfisher Premium">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Premium</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Supreme.png" alt="Budweiser Supreme">
                </div>
                <div class="product-details">
                    <h5>Budweiser Supreme</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Ultra.png" alt="Kingfisher Ultra">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Ultra</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Silver.png" alt="Heineken Silver">
                </div>
                <div class="product-details">
                    <h5>Heineken Silver</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Strong.png" alt="Kingfisher Strong">
                </div>
                <div class="product-details">
                    <h5>Kingfisher Strong</Strong></h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Carlsberg.png" alt="Carlsberg">
                </div>
                <div class="product-details">
                    <h5>Carlsberg</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <div class="product-item">
                <div class="product-image">
                    <img src="Canon1000.png" alt="Canon1000">
                </div>
                <div class="product-details">
                    <h5>Canon1000</h5>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value="1" min="1">
                    </div>
                    <div class="rate">
                        <p>Rate: $10</p>
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
            <!-- Repeat for other products -->
        </div>
    </section>
</body>
</html>
`;
