import './App.css';
import { Fragment } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import FishReport from 'components/FishReport/FishReport';

function App() {
  return (
    <Fragment>
      <Header />
      <FishReport />
      <Footer />
    </Fragment>
  );
}

export default App;
