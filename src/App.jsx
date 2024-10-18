import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setData(response.data.users); 
      console.log(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
     
      
        { 
          data.map((elem, idx) => (
         <div key={idx} className="w-[300px] flex justify-center items-center gap-6 bg-white border border-black-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div className="flex flex-col items-center m-7">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={elem.image} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{elem.firstName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{elem.company.department}</span>
       
    </div>
</div>

          ))
        }
      
    </>
  );
};

export default App;
