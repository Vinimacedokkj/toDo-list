const listaDeTarefasAdicionadas = [];

const tarefasConcluidas = [];

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
            const divDeCadaTarefa = document.createElement("div");
            divDeCadaTarefa.classList.add("tarefa-criada");

            const checklistDaTarefa = document.createElement("input");
            checklistDaTarefa.type = "checkbox";

            const textoDaTarefa = document.createElement("p");
            textoDaTarefa.textContent = el;

            const excluirTarefa = document.createElement("p");
            excluirTarefa.classList.add("excluir-tarefa");
            excluirTarefa.textContent = "x";

            divContendoAsTarefas.appendChild(divDeCadaTarefa);

            divDeCadaTarefa.appendChild(checklistDaTarefa);
            divDeCadaTarefa.appendChild(textoDaTarefa);
            divDeCadaTarefa.appendChild(excluirTarefa);    
        });

        document.querySelector("#input-texto-da-tarefa").value = "";
        };
};

const excluirTarefa = () => {
    console.log("hello world");
}

const limparConcluidas = () => {
    const textoLimparConcluidas = document.querySelector("#limpar-concluidas-texto");
    textoLimparConcluidas.addEventListener("click", () => {
        console.log("hello world");
    });
};