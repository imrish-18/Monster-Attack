let chosenMaxLife = 100;
const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
let widthValue="100";
let widthValue1="100";
adjustHealthBars(chosenMaxLife);
function adjustHealthBars(maxLife) {
  playerHealthBar.style.width=widthValue1+"%";
   monsterHealthBar.style.width=widthValue+"%";
   playerHealthBar.textContent=100+"%";
   monsterHealthBar.textContent=100+"%";

}
function dealMonsterDamage(damage) {
  const dealtDamage=Math.random()*damage;
  widthValue=widthValue-dealtDamage;
     monsterHealthBar.style.width=Number(widthValue)+"%";
      monsterHealthBar.textContent=widthValue+"%";
       return widthValue;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  widthValue1=widthValue1-dealtDamage;
  playerHealthBar.style.width=Number(widthValue1)+"%";
  playerHealthBar.textContent=widthValue1+"%";
    return widthValue1;
  // playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  // return dealtDamage;
}

function increasePlayerHealth(healValue) {
  if(Number(widthValue1 + healValue)>100){
    alert("sorry! you have more than 100% power..please attack to consume the power")
      playerHealthBar.style.width=100+"%";
        playerHealthBar.textContent=100+"%";
  }
  else{
  playerHealthBar.style.width = Number(+widthValue1 + healValue)+"%";
  playerHealthBar.textContent= Number(widthValue1 + healValue)+"%";
  widthValue1=widthValue1+healValue;
}
}

function resetGame(value) {
  playerHealthBar.style.width = value+"%";
  monsterHealthBar.style.width = value+"%";
  widthValue=value;
  widthValue1=value;
    monsterHealthBar.textContent=widthValue+"%";
    playerHealthBar.textContent=widthValue1+"%";
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
