import Weather from "./Weather";
import './App.css';
function Header() {
  return (
    <header className="Head">
      <h1>Weather App</h1>
    </header>
  );
}

function App() {
  return (
    <div className="Weather">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
