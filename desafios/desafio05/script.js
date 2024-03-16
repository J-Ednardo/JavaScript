function converter(){
    var distancia = window.prompt('Digite uma distância em metros (m)')
    var m = Number(distancia)
    var cab = document.getElementById('cab')
    var km = document.getElementById('km')
    var hm = document.getElementById('hm')
    var dam = document.getElementById('dam')
    var dm = document.getElementById('dm')
    var cm = document.getElementById('cm')
    var mm = document.getElementById('mm')
    var km_valor = m/1000
    var hm_valor = m/100
    var dam_valor = m /10
    var dm_valor = m * 10
    var cm_valor = m * 100
    var mm_valor = m * 1000
    cab.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`
    km.innerHTML = `${km_valor} quilômetros (Km)`
    hm.innerHTML = `${hm_valor} hectômetros (Hm)`
    dam.innerHTML = `${dam_valor} decâmetros (Dam)`
    dm.innerHTML = `${dm_valor} decímetros (Dm)`
    cm.innerHTML = `${cm_valor} centímetros (Cm)`
    mm.innerHTML = `${mm_valor} milímetros (Mm)`
}