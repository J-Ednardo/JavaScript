function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    res.innerHTML = `Tabuada do ${num.value}:  <br>`
    if(num.value.length == 0){
        window.alert('[ERRO] Dados inválidos!')
        res.innerHTML = 'Não foi possível realizar a tabuada!'
    }else{
        let n = Number(num.value)
        for(c = 1; c <= 10; c++){
            res.innerHTML += `${n} x ${c} = ${n * c} <br>`
        }
    }
}