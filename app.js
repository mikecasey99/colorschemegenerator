const barOne = document.getElementById('color-1');
const barTwo = document.getElementById('color-2');
const barThree = document.getElementById('color-3');
const barFour = document.getElementById('color-4');
const barFive = document.getElementById('color-5');

const hexOne = document.getElementById('hex-1');
const hexTwo = document.getElementById('hex-2');
const hexThree = document.getElementById('hex-3');
const hexFour = document.getElementById('hex-4');
const hexFive = document.getElementById('hex-5');

const colorPick = document.getElementById('colorPick');
const dropDown = document.getElementById('dropdown');
const submit = document.getElementById('btn');


// dropDown.addEventListener("click", () =>{
//     console.log(dropDown.value)
// })

submit.addEventListener("click", () =>{
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPick.value.slice(1)}&mode=${dropDown.value.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.colors[0].hex.value);
            barOne.style.backgroundColor = data.colors[0].hex.value;
            barTwo.style.backgroundColor = data.colors[1].hex.value;
            barThree.style.backgroundColor = data.colors[2].hex.value;
            barFour.style.backgroundColor = data.colors[3].hex.value;
            barFive.style.backgroundColor = data.colors[4].hex.value;
            hexOne.textContent = data.colors[0].hex.value;
            hexTwo.textContent = data.colors[1].hex.value;
            hexThree.textContent = data.colors[2].hex.value;
            hexFour.textContent = data.colors[3].hex.value;
            hexFive.textContent = data.colors[4].hex.value;
        })
})