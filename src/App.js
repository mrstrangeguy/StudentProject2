
import './App.css';
import Register from './Register/Register';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Table from './Table/Table';
import Edit from './Edit/Edit';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/student/:student_id' element={<Edit/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
