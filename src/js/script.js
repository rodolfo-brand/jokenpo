function verificarIdade() {
    const idade = document.getElementById('campoIdade').value;
    const janela = document.getElementById('janelaIdade');
    
    if (!idade || idade < 1 || idade > 120) {
        alert('Por favor, digite uma idade válida!');
        return;
    }
    
}