var startGame = document.getElementById("startSpelKalletjes")

startGame.addEventListener("click",start)

function start() {
    // start knop laten verdwijnen
    document.getElementById("startSpelKalletjes").style.visibility = "hidden";

  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  	// Function to generate 10 unique random numbers between 1 and 10
  function generateUniqueRandomNumbers() {
    let numbers = [];
    while (numbers.length < 20) {
      let randomNumber = getRandomNumber(1, 20);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  // Generate 20 unique random numbers
  let randomNumbers = generateUniqueRandomNumbers();

  // Assign the random numbers to variables
  let variable1 = randomNumbers[0];
  let variable2 = randomNumbers[1];
  let variable3 = randomNumbers[2];
  let variable4 = randomNumbers[3];
  let variable5 = randomNumbers[4];
  let variable6 = randomNumbers[5];
  let variable7 = randomNumbers[6];
  let variable8 = randomNumbers[7];
  let variable9 = randomNumbers[8];
  let variable10 = randomNumbers[9];
  let variable11 = randomNumbers[10];
  let variable12 = randomNumbers[11];
  let variable13 = randomNumbers[12];
  let variable14 = randomNumbers[13];
  let variable15 = randomNumbers[14];
  let variable16 = randomNumbers[15];
  let variable17 = randomNumbers[16];
  let variable18 = randomNumbers[17];
  let variable19 = randomNumbers[18];
  let variable20 = randomNumbers[19];

  document.getElementById("v1").innerHTML = variable1;
  document.getElementById("v2").innerHTML = variable2;
  document.getElementById("v3").innerHTML = variable3;
  document.getElementById("v4").innerHTML = variable4;
  document.getElementById("v5").innerHTML = variable5;
  document.getElementById("v6").innerHTML = variable6;
  document.getElementById("v7").innerHTML = variable7;
  document.getElementById("v8").innerHTML = variable8;
  document.getElementById("v9").innerHTML = variable9;
  document.getElementById("v10").innerHTML = variable10;
  document.getElementById("v11").innerHTML = variable11;
  document.getElementById("v12").innerHTML = variable12;
  document.getElementById("v13").innerHTML = variable13;
  document.getElementById("v14").innerHTML = variable14;
  document.getElementById("v15").innerHTML = variable15;
  document.getElementById("v16").innerHTML = variable16;
  document.getElementById("v17").innerHTML = variable17;
  document.getElementById("v18").innerHTML = variable18;
  document.getElementById("v19").innerHTML = variable19;
  document.getElementById("v20").innerHTML = variable20;

  //rendom nummer veranderen in een plaatje
  const variables = [variable1, variable2, variable3, variable4, variable5, variable6, variable7, variable8, variable9, variable10, variable11, variable12, variable13, variable14, variable15, variable16, variable17, variable18, variable19, variable20];

  variables.forEach((variable, index) => {
    const vIndex = index + 1;
    const imgIndex = Math.ceil(variable / 2);
    document.querySelector(`#v${vIndex}`).src = `afbeeldingen/kalletjes/${imgIndex}.jpg`;
  });
  
  //elk plaatje op slaan in lijst welkPlaatje : eerste =0 omdat dan 1 in lijst v1 is etc.
  welkPlaatje = ["0", 
    document.getElementById("v1").src,
    document.getElementById("v2").src,
    document.getElementById("v3").src,
    document.getElementById("v4").src,
    document.getElementById("v5").src,
    document.getElementById("v6").src,
    document.getElementById("v7").src,
    document.getElementById("v8").src,
    document.getElementById("v9").src,
    document.getElementById("v10").src,
    document.getElementById("v11").src,
    document.getElementById("v12").src,
    document.getElementById("v13").src,
    document.getElementById("v14").src,
    document.getElementById("v15").src,
    document.getElementById("v16").src,
    document.getElementById("v17").src,
    document.getElementById("v18").src,
    document.getElementById("v19").src,
    document.getElementById("v20").src
  ]

  //kaarten de achterkant laten zien
  document.getElementById("v1").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v2").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v3").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v4").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v5").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v6").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v7").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v8").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v9").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v10").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v11").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v12").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v13").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v14").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v15").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v16").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v17").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v18").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v19").src = "afbeeldingen/achterkantkaartjes.jpg";
  document.getElementById("v20").src = "afbeeldingen/achterkantkaartjes.jpg";


