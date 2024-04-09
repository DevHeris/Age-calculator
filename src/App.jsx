to/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  return (
    <div className="app-wrapper">
      <div className="inputs">
        <div>
          <label htmlFor="day">DAY</label>
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <div>
          <label htmlFor="month">MONTH</label>
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <div>
          <label htmlFor="year">YEAR</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <img src="/images/icon-arrow.svg" alt="arrow" />
      </div>
      <Result day={days} month={months} year={years} />
    </div>
  );
}

function Result({ day, month, year }) {
  return (
    <div className="results">
      <p>
        <span className="year">{year}</span>years
      </p>
      <p>
        <span className="month">{month}</span>
        months
      </p>
      <p>
        <span className="day">{day}</span>days
      </p>
    </div>
  );
}

export default App;

/* eslint-disable react/prop-types */
import React, { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  
  const calculateAge = () => {
    // Calculate age based on input values
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    // Calculate difference in years, months, and days
    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();
    
    // Adjust age if current month is before birth month, or if current day is before birth day
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }
    
    return { years: ageYear, months: ageMonth, days: ageDay };
  };

  const { years, months, days } = calculateAge();

  return (
    <div className="app-wrapper">
      <div className="inputs">
        <div>
          <label htmlFor="day">DAY</label>
          <input
            type="number"
            name="day"
            id="day"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <div>
          <label htmlFor="month">MONTH</label>
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <div>
          <label htmlFor="year">YEAR</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <p className="error">This field is required</p>
        </div>
        <img src="/images/icon-arrow.svg" alt="arrow" />
      </div>
      <Result day={days} month={months} year={years} />
    </div>
  );
}

function Result({ day, month, year }) {
  return (
    <div className="results">
      <p>
        <span className="year">{year}</span> years
      </p>
      <p>
        <span className="month">{month}</span> months
      </p>
      <p>
        <span className="day">{day}</span> days
      </p>
    </div>
  );
}

export default App;
