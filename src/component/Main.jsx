import React, { useEffect, useState } from "react";

function Main() {
  const currentdate = new Date();

  const [mydate, Setmydate] = useState(currentdate);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedate = new Date();
      Setmydate(updatedate);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div
        id="main"
        className="text-center p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 transform transition-transform hover:scale-105"
      >
        <h1 className="text-5xl font-bold mb-6 text-blue-400">Digital Clock</h1>
        <p className="text-2xl font-mono text-gray-300 mb-2">
          {mydate.toDateString()}
        </p>
        <p className="text-4xl font-mono font-semibold text-white">
          {mydate.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default Main;
