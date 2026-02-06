const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let yesScale = 1;
let noScale = 1;
let noClicks = 0;

const noTexts = [
  "No 🙈",
  "Are you sure? 🥺",
  "Really sure? 😳",
  "Think again 😢",
  "Last chance 😭"
];

const moveNo = () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

noBtn.onclick = () => {
  noClicks++;

  // تغيير النص
  if (noClicks < noTexts.length) {
    noBtn.innerText = noTexts[noClicks];
  }

  // yes يكبر
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // no يصغر
  noScale -= 0.2;
  noBtn.style.transform = `scale(${noScale})`;

  // no يهرب
  moveNo();

  // يختفي في الآخر
  if (noScale <= 0.25) {
    noBtn.style.display = "none";
  }
};

yesBtn.onclick = () => {
  document.querySelector(".container").innerHTML = `
    <h1 style="color:#d63384">💖Yaaay !💖</h1>
    <p style="font-size:22px">You just made my heart very happy 💞</p>
    <img 
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzR4NnF6b3NnY2E5d2h3a3FzZWg1M2M2dW8xZ21qZXV0Y2FjZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MDJ9IbxxvDUQM/giphy.gif" 
      alt="cute gif"
      style="width:220px; margin-top:20px;"
    />
  `;
};