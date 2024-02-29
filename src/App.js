import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/Home";
import SignIn from './routes/sign-in/sign-in';
import SignUp from './routes/sign-up/sign-up';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  );
};

export default App;
