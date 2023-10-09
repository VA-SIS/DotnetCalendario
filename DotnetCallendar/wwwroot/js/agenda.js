/* Agenda */

document.addEventListener('DOMContentLoaded', function () {

    var initialLocaleCode = 'pt-br';
    var localeSelectorEl = document.getElementById('locale-selector');

    var calendarEl = document.getElementById('agenda');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 700, // Altura fixa em pixels


        // Traduzir para pt-BR

        locale: initialLocaleCode,
        // defaultDate: '2023-31-10',
        eventLimit: true,

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek, dayGridMonth, timeGridDay,year'
        },


        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,month, agendaDay'
        },
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
        },
        initialView: 'timeGridWeek',
        //defaultView: 'agendaWeek', // Defina a visualização padrão para a semana de agenda
        slotDuration: '00:15:00', // Define o intervalo de tempo para os slots (30 minutos)
        businessHours: {
            // Define as horas comerciais (08:00 às 18:00) de segunda a sexta-feira
            dow: [1, 2, 3, 4, 5], // dias da semana (1 = segunda-feira, 2 = terça-feira, etc.)

            start: '08:00', // hora de início das horas comerciais
            end: '18:00' // hora de término das horas comerciais
        },

        events: '/Eventos/ListaEventosJSON',

        eventClick: function (info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate
            console.log(info.event)
            $('#visualizar #id').text(info.event.id);
            $('#visualizar #title').text(info.event.title);
            $('#visualizar #description').text(info.event.extendedProps.description);
            $('#visualizar #start').text(info.event.start.toLocaleString());
            $('#visualizar #end').text(info.event.end.toLocaleString());
            $('#visualizar').modal('show');
        },

        selectable: true,
        select: function (info) {
            //alert('Início do evento: ' + info.start.toLocaleString());
            $('#cadastrar #start').val(info.start.toLocaleString());
            $('#cadastrar #end').val(info.end.toLocaleString());
            $('#cadastrar').modal('show');
        }
    });

    calendar.render();
});

/*Mascara para o campo data e hora*/
function DataHora(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00/00/0000 00:00:00') {
        campo.value = "";
    }

    caracteres = '0123456789';
    separacao1 = '/';
    separacao2 = ' ';
    separacao3 = ':';
    conjunto1 = 2;
    conjunto2 = 5;
    conjunto3 = 10;
    conjunto4 = 13;
    conjunto5 = 16;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (19)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        else if (campo.value.length == conjunto5)
            campo.value = campo.value + separacao3;
    } else {
        event.returnValue = false;
    }
}

$(document).ready(function () {
    $("#addevent").on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/Eventos/create",
            data: new FormData(this),
            contentType: false,
            processData: false,
            success: function (retorna) {
                if (retorna['sit']) {
                    //$("#msg-cad").html(retorna['msg']);
                    location.reload();
                } else {
                    $("#msg-cad").html(retorna['msg']);
                }
            }
        })
    });
});