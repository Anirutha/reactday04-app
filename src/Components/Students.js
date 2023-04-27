import React, { useState } from "react";
import Base from "../Base";
import data from "../Data/data";
import AddStudents from "./AddStudents";
import UpdateStudents from "./UpdateStudents";

function Students(){
    const[students, setStudents]=useState(data);
    const[editIdx,setEditIdx]=useState();
    //delete Functionality
    const deleteStudent=(studId)=>{
        const remainingStudents=students.filter((stud,idx)=>idx!==studId)
        setStudents(remainingStudents)
    }

    <UpdateStudents
          students={students}
          setStudents={setStudents}
          editIdx={editIdx}
          />
          
    return(
        <Base
        title={"Students Dashboard"}
        description={"The page contains all students data"}
        >
        
            
        <div className="card-container">
            {students.map((stud,idx)=>(
                <div className="card" key={idx}>
                  <div className="content">

                    <h3>{stud.name}</h3>
                    <p>{stud.batch}</p>
                    <p>{stud.gender}</p>
                    <p>{stud.qualification}</p>
                     </div>

                  <div className="control">

                    <button onClick={()=>setEditIdx(idx)}>Edit</button> {" "}
                    <button onClick={()=>deleteStudent(idx)}>Delete</button>
                    </div>


                </div>
            )
            
            
            
            
            )}
            <div>

            </div>
        </div>
        
        </Base>
    )
}
export default Students