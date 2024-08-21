$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
        e.preventDefault();

        let nomeTarefa = $('#nome-tarefa').val();
        let tarefa = $('<li></li>').text(nomeTarefa).hide();

        $('#lista-tarefas').append(tarefa);
        $(tarefa).fadeIn(300);
        $('#nome-tarefa').val('');

        tarefa.click(function() {
            $(this).toggleClass('completed');
        });
    });
});
