function eindScherm() {
  document.getElementById("submitBtn").style.border = "none";
  document.getElementById("submitBtn").id = "restartButton"
  document.getElementById("restartButton").style.visibility = "visible";
  document.getElementById("restartButton").textContent = "restart game"
  document.getElementById("restartButton").addEventListener("click",restartGame)  
}

function restartGame(){
  location.reload(true);
}
