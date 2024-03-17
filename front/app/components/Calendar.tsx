import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

let calendarEl = document.getElementById('calendar');
let calendar = new Calendar(calendarEl, {
  plugins: [ interactionPlugin ],

  dateClick: function(info) {
    alert('Clicked on: ' + info.dateStr);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('Current view: ' + info.view.type);
    // change the day's background color just for fun
    info.dayEl.style.backgroundColor = 'red';
  }
});
