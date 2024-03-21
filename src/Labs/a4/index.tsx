import PassingFunctions from "./PassingFunctions";
import React from "react";
import ReduxExamples from "./ReduxExamples";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
// const Assignment4 = () => {
//     return(
//         <div>
//             <h1>Assignment 4</h1>
//         </div>
//     );
// };
function Assignment4(){
function sayHello()
{
    alert("Hello");
}
    return(
        <div>
            <h1>Assignment 4</h1>
            <PassingFunctions theFunction={sayHello}/>
            <ClickEvent/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>
        </div>
    );
};


export default Assignment4;