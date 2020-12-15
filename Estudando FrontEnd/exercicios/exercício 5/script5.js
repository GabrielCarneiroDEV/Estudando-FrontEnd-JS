//quantidade de numeros
//maior valor
//menor valor
//soma de todos os valores
//média de valores digitados



//------------------------------------------------------



function adicionar(){
 //let res = document.getElementById('res')
    let selAnalisador = document.getElementById('selAnalisador')
    let adds = document.getElementById('txtnum')
    let adicionados = Number(adds.value)
    let res = document.getElementById('res')
    
    
    let item = document.createElement('option')
    item.text = `${adicionados}`
    selAnalisador.appendChild(item)
    let valores =[]
    valores.push(adicionados)
    

 
}

function analisar(){

   
    res.innerHTML = `${valores}`
    
    }
