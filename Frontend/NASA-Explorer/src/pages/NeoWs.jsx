import React, { useState } from "react";
import { Axios } from "../config/AxiosConfig";

// Helper function to add days to a date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Helper function to format date as 'YYYY-MM-DD' for consistency
const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

// Get the number of days in a specific month/year
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const NEOsDashboard = () => {
  // Calendar Data State (default: August 2023)
  const [currentMonth, setCurrentMonth] = useState(0); // october (0-indexed)
  const [currentYear, setCurrentYear] = useState(2007);

  // State to manage selected start and end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchable, setSearchable] = useState(false);
  const [data, setData] = useState([]);
  // Handle month and year navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // Go to December
      setCurrentYear(currentYear - 1); // Decrease the year
    } else {
      setCurrentMonth(currentMonth - 1); // Go to previous month
    }
  };

  const onSearch = async () => {
    if (!startDate || !endDate) return;
    const startYear = startDate.getFullYear();
    const startMonth = String(startDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const startDay = String(startDate.getDate()).padStart(2, "0");
    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const endDay = String(endDate.getDate()).padStart(2, "0");

    await Axios.get(
      `neows/?start_date=${startYear}-${startMonth}-${startDay} &end_date=${endYear}-${endMonth}-${endDay}`
    ).then((res) => {
      setData(Object.values(res.data.data.near_earth_objects)[0]);
    });
  };
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // Go to January
      setCurrentYear(currentYear + 1); // Increase the year
    } else {
      setCurrentMonth(currentMonth + 1); // Go to next month
    }
  };

  // Handle selecting a start or end date
  const handleDateClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (selectedDate >= new Date()) {
      setSearchable(true);
      return;
    }
    setSearchable(false);
    // If startDate is not selected, set the start date
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null); // Reset end date
    } else if (startDate && !endDate) {
      // If endDate is not selected, set the end date only if it's within 7 days from startDate
      const maxEndDate = addDays(startDate, 7);
      if (selectedDate <= maxEndDate) {
        setEndDate(selectedDate);
      }
    }
  };

  // Check if a date is within a valid range for selection (for end date)
  const isDateDisabled = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (startDate && !endDate) {
      const maxEndDate = addDays(startDate, 7);
      return selectedDate < startDate || selectedDate > maxEndDate;
    }
    return false;
  };

  // Check if a date is selected
  const isDateSelected = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (startDate && formatDate(startDate) === formatDate(selectedDate)) {
      return "bg-[#139cec] text-white"; // Start date style
    } else if (endDate && formatDate(endDate) === formatDate(selectedDate)) {
      return "bg-[#139cec] text-white"; // End date style
    }
    return "";
  };

  // Get the number of days in the current month
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-[32px] font-bold">
              Near Earth Objects (NEOs)
            </p>
            <p className="text-[#92b5c9] text-sm font-normal">
              Explore the universe and learn more about near earth objects.
            </p>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
          <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
            <div className="flex items-center p-1 justify-between">
              <button
                className="text-white text-base font-bold"
                onClick={handlePrevMonth}
              >
                {"<"}
              </button>
              <p className="text-white text-base font-bold">
                {months[currentMonth]} {currentYear}
              </p>
              <button
                className="text-white text-base font-bold"
                onClick={handleNextMonth}
              >
                {">"}
              </button>
            </div>

            {/* Calendar Table */}
            <div className="grid grid-cols-7">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <p
                  key={index}
                  className="text-white text-[13px] font-bold text-center"
                >
                  {day}
                </p>
              ))}

              {/* Calendar Numbers */}
              {[...Array(daysInMonth).keys()].map((day) => (
                <button
                  key={day}
                  onClick={() => handleDateClick(day + 1)}
                  disabled={isDateDisabled(day + 1)}
                  className={`h-12 w-full ${isDateSelected(day + 1)} ${
                    isDateDisabled(day + 1)
                      ? "opacity-50 cursor-not-allowed"
                      : "text-[#92b5c9]"
                  } text-sm font-medium`}
                >
                  {day + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex px-4 py-3">
          <button
            className="w-full h-12 bg-[#139cec] text-white font-bold rounded-xl"
            disabled={searchable}
            onClick={() => onSearch()}
          >
            Search
          </button>
        </div>

        {/* Data Table */}
        {
          <div className="p-4">
            <div className="overflow-x-auto">
              {data.length === 0 ? (
                <div />
              ) : (
                <table className="min-w-full divide-y divide-[#325367]">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-[#92b5c9] text-left text-sm font-bold">
                        Name
                      </th>
                      <th className="px-4 py-2 text-[#92b5c9] text-left text-sm font-bold">
                        Daimeter
                      </th>
                      <th className="px-4 py-2 text-[#92b5c9] text-left text-sm font-bold">
                        Miss Distance
                      </th>
                      <th className="px-4 py-2 text-[#92b5c9] text-left text-sm font-bold">
                        Velocity
                      </th>
                      <th className="px-4 py-2 text-[#92b5c9] text-left text-sm font-bold">
                        Hazardous
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((details, index) => {
                      return (
                        <tr key={index}>
                          <td className="px-4 py-2 text-[#92b5c9] text-sm">
                            ss{details.name}
                          </td>
                          <td className="px-4 py-2 text-[#92b5c9] text-sm">
                            {
                              details.estimated_diameter.kilometers
                                .estimated_diameter_max
                            } km
                          </td>
                          <td className="px-4 py-2 text-[#92b5c9] text-sm">
                            {
                              details.close_approach_data[0].miss_distance
                                .kilometers
                            } km
                          </td>
                          <td className="px-4 py-2 text-[#92b5c9] text-sm">
                            {
                              details.close_approach_data[0].relative_velocity
                                .kilometers_per_second
                            }{" "}
                            km/s
                          </td>
                          <td className="px-4 py-2 text-[#92b5c9] text-sm">
                            {details.s_potentially_hazardous_asteroid ? "TRUE" : "FALSE"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default NEOsDashboard;
