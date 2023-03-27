const btnMain = document.querySelector("#btnMain");
const btnAgain = document.querySelector("#btnAgain");
const landMain = document.querySelector(".landMain");
const luckMain = document.querySelector(".luckMain");

//Array of phrases
var phrases = [  
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.", 
  "A maior de todas as torres começa no solo.", 
  "Não há que ser forte. Há que ser flexível.",
  "2345Meia78 Tá na hora de molhar o biscoito",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."];

//Events
btnMain.addEventListener('click', randomPhrase);
btnAgain.addEventListener('click', randomPhrase);
document.addEventListener("keypress", function(e){

	if(e.key === "Enter")
	btnMain.click();

});

  //functions
  function randomPhrase() {
	var phrase = phrases[Math.floor(Math.random() * phrases.length)];
	document.querySelector(".luckMain p").innerText = phrase;
	toglleScreen();
	return;
  }
  
  function toglleScreen() {
	landMain.classList.toggle("hide");
	luckMain.classList.toggle("hide");
  }