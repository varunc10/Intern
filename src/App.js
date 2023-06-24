import UserList from './components/UserList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEdit from './components/UserEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/edit/:id' element={<UserEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
