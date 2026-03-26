const listaDeTarefasAdicionadas = [];

const adicionarTarefa = () => {
    const input =  document.querySelector("#input-texto-da-tarefa").value;
    listaDeTarefasAdicionadas.push(input);

    const textoNenhumaTarefaAdicionada = document.querySelector("#nenhuma-tarefa-adicionada-texto");
    textoNenhumaTarefaAdicionada.classList.add("none");

    const indicadorTarefasEmTempoReal = document.querySelector("span");
    indicadorTarefasEmTempoReal.innerHTML = listaDeTarefasAdicionadas.length;
    
    const divContendoAsTarefas = document.querySelector(".div-container-contendo-as-tarefas");
    divContendoAsTarefas.innerHTML = "";
    
    listaDeTarefasAdicionadas.forEach((el) => {
        

        const tarefaCriada = document.createElement("li");
        tarefaCriada.classList.add("tarefa-criada");
        tarefaCriada.innerHTML = el;

        divContendoAsTarefas.appendChild(tarefaCriada);

    });
}