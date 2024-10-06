import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Loading from "../components/loading";
import { Axios } from "../config/AxiosConfig";

const APOD = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState();
  useEffect(() => {
    Axios.get(`/aopd/`).then((res) => {
      setData(res.data.data);
      setCurrentData(res.data.data[0]);
    });
  }, []);
  const handleImageClick = (data) => {
    setCurrentData(data);
  };
  return (
    <>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div className="relative min-h-screen bg-[#111118] overflow-x-hidden">
          {/* Main Content */}
          <div className="flex justify-center py-5 px-5 lg:px-40 ">
            <Box
              className="flex flex-col max-w-[960px] w-full"
              sx={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
            >
              {/* Header Section */}
              <Box
                className="flex flex-col justify-end min-h-80 bg-cover bg-center"
                sx={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${currentData.hdurl})`,
                  borderRadius: "12px",
                  height: "60vh",
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  className="text-white font-bold p-4 text-[28px]"
                >
                  {currentData.title}
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                component="p"
                className="text-white text-base leading-normal pb-3 pt-1 px-4"
              >
                {currentData.explanation}
              </Typography>

              {/* Gallery Title */}
              <Typography
                variant="h5"
                component="h2"
                className="text-white font-bold px-4 pb-3 pt-5"
              >
                Image Gallery
              </Typography>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
                {data.map((details, index) => (
                  <div
                    key={index}
                    className="relative w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden cursor-pointer"
                    style={{ backgroundImage: `url(${details.url})` }}
                    onClick={() => handleImageClick(details)}
                  >
                    {currentData?.url === details.url && (
                      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                        <p className="text-white font-bold">Selected</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default APOD;
