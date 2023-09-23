<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['downloadLink'])) {
    $downloadLink = $_POST['downloadLink'];

    // Perform any necessary validation or sanitization on the download link here

    // Redirect the user to the download link
    header("Location: $downloadLink");
    exit();
}
?>
