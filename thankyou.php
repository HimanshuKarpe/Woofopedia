<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "Friend";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Woofopedia</title>
  <link rel="stylesheet" href="style.css">
  <meta http-equiv="refresh" content="5;url=index.html">

  <style>
    .thankyou-container {
      max-width: 600px;
      margin: 130px auto;
      background: #ffffff;
      padding: 35px 40px;
      text-align: center;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .thankyou-container h1 {
      font-size: 30px;
      margin-bottom: 10px;
      color: var(--text-dark);
    }

    .thankyou-container p {
      font-size: 16px;
      margin-bottom: 25px;
      color: var(--text-light);
    }

    .home-btn {
      display: inline-block;
      padding: 12px 30px;
      background-color: var(--primary);
      color: #fff;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      transition: background 0.3s, transform 0.2s;
    }

    .home-btn:hover {
      background-color: var(--primary-dark);
      transform: scale(1.05);
    }

    .countdown {
      margin-top: 10px;
      font-size: 14px;
      color: gray;
    }
  </style>
</head>
<body>

  <?php include 'navbar.php'; ?> <!-- Keep if using common navbar -->

  <div class="thankyou-container">
    <h1>Thank You, <?= $name ?>! 🐾</h1>
    <p>Your message has been received. We'll get back to you soon.</p>
    <a href="index.html" class="home-btn">Back to Home</a>
    <p class="countdown">Redirecting in <span id="timer">5</span> seconds...</p>
  </div>

  <footer>
    <p>© 2025 Woofopedia | All Rights Reserved</p>
  </footer>

  <script>
    let timeLeft = 5;
    const timer = document.getElementById('timer');

    const countdown = setInterval(() => {
      timeLeft--;
      timer.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
  </script>
</body>
</html>
