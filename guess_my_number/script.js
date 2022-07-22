'use strict';








function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.querySelector('.message').textContent = 'correct';


async function changeValue() {
 
    for (let i = 0; i < 11; i++) {
        document.querySelector('.guess').value = i;
        if (i === 10) document.querySelector('.message').textContent = "Game Over !"
  await sleep(1000);
}

}


changeValue();

