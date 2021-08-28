import './App.css';
import Header from './components/Header.jsx'
import TinderCards from './components/TinderCards.jsx';
import FooterButtons from './components/FooterButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <FooterButtons/>
    </div>
  );
}

export default App;
