function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()



msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12 ){
//bomdia
img.src ='manha.png'
document.body.style.background = 'rgba(253, 207, 0, 0.700)'
}else if( hora >= 12 && hora < 18){
//boatarde
img.src = 'tarde.png'
document.body.style.background = 'rgb(0, 131, 253)'
}else{
//boanoite
img.src = 'noite.png'
document.body.style.background = 'rgb(27, 4, 110)'
}
}