import {useEffect, useState} from "react"
import {read} from "./TemporaryValue"

export const ReadingEmployeedetails=(position)=>
{
    const[userdetail,setUserdetail]=useState({
        "empid":0,
        "empname":"",
        "empusername":"",
        "emppassword":"",
        "empdesignation":"",
        "empexp":0,
        "empsalary":0
    })

    const callingreadmethod=()=>
    {
        setUserdetail(read(position.ind))
    }
    useEffect(()=>
    {
        callingreadmethod()
    })
    return(
        <>
        <div className="container text-center mt-5">
            <div className="row justify-content-center">
                <div className="bg-success text-light fw-bold col-lg-8 col-md-10 col-sm-12">
                    <h1>He/She(Employee Name) {userdetail.empname}</h1>
                    <ul typeof="square">
                       <b>Employee Details</b>
                       <li>Employee ID:{userdetail.empid}</li>
                       <li>Employee Username:{userdetail.empname}</li>
                       <li>Employee Password:{userdetail.emppassword}</li>
                       <li>Employee Experience:{userdetail.empexp}</li>
                       <li>Employee Salary:{userdetail.empsalary}</li>
                       <li>Employee Designation:{userdetail.empdesignation}</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}