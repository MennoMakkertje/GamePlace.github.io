let flagMelding =  false;
let flagVerleg = false;
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const aantalOpStabel = document.getElementById("aantalOpStabel");
const aantalZetten = document.getElementById("aantalZetten");
const btn = document.querySelector('.btn');
var zetten = 0;
var stabels = 0;
record = 52;
const beste = document.getElementById("beste")
const aantalGewonnen = document.getElementById("aantalGewonnen");
const aantalVastgelopen = document.getElementById("aantalVastgelopen");
const newIMG = document.createElement("img");
const newBtn = document.createElement("button");
const speelveld = document.querySelector('.speelveld');
var drawCardButton = document.getElementById('drawCard');
var deckID = "";
const geklikteKaarten = document.querySelector('.geklikteKaarten');
const pGeklikteKaarten = geklikteKaarten.querySelectorAll("p");
const infoCards = {   
    openKaarten: null,
    geklikt: [],
    aantalOver: null
};
var error = "hier komt een error";

submitBtn.addEventListener('click', loadGame);

async function loadGame(event) {
    event.preventDefault();
    //submitBtn.style.visibility = "hidden"
    submitBtn.textContent = "restart game";
    submitBtn.removeEventListener("click", loadGame);
    submitBtn.id = "restartBtn";
    submitBtn.addEventListener('click', RestartGame);
    
    newBtn.id = "eindGame";
    newBtn.textContent = "einde van het spel";
    btn.appendChild(newBtn);
    
    const eindGame = document.getElementById("eindGame");
    eindGame.addEventListener("click", eind);

    try {    
        const kaarten = await makeDeck();
        console.log(kaarten);
        await makeDeckID(kaarten);
        startGame();

    }
    catch(error){
       error = error;
       foutmelding();
    }

}

async function makeDeck() {
    const newApiURl = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    const response = await fetch(newApiURl)

    if(!response.ok){
        error = "kon geen kaartendek maken";
        foutmelding();
    }

    return await response.json();
}

function makeDeckID(kaarten) {
    const {
        deck_id: id,
    } = kaarten;
deckID = id;
}

