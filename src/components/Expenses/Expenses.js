import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
const Expenses = (props) => {
  const onSaveFilterYearHandler = (selectedYear) => {
    console.log(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onsaveFilterYear={onSaveFilterYearHandler} />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
