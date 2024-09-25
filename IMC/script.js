
const poidsInput = document.getElementById('poids');
const tailleInput = document.getElementById('taille');
const calculerButton = document.getElementById('calculer');
const resultatElement = document.getElementById('resultat');

calculerButton.addEventListener('click', function (event) {
    event.preventDefault();
    calculerIMC();
});

function calculerIMC() {
    const poids = parseFloat(poidsInput.value);
    const taille = parseFloat(tailleInput.value);

    if (poids <= 0 || taille <= 0) {
        resultatElement.textContent = 'Erreur : les valeurs doivent être positives.';
        return;
    }

    const imc = poids / (taille * taille);
    const interpretation = getInterpretation(imc);

    resultatElement.textContent = `Votre IMC est de ${imc.toFixed(2)}. ${interpretation}`;
}

function getInterpretation(imc) {
    if (imc < 18.5) {
        return 'Vous êtes en sous-poids.';
    } else if (imc < 25) {
        return 'Vous avez un poids normal.';
    } else if (imc < 30) {
        return 'Vous êtes en surpoids.';
    } else {
        return 'Vous êtes obèse.';
    }
}