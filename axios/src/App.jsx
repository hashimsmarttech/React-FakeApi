import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axi.js";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchAll, setFetchAll] = useState(false);
  const [id, setId] = useState(""); // State to hold the ID input

  // Function to fetch all data
  const getAllData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
      setIsError("");
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch data by ID
  const getDataById = async (id) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/posts/${id}`);
      setMyData([res.data]); // Wrap the result in an array for consistent rendering
      setIsError("");
    } catch (error) {
      setIsError(error.message);
      setMyData([]); // Clear data if there's an error
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect to call the function when fetchAll or id changes
  useEffect(() => {
    if (fetchAll) {
      getAllData();
    } else if (id) {
      getDataById(id);
    }
  }, [fetchAll, id]);

  return (
    <>
      <h1>Axios API</h1>
      {isError && <h2>{isError}</h2>}

      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          disabled={fetchAll}
          
        />
        <button onClick={() => setFetchAll(false)}>Fetch Data by ID</button>
        <button onClick={() => { setFetchAll(true); setId(""); }}>Fetch All Data</button>
      </div>
      

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid">
          {myData.slice(0, 9).map((post) => {
            const { body, id, title } = post;
            return (
              <div key={id} className="card">
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default App;
