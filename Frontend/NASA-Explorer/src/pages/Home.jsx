import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import { Button, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {[
          {
            title: "Mars Rover Photos",
            description: "Curiosity and Perseverance rovers",
            img: "https://cdn.usegalileo.ai/stability/5e085f5a-6a80-4dc6-99e6-e3f42d14c0e6.png",
            pageLink:"/marsrover"
            
          },
          {
            title: "Astronomy Picture of the Day",
            description: "Discover the cosmos",
            img: "https://cdn.usegalileo.ai/stability/60161fbb-b38a-4479-a6ef-9aa08a9f7768.png",
            pageLink:"/aopd"
          },
          {
            title: "Earth Polychromatic Imaging Camera",
            description: "Discover daily images of Earth",
            img: "https://cdn.usegalileo.ai/stability/11cfb18d-f36f-4ba6-a45c-ea2a4f0813a0.png",
            pageLink:"/earth"
          },
          {
            title: "Near Earth Object Web Service",
            description: "Discover near Earth objects",
            img: "https://cdn.usegalileo.ai/stability/8f42f043-82df-4f61-8554-fc649d5a5e39.png",
            pageLink:"/neows"
          },

        ].map(({ title, description, img ,pageLink}, index) => (
          <div key={index} className="container p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${img})`,
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black">{title}</h1>
                <h2 className="text-white text-sm">{description}</h2>
              </div>
              <Button
                variant="contained"
                color="primary"
                className="rounded-xl bg-[#3250e7] text-white"
                onClick={()=>{navigate(pageLink)}}
              >
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