async function startGame(){
    const draw8URL = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=8`;
    const draw8 = await fetch(draw8URL);
    
    if(!draw8.ok){
        error = "geen contact met API";
        foutmelding();
    }
    const data = await draw8.json();
    console.log(data);
    
    const { remaining: kaartenOver,
            cards: [{code: code1, image: image1 },
                    {code: code2, image: image2 },
                    {code: code3, image: image3 },
                    {code: code4, image: image4 },
                    {code: code5, image: image5 },
                    {code: code6, image: image6 },
                    {code: code7, image: image7 },
                    {code: code8, image: image8}]
    } = data;

    stabels = stabels + 8;
    aantalOpStabel.innerHTML = "Er zijn nog " + kaartenOver + " kaarten op de stabel";
    aantalZetten.innerHTML = "Er zijn nog geen zetten gedaan";
    aantalStabelsOpSpeelveld.innerHTML = "je hebt " + stabels + " stabels kaarten op het speelveld liggen";
    //beste.innerHTML = "je hebt nog geen persoonlijk record";
    
const { cards } = data;

cards.forEach(card => {
    var newIMG = document.createElement('img');
    newIMG.src = card.image;
    newIMG.id = card.code;
    // Voeg newIMG toe vóór drawCardButton in speelveld
    speelveld.insertBefore(newIMG, drawCardButton);
});

infoCards.aantalOver = kaartenOver;
infoCards.openKaarten = cards;

console.log(infoCards);

drawCardButton.style.visibility = "visible"
clickCardADD();
}

function clickCardADD() {
    speelveld.addEventListener('click', clickCard);
}

function clickCard(event) {
    if(flagMelding === true || flagVerleg === true){
        console.log("je moet wachten tot de foutmelding of vergelijking verdwenen is");
    }
    else{
        const clickedImage = event.target;
        if (clickedImage.tagName === 'IMG') {
            const allIMG = Array.from(document.querySelectorAll(".speelveld img"));
            const index = allIMG.indexOf(clickedImage);

            console.log("dit is " + index);

            if (infoCards.geklikt.length === 0 || infoCards.geklikt.length === 1) {
                infoCards.geklikt.push(index);
                infoGeklikt()
                if (infoCards.geklikt.length === 2) {
                    vergelijk();
                }
            } else if (infoCards.geklikt.length >= 2) {
                error = "je hebt te veel kaarten aangeklikt";
                foutmelding();
            }
        }
        else if( clickedImage.tagName === 'BUTTON') {
            ////////////////////verandedren naar === 1////////////////////////
            if(infoCards.aantalOver === 1) {
                drawCardButton.style.visibility = "hidden";
            }
        }
    }
}

function infoGeklikt() {

    if(infoCards.geklikt.length === 1){
        const klick1IMG = infoCards.openKaarten[infoCards.geklikt[0]].image;    
        document.getElementById("klick1IMG").src = klick1IMG;
        document.getElementById("klick2IMG").src = "https://www.deckofcardsapi.com/static/img/back.png";
        
        document.getElementById(infoCards.openKaarten[infoCards.geklikt[0]].code).style.boxShadow = "1px 1px 20px yellow";

        pGeklikteKaarten.forEach(function(paragraph) {
            paragraph.style.color = 'black';
        });
    }
    if(infoCards.geklikt.length === 2){
        const klick2IMG = infoCards.openKaarten[infoCards.geklikt[1]].image;
        document.getElementById("klick2IMG").src = klick2IMG;
        document.getElementById(infoCards.openKaarten[infoCards.geklikt[1]].code).style.boxShadow = "1px 1px 20px yellow";

    }
}

function vergelijk() {

    var klick1 = infoCards.openKaarten[infoCards.geklikt[0]]
    var klick2 = infoCards.openKaarten[infoCards.geklikt[1]]
    const verschil = infoCards.geklikt[0] - infoCards.geklikt[1]

    var { code: code1 } = klick1;
    var { code: code2 } = klick2;


    if (verschil > 0) {
        if (verschil === 1 || verschil === 3) {
            if (code1[0] === code2[0] || code1[1] === code2[1] ) {
                console.log("nice");
                verlegKaarten(klick2, klick1);
            }
            else {
                error = "deze kaarten mogen niet op elkaar";
                foutmelding();
                
            }
        }
        else {
            error = "deze kaarten mogen niet op elkaar";
            foutmelding();
            
        }
    }
    else {
        error = "klikt eerst de kaart aan welke u wilt verplaatsen";
        foutmelding();
        
    }   
return;
}

function verlegKaarten(klick2, klick1) {
    flagVerleg = true;

    document.getElementById(infoCards.openKaarten[infoCards.geklikt[0]].code).style.boxShadow = "1px 1px 20px green";
    document.getElementById(infoCards.openKaarten[infoCards.geklikt[1]].code).style.boxShadow = "1px 1px 20px green";

    setTimeout(() => {
    document.getElementById(infoCards.openKaarten[infoCards.geklikt[0]].code).style.boxShadow = "none";
    document.getElementById(infoCards.openKaarten[infoCards.geklikt[1]].code).style.boxShadow = "none";
    
        let indexklick1 = infoCards.openKaarten.indexOf(klick1);
        let indexklick2 = infoCards.openKaarten.indexOf(klick2);

        if (indexklick1 !== -1 && indexklick2 !== -1) {
            infoCards.openKaarten.splice(indexklick2, 1, klick1);
            infoCards.openKaarten.splice(indexklick1, 1);

            document.getElementById(klick1.code).remove();
            document.getElementById(klick2.code).src = klick1.image;
            document.getElementById(klick2.code).id = klick1.code;
            
            zetten = zetten + 1;
            if (zetten !== 1) {
                aantalZetten.innerHTML = "Er zijn " + zetten + " zetten gedaan."
            }
            else {
                aantalZetten.innerHTML = "Er is " + zetten + " zet gedaan."
            }

            stabels = stabels - 1;
            aantalStabelsOpSpeelveld.innerHTML = "je hebt " + stabels + " stabels kaarten op het speelveld liggen";

            pGeklikteKaarten.forEach(function(paragraph) {
                paragraph.style.color = 'green';
            });
        }
        else {
            error = "fout in het verplaatsen van de kaarten";
            foutmelding();
        }
        infoCards.geklikt = [];

        flagVerleg = false;
        return;
    }, 1000);
}

drawCardButton.addEventListener("click", async event => {
    event.preventDefault();

    const draw1URL = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    const draw1 = await fetch(draw1URL);

    if(!draw1.ok){
        error = "kon geen nieuwe kaart maken, fout met API";
        foutmelding(); 
    }
    
    zetten = zetten + 1;
    if (zetten !== 1) {
    aantalZetten.innerHTML = "Er zijn " + zetten + " zetten gedaan."
    }
    else {aantalZetten.innerHTML = "Er is " + zetten + " zet gedaan."}

    stabels = stabels + 1;
    aantalStabelsOpSpeelveld.innerHTML = "je hebt " + stabels + " stabels kaarten op het speelveld liggen";

    const data = await draw1.json();
    console.log(data);

    const { remaining: kaartenOver,
        cards: [{ code: code, image: image }]        
    } = data;

    infoCards.aantalOver = kaartenOver;


    const { cards } = data;

    infoCards.openKaarten.push(...cards);
    aantalOpStabel.innerHTML = "Er zijn nog " + kaartenOver + " kaarten op de stabel";
    infoCards.geklikt = [];
    cards.forEach(card => {
        var newIMG = document.createElement('img');
        newIMG.src = card.image;
        newIMG.id = card.code;
        speelveld.insertBefore(newIMG, drawCardButton);
    });
});

function eind(event){
    event.preventDefault();
/////////////////////////// veranderen naar !== 0/////////////////////////
    if(infoCards.aantalOver !== 0){
        error = "je hebt nog niet alle kaarten gebruikt!"
        foutmelding();
    }
    else{
        if(stabels < record){
            record = stabels;
            beste.innerHTML = "je record is " + stabels + " stabels!"
            RestartGame();
        }
        else {
            //error = " je hebt je record nog niet verbeterd"
            //foutmelding();
            RestartGame();
        }
    }
}

async function RestartGame() {
    const returnURL = `https://www.deckofcardsapi.com/api/deck/${deckID}/return/`;
    const returnF = await fetch(returnURL);
    
    if(!returnF.ok){
        error = "geen contact met API";
        foutmelding();
    }
    const data = await returnF.json();
    console.log(data);

    const afbeeldingen = document.querySelectorAll(".speelveld img");
    afbeeldingen.forEach(afbeelding => {
        afbeelding.remove();
    });
    pGeklikteKaarten.forEach(function(paragraph) {
        paragraph.style.color = 'black';
    });

    zetten = 0;
    stabels = 0;
    
    infoCards.openKaarten = [];
    infoCards.geklikt = [];
    infoCards.aantalOver = null;
    console.log("nieuw");
    startGame();
}

