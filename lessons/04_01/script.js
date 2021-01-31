/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Green Frog",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const content = `
  <main>
    <article>
      <h1>${everydayPack.name}</h1>
      <ul>
        <li><b>Volume:</b> ${everydayPack.volume}</li>
        <li><b>Color:</b> ${everydayPack.color}</li>
        <li><b>Age:</b> ${everydayPack.backpackAge()} days</li>
        <li><b>Number of pockets:</b> ${everydayPack.pocketNum}</li>
        <li><b>Left strap length:</b> ${everydayPack.strapLength.left}</li>
        <li><b>Right strap length:</b> ${everydayPack.strapLength.right}</li>
        <li><b>Lid Open:</b> ${everydayPack.lidOpen ? "Yes" : "No"}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;
