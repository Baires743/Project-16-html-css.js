let colors = generateRandomColors(6)
let pickedColor = pickColor();
document.querySelector('#colorDisplay').textContent = pickedColor;
let cuadrados = document.querySelectorAll(".square")
let spanMessage = document.querySelector("#message")
let h1page = document.querySelector("h1")
let botonHard = document.querySelector("#hardButton")
let botonEasy = document.querySelector("#easyButton")
// let boton = document.querySelector(".button")
let botonReset = document.querySelector("#reset")
let botones = document.querySelector("#stripe")
let numSquares = 6;
//-----
function generateRandomColors(num){
    let coloresRandom = [];
    for (let i = 0; i < num; i++) {
        coloresRandom[i] = randomColor();
        
    }
    return coloresRandom
  }
  generateRandomColors() 
//-
 function randomColor() {
      let r = Math.round(Math.random() * 256);
      let g = Math.round(Math.random() * 256);
      let b = Math.round(Math.random() * 256);
      document.querySelector('#colorDisplay').textContent = `rgb(${r}, ${g}, ${b})`;
      return `rgb(${r}, ${g}, ${b})`;
  }
  randomColor() 
//-
  function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
pickColor();
//-
for (let i = 0; i < cuadrados.length; i++) {    
    cuadrados[i].style.backgroundColor = colors[i]; 
    cuadrados[i].addEventListener("click", function (){
        clickedColor = cuadrados[i].style.backgroundColor;
        if (clickedColor === pickedColor) {
            spanMessage.textContent = "Muy bien!"
            h1page.style.backgroundColor = clickedColor;
            botones.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
            botonReset.textContent = "JUGAR DE NUEVO";
            botonReset.addEventListener("click" , function () {
            botonReset.textContent = "NUEVOS COLORES"
        })
        }else{
            spanMessage.textContent = "Inténtalo de nuevo"
            cuadrados[i].style.backgroundColor = "rgb(26, 26, 26)";
        }
    })
}
//-
function changeColors (color){
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = pickedColor
}
}
//-
 botonReset.addEventListener("click", function () {
    reset();
  });  
  function reset() {
      colors = generateRandomColors(numSquares);
      message.textContent = "¿Cuál es el color?";
      pickedColor.textContent = pickedColor;
      pickedColor = pickColor();
      
      for (let i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
          cuadrados[i].style.background = colors[i];
        }
      } 
      h1page.style.background = "rgba(255, 255, 255, 0.767)"
      botones.style.backgroundColor = "rgba(255, 255, 255, 0.767)"
      botonReset.textContent = "JUGAR DE NUEVO"
  }
-
  botonEasy.addEventListener("click", function () {
      botonEasy.classList.add("selected");
      botonHard.classList.remove("selected");
      spanMessage.textContent = "No puedes fallar"
      numSquares = 3;
      colors = generateRandomColors(numSquares)

      h1page.style.backgroundColor = "rgba(255, 255, 255, 0.767)"
      botones.style.backgroundColor = "rgba(255, 255, 255, 0.767)"

      pickedColor = pickColor()
      for (let i = 0; i < cuadrados.length; i++) {
          if (colors[i]) {
              cuadrados[i].style.backgroundColor= colors[i];
          } else{
              cuadrados[i].style.display = "none"
          }
  
      }
  })
-
  botonHard.addEventListener("click", function () {
    botonHard.classList.add("selected");
    botonEasy.classList.remove("selected");
    spanMessage.textContent = "A ver si puedes..."
    numSquares = 6;
    colors = generateRandomColors (numSquares)

    h1page.style.backgroundColor = "rgba(255, 255, 255, 0.767)"
    botones.style.backgroundColor = "rgba(255, 255, 255, 0.767)"

    pickedColor = pickColor()
    for (let i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i];
            cuadrados[i].style.display = "block"
        } else{
            cuadrados[i].style.display = "none"
        }

    }
})
//------


// button.addEventListener("click", function){
//     button.classlist.add("selected");
//     button.classlist.remove("selected");
    
// }
