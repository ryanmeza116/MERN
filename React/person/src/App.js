import './App.css';
import Person from './conponenets/Person'

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      {/* To display component created in component/Person, the above syntax is used. 
      Notice how the component is self-closed. Also the component must be imported.  */}
    </div>
  );
}

export default App;
