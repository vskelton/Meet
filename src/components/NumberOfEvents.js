import { useState } from "react";

const NumberOfEvents = ({ onNumberChange, defaultNumber = 32 }) => {
  const [eventCount, setEventCount] = useState(defaultNumber);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setEventCount(value > 0 ? value : defaultNumber);
    onNumberChange(value);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input 
        id="number-of-events-input"
        type="number"
        value={eventCount}
        onChange={handleInputChange}
        role="textbox"
        />
    </div>
  );
};

export default NumberOfEvents;