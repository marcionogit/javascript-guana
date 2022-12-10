const paisNascimento = document.querySelector('input#pais');
const verificar = document.querySelector('input#verificar');
const resposta = document.querySelector('div#resposta');


verificar.addEventListener('click', function(){
    console.log(paisNascimento.value);
    if(paisNascimento.value == 'brasil'){
        resposta.innerHTML = 'Você é Brasileiro';
        const cor = document.querySelector('#div').classList.add('brasil')
    }else if(paisNascimento.value == 'argentina'){
        resposta.innerHTML = 'Argentino Boludo';
        const arg = document.querySelector('#div').classList.add('argentina')
    }
     else{
        resposta.innerHTML = 'Você não é Brasileiro';
    }
})
