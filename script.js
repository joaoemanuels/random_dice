const imagens = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function numerosAleatorios() {
  const randomNumber1 = Math.floor(Math.random() * 6);
  const randomNumber2 = Math.floor(Math.random() * 6);

  const elementoImg1 = document.querySelector(".img1");
  const elementoImg2 = document.querySelector(".img2");

  elementoImg1.setAttribute("src", "images/" + imagens[randomNumber1]);
  elementoImg2.setAttribute("src", "images/" + imagens[randomNumber2]);

  determinarVencedor(randomNumber1, randomNumber2);

}

function determinarVencedor(num1, num2) {
  const resultado = document.querySelector(".container h1");
  if (num1 > num2) {
    resultado.innerHTML = "Player 1 vence"
  } else if (num1 === num2) {
    resultado.innerHTML = "Empate"
  } else {
    resultado.innerHTML = "Player 2 vence"
  }

}

const botaoReloud = document.querySelector(".btn-att");
botaoReloud.addEventListener("click", function () {
  location.reload();
});

numerosAleatorios()