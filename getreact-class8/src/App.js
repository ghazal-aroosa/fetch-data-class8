import React, { useEffect, useState } from 'react';

//import logo from './logo.svg';
//import './App.css';

function App() {

  let data = {title:"waiting for Data"};
  const [todo,setTodo]= useState({});
  const [isData, setData]=useState(false);
  const[isFetching, setFetching]=useState(false);

  useEffect(()=>{ 

    async function fetchData(){
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response=",response);
      let data2 = await response.json()
      setTodo(data2);
      setFetching(false);

     console.log("Data=",todo);
   }
    fetchData();
   },[isData]);

      if(isFetching){
          return<div>Data Loading......</div>
   }

  return (
    <div >
      hello fetch
      <span>Title:{todo.title}</span>
    </div>
  );
}

export default App;
