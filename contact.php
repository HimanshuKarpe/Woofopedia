<?php
require_once "config.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = trim($_POST["name"]);
    $email   = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    if ($name !== "" && $email !== "" && $message !== "") {
        $stmt = $conn->prepare(
            "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)"
        );
        $stmt->bind_param("sss", $name, $email, $message);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Message Sent | Woofopedia</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <header>
          <nav class="navbar">
            <h1 class="logo">🐾 Woofopedia</h1>
            <ul class="nav-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="breeds.html">Breeds</a></li>
              <li><a href="care.html">Care &amp; Training</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html" class="active">Contact</a></li>
            </ul>
          </nav>
        </header>

        <section class="page-header">
            <h2>Thank You!</h2>
            <p>Your message has been received. We’ll get back to you soon.</p>
            <p><a href="index.html" class="btn">Back to Home</a></p>
        </section>

        <footer>
          <p>&copy; 2025 Woofopedia | All Rights Reserved</p>
        </footer>
        </body>
        </html>
        <?php
    } else {
        header("Location: contact.html");
        exit();
    }
} else {
    header("Location: contact.html");
    exit();
}
?>
