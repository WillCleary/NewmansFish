import './App.css';
import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import FishReport from 'components/FishReport/FishReport';
import LandingPage from 'components/LandingPage/LandingPage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="wholesale" element={<FishReport />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