tweegeklikt= []



  //kaartje laten zien en in vergelijking stoppen
  document.getElementById("v1").addEventListener ("click", show1)
  function show1() {
    if (document.getElementById("v1").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if(tweegeklikt.length != 2) {
    document.getElementById("v1").src = welkPlaatje[1];
    vergelijking.push(welkPlaatje[1]);
    tweegeklikt.push("v1");
    startVergelijking();
  }} 
  else{dubbelgeklikt();}
}

document.getElementById("v2").addEventListener("click", show2);

function show2() {
  if (document.getElementById("v2").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v2").src = welkPlaatje[2];
      vergelijking.push(welkPlaatje[2]);
      tweegeklikt.push("v2");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v3").addEventListener("click", show3);

function show3() {
  if (document.getElementById("v3").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v3").src = welkPlaatje[3];
      vergelijking.push(welkPlaatje[3]);
      tweegeklikt.push("v3");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v4").addEventListener("click", show4);

function show4() {
  if (document.getElementById("v4").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v4").src = welkPlaatje[4];
      vergelijking.push(welkPlaatje[4]);
      tweegeklikt.push("v4");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v5").addEventListener("click", show5);

function show5() {
  if (document.getElementById("v5").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v5").src = welkPlaatje[5];
      vergelijking.push(welkPlaatje[5]);
      tweegeklikt.push("v5");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v6").addEventListener("click", show6);

function show6() {
  if (document.getElementById("v6").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v6").src = welkPlaatje[6];
      vergelijking.push(welkPlaatje[6]);
      tweegeklikt.push("v6");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v7").addEventListener("click", show7);

function show7() {
  if (document.getElementById("v7").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v7").src = welkPlaatje[7];
      vergelijking.push(welkPlaatje[7]);
      tweegeklikt.push("v7");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v8").addEventListener("click", show8);

function show8() {
  if (document.getElementById("v8").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v8").src = welkPlaatje[8];
      vergelijking.push(welkPlaatje[8]);
      tweegeklikt.push("v8");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v9").addEventListener("click", show9);

function show9() {
  if (document.getElementById("v9").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v9").src = welkPlaatje[9];
      vergelijking.push(welkPlaatje[9]);
      tweegeklikt.push("v9");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v10").addEventListener("click", show10);

function show10() {
  if (document.getElementById("v10").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v10").src = welkPlaatje[10];
      vergelijking.push(welkPlaatje[10]);
      tweegeklikt.push("v10");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v11").addEventListener("click", show11);

function show11() {
  if (document.getElementById("v11").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v11").src = welkPlaatje[11];
      vergelijking.push(welkPlaatje[11]);
      tweegeklikt.push("v11");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v12").addEventListener("click", show12);

function show12() {
  if (document.getElementById("v12").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v12").src = welkPlaatje[12];
      vergelijking.push(welkPlaatje[12]);
      tweegeklikt.push("v12");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v13").addEventListener("click", show13);

function show13() {
  if (document.getElementById("v13").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v13").src = welkPlaatje[13];
      vergelijking.push(welkPlaatje[13]);
      tweegeklikt.push("v13");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v14").addEventListener("click", show14);

function show14() {
  if (document.getElementById("v14").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v14").src = welkPlaatje[14];
      vergelijking.push(welkPlaatje[14]);
      tweegeklikt.push("v14");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v15").addEventListener("click", show15);

function show15() {
  if (document.getElementById("v15").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v15").src = welkPlaatje[15];
      vergelijking.push(welkPlaatje[15]);
      tweegeklikt.push("v15");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v16").addEventListener("click", show16);

function show16() {
  if (document.getElementById("v16").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v16").src = welkPlaatje[16];
      vergelijking.push(welkPlaatje[16]);
      tweegeklikt.push("v16");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v17").addEventListener("click", show17);

function show17() {
  if (document.getElementById("v17").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v17").src = welkPlaatje[17];
      vergelijking.push(welkPlaatje[17]);
      tweegeklikt.push("v17");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v18").addEventListener("click", show18);

function show18() {
  if (document.getElementById("v18").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v18").src = welkPlaatje[18];
      vergelijking.push(welkPlaatje[18]);
      tweegeklikt.push("v18");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v19").addEventListener("click", show19);

function show19() {
  if (document.getElementById("v19").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v19").src = welkPlaatje[19];
      vergelijking.push(welkPlaatje[19]);
      tweegeklikt.push("v19");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}
document.getElementById("v20").addEventListener("click", show20);

function show20() {
  if (document.getElementById("v20").src.endsWith("afbeeldingen/achterkantkaartjes.jpg")) {
    if (tweegeklikt.length != 2) {
      document.getElementById("v20").src = welkPlaatje[20];
      vergelijking.push(welkPlaatje[20]);
      tweegeklikt.push("v20");
      startVergelijking();
    }
  } else {
    dubbelgeklikt();
  }
}

  //funcie als iets is dubbel geklikt
  function dubbelgeklikt(){
    alert("dit plaatje heeft u al gehad");
  }
  //spel zichtbaar maken
  document.getElementById("containerKaartendek").style.visibility = "visible";
  document.getElementById("containerScore").style.visibility = "visible";


  //vergelijken of de afbeeldingen het zelfde zijn
  vergelijking = []
  function startVergelijking() {
    if (vergelijking.length === 2) {
      if (vergelijking[0] === vergelijking[1]) {
        setTimeout(terugNaarAchterkantGoed, 2000); 
        document.getElementById("fotoGoed").style.visibility = "visible";
        document.getElementById("fotoGoed2").style.visibility = "visible";
      } else {
        setTimeout(terugNaarAchterkantFout, 2000);
      }
  } else {
      //alert("Array must have exactly two elements for comparison.");//
  }
  }
//kijken of ze de aangeklikte al omgedraaid zijn




  var pogingen = 0 ;
  var aantalgoed = 0 ;

  function terugNaarAchterkantFout() {
    document.getElementById(tweegeklikt[0]).src = "afbeeldingen/achterkantkaartjes.jpg";
    document.getElementById(tweegeklikt[1]).src = "afbeeldingen/achterkantkaartjes.jpg";
    vergelijking = [];
    tweegeklikt = [];
    pogingen++ ; 
    document.getElementById("pogingen").innerHTML = pogingen ;
  }
  function terugNaarAchterkantGoed() {
    vergelijking = []
    tweegeklikt = []
    pogingen++ ; 
    document.getElementById("pogingen").innerHTML = pogingen ;
    aantalgoed++ ; 
    document.getElementById("aantalgoed").innerHTML = aantalgoed ;
    document.getElementById("fotoGoed").style.visibility = "hidden";
    document.getElementById("fotoGoed2").style.visibility = "hidden";

    if (aantalgoed == 10) {
      setTimeout (eindScherm, 1000);
    }
  }
  function eindScherm() {
    document.getElementById("containerKaartendek").style.border = "none";
    document.getElementById("startSpelKalletjes").id = "restartButton"
    document.getElementById("restartButton").style.visibility = "visible";
    document.getElementById("restartButton").textContent = "restart game"
    document.getElementById("restartButton").addEventListener("click",restartGame)  
    eindplaatje();
  }
  
  function restartGame(){
    location.reload(true);
  }

  function eindplaatje(){
    var eindIMG = document.createElement("img");
    eindIMG.src = 'afbeeldingen/gehaald.jpg';
    eindIMG.className = 'overlay-imageEIND';
    
    var overlayContainer = document.createElement("div");
    overlayContainer.className = 'overlay-container';
    overlayContainer.appendChild(eindIMG);
    
    var DIVcontainerKaartendek = document.getElementById("containerKaartendek");
    var elementsToRemove = DIVcontainerKaartendek.getElementsByClassName("spel");
    
    while (elementsToRemove.length > 0) {
        elementsToRemove[0].remove();
    }
    
    DIVcontainerKaartendek.appendChild(overlayContainer);

  }
}

