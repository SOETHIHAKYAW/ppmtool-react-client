import Dashboard from "./components/Dashboard";
import MainNavigation from "./components/layout/MainNavigation";
import AddProjectForm from "./components/project/AddProjectForm";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
  <div>
    <MainNavigation />

    <Routes>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/add-project' element={<AddProjectForm />}/>
    </Routes>
  </div>);
}

export default App;
