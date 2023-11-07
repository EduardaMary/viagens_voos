function selecionarTipoViagem(tipo) {
    document.getElementById("idaForm").style.display = tipo === 'ida' ? 'block' : 'none';
    document.getElementById("idaVoltaForm").style.display = tipo === 'idaVolta' ? 'block' : 'none';
}

function reservarViagem(tipo) {
    const origem = document.getElementById(`origem${tipo}`).value;
    const destino = document.getElementById(`destino${tipo}`).value;
    const dataIda = document.getElementById(`dataIda${tipo}`).value;
    let mensagem = `Viagem de ${origem} para ${destino} agendada para ${dataIda}.`;

    if (tipo === 'idaVolta') {
        const dataVolta = document.getElementById("dataVolta").value;
        mensagem += ` A volta está marcada para ${dataVolta}.`;
    }

    document.getElementById("mensagem").textContent = mensagem;
}

function comprarViagem(destino) {
    document.getElementById('resposta').innerHTML = `Viagem para ${destino} comprada com sucesso!`;
}
