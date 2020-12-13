function tabuada(){
let num = document.getElementById('txtnum')
let tab = document. getElementById('seltab')
let tab2 = document. getElementById('seltab2')
let tab3 = document. getElementById('seltab3')
let tab4 = document. getElementById('seltab4')
if (num.value.length == 0){
    window.alert('Por favor, digite um numero!')
}else{
    let n = Number(num.value)
    for (let i=1; i<=10; i++){
        let item =document.createElement('option')
        item.text = `${n} + ${i} = ${n+i}`
        tab.appendChild(item)
    }
    for (let i=1; i<=10; i++){
        let item =document.createElement('option')
        item.text = `${n} - ${i} = ${n-i}`
        tab2.appendChild(item)
    }
    for (let i=1; i<=10; i++){
        let item =document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab3.appendChild(item)
    }
    for (let i=1; i<=10; i++){
        let item =document.createElement('option')
        item.text = `${n} / ${i} = ${n/i}`
        tab4.appendChild(item)
    }
    
}



}