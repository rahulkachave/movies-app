



//shortcut for import=impt
import propTypes from 'prop-types' //passing the props
// const Student = (props) => { 
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <h1>{props.age}</h1></div> 
//   )
// }

// export default Student

//----------------------------passing the parameters in function ({name ,age})---------------------
const Student =({name , age})=>{
    return(
<div>
    <h1>{name}</h1>
    <h1>{age}</h1>  //here not required props.age only name or age
</div>
    )

}
Student.propTypes={
    name:propTypes.string,
    age:propTypes.number
}
export default Student

//------------------------Main App.js file for Student.js----------------------------

import './App.css';
import Student from './components/Student';

function App() {
    // let name ="web3mantra"
    return (
      <div className="App">


<Student name="suchit"
      age={20} />
    </div>
  );
}

// export default App;
