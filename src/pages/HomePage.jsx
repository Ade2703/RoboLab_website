import Header from "../components/Header";
import HomePageBackground from "../components/HomePageBackground";
import HomePageContent from "../components/HomePageContent";
import "../styling/HomePage.css";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <>
      <Header />
      <Box className="backgroundContainer">
        <HomePageBackground /> {/* Place background within a separate container */}
      </Box>
      <Box
        className="contentContainer"
      >
        <HomePageContent />
      </Box>
    </>
  );
}

export default HomePage;
