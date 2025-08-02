// Funzione per includere la navbar
function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Errore nel caricamento della navbar:', error);
        });
}

// Esegui la funzione quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', includeNavbar);
