import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard"
import {Routes,Route, Navigate} from "react-router-dom";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <div className="d-none d-md-block">
        <KanbasNavigation/>
      </div>
      <div style={{ flexGrow: 1 }}>
        <div>
        <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses/>}/>
        </Routes>
        </div>
      </div>
    </div>
);}
export default Kanbas;
