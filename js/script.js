/* RECOMMENDATIONS */ 

const competenceElement = document.querySelectorAll(".competence");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

let currentIndex = 0;

function afficherCompetence(index) {
    competenceElement.forEach((element, i) => {
        if (i === index) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % competenceElement.length;
    afficherCompetence(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + competenceElement.length) % competenceElement.length;
    afficherCompetence(currentIndex);
});

// Afficher la première compétence au chargement de la page
afficherCompetence(currentIndex);

/* MENU */

function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}