import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);  // State to hold data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("https://api.example.com/courses")  // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Set the data state with the response data
        setLoading(false);  // Set loading to false
      })
      .catch((error) => {
        setError(error);  // Set error if there's an issue with the fetch
        setLoading(false);
      });
  }, []);

  // Render loading, error, or data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section>
      <h1>Home Page</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
