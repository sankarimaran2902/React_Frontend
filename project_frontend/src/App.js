import { BootstrapExecution } from "./Bootstrap";
import List, { Orderlist, Unorderlist } from "./Function";
import { Parameters } from "./Parameter";
import { Travelsname } from "./Tablecss";
import { TernaryOperator } from "./TernaryOperator";
import { Hook } from "./UseState";
import { Hook1 } from "./UseState1";
import { Homepage } from "./WebPage";
import { Tables } from "./Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Carouselexecution1 from "./Carousel";
import { RegistrationForm } from "./EmployeeRegistration";

function App()
{
    return(
        <>
        {/* <List/>
        <Orderlist/>
        <Unorderlist/> */}

        {/* <Hook/> */}
        {/* <Hook1/> */}
        
        {/* <Parameters where="./Download.jpeg" length="200px" breadth="200px"/> */}

        {/* <Travelsname/> */}

        {/* <BootstrapExecution/> */}

        {/* <TernaryOperator/> */}

        
        {/* <BrowserRouter>
        <Routes>
            <Route path="/read"  element={<Tables/>}/>
            <Route path="/create"  element={<Travelsname/>}/>
         </Routes>   
        </BrowserRouter> */}
        
        {/* <Homepage/> */}
        {/* <Carouselexecution1/> */}
        <RegistrationForm/>
   
        </>
    );
}

export default App;
