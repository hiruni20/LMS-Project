import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          
          <Route path="/all_students" exact element={<AllStudents />} />
          <Route path="/add" exact element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
