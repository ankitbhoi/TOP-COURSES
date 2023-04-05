import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import {toast} from 'react-toastify';
import Spinner from "./components/Spinner";
const App = () => {

  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let response= await fetch(apiUrl);
      let output=await response.json();
      setCourses(output);
    }
    catch(erorr){
      toast.error("error");
    }
    setLoading(false);
  }

  useEffect(()=>fetchData(),[])

  return (
    <>
      <Navbar/>

      <Filter filterData={filterData}/>

      { loading ? <Spinner/> : <Cards courses={courses}/> }
    </>
  );
};

export default App;
