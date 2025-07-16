import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext = createContext();


function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");                 /*for getting all countries list (api)*/
  },[]);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res)=>{                           /*for getting all countries list (api)*/
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry
  } 


  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header></Header>
    <Routes>
      <Route path="/" exact={true} element={<Home/>}></Route>
    </Routes>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };