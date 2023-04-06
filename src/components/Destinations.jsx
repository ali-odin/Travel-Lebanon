import "../css/Destinations.css"
import * as React from 'react';
import { Box, Container, Typography, Button } from "@mui/material";
import first_img from "../assets/kassem-mahfouz-mBcY97cXOTs-unsplash.jpg"
import second_img from "../assets/marten-bjork-bUEWTfk3kPg-unsplash.jpg"

const Destinations = () => {

    const Content = (src, title, description, leftOrRight) => {
        return (
                    leftOrRight
                    ? 
                        <Container 
                            maxWidth="md"
                            id="Destinations"
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: {md: "row", xs: "column"},
                                justifyContent: "between",
                                alignItems: "center",
                                columnGap: "100px",
                            }}
                        >
                            <Box    
                                sx={{
                                    width: "100%",
                                    // display: "flex",
                                    // justifyContent: "center"
                                }}
                            >
                                <img src={src} alt="" className="destination-img"/>
                            </Box>
                                <Box   
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    rowGap: "20px",
                                    marginTop: {md: "0px", xs:"40px"}
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    sx={{
                                        color: "white",
                                        fontSize: "40px"
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "var(--subheader-text-color)",
                                        lineHeight: "25px"
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Button
                                    className='main-btn'
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Container>
                    :
                    <>
                        <Container 
                            maxWidth="md"
                            sx={{
                                position: "relative",
                                display: {xs: "none", md: "flex"},
                                flexDirection: {md: "row", xs: "column"},
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "130px",
                            }}
                        >
                            <Box   
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    rowGap: "20px",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    sx={{
                                        color: "white",
                                        fontSize: "40px"
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "var(--subheader-text-color)",
                                        lineHeight: "25px"
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Button
                                    className='main-btn'
                                >
                                    Learn More
                                </Button>
                            </Box>
                            <Box    
                                sx={{width: "100%"}}
                            >
                                <img src={src} alt="" className="destination-img"/>
                            </Box>
                            
                        </Container>
                        {/* 


                                U NEED TO FIX THIS !~~!!~~!!!~~~!!!!


                        */}
                        <Container 
                            maxWidth="md"
                            sx={{
                                position: "relative",
                                display: {xs: "flex", md: "none"},
                                flexDirection: {md: "row", xs: "column"},
                                justifyContent: "center",
                                alignItems: "center",
                                columnGap: "130px",
                            }}
                        >
                            <Box    
                                sx={{width: "100%"}}
                            >
                                <img src={src} alt="" className="destination-img"/>
                            </Box>
                            <Box   
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    rowGap: "20px",
                                    marginTop: {md: "0px", xs:"40px"}
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    sx={{
                                        color: "white",
                                        fontSize: "40px"
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "var(--subheader-text-color)",
                                        lineHeight: "25px"
                                    }}
                                >
                                    {description}
                                </Typography>
                                <Button
                                    className='main-btn'
                                >
                                    Learn More
                                </Button>
                            </Box>
                            
                        </Container>
                    </>
        )
    }

    return ( 
        <div className="destinations">
            <div className="overlay">
            </div>
            {Content(first_img, '"AL SAWAH"', "Lebanon is a mountainous country with a range of mountains that runs parallel to the Mediterranean coast, known as the Lebanon Mountains. These mountains are part of the larger mountain range known as the Levant, which also includes the Anti-Lebanon Mountains", true)}
            {Content(second_img, "Discover the Hidden Gems: Mosques of Lebanon", "Lebanese mosques often incorporate elements of traditional Islamic architectural styles, such as domes, minarets, and arches. Some mosques may also feature intricate geometric patterns and calligraphy.", false)}
        </div>
     );
}
 
export default Destinations;