import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './Contexts/ThemeContext';

function App() {
  const { isLight, toggleTheme} = useContext(ThemeContext);
  return (
    <div className={`App ${ isLight ? "dark":"light"}`}>
      <h1>Theme Context</h1>
      <button onClick={toggleTheme}>{`Make ${isLight ? "Dark":"Light"}`}</button>
    </div>
  );
}

export default App;
