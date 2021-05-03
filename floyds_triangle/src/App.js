import './App.css';
import Floyd from './Floyd.js';
import Permutations from './Permutations.js';
import Pascal from './Pascal.js';


function App() {

  function anags(a, b) {
    let aLength = a.length;
    let bLength = b.length;

    if(aLength !== bLength) {
      console.log('Invalid Input');
      return
    }

    let aString = a.split('').sort().join('');
    let bString = b.split('').sort().join('');
    if(aString === bString) {
      return "True - anagrams"
    }
    else {
      return "False - not anagrams"
    }
  }

  return (
    <>
      <div className="App">
        <h1 className="App-header"> Write a function to represent Floyd's Triangle. The given input is the number of rows of the triangle.
        Example: If the number of rows is 8. </h1>
        <Floyd />
      </div>
      <div className="App">
        <h1 className="App-header"> Write a program to print all permutations of a given String. For example, if the given String is "GOD" then your program should print all 6 permutations of this string, e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO." </h1>
        <Permutations />
      </div>
      <div className="App">
        <h1 className="App-header"> Write a function that checks if two provided strings are anagrams of each other. </h1>
        {anags("happy", "paphy")}
      </div>
      <div className="App">
        <h1 className="App-header"> Replicate Pascal's Triangle </h1>
        <Pascal />
      </div>
    </>
  );
}

export default App;
