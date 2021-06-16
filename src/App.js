import "./App.css";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import SearchButton from "./components/SearchButton";
function App() {
  return (
    <div className="container">
      <Logo />
      <SearchBar />
      <SearchButton />
    </div>
  );
}

export default App;
