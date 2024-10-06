import React from "react";
import Topbar from "./components/Topbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading  from "./components/loading";
function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const MarsRover = React.lazy(() => import("./pages/MarsRover"));
  const NeoWs = React.lazy(() => import("./pages/NeoWs"));
  const AOPD = React.lazy(() => import("./pages/APOD"));
  const Earth = React.lazy(() => import("./pages/Earth"));

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
        <React.Suspense fallback={Loading()}>
          <Routes>
            <Route exact path="/" name="Home page" element={<Home />} />
            <Route
              exact
              path="/marsrover"
              name="Mars Rover"
              element={<MarsRover />}
            />
            <Route
              exact
              path="/neows"
              name="Astoriod NeoWs"
              element={<NeoWs />}
            />
            <Route
              exact
              path="/aopd"
              name="AOPD"
              element={<AOPD />}
            />
            <Route
              exact
              path="/earth"
              name="Earth"
              element={<Earth />}
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
