<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arabic Bookstore</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #444;
            padding: 10px 0;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .section {
            margin-bottom: 40px;
        }
        .section h2 {
            border-bottom: 2px solid #444;
            padding-bottom: 10px;
        }
        .book {
            display: flex;
            margin-bottom: 20px;
        }
        .book img {
            width: 150px;
            height: auto;
            margin-right: 20px;
            border-radius: 8px;
        }
        .book-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .price {
            color: #b12704;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <h1>Arabic Bookstore</h1>
        <p>Explore a wide variety of Arabic books, poetry, and novels.</p>
    </header>
    <nav>
        <a href="#poetry">Poetry</a>
        <a href="#novels">Novels</a>
        <a href="#best-sellers">Best Sellers</a>
    </nav>
    <div class="container">
        <div id="poetry" class="section">
            <h2>Poetry</h2>
            <div class="book">
                <img src="poetry1.jpg" alt="Poetry Book 1">
                <div class="book-info">
                    <h3>"Echoes of the Desert"</h3>
                    <p>A collection of timeless Arabic poems reflecting on life and nature.</p>
                    <p class="price">$15.99</p>
                </div>
            </div>
            <div class="book">
                <img src="poetry2.jpg" alt="Poetry Book 2">
                <div class="book-info">
                    <h3>"Rhythms of the East"</h3>
                    <p>An anthology of contemporary Arabic poetry.</p>
                    <p class="price">$12.49</p>
                </div>
            </div>
        </div>

        <div id="novels" class="section">
            <h2>Novels</h2>
            <div class="book">
                <img src="novel1.jpg" alt="Novel 1">
                <div class="book-info">
                    <h3>"The Sands of Time"</h3>
                    <p>A gripping tale of love and betrayal in ancient Arabia.</p>
                    <p class="price">$18.99</p>
                </div>
            </div>
            <div class="book">
                <img src="novel2.jpg" alt="Novel 2">
                <div class="book-info">
                    <h3>"The Oasis Keeper"</h3>
                    <p>A mystery novel set in the heart of the Arabian desert.</p>
                    <p class="price">$16.50</p>
                </div>
            </div>
        </div>

        <div id="best-sellers" class="section">
            <h2>Best Sellers</h2>
            <div class="book">
                <img src="bestseller1.jpg" alt="Best Seller 1">
                <div class="book-info">
                    <h3>"Arabian Nights Rediscovered"</h3>
                    <p>An enchanting retelling of the classic tales with modern twists.</p>
                    <p class="price">$20.00</p>
                </div>
            </div>
            <div class="book">
                <img src="bestseller2.jpg" alt="Best Seller 2">
                <div class="book-info">
                    <h3>"Poetry of the Sands"</h3>
                    <p>A best-selling collection of poetic reflections on Arabian heritage.</p>
                    <p class="price">$17.75</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html