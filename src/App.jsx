import { Route, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Aboutme />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
