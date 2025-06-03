document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;

        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const formattedTime = now.toLocaleTimeString('pl-PL', timeOptions);

        const timeElem = document.getElementById('current-time');
        const dateElem = document.getElementById('current-date');

        if (timeElem) timeElem.textContent = formattedTime;
        if (dateElem) dateElem.textContent = formattedDate;
    }

    updateDateTime(); // ustawienie przy załadowaniu strony
    setInterval(updateDateTime, 1000); // aktualizacja co sekundę
});
