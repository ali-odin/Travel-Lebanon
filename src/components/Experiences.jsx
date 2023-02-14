import "../css/Experiences.css"
import * as React from 'react';
import { Container, Typography, Box } from "@mui/material";
import img_1 from "../assets/zheka-boychenko-otpOqdVFXFo-unsplash.jpg"
import img_2 from "../assets/christelle-hayek-Hr75vPRGGAQ-unsplash.jpg"
import img_3 from "../assets/roy-abi-saad-OPUCE2iGwiI-unsplash.jpg"
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
                    {experienceCard(img_2, "In The Country", "Lebanon also has a number of talented chess players who have competed in international tournaments and won various awards and titles...")}
                    {experienceCard(img_3, "In The City", "Lebanon is a country that is home to a number of valleys, each with its unique features and characteristics. ")}
                </div>
            </Container>
        </div>
     );
}
 
export default Experiences;