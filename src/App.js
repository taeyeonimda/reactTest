// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";


//
// function App() {
//   const [message, setMessage] = useState("");
//
//   useEffect(() => {
//     // Spring Boot API 호출
//     fetch("/api/message")
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to fetch message");
//           }
//           return response.text(); // API 응답이 텍스트인 경우
//         })
//         .then((data) => setMessage(data))
//         .catch((error) => console.error("Error fetching message:", error));
//   }, []);
//
//   return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>React and Spring Boot Integration</h1>
//         <p>{message ? message : "Loading..."}</p>
//           <button className={'btnClass'}>안녕하쇼?</button>
//       </div>
//   );
//
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }
//
// export default App;


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>홈 페이지</h1>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;