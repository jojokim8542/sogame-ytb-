// Sélectionnez l'élément image
const discordImg = document.getElementById('img');
// Sélectionnez l'élément audio
const popSound = document.getElementById('pop.mp3');

// Ajoutez un écouteur d'événements pour le survol de l'image
discordImg.addEventListener('mouseenter', () => {
    // Jouez le son
    popSound.play();
});
