import React from "react";
import Topbar from "./components/Topbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Spinner from "react-spinners/RingLoader";
function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const MarsRover = React.lazy(() => import("./pages/MarsRover"));
  const loading = () => (
    <div className="flex justify-center items-center h-lvh">
      <Spinner className="loader" size={150} color="#fff" />
    </div>
  );
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#111422] overflow-x-hidden"
      style={{
        fontFamily: '"Space Grotesk", "Noto Sans", sans-serif',
        backgroundColor: "",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Topbar />
        <React.Suspense fallback={loading()}>
          <Routes>
            <Route exact path="/" name="Home page" element={<Home />} />
            <Route exact path="/marsrover" name="Mars Rover" element={<MarsRover />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
