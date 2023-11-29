import React from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';
import data from "./assets/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';  // Fix the typo in the import statement

function App() {
  return (
    <>
      <Header title="Horned Beasts" />
      <Gallery list={data} />
      <Footer />
    </>
  );
}

export default App;
