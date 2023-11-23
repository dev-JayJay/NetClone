import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import About from './component/About';
import Contact from './component/Contact';
import Movies from './component/Movies';
import CardInfo from './component/CardInfo';
import Footer from './component/Footer';
import ConHome from './component/ConHome';


function App() {


  const [searchText, setSearchText] = useState('');
  const [popResult, setPopResult] = useState('');
  const [filteResult, setFilteResult] = useState([]);


  // const handleChange = (event) =>{
  //   setSearchText(event.target.value);
  // }

  const handleDataFromChild = (childResult) => {
    // Do something with the data received from the child
    setPopResult(childResult);
  };

  const handleSearch = (event) => {
    const searchTextValue = event.target.value;
    setSearchText(searchTextValue);
  
    const results = popResult.filter((item) =>
      item.title.toLowerCase().includes(searchTextValue.toLowerCase())
    );
  
    setFilteResult(results);
  };
  
  
  return(
    <>
    <Header searchText={searchText} handleSearch={handleSearch} />
    <Routes>
        <Route path="/" element={<ConHome handleDataFromChild={handleDataFromChild} filteResult={filteResult} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/data.results/:id" element={<CardInfo />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
