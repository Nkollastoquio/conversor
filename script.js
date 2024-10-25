document.getElementById('currency-form').addEventListener('submit',function(event){
// esse codigo ele enterompe a atualização da pagina
    event.preventDefault();

    // obter valores de entrada do formulario
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
    
    // definir taxa de cambio com fixa com utilização de objeto
    const extengeRates = {
        USD: {EUR: 0.93,BRL: 5.71},
        _BRL: { EUR: 0.16, USD: 0.18 },
        EUR: {USD: 1.08,BRL: 6.16}
    };
    if (daMoeda === paraMoeda){
        valorConvertido = valor;
    } else{ 
        valorConvertido = valor * extengeRates [daMoeda][paraMoeda];

    }
    let conversao = document.getElementById('conversao');
    conversao.textContent = `resutado ${valorConvertido.toFixed(2)} ${ paraMoeda}`;
});