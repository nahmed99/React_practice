import Navbar from './Navbar';
import Home from './Home';

function App() {

  // A useState change re-renders the data to which that useState relates.
  
  // A useEffect runs on each render (or re-render). However, this can be controlled by adding a dependency array as a parameter to the useEffect.


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
