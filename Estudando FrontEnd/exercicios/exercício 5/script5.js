//quantidade de numeros
//maior valor
//menor valor
//soma de todos os valores
//média de valores digitados



//------------------------------------------------------
let selAnalisador = document.getElementById('selAnalisador')
let adds = document.getElementById('txtnum')

let res = document.getElementById('res')
let valores =[]
let adicionados





function adicionar(){
 
 let item = document.createElement('option')

    
if (adds.value.length == 0 || adds.value > 100 ){

    window.alert("ERRO - VALOR INCORRETO")
} else{

    adicionados =Number(adds.value)
    valores.push(adicionados)
    selAnalisador.appendChild(item)
     item.text = `${adicionados}`
   
   
}
 
}

function analisar(){
    let soma = 0;
    let maiorNum=0
    let nums = 0 
    let media = 0
    for (let i = 0; i < valores.length; i++){

       soma += valores[i];
       
       nums = valores[i]
       if(maiorNum < valores[i]){
           maiorNum = valores[i]
       }


   

    }
   
    media = soma / valores.length
    res.innerHTML = `${valores} <br> a soma é ${soma} <br> o maior numero é ${maiorNum} <br> a média é ${media.toFixed(2)}`
    
    
    }
