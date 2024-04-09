/* eslint-disable react/prop-types */
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
