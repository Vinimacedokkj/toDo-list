const listaDeTarefasAdicionadas = [];

const tarefasConcluidas = [];

const adicionarTarefa = () => {
    const input =  document.querySelector("#input-texto-da-tarefa").value;

    if (input === "" || input ===  " " || input === null) {
        alert("Por favor, adicione ao menos uma tarefa!");
    } else {
        document.querySelector(".div-container-contendo-as-tarefas").style.justifyContent = "flex-start";

        listaDeTarefasAdicionadas.push({
            id: crypto.randomUUID(),
            texto: input,
            concluida: false
        });

        const indicadorTarefasEmTempoReal = document.querySelector(".numero-de-tarefas-em-tempo-real");
        indicadorTarefasEmTempoReal.innerHTML = listaDeTarefasAdicionadas.length;
        
        const divContendoAsTarefas = document.querySelector(".div-container-contendo-as-tarefas");
        divContendoAsTarefas.innerHTML = "";
        
        listaDeTarefasAdicionadas.forEach((tarefa) => {
            const divDeCadaTarefa = document.createElement("div");
            divDeCadaTarefa.classList.add("tarefa-criada");

            const checklistDaTarefa = document.createElement("input");
            checklistDaTarefa.type = "checkbox";

            const textoDaTarefa = document.createElement("p");
            textoDaTarefa.textContent = tarefa.texto;

            const botaoExcluirTarefa = document.createElement("p");
            botaoExcluirTarefa.classList.add("excluir-tarefa");
            botaoExcluirTarefa.textContent = "x";

            const excluirTarefa = () => {
                const idDoBotao = tarefa.id;

                const atualizacaoListaDeTarefas = listaDeTarefasAdicionadas.filter(element => element.id !== idDoBotao);

                console.log(atualizacaoListaDeTarefas);

                divContendoAsTarefas.innerHTML = atualizacaoListaDeTarefas;

            }

            botaoExcluirTarefa.addEventListener("click", excluirTarefa);

            divContendoAsTarefas.appendChild(divDeCadaTarefa);

            divDeCadaTarefa.appendChild(checklistDaTarefa);
            divDeCadaTarefa.appendChild(textoDaTarefa);
            divDeCadaTarefa.appendChild(botaoExcluirTarefa);   
        });

        document.querySelector("#input-texto-da-tarefa").value = "";
        };
};

const limparConcluidas = () => {
    const textoLimparConcluidas = document.querySelector("#limpar-concluidas-texto");
    textoLimparConcluidas.addEventListener("click", () => {
        console.log("hello world");
    });
};