import './App.css';
import Home from './pages/home';
import Gamesdait from './components/gamesdait';
import Allgames from './components/allgames';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-center relative min-h-screen ">
       <Nav />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game/:id" element={<Gamesdait/>}/>
          <Route path="/games" element={<Allgames/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
