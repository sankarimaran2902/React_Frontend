import { useState } from "react"

export let Hook=()=>{
/*
    //syntax:- const[user,setuser]=useState("")
    const[getUser,setUser]=useState("")

    const display=()=>
    {
        alert("Data Inserted Successfully " +getUser)
    }

    var result=(temp)=>
    {
          setUser(temp.target.value)
    }

    return(
        <>
        <input type="text" placeholder="Enter your Name" name={getUser} onChange={result}/>
        <button className="btn btn-outline-success" onClick={display}>
             Click On Action
        </button>
        </>
    );*/


    const[details,SetDetails]=useState({
        Name:"Sankari",
        Place:"Rayapuram",
        Degree:"BE",
        Favourite:"Trichy",

    });
    return(
        <>
        <h1>Details</h1>

        <ol>
            <li>Name is: {details.Name}</li>
            <li>Native Place is: {details.Place}</li>
            <li>Degree Completed is: {details.Degree}</li>
            <li>Favourite Place is: {details.Favourite}</li>
        </ol>
        </>
    )
}