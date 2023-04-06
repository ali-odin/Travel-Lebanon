import "../css/Secrets.css"
import * as React from 'react';
import { useState, useEffect } from "react";
import { Container, Typography, Box } from '@mui/material'
import Carousel from 'react-elastic-carousel'
import img_1 from "../assets/marten-bjork-6UucCW4iV48-unsplash.jpg"
import img_2 from "../assets/marten-bjork-bUEWTfk3kPg-unsplash.jpg"
import img_3 from "../assets/marten-bjork-V5jxkMKxv_0-unsplash.jpg"
import img_4 from "../assets/piotr-chrobot-KqEYj1VHA_o-unsplash.jpg"
import img_5 from "../assets/ramy-kabalan-mF4_MHgp4ps-unsplash.jpg"


const Secrets = () => {

    // MAKE A SCROLL ANIMATION FOR NUMBERS

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    const aboutCard = (num, text) => {
        return (
            <Box
                xs={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                variant="h4"
                component="h5"
                sx={{
                    color: "var(--main-red)",
                    textAlign: "center",
                }}
                >
                    {num}
                </Typography>
                <Typography
                    sx={{
                        color: "var(--subheader-text-color)",
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >
                    {text}
                </Typography>
            </Box>
            )
    }

    return ( 
        <div className="secrets"
        >
            <Container maxWidth='lg'
                id="Secrets"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "50px",
                }}
            >
                <Typography
                    component="h3"
                    variant="h4"
                    sx={{
                        fontWeight: "500"
                    }}
                >
                    Explore Our Secrets
                </Typography>
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000}>
                    <img src={img_1} alt="" />
                    <img src={img_2} alt="" />
                    <img src={img_3} alt="" />
                    <img src={img_4} alt="" />
                    <img src={img_5} alt="" />
                </Carousel>
            </Container>
            <div className="about">
                <div className="overlay"></div>
                <Container 
                    maxWidth='lg'
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                        padding: {md: "130px 20px", xs: "50px 20px"}
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h4"
                        sx={{
                            color: "white",
                            textAlign: "center"
                        }}
                    >
                        By The Numbers
                    </Typography>
                    <Typography
                        sx={{
                            color: "var(--subheader-text-color)",
                            width: {lg: "33%", xs: "100%"},
                            textAlign: "center",
                            marginTop: "30px"
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "80px",
                            columnGap: "80px",
                            rowGap: "40px",
                            flexDirection: {md: "row", xs: "column"}
                        }}
                    >
                    {aboutCard("100+", "Lebanon has produced many successful individuals in various fields, including business, entertainment, sports, and politics.")}
                    {aboutCard("43000+", "Some notable examples include Carlos Ghosn, former CEO of Nissan and Renault, Salma Hayek, actress and producer, Elie Saab, fashion designer, and Rafik Hariri, former Prime Minister of Lebanon.")}
                    {aboutCard("30+", " Despite its challenges, Lebanon's people have shown resilience and determination in achieving success both within the country and abroad.")}
                    </Container>
                </Container>
            </div>
        </div>
     );
}
 
export default Secrets;
