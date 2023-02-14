import "../css/Experiences.css"
import * as React from 'react';
import { Container, Typography, Box } from "@mui/material";
import img_1 from "../assets/marten-bjork-6UucCW4iV48-unsplash.jpg"
import img_2 from "../assets/marten-bjork-bUEWTfk3kPg-unsplash.jpg"
import img_3 from "../assets/marten-bjork-V5jxkMKxv_0-unsplash.jpg"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const Experiences = () => {

    const experienceCard = (img="..", title="Your Title", description="Describe It") => {
        return (
            <Box
                sx={{
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "start",
                    gap: "30px",
                    flexDirection: {md: "row", xs: "column"},
                }}
            >
                <img src={img} alt="" />
                <div className="details"
                    sx={{
                        display: "flex", 
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h6"
                        sx={{color: "white"}}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "var(--subheader-text-color)",
                            marginTop: "20px",
                            width: {md: "80%", xs: "100%"}
                        }}
                    >
                        {description}
                    </Typography>
                </div>
            </Box>
        )
    }

    return ( 
        <div className="experiences">
            <div className="overlay"></div>
            <Container
                maxWidth="md"
                sx={{
                    position: "relative",
                    padding: {md: "120px 20px", xs: "50px 20px"},
                    display: "flex",
                    jutifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    rowGap: "70px",
                }}
            >
                <Typography
                    variant="h4"
                    component="h5"
                    sx={{
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.
                </Typography>
                <Box className="img_1_box">
                    <img src={img_1} alt=""/>
                    <PlayCircleFilledIcon
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "var(--main-red)",
                            fontSize: {md: "70px !important", xs: "45px !important"},
                        }}
                    />
                </Box>
                <div
                    className="experience-card" 
                >
                    {experienceCard(img_2, "In The Country", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.")}
                    {experienceCard(img_3, "In The City", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in.")}
                </div>
            </Container>
        </div>
     );
}
 
export default Experiences;