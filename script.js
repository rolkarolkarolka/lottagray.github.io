const starsContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = (1 + Math.random() * 3) + "s";
  starsContainer.appendChild(star);
}