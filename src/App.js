
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Base from './Base';
import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import { useState } from 'react';
import data from './Data/data';


function App() {
  const[students, setStudents]=useState(data);
  const[editIdx,setEditIdx]=useState();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Students
          students={students}
          setStudents={setStudents}
          />
        </Route>
        <Route path="/add">
          <AddStudents
          students={students}
          setStudents={setStudents}
          />
        </Route>
        <Route path="/edit">
          <UpdateStudents
          students={students}
          setStudents={setStudents}
          editIdx={editIdx}
          />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
