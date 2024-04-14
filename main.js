// DARK MODE

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
})





function converterMoeda(){
    var ValorDolar = document.getElementById('ValorDolar').value;
    var UsValor = 0.20;
    var ValorReal = (ValorDolar * UsValor).toFixed(2);
    
    document.getElementById('ValorReal').value = ValorReal;

}