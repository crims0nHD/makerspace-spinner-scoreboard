import { useState, useEffect } from "react";
import FhHeader from "../shared/FhHeader";

const API_URL = "app/game?max_entries=10";

export default function Scoreboard() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle any errors

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      let data = result["data"];

      setData(data); // Update the state with fetched data
      setLoading(false); // Turn off loading state
    } catch (err: any) {
      setError(err.message); // Set error state if fetching fails
      setLoading(false); // Turn off loading state
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch on component mount

    // Set interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  // Render loading, error, or the table based on the state
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <FhHeader />
      <div className="grow w-full flex flex-row justify-center">
        <div className="w-2/3">
          <div className="text-center py-5">
            <h1 className="text-6xl">Bestenliste</h1>
          </div>
          <div className="h-full flex flex-col overflow-scroll">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
              <table className="border-collapse w-full text-center divide-y-2 divide-gray-600">
                <thead className="h-14">
                  <tr>
                    <th>#</th>
                    <th>Nickname</th>
                    <th>Schätzung</th>
                    <th>Erreicht</th>
                    <th>Differenz</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2">
                  {data.map((item, index) => (
                    <tr className="h-14" key={index}>
                      <td>{(item[0] != "") ? index + 1 : ""}</td>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
