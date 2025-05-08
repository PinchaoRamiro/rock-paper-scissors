// UIManager.js
export class UIManager {
  static showNotification(title, body) {
    const notification = document.getElementById("notification");
    const notificationTitle = document.getElementById("notification-title");
    const notificationBody = document.getElementById("notification-body");

    notificationTitle.textContent = title;
    notificationBody.textContent = body;

    notification.classList.remove("hidden");
    notification.classList.add("show");

    if(title === "Resultado"){
        notification.style = "background-color: #5598db "
    }

    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hidden");
    }, 3000);
  }


  static updateScores(p1, p2) {
      document.getElementById("PointsP1").textContent = `${p1}`;
      document.getElementById("PointsP2").textContent = `${p2}`;
  }

  static updateAttempts(attempts) {
      document.getElementById("num-intentos-restantes").textContent = `: ${attempts}`;
  }

  static showFinalResult(winner) {
    let message;
    const msg = document.getElementById("message");

    if (winner === 0) {
        message = "Es un empate señores";
        UIManager.showNotification("Resultado", message);
    } else {
        message = `El ganador es Player ${winner}`;
        UIManager.showNotification("Resultado", message);
    }
    UIManager.showNotification("Resultado", message);

    msg.textContent = message;
    msg.style.color = 'red';
  }


  static showChoice(player, choice) {
      const msg = document.getElementById("message");
      msg.textContent = `${player} chose ${choice}`;
      msg.style.fontSize = "1.1rem"
  }

  static showInputMessage(text, isValid) {
      const msg = document.getElementById("message");
      msg.textContent = text;
      msg.style.color = isValid ? 'black' : 'red';
  }
}
