import "./App.css";
import Nav from "./components/nav";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  return (
    <>
      <Nav SearchBar={<SearchBar />} />
    </>
  );
}

export default App;
