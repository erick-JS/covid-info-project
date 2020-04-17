var covid_btn = document.querySelector(".fab"); //Botão flutuante
var covid_box = document.getElementById("box"); //Caixa que apresenta as quatro funções 
var minimize = document.getElementById("minimize"); //Botão que fecha a caixa ativa

//Caixa que está o bot para dúvidas
var duvidas = document.getElementById("duvidas"); //Botão tenho dúvidas 
var faq_box = document.getElementById("faq_box"); //Caixa com o bot

covid_btn.addEventListener("click", openBox);
minimize.addEventListener("click", closeBox);
duvidas.addEventListener("click", openFaq);

covid_box.style.visibility = "hidden";
faq_box.innerHTML = "";

//Para abrir e fechar a caixa que apresenta as quatro funções
function openBox() {
  covid_box.style.visibility = "visible";
  covid_btn.style.visibility = "hidden";
}

function closeBox() {
  covid_box.style.visibility = "hidden";
  covid_btn.style.visibility = "visible";
}

//Para abrir e fechar o chatbot
function closeFaq() {
  covid_btn.style.visibility = "visible";
  faq_box.innerHTML = "";
}

function openFaq() {
  covid_box.style.visibility = "hidden";
  faq_box.innerHTML = "<div class='faq' id='faq_box' style='background:#129cbe;'><i class='fas fa-window-minimize' id='minimize' style='font-size:20px;color:white;float:right;' onclick='closeFaq()'></i><iframe allow='microphone;' class='chatbot' src='https://console.dialogflow.com/api-client/demo/embedded/cdecefe6-d25a-4cd2-9766-a2e36132cd2f'></iframe></div>";
}

