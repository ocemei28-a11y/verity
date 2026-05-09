const PIN = "1234";

const screens = {
  pin: document.getElementById("pin-screen"),
  home: document.getElementById("home-screen"),
  license: document.getElementById("license-screen"),
  admin: document.getElementById("admin-screen"),
};

document.addEventListener("DOMContentLoaded", () => {
  // --- Last refreshed (only runs on pages that have #lastRefreshed) ---
  const refreshEl = document.getElementById("lastRefreshed");
  if (refreshEl) {
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const now = new Date();

    refreshEl.textContent =
      `Last refreshed: ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}, ` +
      `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
  }

  // --- Eye toggle (only runs on pages that have the eye elements) ---
  const toggleEye = document.getElementById("toggleEye");
  const eyeIcon = document.getElementById("eyeIcon");
  const cardNumber = document.getElementById("cardNumber");

  if (toggleEye && eyeIcon && cardNumber) {
    let visible = false;

    toggleEye.addEventListener("click", () => {
      visible = !visible;

      if (visible) {
        cardNumber.textContent = cardNumber.dataset.real;
        eyeIcon.src = "Hiden.png"; // open eye
      } else {
        cardNumber.textContent = "••••••••••••";
        eyeIcon.src = "close.png"; // closed eye
      }
    });
  }
});

