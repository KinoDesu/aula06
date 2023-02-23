const btnSim = document.querySelector('.sim')
const btnSimA = document.querySelector('a .sim')
const btnNao = document.querySelector('.nao')

btnSim.onmouseover = function () { mouseOverSim() }
btnSim.onmouseout = function () { mouseOutSim() }
btnNao.onmousedown = function () { mouverOverNao() }

function mouseOverSim() {
    btnSimA.innerHTML = "Bora lá!"
    btnNao.style.display = 'none'
}

function mouseOutSim() {
    btnSim.style.transition = '0.25s'
    btnSimA.innerHTML = "SIM!"
    btnNao.style.display = 'inline-block'
    btnNao.style = "position: relative; display: inline";
}

function mouverOverNao() {

    var x = Math.floor(Math.random() * 80) + 15
    var y = Math.floor(Math.random() * 46) + 5

    console.log(`x = ${x}, y= ${y}`)

    btnNao.style.position = "absolute"
    btnNao.style.left = `${x}%`
    btnNao.style.bottom = `${y}%`
}