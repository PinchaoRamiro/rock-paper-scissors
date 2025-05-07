// main.js
import { GameController } from './gameController.js';

const game = new GameController();

document.getElementById("intentos").addEventListener("change", () => {
    const numberIn = document.getElementById("intentos");
    const inputVal = parseInt(numberIn.value);
    game.setAttempts(inputVal);
    numberIn.value = 0;
});

document.querySelectorAll(".option").forEach(btn =>
    btn.addEventListener("click", () => {
        console.log(btn.id)
        game.playMove(btn.id);
    })
);

document.querySelector(".button-mode").addEventListener("click", () => {
    game.toggleMode();
});
