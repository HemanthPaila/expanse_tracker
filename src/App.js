import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "car insurence",
      amount: "100",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "new tv",
      amount: "15000",
      date: new Date(2021, 7, 14),
    },
    {
      id: "e3",
      title: "cycle",
      amount: "5000",
      date: new Date(2022, 7, 14),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
