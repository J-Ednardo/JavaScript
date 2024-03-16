function converter(){
    var temp = window.prompt(`Digite uma temperatura em °C (Celsius)`)
    var grau = Number(temp)
    var cab = document.getElementById('cab')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var kelvin = grau + 273
    var far = (grau * (9/5)) + 32
    cab.innerHTML = `<h2>A temperatura de ${temp}°C, corresponde a ...</h2>`
    res.innerHTML = `${kelvin}°K (Kelvin)`
    res2.innerHTML = `${far}°F (Fahrenheit)`
}