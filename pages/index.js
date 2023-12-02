"use client"
import { useEffect, useState } from 'react';

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('/weatherapi/1.0/weather');
          const newData = await response.json();
          setData(newData);
      };

      fetchData();
  }, []);

  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps?</h1>
      <div className="card-grid">
        <p>{data}</p>
      </div>
    </div>
  );
}