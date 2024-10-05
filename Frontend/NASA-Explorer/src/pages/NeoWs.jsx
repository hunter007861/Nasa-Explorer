import React from "react";
import Button from "@mui/material/Button";

const NeoWs = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111118] overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h2 className="text-white text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Near Earth Object Web Service
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              NeoWs (Near Earth Object Web Service) is a web service for near
              earth Asteroid information. With NeoWs a user can: search for
              Asteroids based on their closest approach date to Earth, lookup a
              specific Asteroid with its NASA JPL small body id, as well as
              browse the overall data-set.
            </p>

            {/* Form Fields */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Start Date (Optional)
                </p>
                <input
                  placeholder="YYYY-MM-DD"
                  className="form-input flex w-full resize-none rounded-xl text-white bg-[#292938] h-14 p-4 text-base placeholder:text-[#9d9db8]"
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  End Date (Optional)
                </p>
                <input
                  placeholder="YYYY-MM-DD"
                  className="form-input flex w-full resize-none rounded-xl text-white bg-[#292938] h-14 p-4 text-base placeholder:text-[#9d9db8]"
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Asteroid ID (Optional)
                </p>
                <input
                  placeholder="ID"
                  className="form-input flex w-full resize-none rounded-xl text-white bg-[#292938] h-14 p-4 text-base placeholder:text-[#9d9db8]"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex px-4 py-3 justify-start">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#1919e6",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Search
              </Button>
            </div>

            {/* Table */}
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#3c3c53] bg-[#111118]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#1c1c26]">
                      <th className="px-4 py-3 text-left text-white text-sm font-medium">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium">
                        Size
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium">
                        Distance
                      </th>
                      <th className="px-4 py-3 text-left text-white text-sm font-medium">
                        Next Approach Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example Rows */}
                    <tr className="border-t border-t-[#3c3c53]">
                      <td className="h-[72px] px-4 py-2 text-white text-sm">
                        Asteroid 1
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        100m
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        200,000km
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        2023-01-01
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#3c3c53]">
                      <td className="h-[72px] px-4 py-2 text-white text-sm">
                        Asteroid 2
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        150m
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        250,000km
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#9d9db8] text-sm">
                        2023-01-02
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoWs;
