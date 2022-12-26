import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import {GENERAL_SERVICE} from './api/Api'
import axios from 'axios';
function App() {
  const[loading,setLoading]  = useState(false)
  const [quote, setQuote] = useState([]);
  const url = GENERAL_SERVICE;
  useEffect(()=>{
    // setLoading(true)

    // const fetchInfoData = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const getdata = await response.json();
    //     console.log(getdata)
    //     localStorage.setItem('data',JSON.stringify(getdata))
    //     setLoading(false);
    //   } catch (error) {
    //     // console.log("error", error);
    //   }
    // };
    // fetchInfoData();

    // fetch('https://icircles.app/api/generalservice/home/166')
    //   // .then((res) => res.json())
    //   .then((response) => {
    //     console.log(response)
    //     // console.log(data)
    //     setLoading(false);
    //     // setQuote(data);
    //   })

    axios.get('https://icircles.app/api/generalservice/home/166')
    .then((response)=>{
      console.log(response)
    }

  )
    
    },[])

  return (
    <div>
      {loading?'Page loading wait..'
      : <HashRouter>
          <AppRouter />
      </HashRouter>}
     
    </div>
  );
}

export default App;
