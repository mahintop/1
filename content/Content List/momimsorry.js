function startTimer(event) {
    event.preventDefault();

    var downloadLink = document.getElementById('downloadLink');
    var timer = document.getElementById('timer');
    var actualDownload = document.getElementById('actualDownload');
    var countdown = document.getElementById('countdown');

    // Hide the initial download link and show timer
    downloadLink.style.display = 'none';
    timer.style.display = 'block';

    var timeLeft = 5; // seconds

    var timerInterval = setInterval(function() {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timer.style.display = 'none';
            actualDownload.style.display = 'inline-block';
            // Auto-click the actual download link
            actualDownload.click();
        }
    }, 1000);
}
