import React, {useState} from "react";

function AddStudents({students,setStudents}){
    const[name,setName]=useState("")
    const[batch,setBatch]=useState("")
    const[gender,setGender]=useState("")
    const[qualification,setQualification]=useState("")

    const createStudent=()=>{
        const newStudents={
            name:name,
            batch:batch,
            qualification:qualification,
            gender:gender,
        }
        setStudents([...students,newStudents])
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
            onClick={createStudent}>Add Students</button>


        </div>
    )
}

export default AddStudents