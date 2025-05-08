import { GameLogic } from './gameLogic.js';
import { UIManager } from './UIManager.js';

export class GameController {
    constructor() {
        this.reset();
    }

    reset() {
        this.totalAttempts = 0;
        this.remainingAttempts = 0;
        this.player1Score = 0;
        this.player2Score = 0;
        this.player1Choice = null;
        this.player2Choice = null;
        this.vsComputer = true;
    }

    setAttempts(num) {
        if (num > 0) {
            this.totalAttempts = num;
            this.remainingAttempts = num;
            UIManager.updateAttempts(this.remainingAttempts);
            UIManager.showInputMessage(`Número de intentos ingresado: ${num}`, true);
        } else {
            UIManager.showInputMessage("Por favor ingresa un número válido de intentos.", false);
        }
    }

    playMove(choice) {
        if (this.remainingAttempts <= 0) return;

        if (this.vsComputer) {
            const computerChoice = GameLogic.generateComputerChoice();
            const winner = GameLogic.getResult(choice, computerChoice);
            this.processResult(winner, choice, computerChoice, "Player", "Computer");
        } else {
            if (!this.player1Choice) {
                this.player1Choice = choice;
                UIManager.showChoice("Jugador 1", choice);
            } else {
                this.player2Choice = choice;
                UIManager.showChoice("Jugador 2", choice);
                const winner = GameLogic.getResult(this.player1Choice, this.player2Choice);
                this.processResult(winner, this.player1Choice, this.player2Choice, "Jugador 1", "Jugador 2");
                this.resetChoices();
            }
        }
    }

    processResult(winnerKey, p1, p2, player1Name, player2Name) {
        this.remainingAttempts--;
        UIManager.updateAttempts(this.remainingAttempts);

        let resultText;
        if (winnerKey === "tie") {
            resultText = "It's a tie!";
        } else if (winnerKey === "player1") {
            resultText = `${player1Name} wins!`;
            this.player1Score++;
        } else {
            resultText = `${player2Name} wins!`;
            this.player2Score++;
        }

        UIManager.showNotification(resultText, `${player2Name} chose ${p2}`);
        UIManager.updateScores(this.player1Score, this.player2Score);

        if (this.remainingAttempts === 0) {
            this.showFinalWinner();
        }
    }

    showFinalWinner() {
        let winner;
        if (this.player1Score > this.player2Score) winner = 1;
        else if (this.player2Score > this.player1Score) winner = 2;
        else winner = 0;

        this.resetChoices();

        UIManager.showFinalResult(winner);
    }

    toggleMode() {
        this.vsComputer = !this.vsComputer;
        this.resetChoices();
        document.querySelector(".button-mode").textContent =
            this.vsComputer ? "Cambiar a jugador versus jugador" : "Cambiar a jugador versus maquina";
    }

    resetChoices() {
        this.player1Choice = null;
        this.player2Choice = null;
    }
}
