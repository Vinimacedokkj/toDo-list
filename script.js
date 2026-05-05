let listaDeTarefasAdicionadas = [];

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
        
        const renderizarLista = () => {
            divContendoAsTarefas.innerHTML = "";

            listaDeTarefasAdicionadas.forEach(tarefa => {
                const divDeCadaTarefa = document.createElement("div");
                divDeCadaTarefa.classList.add("tarefa-criada");
    
                const checklistDaTarefa = document.createElement("input");
                checklistDaTarefa.type = "checkbox";
    
                const textoDaTarefa = document.createElement("p");
                textoDaTarefa.textContent = tarefa.texto;
    
                const botaoExcluirTarefa = document.createElement("p");
                botaoExcluirTarefa.classList.add("excluir-tarefa");
                botaoExcluirTarefa.textContent = "x";
    
                divContendoAsTarefas.appendChild(divDeCadaTarefa);
    
                divDeCadaTarefa.appendChild(checklistDaTarefa);
                divDeCadaTarefa.appendChild(textoDaTarefa);
                divDeCadaTarefa.appendChild(botaoExcluirTarefa);

                const excluirTarefa = () => {
                    const idDoBotao = tarefa.id;
                    
                    listaDeTarefasAdicionadas = listaDeTarefasAdicionadas.filter(element => element.id !== idDoBotao);

                    listaDeTarefasAdicionadas.forEach(obj => {
                        return renderizarLista();
                    })

                    indicadorTarefasEmTempoReal.innerHTML = listaDeTarefasAdicionadas.length;

                    if (listaDeTarefasAdicionadas.length === 0) {
                        divContendoAsTarefas.style.justifyContent = "center";
                        divContendoAsTarefas.style.color = "var(--cor-cinza)";
                        divContendoAsTarefas.innerHTML = "Nenhuma tarefa adicionada. Adicione a primeira!";
                    }
                }

                botaoExcluirTarefa.addEventListener("click", excluirTarefa);
            });
        };

        renderizarLista();

        document.querySelector("#input-texto-da-tarefa").value = "";
    };
};

const limparConcluidas = () => {
    const textoLimparConcluidas = document.querySelector("#limpar-concluidas-texto");
    textoLimparConcluidas.addEventListener("click", () => {
        console.log("hello world");
    });
};