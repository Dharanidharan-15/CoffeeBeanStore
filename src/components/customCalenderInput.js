import React, { useState } from 'react';

const CustomCalendarInput = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf06Y5Qo8_YB88dkL0GUFWvYjL9P9awi3D1A&usqp=CAU"
        alt="Calendar"
        onClick={toggleCalendar}
        style={{ cursor: 'pointer' }}
      />
      {showCalendar && (
        <input
          type="text"
          placeholder="Select a date"
          // You can add other calendar-related functionality here
        />
      )}
    </div>
  );
};

export default CustomCalendarInput;
