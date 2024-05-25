let nombreMystere = Math.floor(Math.random() * 100) + 1;
let essais = 0;

function verifierNombre() {
    let nombreUtilisateur = document.getElementById("nombreUtilisateur").value;
    essais++;

    if (nombreUtilisateur == nombreMystere) {
        document.getElementById("resultat").innerHTML = `Bravo! Vous avez trouvé le nombre mystère en ${essais} essais.`;
    } else if (nombreUtilisateur < nombreMystere) {
        document.getElementById("resultat").innerHTML = "Trop bas, essayez encore.";
    } else {
        document.getElementById("resultat").innerHTML = "Trop haut, essayez encore.";
    }
}
function btnKeyPress(event) {
    if (event.key === "Enter") {
        verifierNombre();
    }
}