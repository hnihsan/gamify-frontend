import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Student from "./components/Student";
import axios from "axios";

const App: React.FC = () => {
  useEffect(() => {
    // const fetchData = async () => {
    //   var config = {
    //     method: "GET",
    //     url: "https://gamify-backend.vercel.app/api/hello-world",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   };
    //   const response = await axios(config);
    //   console.log(response);
    // };
    // // Update the document title using the browser API
    // console.log("Calling the mongo api");
    // fetchData().catch(console.error);
  });

  if (false) {
    return <Login />;
  } else {
    return <Student />;
  }
};

export default App;
