import "./App.css";
import NavBar from "./components/navbar.jsx";
import Record from "./components/record.jsx";
import Data from "./data.jsx";

function App() {
  const records = Data.map((record) => {
    return <Record key={record.id} data={record} />;
  });
  return (
    <>
      <NavBar />
      {records}
    </>
  );
}

export default App;
