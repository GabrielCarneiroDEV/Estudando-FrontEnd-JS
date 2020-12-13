function contar(){
let inicio = document.getElementById('txtini')
let fim = document.getElementById('txtfim')
let passo= document.getElementById('txtpasso')
let res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = `[ERRO] Faltam dados!`
}else{
    res.innerHTML = 'Contagem: <br><br>'
let valorInicio = Number(inicio.value)
let valorFim = Number(fim.value)
let valorPasso = Number(passo.value)
if(valorPasso==0){
    valorPasso = 1
}

if(valorInicio < valorFim){
for(let i = valorInicio; i <= valorFim; i+=valorPasso){

    res.innerHTML += ` ${i} `
}
  }else{
      for(let i =valorInicio; i >= valorFim; i-= valorPasso){
          res.innerHTML += ` ${i} `
      }
  }


}




}
