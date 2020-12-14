const btn = document.querySelector("button");
const span = document.getElementById("hex-value");

function changeBackgroundColor(e) {


  const hexArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hexArr[Math.floor(Math.random() * 16)];
  }

  span.textContent = hexColor;

  document.body.style.backgroundColor = hexColor;
}

btn.addEventListener("click", changeBackgroundColor);
