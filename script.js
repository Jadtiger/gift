const spoilerBtn = document.getElementById("spoiler-btn");
const spoilerContent = document.getElementById("spoiler-content");

spoilerBtn.addEventListener("click", () => {
  spoilerContent.classList.toggle("hidden");

  if (spoilerContent.classList.contains("hidden")) {
    spoilerBtn.textContent = "🔒 Click to Reveal Your Gift";
  } else {
    spoilerBtn.textContent = "🎁 Hide Gift";
  }
});
