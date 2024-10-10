// zorgen dat alle plaatjes wit worden
for (let i = 1; i <= 9; i++) {
    document.getElementById(`v${i}`).src = "afbeeldingen/boter, Kaas en Eieren/leeg.png";
}
//alle variablen en constanten
const vierkant = document.getElementById("vierkant")
const deel1 = document.getElementById("deel1")
const spelerLinks = document.getElementById("spelerLinks")
const spelerRechts = document.getElementById("spelerRechts")
const deel2Links = document.getElementById("deel2Links")
const deel2Rechts = document.getElementById("deel2Rechts")
const spelerLinksIMG = document.getElementById("spelerLinksIMG")
const spelerRechtsIMG = document.getElementById("spelerRechtsIMG")

var Turn = ""

var aantalKlikken = 0;
var winnaar = ""

var v1 = ""
var v2 = ""
var v3 = ""
var v4 = ""
var v5 = ""
var v6 = ""
var v7 = ""
var v8 = ""
var v9 = ""

const IMGkruis = "afbeeldingen/boter, Kaas en Eieren/kruis.png"
const IMGcirkel = "afbeeldingen/Boter, Kaas en Eieren/Cirkel.png"

const QSLdeel2linksIMG = document.querySelectorAll("#deel2Links img");
const QSLdeel2RechtsIMG = document.querySelectorAll("#deel2Rechts img");

const GETv1 = document.getElementById("v1")
const GETv2 = document.getElementById("v2")
const GETv3 = document.getElementById("v3")
const GETv4 = document.getElementById("v4")
const GETv5 = document.getElementById("v5")
const GETv6 = document.getElementById("v6")
const GETv7 = document.getElementById("v7")
const GETv8 = document.getElementById("v8")
const GETv9 = document.getElementById("v9")


// als op submit wordt geklikt
document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Voorkomt dat het formulier de standaard actie uitvoert

  console.log('Naam voor X:', naamX);
  console.log('Naam voor O:', naamO);

  start();
  chooseRandomName();
});
//namen invoeren en zichtbaar maken
function start() {
  var naamX = document.getElementById('naamX').value;
  var naamO = document.getElementById('naamO').value;

    vierkant.style.visibility = "visible"
    deel1.style.visibility = "hidden"
    deel2Links.style.visibility = "visible"
    deel2Rechts.style.visibility = "visible"
    spelerLinks.innerHTML = naamX;
    spelerRechts.innerHTML = naamO;
}
//maak wilekeurig keuze voor eerste zet
function chooseRandomName() {
  // De twee namen
  const names = ["spelerLinksIMG", "spelerRechtsIMG"];
  // Kies een willekeurig index (0 of 1)
  const randomIndex = Math.floor(Math.random() * names.length);
  // Haal de naam op basis van de willekeurige index
  const chosenName = names[randomIndex];

  if (chosenName === "spelerLinksIMG") {
    spelerLinksIMG.src = "afbeeldingen/Boter, Kaas en Eieren/kruisGroen.png"
    turn = "kruis"
  }
  if (chosenName === "spelerRechtsIMG") {
    spelerRechtsIMG.src = "afbeeldingen/Boter, Kaas en Eieren/cirkelGroen.png"
    turn = "cirkel"
  }
}

// als op een knop geklikt dan start funtie game
for (let i = 1; i <= 9; i++) {
  document.getElementById("v" + i).addEventListener("click", Game);
}

async function Game() {
  // verkrijg het ID van he geklikte element
  let clickedElementId = this.id;

  //zorgen dat niet op hetzelfde hokje wordt geklikt en hokje veranderen naar goede teken, vervolgens turn veranderen
  if (turn == "kruis") {
    if (window[clickedElementId] === "kruis" || window[clickedElementId] === "cirkel" ) {
      alert("Dit hokje is al bezet, probeer een ander hokje!");
      return;
    }
    else {
      aantalKlikken = aantalKlikken + 1;
      document.getElementById(clickedElementId).src = IMGkruis;
      window[clickedElementId] = "kruis";

      await opRIJ();

      spelerRechtsIMG.src = "afbeeldingen/Boter, Kaas en Eieren/cirkelGroen.png"
      spelerLinksIMG.src = "afbeeldingen/Boter, Kaas en Eieren/kruis.png"
      turn = "cirkel"
      console.log(turn);
    }
  }

  else if (turn == "cirkel") {
    if (window[clickedElementId] === "kruis" || window[clickedElementId] === "cirkel" ) {
      alert("Dit hokje is al bezet, probeer een ander hokje!");
      return;
    }
    else {
      aantalKlikken = aantalKlikken + 1;
      document.getElementById(clickedElementId).src = IMGcirkel;
      window[clickedElementId] = "cirkel";

      await opRIJ();

      spelerLinksIMG.src = "afbeeldingen/Boter, Kaas en Eieren/kruisGroen.png"
      spelerRechtsIMG.src = "afbeeldingen/Boter, Kaas en Eieren/cirkel.png"
      turn = "kruis"
      console.log(turn);
    }
  }
}

