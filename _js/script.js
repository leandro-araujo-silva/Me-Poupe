function verificar() {
    var c1 = document.getElementById('aluguel')
    var c2 = document.getElementById('condo')
    var c3 = document.getElementById('iptu')
    var c4 = document.getElementById('alimento')
    var c5 = document.getElementById('manu')
    var c6 = document.getElementById('agua')
    var c7 = document.getElementById('luz')
    var c8 = document.getElementById('gas')
    var c9 = document.getElementById('internet')
    var c10 = document.getElementById('transporte')
    var res = document.getElementById('res')

    var img = document.createElement('img')
    img.style.borderRadius = '50%'
    img.style.width = '110px'
    img.style.marginTop = '18px'
    img.style.cursor = 'pointer'
    //img.setAttribute('id', 'foto')
    img.setAttribute('src', '_imagens/poupe.jpg')
    
    var soma = Number(c1.value) + Number(c2.value) + Number(c3.value) + Number(c4.value) + Number(c5.value) + Number(c6.value) + Number(c7.value) + Number(c8.value) + Number(c9.value) + Number(c10.value)

    res.style.textAlign = 'center'
    res.innerHTML = `<p><strong>Seu gasto mensal: R$ ${soma}</strong></p>`
    res.appendChild(img)

}