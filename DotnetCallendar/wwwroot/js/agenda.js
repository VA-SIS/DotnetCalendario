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
            end: '08:00' // hora de término das horas comerciais
        },

        events: '/Eventos/ListaEventosJSON',

        //  resources: @Html.Raw(ViewData["Resources"]),

        // eventClick: function (info) {
        //     alert('Event: ' + info.event.title);
        //     alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        //     alert('View: ' + info.view.type);

        //     // change the border color just for fun
        //     info.el.style.borderColor = 'red';
        // },

        eventClick: function (info) {
            // $("#apagar_evento").attr("href", "proc_apagar_evento.php?id=" + info.event.id);
            // info.jsEvent.preventDefault(); // don't let the browser navigate
            // console.log(info.event);
            // $('#visualizar #id').text(info.event.id);
            // $('#visualizar #id').val(info.event.id);
            // $('#visualizar #title').text(info.event.title);
            // $('#visualizar #title').val(info.event.title);
            // $('#visualizar #start').text(info.event.start.toLocaleString());
            // $('#visualizar #start').val(info.event.start.toLocaleString());
            // $('#visualizar #end').text(info.event.end.toLocaleString());
            // $('#visualizar #end').val(info.event.end.toLocaleString());
            // $('#visualizar #color').val(info.event.backgroundColor);

            $('#visualizar').modal('show');
        },
        selectable: true,
        select: function (info) {
            //alert('Início do evento: ' + info.start.toLocaleString());
            // $('#cadastrar #start').val(info.start.toLocaleString());
            // $('#cadastrar #end').val(info.end.toLocaleString());

            $('#cadastrar').modal('show');
        }


    });



    calendar.render();


});


