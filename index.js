// variáveis que pegam os id's dos botões
const vestuário = document.getElementById("vestuário");
const garrafas = document.getElementById("garrafas");
const canecas = document.getElementById("canecas");
const posters = document.getElementById("posters");
const acessórios = document.getElementById("acessórios");
const seletor = [vestuário, garrafas,canecas, posters, acessórios];
// variáveis que pegam os id's dos produtos
const vestuários_produtos = document.getElementById("vestuários_produtos");
const garrafas_produtos = document.getElementById("garrafas_produtos");
const canecas_produtos = document.getElementById("canecas_produtos");
const posters_produtos = document.getElementById("posters_produtos");
const acessórios_produtos = document.getElementById("acessórios_produtos");
const seletor_produtos = [vestuários_produtos, garrafas_produtos, canecas_produtos, posters_produtos, acessórios_produtos];

function botao(item){
    seletor[item].style.border = "none";
    for(let i = 0; i < 5; i++){
        if(item == i){
            seletor[item].style.backgroundColor = "#0f0420cc";
            seletor_produtos[item].style.display = "block"
            continue;
        }
        seletor[i].style.backgroundColor = "#8f58e2cc";
        seletor_produtos[i].style.display = "none"
    }
}
// slider
const voltar = document.getElementById("voltar");
const avançar = document.getElementById("avançar");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
let slide_index = 0;
const slide_num = [slider1, slider2, slider3];

function slider(slide){
    slide_index += slide;
    if(slide_index < 0){
        slide_index = 2;
    }else if(slide_index > 2){
        slide_index = 0;
    }
    for(let i = 0; i < 3 ; i++){
        if(slide_index == i){
            slide_num[slide_index].style.display = "block"
            continue;
        }
        slide_num[i].style.display = "none"
    }
}
// modal
const modal = document.getElementById("modal");
const quantidade = document.getElementById("quantidade");
const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const comprar = document.getElementById("comprar");
const modal_img = document.getElementsByClassName("modal_img");
const título = document.getElementById("título");
const fechar = document.getElementById("fechar");
const imagem_padrão = document.getElementById("imagem_padrão");
const imagem1 = document.getElementById("imagem1");
const imagem2 = document.getElementById("imagem2");
const imagem3 = document.getElementById("imagem3");
const imagem4 = document.getElementById("imagem4");
const imagem5 = document.getElementById("imagem5");
const imagens = [imagem1,imagem2, imagem3, imagem4, imagem5];
let quantidade_val = 0;

fechar.onclick = function(){
    modal.style.display = "none";
}
comprar.onclick = function(){
    if(quantidade_val == 0){
        alert("deve ser informado um valor de quantidade");
    }else{
    quantidade.innerHTML = "quantidade: 0";
    alert("compra realizada");
    modal.style.display = "none";
}
}
function mudar_valor(val){
    if(quantidade_val == 0 && val == -1){
        // quantidade_val = 0;
    }else{
        quantidade_val += val;
    }
    quantidade.innerHTML = "quantidade: " + quantidade_val;
}
function mudar_imagem(índice){
    quantidade_val = 0;
    quantidade.innerHTML = "quantidade: " + quantidade_val;
    modal.style.display = "block";
    for(let i = 0; i < 5; i++){
        if(índice == i){
            imagem_padrão.src = imagens[índice].src;
        }
    }
}
//Interações do menu hambúguer
const menu = document.getElementById("menu");
const links_container = document.getElementById("links_container");
menu.onclick = function(){
    if(links_container.style.display == "none"){
        links_container.style.display = "block";
    }
    else{
        links_container.style.display = "none";
}
}