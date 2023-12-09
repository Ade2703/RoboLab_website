import "../styling/HomePageContent.css";
import HomePageOpener from "./HomePageOpener";
import Box from "@mui/material/Box";

function HomePageContent() {
  return (
    <>
      <Box
        className="scrollable-content"
        sx={{
          marginTop: {
            xs: "55.25px",
            md: "82.39px",
          },
        }}
      >
        <Box className="openerContainer" sx={{
            height: {
                xs: 'calc(100vh - 55.25px)',
                md:'calc(100vh - 82.39px)'
            }
        }}>
          <HomePageOpener />
          <Box className="viewportContainer" id="section1"></Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePageContent;
