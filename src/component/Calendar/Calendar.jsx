import React, { useState } from 'react';
import { createEventId, INITIAL_EVENTS } from '../../event/event-utils';
import { Box, Typography } from '@mui/material';
import '../../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const styles={
  App_calendar:{
    display:'flex',
    minHeight:'100%',
  },
  App_main:{
    flexGrow:'1',
  }
}

const Calendar = () => {
  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: [],
  });

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.toPlainObject());
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };
  // const reportNetworkError = () => {
  //   alert('This action could not be completed')
  // };
//
//   const handleEventChange = (changeInfo) => {
//   (changeInfo.event.toPlainObject())
//     .catch(() => {
//       reportNetworkError()
//       changeInfo.revert()
//     })
// }
  const handleEvents = (events) => {
    setState({
      ...state, currentEvents: events,
    });
  };
  const renderEventContent = eventInfo => (
    <>
      <Typography variant='caption' sx={{overflow:'hidden'}}>{eventInfo.timeText}</Typography>
      <Typography variant='subtitle2' sx={{overflow:'hidden'}}>{eventInfo.event.title}</Typography>
    </>
  );

  return (
    <Box sx={styles.App_calendar}>
      <Box sx={styles.App_main}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={state.weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
