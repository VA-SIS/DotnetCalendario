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
            right: 'timeGridWeek, dayGridMonth, timeGridDay, year'
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
            /*$('#visualizar #description').text(info.event.extendedProps.description);*/
            $('#visualizar #start').text(info.event.start.toLocaleString());
            $('#visualizar #end').text(info.event.end.toLocaleString());
            $('#visualizar').modal('show');
        }
    });

    calendar.render();
});