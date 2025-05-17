let jogoAtivo = false;

function iniciarJogo() {
    jogoAtivo = true;
    document.querySelectorAll('.opcao-jogador').forEach(botao => {
        botao.style.pointerEvents = 'auto';
        botao.style.opacity = '1';
    });
    document.querySelector('.botao-reiniciar').style.display = 'none';
}

function handleJogada(event) {
    if (!jogoAtivo) return;
    
    jogoAtivo = false;
    const escolhaJogador = parseInt(event.currentTarget.dataset.jogada);
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    // Desativa os botões durante animação
    document.querySelectorAll('.opcao-jogador').forEach(botao => {
        botao.style.pointerEvents = 'none';
        botao.style.opacity = '0.5';
    });
    
    exibirResultado(
        calcularResultado(escolhaJogador, escolhaComputador),
        escolhaComputador
    );
}

function calcularResultado(jogador, computador) {
    if (jogador === computador) return 'empate';
    const combinacoesVitoria = [[1,3], [2,1], [3,2]];
    return combinacoesVitoria.some(([j, c]) => j === jogador && c === computador) 
        ? 'vitoria' 
        : 'derrota';
}

function exibirResultado(resultado, escolhaComputador) {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const resultadoDiv = document.getElementById('resultado');
    const computadorDiv = document.getElementById('jogadaComputador');
    
    computadorDiv.textContent = `Computador escolheu: ${opcoes[escolhaComputador - 1]}`;
    
    resultadoDiv.textContent = resultado === 'empate' ? 'Empate!' :
                              resultado === 'vitoria' ? 'Vitória!' : 'Derrota!';
    resultadoDiv.style.color = resultado === 'vitoria' ? '#1ABC9C' : 
                             resultado === 'derrota' ? '#ff1b7b' : '#FFF';

    document.querySelector('.botao-reiniciar').style.display = 'block';
}

function reiniciarJogo() {
    iniciarJogo();
    document.getElementById('resultado').textContent = '';
    document.getElementById('jogadaComputador').textContent = '';
}

function verificarIdade() {
    const idade = document.getElementById('inputIdade').value;
    const modal = document.getElementById('modalIdade');
    
    if (!idade || idade < 1 || idade > 120) {
        alert('Por favor, digite uma idade válida!');
        return;
    }
    
    modal.style.display = 'none';
    if (idade >= 18) {
        iniciarJogo();
    } else {
        alert('Você precisa ser maior de idade para jogar!');
    }
}

// Inicializa eventos após carregamento
document.querySelectorAll('.opcao-jogador').forEach(botao => {
    botao.addEventListener('click', handleJogada);
});