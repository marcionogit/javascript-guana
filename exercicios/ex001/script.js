const dataNasc = document.querySelector('input#ano');
const idade = 0
const masculino = document.querySelector('input#masculino');
const feminino = document.querySelector('input#feminino');
const verificar = document.querySelector('input#verificar');
const resultado = document.querySelector('div#resultado');
const imgHomem = document.querySelector('#imghomem')
const imgMulher = document.querySelector('#imgmulher')


let faixaEtaria = '';
verificar.addEventListener('click', function(){
    
    
    const idade = 2022 - Number(dataNasc.value);
    if(idade < 18){
        faixaEtaria = 'não é adulto';
    } else if(idade >= 18){
        faixaEtaria = 'adulto(a)'
    }; 

    if(idade != 2022 && masculino.checked){
    resultado.innerHTML = `Você tem ${idade} anos e é um homem ${faixaEtaria}`;
    imgHomem.classList.toggle('ativado');
    } else if(idade != 2022 && feminino.checked){
    resultado.innerHTML = `Você tem ${idade} anos e é uma mulher ${faixaEtaria}`;
    imgMulher.classList.toggle('ativado');
    }
});

