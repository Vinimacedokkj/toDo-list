const listaDeTarefasAdicionadas = [];

const adicionarTarefa = () => {
    const input =  document.querySelector("#input-texto-da-tarefa").value;

    if (input === "" || input ===  " " || input === null) {
        alert("Por favor, adicione ao menos uma tarefa!");
    } else {
        document.querySelector(".div-container-contendo-as-tarefas").style.justifyContent = "flex-start";

        listaDeTarefasAdicionadas.push(input);

        const indicadorTarefasEmTempoReal = document.querySelector(".numero-de-tarefas-em-tempo-real");
        indicadorTarefasEmTempoReal.innerHTML = listaDeTarefasAdicionadas.length;
        
        const divContendoAsTarefas = document.querySelector(".div-container-contendo-as-tarefas");
        divContendoAsTarefas.innerHTML = "";
        
        listaDeTarefasAdicionadas.forEach((el) => {
            const tarefaCriada = document.createElement("li");
            tarefaCriada.classList.add("tarefa-criada");
            tarefaCriada.textContent = el;

            divContendoAsTarefas.appendChild(tarefaCriada);
        });

        document.querySelector("#input-texto-da-tarefa").value = "";
        }
}

const textoLimparConcluidas = document.querySelector("#limpar-concluidas-texto");

textoLimparConcluidas.addEventListener("click", () => {

});