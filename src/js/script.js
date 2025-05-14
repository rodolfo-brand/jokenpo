function verificarIdade() {
    const idade = document.getElementById('campoIdade').value;
    const janela = document.getElementById('janelaIdade');
    
    if (idade >= 18) {
        janela.style.display = 'none'; // Esconde a janela
        iniciarJogo(); // Função que começa o jogo
    } else {
        alert('Você precisa ser maior de idade para jogar!');
        janela.style.display = 'none';
        // Aqui você pode redirecionar ou mostrar mensagem alternativa
    }
}