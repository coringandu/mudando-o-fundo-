function validarCampo () {
    let nome = documento.getElementById("ana").value.trim();
    let mensagem = "vai tomando!";
    
    if (nome === "") {
        mensagem = "O campo nome está vazio.";
    } else if (nome.length < 3 ) {
        mensagem = "Digite pelo menos 3 caracteres.";
    } else {
    mensagem = "Campo preenchido corretamente!";
    }

    documento.getElementById("mensagem").innerText =
    "mensagem: " + mensagem;
}
