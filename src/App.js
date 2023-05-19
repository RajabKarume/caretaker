import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './libs/pages/login/LoginPage';
import HomePage from './libs/pages/homepage/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/auth"} element={<LoginPage />} />
          <Route path={"/"} element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
