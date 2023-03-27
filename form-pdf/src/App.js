import './App.css';
import UserForm from './components/UserForm/UserForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thumbnails from './components/Thumbnails/Thumbnails';

function App() {
  return (
    <>
          <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/pdf" element={<Thumbnails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
