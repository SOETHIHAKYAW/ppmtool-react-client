import Dashboard from "./components/Dashboard";
import MainNavigation from "./components/layout/MainNavigation";
import AddProjectForm from "./components/project/AddProjectForm";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
  <div>
    <MainNavigation />

    <Routes path='/'>
      <Route>
        <Route path='dashboard' element={<Dashboard />}/>

        <Route path="project">
          <Route path='create' element={<AddProjectForm />}/>
          <Route path='edit/:projectId' element={<AddProjectForm mode='edit' />}/>
        </Route>
      </Route>
    </Routes>
  </div>);
}

export default App;
