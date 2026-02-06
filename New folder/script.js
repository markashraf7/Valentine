const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

let noCount = 0;

noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount >= 3) {
    question.innerHTML = `
      <span style="display:block; font-size:24px;">Maryam 👀</span>
      Are you sure? 🥺
    `;
    yesBtn.style.transform = "scale(1.4)";
  }

  if (noCount >= 6) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      font-family:Arial;
      text-align:center;
    ">
      <h1>Yaaay 💖🥰</h1>
      <p>You just made my day!</p>
      <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="250">
    </div>
  `;
});