function foutmelding() {
    flagMelding = true;

    let allButtons = document.querySelectorAll('button');

    allButtons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById(infoCards.openKaarten[infoCards.geklikt[0]].code).style.boxShadow = "1px 1px 20px red";
    document.getElementById(infoCards.openKaarten[infoCards.geklikt[1]].code).style.boxShadow = "1px 1px 20px red";

    setTimeout(() => {
        const foutmeldingen = document.querySelector('.foutmeldingen');
        const pFoutMelding = document.createElement('p');
    
        pFoutMelding.textContent = error;
        newIMG.src = "afbeeldingen/Accordion/error-plaatje.png";
        newIMG.alt = "afbeelding foutmelding"
        newIMG.id = "IMGerror"
    
        foutmeldingen.appendChild(pFoutMelding);
        foutmeldingen.appendChild(newIMG);
        foutmeldingen.style.border = "2px solid red";
        
        const imgFoutmeldingen = document.getElementById("IMGerror");
        imgFoutmeldingen.style.animation = "flikker 3s";
    
        pGeklikteKaarten.forEach(function(paragraph) {
            paragraph.style.color = 'red';
        });
    
        setTimeout(() => {
            document.getElementById(infoCards.openKaarten[infoCards.geklikt[0]].code).style.boxShadow = "none";
            document.getElementById(infoCards.openKaarten[infoCards.geklikt[1]].code).style.boxShadow = "none";
            pFoutMelding.remove();
            newIMG.remove();
            foutmeldingen.style.border = "none";
            imgFoutmeldingen.style.animation = 'none';
            error = "";
            infoCards.geklikt = [];

            allButtons.forEach(button => {
                button.disabled = false;
            });

            flagMelding = false;
        }, 4000);

    },1000);
}