import Header from './components/header/Header.jsx';
import Description from './components/description/Description.jsx';
import RollsContainer from './components/rolls/Rolls-container';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <RollsContainer />
      <Footer />
    </div>
  );
}

export default App;
