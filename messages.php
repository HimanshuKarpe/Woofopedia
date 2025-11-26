<?php
require_once "config.php";
$result = $conn->query("SELECT * FROM contact_messages ORDER BY created_at DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Woofopedia - Messages</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
  <nav class="navbar">
    <h1 class="logo">🐾 Woofopedia</h1>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="breeds.html">Breeds</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>

<section class="page-header">
  <h2>Contact Messages</h2>
  <p>Messages submitted from the Woofopedia contact form.</p>
</section>

<section class="breed-grid">
  <?php while ($row = $result->fetch_assoc()) { ?>
    <div class="breed-card">
      <h3><?php echo htmlspecialchars($row["name"]); ?></h3>
      <p><strong>Email:</strong> <?php echo htmlspecialchars($row["email"]); ?></p>
      <p><?php echo nl2br(htmlspecialchars($row["message"])); ?></p>
      <p style="font-size:12px;color:#777;">On: <?php echo $row["created_at"]; ?></p>
    </div>
  <?php } ?>
</section>

<footer>
  <p>&copy; 2025 Woofopedia | All Rights Reserved</p>
</footer>
</body>
</html>
<?php $conn->close(); ?>
