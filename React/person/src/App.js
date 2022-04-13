import './App.css';
import Person from './conponenets/Person'

function App() {
  return (
    <div className="App">
      <Person firstName = { 'Slim' } lastName = { "shady" } />
      <Person firstName = { 'Abe' } lastName = { "Lincoln" } />
      <Person firstName = { 'Don' } lastName = { "Pablo" } />
      {/* To display component created in component/Person, the above syntax is used. 
      Notice how the component is self-closed. Also the component must be imported.  */}
    </div>
  );
}

export default App;
