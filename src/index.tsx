import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles.css";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDV28bf3A8whHJ7N7Got6RrXCKhHAPYjYU",
//   authDomain: "studyapp-90324.firebaseapp.com",
//   projectId: "studyapp-90324",
//   storageBucket: "studyapp-90324.appspot.com",
//   messagingSenderId: "440148036708",
//   appId: "1:440148036708:web:eb636de1a68188b393e371",
//   measurementId: "G-EK7YKTGEM6",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
