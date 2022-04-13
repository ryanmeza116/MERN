import './App.css';
import People from './components/People'
function App() {
  return (
    <div className="App">
      <People 
      lastName = {'Doe'} firstName = {'Jane'}
      age = {"45"} 
      hairColor = {"Black"}/>
      <People 
      lastName = {'Smith'} firstName = {'John'}
      age = {"88"} 
      hairColor = {"Brown"}/>
      <People 
      lastName = {'Fillmore'} firstName = {'Millard'}
      age = {"50"} 
      hairColor = {"Brown"}/>
      <People 
      lastName = {'Smith'} firstName = {'Maria'}
      age = {"62"} 
      hairColor = {"Brown"}/>


    </div>


  );
}

export default App;
