
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Story from './pages/Story';
import Gallery from './pages/Gallery';
import FriendFamily from './pages/FriendFamily';
import RSVP from './pages/RSVP';
import LogIn from './pages/Login';


function App() {
  return (
      <>
         <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='login' element={<LogIn />}></Route>
               <Route path='about' element={<About />}></Route>
               <Route path='story' element={<Story />}></Route>
               <Route path='gallery' element={<Gallery />}></Route>
               <Route path='family' element={<FriendFamily />}></Route>
               <Route path='event' element={<Event />}></Route>
               <Route path='rsvp' element={<RSVP />}></Route>
               <Route path='*' element="Not found"></Route>
         </Routes>
      </>
  )
}

export default App;
