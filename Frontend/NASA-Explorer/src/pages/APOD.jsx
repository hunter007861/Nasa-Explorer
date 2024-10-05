import React from "react";
import { Typography, Box } from "@mui/material";

const APOD = () => {
  const images = [
    "https://cdn.usegalileo.ai/sdxl10/aadf16a7-800b-4cc2-a053-a6758155770f.png",
    "https://cdn.usegalileo.ai/sdxl10/8e40f7cf-c971-4733-b144-af9d1e9bc16a.png",
    "https://cdn.usegalileo.ai/sdxl10/ec776d2a-a907-4d0c-9b67-363c1215e1d7.png",
    "https://cdn.usegalileo.ai/sdxl10/e11f4550-07cf-4cb9-a598-eb7129c53423.png",
    "https://cdn.usegalileo.ai/sdxl10/714248f2-387f-4062-96de-e83b2679305d.png",
    "https://cdn.usegalileo.ai/sdxl10/2b3b46f7-1a23-4fe9-aeac-75adc34d2386.png",
    "https://cdn.usegalileo.ai/sdxl10/87c951a7-0958-41df-8907-e3e6e2b62ff4.png",
    "https://cdn.usegalileo.ai/sdxl10/365a0fb0-7f49-4b9c-989e-de8000901433.png",
  ];

  return (
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
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://cdn.usegalileo.ai/sdxl10/2ca71e0f-4054-405c-89e1-c1c7062de9fa.png")',
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h3"
              component="p"
              className="text-white font-bold p-4 text-[28px]"
            >
              Gale Crater Panorama
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            component="p"
            className="text-white text-base leading-normal pb-3 pt-1 px-4"
          >
            Curiosity's first color panorama of Gale Crater, made up of
            thumbnails taken by the rover's Mast Camera (Mastcam). The rover's
            mast features seven cameras: the Remote Micro Imager, part of the
            Chemistry and Camera suite; four black-and-white Navigation Cameras
            (Navcams); and two color Mast Cameras (Mastcams).
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
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default APOD;
