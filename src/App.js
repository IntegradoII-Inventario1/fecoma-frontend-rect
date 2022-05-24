import { useEffect } from "react";
import React from 'react';
import AppRoute from "./routes/AppRoute";

function App() {
  const html = document.querySelector('html')
  const local = JSON.parse(localStorage.getItem('isDarkMode'))

  useEffect(() => {
      if(local){
          html.classList.add('dark')        
      }else{
          html.classList.remove('dark')   
      }
  }, [local,html.classList])

  return (
      <div className="overflow-hidden">
      <AppRoute/>
    </div>
  );
}

export default App;
