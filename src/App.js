import "./App.css";
import Filter from "./components/Filter";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
