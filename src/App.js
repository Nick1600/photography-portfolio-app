import Header from './components/header/Header.jsx';
import Description from './components/description/Description.jsx';
import RollsContainer from './components/rolls/Rolls-container';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <RollsContainer />
      <h1>Hello, World</h1>
    </div>
  );
}

export default App;
