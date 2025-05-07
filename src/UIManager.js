// UIManager.js
export class UIManager {
  static showNotification(resultText, detailText) {
      const notif = document.querySelector(".notification");
      const header = document.querySelector(".notification-header label");
      const body = document.querySelector(".notification-body label");

      header.textContent = resultText;
      body.textContent = detailText;
      notif.style.display = "block";
      setTimeout(() => notif.style.display = "none", 3000);
  }

  static updateScores(p1, p2) {
      document.getElementById("player1-points").textContent += `${p1}`;
      document.getElementById("player2-points").textContent += `${p2}`;
  }

  static updateAttempts(attempts) {
      document.getElementById("intentos-restantes").textContent += `= ${attempts}`;
  }

  static showFinalResult(winner) {
      const msg = document.getElementById("message");
      if (winner === 0) {
          msg.textContent = "Es un empate señores";
      } else {
          msg.textContent = `El ganador es Player ${winner}`;
      }
      msg.style.color = 'red';
  }

  static showChoice(player, choice) {
      const msg = document.getElementById("message");
      msg.textContent = `${player} chose ${choice}`;
      msg.style.color = 'red';
      msg.style.backgroundColor = '#02399f';
  }

  static showInputMessage(text, isValid) {
      const msg = document.getElementById("message");
      msg.textContent = text;
      msg.style.color = isValid ? 'black' : 'red';
  }
}
