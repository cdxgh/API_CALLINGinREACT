import "./styles.css";

import { useState, useEffect } from "react";
import { getPosts } from "./api/index";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <div className="App">
      {data ? data.map((e) => <li>{e.title}</li>) : <p> NO DATA </p>}
    </div>
  );
}

export default App;
