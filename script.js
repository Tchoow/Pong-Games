const shareBtn = document.querySelector(".share");
const bar1     = document.querySelector(".bar");

var lig, col = 0;

function shareLink() {
  navigator.clipboard.writeText("https://codepen.io/Tchoow/full/BadWgEZ");
  shareBtn.innerText = "Lien copié !";
}