import React, { useState, useEffect } from "react";
// import Login from "./components/Login";
import LoginComponent from "./components/Login2";
import Student from "./components/Student";
import Cookies from "js-cookie";
import axios from "axios";
import { LoggedInModel } from "./models/LoggedInModel";

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<LoggedInModel>(
    new LoggedInModel(Cookies.get())
  );

  if (loggedInUser.userId == undefined) {
    return <LoginComponent />;
  } else {
    return <Student />;
  }
};

export default App;
