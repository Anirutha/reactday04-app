import React, { useState , useEffect } from "react";

function UpdateStudents({students,setStudents,editIdx}){
    
    const editStudent=students[editIdx]
    const[name,setName]=useState("")
    const[batch,setBatch]=useState("")
    const[gender,setGender]=useState("")
    const[qualification,setQualification]=useState("")

     useEffect=(()=>{
            
            setName(editStudent.name)
            setBatch(editStudent.batch)
            setGender(editStudent.gender)
            setQualification(editStudent.qualification)
        },[editStudent])
      
     function updatestudent (){
        const updatedObject={
            name:name,
            batch:batch,
            gender:gender,
            qualification:qualification
        }
        console.log(updatedObject)
        students[editIdx]=updatedObject
        setStudents([...students])
        //console.log(editIdx);
     }

    return(
        <div>
        <input
        placeholder="Enter Name"
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        placeholder="Enter Batch"
        type="text"
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <input
        placeholder="Enter Gender"
        type="text"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />
        <input
        placeholder="Enter Qualification"
        type="text"
        value={qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />
        
        <button
        onClick={updatestudent}>Update Student</button>


    </div>
    )
}
export default UpdateStudents