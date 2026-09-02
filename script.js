function filtrarExercicios() {
    const termoBusca = document.getElementById('pesquisaInput').value.trim().toLowerCase();
    const itens = document.querySelectorAll('#exerciciosList li');

    itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        const deveMostrar = texto.includes(termoBusca);
        item.style.display = deveMostrar ? "" : "none";
    });
}