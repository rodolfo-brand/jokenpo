idade = prompt("Qual a sua idade?");
if (idade >= 18)
    alert("Você é maior de idade! Vamos jogar Jokempo!");
{
    escolhaJogador = prompt("digite 1-pedra, 2-papel, ou 3-tesoura?");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    //se der empate
    if (escolhaJogador == escolhaComputador) {
        alert("Empate!");
    } else if (
        (escolhaJogador == 1 && escolhaComputador == 3) ||
        (escolhaJogador == 2 && escolhaComputador == 1) ||
        (escolhaJogador == 3 && escolhaComputador == 2)
    ) {
        alert("Você ganhou!");
    } else {
        alert("Você perdeu!");
    }
}