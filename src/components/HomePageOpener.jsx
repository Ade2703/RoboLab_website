import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../styling/HomePageOpener.css";

function HomePageOpener(){
    return (
        <>
            <Box className="boxOpener">
                <Typography variant="h1" style={{ color: 'white' }} sx={{
            paddingBottom: {
                xs: '55.25px',
                md:'82.39px'
            }
        }}>RoboLab</Typography>
            </Box>
            
        </>
    );
}

export default HomePageOpener;