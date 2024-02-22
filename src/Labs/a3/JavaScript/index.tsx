import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariable from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import PathParameters from "../routing/PathParameters";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariable/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <JsonStringify/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <PathParameters/>
       </div>
    );
 }
 export default JavaScript;