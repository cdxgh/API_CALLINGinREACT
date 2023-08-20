import "./styles.css";

import { useState, useEffect } from "react";
import { getPosts, getRandomUser } from "./api/index";
import UserCard from "./Components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  useEffect(()=>{
    getRandomUser().then((user)=> setUserData(user.results[0]));
  },[]);

  const refresh = ()=>{
    getRandomUser().then((user)=> setUserData(user.results[0]));
  };
  
  return (
    <div className="App">
      {userData && <UserCard data = {userData}/>}
      <button onClick={refresh}>Refresh User</button>
      {data ? data.map((e) => <li>{e.title}</li>) : <p> NO DATA </p>}
    </div>
  );
  
}

export default App;