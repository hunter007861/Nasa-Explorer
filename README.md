# 🌌 NASA Explorer 🌌

**NASA Explorer** is a web application that brings the beauty of the cosmos right to your screen! Using NASA's public APIs, this app allows you to explore stunning daily astronomy pictures, incredible images from Mars rovers, and detailed data on near-Earth objects (NEOs). Whether you’re an astronomy enthusiast or just curious about the universe, this app is a gateway to space exploration.

Demo:- [https://nasa-explorer-j0vs.onrender.com/]

## ✨ Features

- **Astronomy Pictures of the Day (APOD)**  
  Discover awe-inspiring astronomy images curated daily by NASA. Dive deep into the cosmos with each picture’s detailed description.

- **Mars Rover Photos**  
  Explore photos captured by NASA's Mars rovers such as Curiosity and Opportunity. Select from images taken on different Mars "sols" (Martian days) or specific Earth dates.

- **Near-Earth Objects (NEO)**  
  Get detailed information about asteroids that pass close to Earth. Search for NEOs by selecting a date range (up to 7 days) and view key data such as size, velocity, and proximity to Earth.

## 🛠 Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **NASA API Services**:  
  - Astronomy Picture of the Day (APOD) API
  - Mars Rover Photos API
  - Near-Earth Object Web Service (NeoWs) API
- **HTTP Client**: Axios
- **Routing**: React Router
- **Styling**: CSS, Tailwind, MaterialUI

- ## 🚀 Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** or **yarn** (package manager)

### 🛠 Setup

1. **Clone the repository**  
   Open your terminal and clone the repository:

   ```bash
   git clone https://github.com/your-username/nasa-explorer.git
   cd nasa-explorer
   
2. **Setup frontend**
     In the previously opened terminal paste the commands below
    ```bash
    cd ./frontend/nasa-explorer/
    npm install
    npm run dev
    
3. **Setup Backend**
   Open new terminal inn main folder paste the commands below
    ```bash
    cd ./backend
    npm install
    node server.js
    
4. **Setup environment variable**
    Setup your nasa api key from [https://api.nasa.gov/] in .env variable

5. **Open the app**
   The app should now be running at:
   http://localhost:5173


   
