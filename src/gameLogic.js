// GameLogic.js
export class GameLogic {
  static getResult(p1, p2) {
      if (p1 === p2) return "tie";
      if (
          (p1 === "rock" && p2 === "scissors") ||
          (p1 === "scissors" && p2 === "paper") ||
          (p1 === "paper" && p2 === "rock")
      ) return "player1";
      return "player2";
  }

  static generateComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * choices.length)];
  }
}
