//Menu Mobile
function menuToggle(){
    
  let menuArea = document.getElementById("menu-area");

  if(menuArea.style.height == '100vh'){
      menuArea.style.height = '0vh';
  } else {
      menuArea.style.height ='100vh';
  }
}

//Esconder Menu Mobile
window.onscroll = function(){
  var top = window.pageYOffset || document.documentElement.scrollTop
  if( top > 100 ) {
    document.getElementById("menu-mob").style.display='none';
  }else{
    document.getElementById("menu-mob").style.display='flex';

  }
}

//Whats e Instagram Img
//Mobile 
function trocaimg1(){
  document.getElementById("w-img").src = "./assets/images/whatsapp-hover.png"; 
  }

function trocaimg2(){
  document.getElementById("w-img").src = "./assets/images/whatsapp.png"; 
}

function trocaimg3(){
  document.getElementById("s-img").src = "./assets/images/instagram-hover.png"; 
  }

function trocaimg4(){
  document.getElementById("s-img").src = "./assets/images/instagram.png"; 
}

//Whats e Instagram Img
//Header
function trocaimg5(){
  document.getElementById("ww-img").src = "./assets/images/whatsapp-hover.png"; 
  }

function trocaimg6(){
  document.getElementById("ww-img").src = "./assets/images/whatsapp.png"; 
}

function trocaimg7(){
  document.getElementById("ss-img").src = "./assets/images/instagram-hover.png"; 
  }

function trocaimg8(){
  document.getElementById("ss-img").src = "./assets/images/instagram.png"; 
}

//Whats e Instagram Img
//Rodapé
function trocaimg9(){
  document.getElementById("www-img").src = "./assets/images/whatsapp-hover.png"; 
  }

function trocaimg10(){
  document.getElementById("www-img").src = "./assets/images/whatsapp.png"; 
}

function trocaimg11(){
  document.getElementById("sss-img").src = "./assets/images/instagram-hover.png"; 
  }

function trocaimg12(){
  document.getElementById("sss-img").src = "./assets/images/instagram.png"; 
}

//Animação
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 50));
}

//validação do Formulario
function validar(){
  var nome = form_contato.nome.value;
  var telefone = form_contato.telefone.value;
  var email = form_contato.email.value;
  var mensagem = form_contato.mensagem.value;
  var botao = form_contato.bt.value;

  if(nome == ""){
    alert("Digite o nome");
    document.getElementById ("nome").style.border = "1px solid #FF0000"; 
    form_contato.nome.focus();
    return false;
  }

  if(telefone == ""){
    alert("Digite o telefone");
    document.getElementById ("telefone").style.border = "1px solid #FF0000"; 
    form_contato.telefone.focus();
    return false;
  }

  if(email == "" || email.indexOf('@') == -1){
    alert("Digite um Email valido");
    document.getElementById ("email").style.border = "1px solid #FF0000"; 
    form_contato.email.focus();
    return false;
  }

  if(mensagem == ""){
    alert("Digite a Mensagem");
    document.getElementById ("mensagem").style.border = "1px solid #FF0000"; 
    form_contato.mensagem.focus();
    return false;
  }

  if (botao == alert("Formulário enviado com sucesso!")){
    alert("");
    return false;
  }
}

function limpar_erros(){
  var borda_nome = document.getElementById ("nome").style.border = ""; 
  var borda_telefone = document.getElementById ("telefone").style.border = ""; 
  var borda_email = document.getElementById ("email").style.border = ""; 
  var borda_mensagem = document.getElementById ("mensagem").style.border = ""; 

  if(nome == borda_nome){
    document.getElementById ("nome").style.border = "1px solid #FF0000"; 
    return false;
  }

  if(telefone == borda_telefone){
    document.getElementById ("telefone").style.border = "1px solid #FF0000"; 
    return false;
  }

  if(email == borda_email){
    document.getElementById ("email").style.border = "1px solid #FF0000"; 
    return false;
  }

  if(mensagem == borda_mensagem ){
    document.getElementById ("mensagem").style.border = "1px solid #FF0000"; 
    return false;
  }
}

//Formulario - Mascara Telefone
function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}