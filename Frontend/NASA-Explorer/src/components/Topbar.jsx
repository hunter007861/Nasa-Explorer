import React from "react";
import RocketIcon from '@mui/icons-material/Rocket';
const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#242a47] px-10 py-3">
      <div className="flex gap-4 text-white">
        <div className="size-4">
          <RocketIcon  className="mb-1"/>
        </div>
        <h2 className="text-lg font-bold">NASA Explore</h2>
      </div>
    </header>
  );
};

export default Topbar;
