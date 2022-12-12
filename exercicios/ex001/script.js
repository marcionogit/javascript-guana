// PEGANDO AS DATAS
const dataNasc = document.querySelector('input#ano');
const idade = 0

// BOTÔES DE GÊNEROS
const masculino = document.querySelector('input#masculino');
const feminino = document.querySelector('input#feminino');

// BOTÃO DE ATIVAR A FUNÇÃO
const verificar = document.querySelector('input#verificar');

// TEXTO QUE SERÁ ESCRITO A IDADE
const resultado = document.querySelector('div#resultado');



// IMAGENS HOMENS
const imgHomemMenor = document.querySelector('#imghomem-menor');
const imgHomemAdulto = document.querySelector('#imghomem-adulto');
const imgHomemVelho = document.querySelector('#imghomem-velho');


// IMAGENS MULHERES
const imgMulherAdulta = document.querySelector('#imgmulher-adulta');


// EVENTO DE CLIQUE NO BOTÃO
verificar.addEventListener('click', function(){
    
// CALCULO IDADE
    const idade = 2022 - Number(dataNasc.value);

// QUAL IMAGEM MOSTRAR SE FOR HOMEM    
    if(idade != 2022 && idade >= 65 && masculino.checked){
        imgHomemVelho.classList.toggle('ativado');
        resultado.innerHTML = `Você é um senhor de ${idade} anos de idade`;
    }else if(idade != 2022 && idade > 18 && masculino.checked){
        imgHomemAdulto.classList.toggle('ativado');
        resultado.innerHTML = `Você é um homem de ${idade} anos de idade`;
    }else if(idade != 2022 && idade <= 18 && masculino.checked){
        imgHomemMenor.classList.toggle('ativado');
        resultado.innerHTML = `Você é um jovem de ${idade} anos de idade`;
    }
    
    
// QUAL IMAGEM MOSTRAR SE FOR MULHER
    else if(idade != 2022 && feminino.checked){
    resultado.innerHTML = `Você tem ${idade} anos e é uma mulher ${faixaEtaria}`;
    imgMulher.classList.toggle('ativado');
    }
});

