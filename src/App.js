import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
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
      <NewExpense />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
