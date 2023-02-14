import "../css/Landing.css"
import * as React from 'react';
import Navbar from "./Navbar";
import landing_video_img from "../assets/piotr-chrobot-KqEYj1VHA_o-unsplash.jpg"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Container, Typography, Button, Box } from "@mui/material";

const Landing = () => {

    const landingCard= (
            num="00", 
            title="Title Here", 
            description="Lorem ipsum dolor sit amet et amet ist ame.",
        ) => ((
        <div className="landing-card">
            <Typography>{num}</Typography>
            <Typography 
                variant="h5" 
                sx={{
                    color: "white",
                    fontWeight: "bold",
                }}
            >{title}</Typography>
            <Typography>{description}</Typography>
        </div>
    ))

    return ( 
        <div className="landing">
            <Navbar />
            <Container
                maxWidth="md" 
                sx={{
                    padding: {lg: "150px 0px !important", xs: "50px 20px"}
                }}
            >
                <div 
                    className="ma-ba3ref"
                    sx={{
                        display: {sm: "none", lg: "block !important"},
                        position: "absolute",
                        height: "400px",
                        width: "2px",
                        left: "60px",
                        top: "100px",
                        backgroundColor: "#ccc",
                    }}
                >
                    <span></span>
                </div>
                <Typography 
                    variant="h1" 
                    component="h2"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        width: "100px",
                        fontSize: {xs: "75px", md: "95px"}
                    }}
                >
                    EXPLORE LEBANON
                </Typography>;
                <Button 
                    variant="contained" 
                    className="main-btn"
                    sx={{
                        marginTop: {md: "20px"},
                        padding: {md: "20px !important", xs: "18px 20px !important"},
                        fontSize: {xs: "18px !important" },
                        width: {md: "300px", xs: "100%"}
                    }}
                >
                    Start Travelling
                </Button>
            </Container>
            <Container sx={{display: {lg: "flex"}, paddingBottom: {md: "0px", xs: "40px"}}}>
                <Container 
                    maxWidth="md" 
                    className="landing-cards"
                    sx={{
                        position: "relative",
                        display: {md: "flex", xs: "block",},
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        padding: { xs: "20px 30px !important"},
                        gap: "120px",
                    }}
                >
                    <ul>
                        <li>Fb</li>
                        <li>In</li>
                        <li>Tw</li>
                    </ul>
                    {landingCard("01", 'Raouché Rocks', " Raouché Rocks are two large rock formations jutting out into the Mediterranean Sea.")}
                    {landingCard("02", "Raouché Rocks History", " The rocks are made of limestone and are believed to be around 200 million years old. ")}
                    {landingCard("03", "What To Do There", " There are many restaurants, cafes, and shops in the area surrounding the rocks, making it a bustling and vibrant part of Beirut.")}
                    <PlayCircleFilledIcon className="PlayCircleFilledIcon"/>
                </Container>
                <Box
                    sx={{
                        position: {xs:"relative", md:"absolute"},
                        right: "0px",
                        bottom: "0px"
                    }}
                >
                    <img 
                        src={landing_video_img} 
                        alt=""
                    />
                </Box>
            </Container>
        </div>
     );
}
 
export default Landing;