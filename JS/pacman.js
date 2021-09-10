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
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let tabfantomes = [
    fontomeRouge = {
        x: 9,
        y: 11,
        direction: 0
    },
    fontomVert = {
        x: 10,
        y: 10,
        direction: 0
    },
    fontomeOrange = {
        x: 10,
        y: 12,
        direction: 0
    },
    fontomeBleu = {
        x: 11,
        y: 11,
        direction: 0
    }
]
let pacman = {
    x: 2,
    y: 2,
    direction: 0
}

setInterval(tourDeJeu, 300)

function tourDeJeu() {
    affichePlateau()
    deplacerPackman()
    collisionPackman()
    affichePackman()
    mangerBonbon()
    deplacementFontomes()
    collisionFantomes()

    afficheFontomes()
    // collisionPacmanEtFantome()

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


document.body.addEventListener("keyup", touches)
function touches(event) {
    console.log(event)
    if (event.key == "ArrowRight") {
        pacman.direction = "droite"
    }
    if (event.key == "ArrowDown") {
        pacman.direction = "bas"
    }
    if (event.key == "ArrowLeft") {
        pacman.direction = "gauche"
    }
    if (event.key == "ArrowUp") {
        pacman.direction = "haut"
    }
}

function affichePackman() {
    let monPacman = document.createElement("div")
    monPacman.className = "pacman"

    monPacman.style.gridArea = pacman.y + " / " + pacman.x
    plateau.appendChild(monPacman);
}

function afficheFontomes() {
    for (let i in tabfantomes) {
        let mesFantomes = document.createElement("div");
        if (i == 0) {
            mesFantomes.className = "fontomeRouge"
        }
        if (i == 1) {
            mesFantomes.className = "fontomeVert"
        }
        if (i == 2) {
            mesFantomes.className = "fontomeOrange"
        }
        if (i == 3) {
            mesFantomes.className = "fontomeBleu"
        }
        mesFantomes.style.gridArea = tabfantomes[i].y + " / " + tabfantomes[i].x
        plateau.appendChild(mesFantomes);


    }

}

function deplacerPackman() {
    if (pacman.direction == "droite") {
        pacman.x++
    }
    if (pacman.direction == "bas") {
        pacman.y++
    }
    if (pacman.direction == "gauche") {
        pacman.x--
    }
    if (pacman.direction == "haut") {
        pacman.y--
    }
}

function deplacementFontomes() {
    for (let i in tabfantomes) {
        let newDir = Math.round((Math.random() * 4) % 4)
        tabfantomes[i].direction = newDir
        if (tabfantomes[i].direction == 0) {
            tabfantomes[i].x++
        }
        if (tabfantomes[i].direction == 1) {
            tabfantomes[i].y++
        }
        if (tabfantomes[i].direction == 2) {
            tabfantomes[i].x--
        }
        if (tabfantomes[i].direction == 3) {
            tabfantomes[i].y--
        }


    }
}

function collisionFantomes() {
    for (let i in tabfantomes) {
        if (grille[tabfantomes[i].y - 1][tabfantomes[i].x - 1] == 0) {
            if (tabfantomes[i].direction == 0) {
                tabfantomes[i].x--
            }
            if (tabfantomes[i].direction == 1) {
                tabfantomes[i].y--
            }
            if (tabfantomes[i].direction == 2) {
                tabfantomes[i].x++
            }
            if (tabfantomes[i].direction == 3) {
                tabfantomes[i].y++
            }
        }
    }
}

function collisionPacmanEtFantome() {
    for (let i in grille) {
        
    }
}
function collisionPackman() {
    if (grille[pacman.y - 1][pacman.x - 1] == 0) {
        if (pacman.direction == "droite") {
            pacman.x--
        }
        if (pacman.direction == "bas") {
            pacman.y--
        }
        if (pacman.direction == "gauche") {
            pacman.x++
        }
        if (pacman.direction == "haut") {
            pacman.y++
        }
    }
}



function mangerBonbon() {
    if (grille[pacman.y - 1][pacman.x - 1] == 2) {
        grille[pacman.y - 1][pacman.x - 1] = 1
        score += 10
    }
}
function afficherScore() {
    let divScore = document.querySelector('.score');
    divScore.innerHTML = "score" + score;
    for (let i in score) {

        if (grille[score[i]] == 0) {
            alert("Vous avez terminé le jeu")
        } else if (grille[score[i]] == 0) {
            clearInterval
        }

    }

}

/*function afficheFontome1() {
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

function afficheFontome4() {
    let fontome4 = document.createElement("div")
    fontome4.className = "fontomeBleu"

    fontome4.style.gridArea = fontomeBleu.y + " / " + fontomeBleu.x
    plateau.appendChild(fontome4);
}*/




