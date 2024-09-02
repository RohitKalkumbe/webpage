const players = ["sachin", "Dhoni", "Dravid", "UV", "Bahji", "Rohit", "Kolhi"];

const divRef = document.querySelector("#list");

function prepareList(data) {
  const playersStr = data
    .map(function (val) {
      return `<li>${val}</li>`;
    }).join("");

  const list = `<ul>${playersStr}<ul/>`;

  divRef.innerHTML = list;
}
function handleChange(eve) {
  const value = eve.target.value;
  const filterPlayers =  players.filter(function (val) {
    return val.toLowerCase().startsWith(value.toLowerCase())
  })
  prepareList(filterPlayers)
}
prepareList(players);
