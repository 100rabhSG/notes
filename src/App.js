import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/Home";
import SignIn from './routes/sign-in/sign-in';
import SignUp from './routes/sign-up/sign-up';
import NoteDetails from './components/note-details/note-details';
import Navbar from './components/navbar/navbar';


const App = () => {
  return (
  <>

    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path="/notes/:noteId" element={<NoteDetails />} />
    </Routes>
  </>
  );
};

export default App;
