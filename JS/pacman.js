let score = 0
let grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let fontomeRouge = {
    x: 9,
    y: 11,
    direction: 0
}
let fontomVert = {
    x: 7,
    y: 11,
    direction: 0
}
let fontomeOrange = {
    x: 7,
    y: 12,
    direction: 0
}

let pacman = {
    x: 1,
    y: 2,
    direction: 0
}
function tourDeJeu() {
    affichePlateau()
    deplacerPackman()
    collisionPackman()
    affichePackman()
    collisionPackman()
    mangerBonbon()
    afficheFontome1()
    afficheFontome2()
    afficheFontome3()
    afficherScore()
}

let plateau = document.querySelector('.container')

function affichePlateau() {
    plateau.innerHTML = ""
    for (let i in grille) {
        for (let j in grille[i]) {

            let monElement = document.createElement("div");
            if (grille[i][j] == 0) {
                monElement.className = "mur";
            }
            if (grille[i][j] == 1) {
                monElement.className = "sol";
            }
            if (grille[i][j] == 2) {
                monElement.className = "bonbon";
            }

            monElement.style.gridArea = (+i + 1) + " / " + (+j + 1)
            plateau.appendChild(monElement);
        }
    }
}

setInterval(tourDeJeu, 500)

document.body.addEventListener("keyup", touches)
function touches(event) {
    console.log(event)
    if (event.key == "ArrowRight") {
        pacman.direction = 0
    }
    if (event.key == "ArrowDown") {
        pacman.direction = 1
    }
    if (event.key == "ArrowLeft") {
        pacman.direction = 2
    }
    if (event.key == "ArrowUp") {
        pacman.direction = 3
    }
}

function affichePackman() {
    let monPacman = document.createElement("div")
    monPacman.className = "pacman"

    monPacman.style.gridArea = pacman.y + " / " + pacman.x
    plateau.appendChild(monPacman);
}

function afficheFontome1() {
    let fontome1 = document.createElement("div")
    fontome1.className = "fontomeRouge"

    fontome1.style.gridArea = fontomeRouge.y + " / " + fontomeRouge.x
    plateau.appendChild(fontome1);
}

function afficheFontome2() {
    let fontome2 = document.createElement("div")
    fontome2.className = "fontomeVert"

    fontome2.style.gridArea = fontomVert.y + " / " + fontomVert.x
    plateau.appendChild(fontome2);
}

function afficheFontome3() {
    let fontome3 = document.createElement("div")
    fontome3.className = "fontomeOrange"

    fontome3.style.gridArea = fontomeOrange.y + " / " + fontomeOrange.x
    plateau.appendChild(fontome3);
}

function deplacerPackman() {
    if (pacman.direction == 0) {
        pacman.x++
    }
    if (pacman.direction == 1) {
        pacman.y++
    }
    if (pacman.direction == 2) {
        pacman.x--
    }
    if (pacman.direction == 3) {
        pacman.y--
    }
}

function collisionPackman() {
    if (grille[pacman.y - 1][pacman.x - 1] == 0) {
        if (pacman.direction == 0) {
            pacman.x--
        }
        if (pacman.direction == 1) {
            pacman.y--
        }
        if (pacman.direction == 2) {
            pacman.x++
        }
        if (pacman.direction == 3) {
            pacman.y++
        }
    }
}

function mangerBonbon() {
    if (grille[pacman.y - 1][pacman.x - 1] == 2) {
        grille[pacman.y - 1][pacman.x - 1] = 1
        score+=10
    }
}

function afficherScore(){
    let divScore = document.querySelector('.score');
    divScore.innerHTML="score"+score;
    if (score>=100){
        alert("Vous avez terminé le jeu")
    }else if(score>=100){
        clearInterval
    }

}

//score pour gagné est de 1930



