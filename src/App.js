import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>"Playing videogames...."</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
