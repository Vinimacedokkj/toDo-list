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

        let filtrarTarefasPendentes = listaDeTarefasAdicionadas.filter(tarefa => tarefa.concluida === false);

        const indicadorTarefasEmTempoReal = document.querySelector(".numero-de-tarefas-em-tempo-real");
        indicadorTarefasEmTempoReal.innerHTML = filtrarTarefasPendentes.length;
        
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

                const concluirTarefa = () => {
                    if (checklistDaTarefa.checked) {
                        tarefa.concluida = true;

                        textoDaTarefa.style.textDecoration = "line-through";
                        textoDaTarefa.style.color = "var(--cor-cinza-soft)";
                    } else {
                        tarefa.concluida = false;

                        textoDaTarefa.style.textDecoration = "none";
                        textoDaTarefa.style.color = "black";
                    }

                    filtrarTarefasPendentes = listaDeTarefasAdicionadas.filter(tarefa => tarefa.concluida === false);
                    indicadorTarefasEmTempoReal.innerHTML = filtrarTarefasPendentes.length;
                }
                
                checklistDaTarefa.addEventListener("change", concluirTarefa);
    
                const botaoExcluirTarefa = document.createElement("p");
                botaoExcluirTarefa.classList.add("excluir-tarefa");
                botaoExcluirTarefa.textContent = "x";
    
                divContendoAsTarefas.appendChild(divDeCadaTarefa);
    
                divDeCadaTarefa.appendChild(checklistDaTarefa);
                divDeCadaTarefa.appendChild(textoDaTarefa);
                divDeCadaTarefa.appendChild(botaoExcluirTarefa);

                const excluirTarefa = () => {
                    const idDoBotao = tarefa.id;
                    
                    listaDeTarefasAdicionadas = listaDeTarefasAdicionadas.filter(tarefa => tarefa.id !== idDoBotao);

                    listaDeTarefasAdicionadas.forEach(obj => renderizarLista());

                    if (listaDeTarefasAdicionadas.length === 0) {
                        divContendoAsTarefas.style.justifyContent = "center";
                        divContendoAsTarefas.style.color = "var(--cor-cinza)";
                        divContendoAsTarefas.innerHTML = "Nenhuma tarefa adicionada. Adicione a primeira!";
                    }

                    filtrarTarefasPendentes = listaDeTarefasAdicionadas.filter(tarefa => !tarefa.concluida);
                    indicadorTarefasEmTempoReal.innerHTML = filtrarTarefasPendentes.length;
                    
                }

                botaoExcluirTarefa.addEventListener("click", excluirTarefa);

                if (tarefa.concluida === true) {
                    checklistDaTarefa.checked = "true";
                    textoDaTarefa.style.textDecoration = "line-through";
                    textoDaTarefa.style.color = "var(--cor-cinza-soft)";
                }
            });

            const limparConcluidas = () => {
                const existeTarefaConcluida = listaDeTarefasAdicionadas.some(tarefa => tarefa.concluida);

                if (existeTarefaConcluida) {
                    listaDeTarefasAdicionadas = listaDeTarefasAdicionadas.filter(tarefa => !tarefa.concluida);
            
                    console.log(listaDeTarefasAdicionadas);
                } else {
                    console.log("Hello world");
                }
            }
        
            const limparConcluidasTexto = document.querySelector("#limpar-concluidas-texto");
            limparConcluidasTexto.addEventListener("click", limparConcluidas);
        }

        renderizarLista();

        document.querySelector("#input-texto-da-tarefa").value = "";
    };
};