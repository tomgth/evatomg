// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le bouton
    const btnClick = document.getElementById('btnClick');
    
    // Ajouter un écouteur d'événement pour le clic
    btnClick.addEventListener('click', function() {
        alert('Vous avez cliqué sur le bouton !');
    });
}); 