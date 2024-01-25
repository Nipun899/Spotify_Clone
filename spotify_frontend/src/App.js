import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Routes/login";
import SignUpComponent from "./Routes/signup";
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          {/* {Adding routes components here indicates to the package {react-router-dom} } */}
          <Route path="/" element={<div>hello</div>} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