// kijken of er een rij is gevormd, deze groen maken en het eindscerm maken
async function opRIJ() {
  return new Promise((opRIJklaar) => {
    let conditionMet = false;  // Variabele om bij te houden of een voorwaarde voldaan is

    if (aantalKlikken === 9) {
      conditionMet = true;
      spelerLinksIMG.src = "afbeeldingen/VolgKeerBeter.png";
      spelerRechtsIMG.src = "afbeeldingen/VolgKeerBeter.png";
      eindIMGgroot();
    } 
    else {
      const winConditions = [
        [v1, v2, v3], // index 0
        [v4, v5, v6], // index 1
        [v7, v8, v9], // index 2
        [v1, v4, v7], // index 3
        [v2, v5, v8], // index 4
        [v3, v6, v9], // index 5
        [v1, v5, v9], // index 6
        [v3, v5, v7]  // index 7
      ];

      winConditions.forEach((condition, index) => {
        if (condition[0] === condition[1] && condition[1] === condition[2] && (condition[0] === "kruis" || condition[0] === "cirkel")) {
          conditionMet = true;
          winnaar = turn;
          console.log("gewonnen door " + winnaar);

          if (winnaar === "cirkel") {  // Let op: '===' gebruiken voor vergelijking
            spelerLinksIMG.src = "afbeeldingen/VolgKeerBeter.png";
            spelerRechtsIMG.src = "afbeeldingen/gehaald.jpg";
            eindIMGgroot();
          }

          if (winnaar === "kruis") {  // Let op: '===' gebruiken voor vergelijking
            spelerRechtsIMG.src = "afbeeldingen/VolgKeerBeter.png";
            spelerLinksIMG.src = "afbeeldingen/gehaald.jpg";
            eindIMGgroot();
          }

          const v1TMv9 = [
            [GETv1, GETv2, GETv3],
            [GETv4, GETv5, GETv6],
            [GETv7, GETv8, GETv9],
            [GETv1, GETv4, GETv7],
            [GETv2, GETv5, GETv8],
            [GETv3, GETv6, GETv9],
            [GETv1, GETv5, GETv9],
            [GETv3, GETv5, GETv7]
          ];

          v1TMv9[index].forEach(v1TMv9 => {
            v1TMv9.src = "afbeeldingen/Boter, Kaas en Eieren/" + turn + "Groen.png";
          });
        }
      });
    }
    if (!conditionMet) {
      opRIJklaar();  // Roep opRIJklaar alleen aan als geen enkele voorwaarde voldaan is
    }
  });
}
//maak de afbeeldingen groter
function eindIMGgroot() {
  QSLdeel2linksIMG.forEach(QSLdeel2linksIMG => {
    QSLdeel2linksIMG.style.maxWidth = "332px";
    QSLdeel2linksIMG.style.maxHeight = "217px";
  });
  QSLdeel2RechtsIMG.forEach(QSLdeel2RechtsIMG => {
    QSLdeel2RechtsIMG.style.maxWidth = "332px";
    QSLdeel2RechtsIMG.style.maxHeight = "217px";
  });

  document.getElementById("submitBtn").type = 'button';
  document.getElementById("submitBtn").id = "restart"
  document.getElementById("restart").style.visibility = "visible";
  document.getElementById("restart").value = "restart game"
  document.getElementById("restart").addEventListener("click",restartGame)
}
//reload de pagina
function restartGame(){
  location.reload(true);
}