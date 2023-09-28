import logo from './logo.svg';
import './App.css';
import levels from './data/levels.json';
import WordCard from './components/WordCard'
import LevelCard from "./components/LevelCard";

function Levels()
{
    let content = []
    for (let i= 0; i < levels.length; i++) {
        content.push(<LevelCard level={i+1}/>)
    }

    return content;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Levels/>
      </header>
    </div>
  );
}

export default App;
