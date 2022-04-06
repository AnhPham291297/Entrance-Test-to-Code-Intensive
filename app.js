// Ex1

const Ex1 = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

function allLongestStrings(inputArray) {
  let longestWord = Math.max(...inputArray.map((word) => word.length));
  return inputArray.filter((word) => word.length === longestWord);
}

console.log(allLongestStrings(Ex1));

// Ex 2
function alternatingSums(a) {
  const team1 = a
    .filter((x, index) => index % 2 === 0)
    .reduce((sum, item) => sum + item, 0);
  const team2 = a
    .filter((x, index) => index % 2 === 1)
    .reduce((sum, item) => sum + item, 0);

  return [team1, team2];
}

console.log(alternatingSums([60, 40, 55, 75, 64]));

// Ex 3:
const button = document.querySelector(".color-btn");
const body = document.querySelector("body");
const value = document.querySelector(".hexValue");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);

    hex += hexValues[index];
  }
  console.log(hex);

  value.textContent = hex;
  body.style.backgroundColor = hex;
});
