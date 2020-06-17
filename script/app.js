// const ATTACK_VALUE = 10;
// const MONSTER_ATTACK_VALUE = 14;
// let chosenMaxLife = 100;
// let currentMonsterHealth = chosenMaxLife;
// let currentPlayerHealth = chosenMaxLife;
//
let MONSTER_ATTACK_VALUE=14;
let ATTACK_VALUE=10;
let STRONG_ATTACK_VALUE=20;
let HEAL_VALUE=30;
let array=[];
adjustHealthBars(chosenMaxLife);
function attackHandler() {
     const currentMonsterHealth = dealMonsterDamage(ATTACK_VALUE);
  const currentPlayerHealth = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

function strongAttackHandler() {
     const currentMonsterHealth = dealMonsterDamage(STRONG_ATTACK_VALUE);
     console.log(currentMonsterHealth);
  const currentPlayerHealth = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  console.log(currentPlayerHealth);
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    resetGame(100);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
        resetGame(100);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
        resetGame(100);
  }
}

function healHandler()
{
increasePlayerHealth(HEAL_VALUE);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);



function forLoop()
{
  let i=0;
//   for(i=0;i<5;i++)
//   array[i]=i;
//   for(const el of array)
//   console.log(el);
//   for(const key in array){
//   console.log(key);
//   console.log(array[key]);
// }
while(i!=6){
console.log(i);
i++;
}
}
forLoop();
