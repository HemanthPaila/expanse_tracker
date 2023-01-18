import React, { useState } from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };
  props.onsaveFilterYear(filteredYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={filterChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2014">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
