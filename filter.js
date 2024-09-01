

const players=['sachin','Dhoni','Dravid','UV','Bahji','Rohit','Kolhi']

const divRef = document.querySelector('#list')

function prepareList(){
  const playersStr = players.map(function (val) {
    return `<li>${val}</li>`
  }).join("")
  
  const list =  `<ul>${playersStr}<ul/>`

  divRef.innerHTML = list;

}
function handleChange(eve){
  const value = eve.target.value;
}
prepareList();