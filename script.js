document.getElementById("btnSoma").addEventListener("click", function() {
    var inputValor = document.getElementById("inputDados").value;
    function somatorioDivisiveis3ou5(numero) {
        let somatorio = 0;
        for (let i = 3; i < numero; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                somatorio += i;
            }
        }
        return somatorio;
    }
    var saidaElemento = document.getElementById("saidaDados");
    saidaElemento.innerHTML = somatorioDivisiveis3ou5(inputValor);
});
