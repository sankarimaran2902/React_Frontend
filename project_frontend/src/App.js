import List,{ Orderlist } from "./Function";
import { Unorderlist } from "./Function";
import { Parameter } from "./Parameter";
import {Tables} from "./Table";
import {Hook} from "./UseState";
import { Hook1 } from "./UseState1";

function App() {
  return (
    <>
    <List/>
    <Orderlist/>
    <Unorderlist/>
    <Tables/>
    <Hook/> 
    <Hook1/>
    <Parameter where="./Download.jpeg"  length="200px" breadth="200px" />
    </>
  )
}

export default App;
