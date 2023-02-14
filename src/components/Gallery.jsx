import "../css/Gallery.css"
import * as React from 'react';
import { Container, Typography } from "@mui/material";
import img_1 from "../assets/kassem-mahfouz-mBcY97cXOTs-unsplash.jpg"
import img_2 from "../assets/christelle-hayek-Hr75vPRGGAQ-unsplash.jpg"
import img_3 from "../assets/paul-melki--BvBZKXwQo8-unsplash.jpg"
import img_4 from "../assets/marten-bjork-bUEWTfk3kPg-unsplash.jpg"
import img_5 from "../assets/marten-bjork-6UucCW4iV48-unsplash.jpg"
import img_6 from "../assets/ramy-kabalan-mF4_MHgp4ps-unsplash.jpg"

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img_1,
        },
        {
            id: 2,
            imgSrc: img_2,
        },
        {
            id: 3,
            imgSrc: img_3,
        },
        {
            id: 4,
            imgSrc: img_4,
        },
        {
            id: 5,
            imgSrc: img_5,
        },
        {
            id: 6,
            imgSrc: img_6,
        },
    ]

    return ( 
        
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: {md: "100px 20px", xs: "50px 20px"}
            }}
        >
            <Typography
                variant="h3"
                component="h4"
            >
                Photo Gallery
            </Typography>
            <Typography
                sx={{
                    color: "var(--subheader-text-color)",
                    width: {md: "40%", xs: "100%"},
                    marginTop: "20px",
                    textAlign: "center"
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.
            </Typography>
            <div class="container">

                {data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.imgSrc} />
                            <div className="card__head">Lebanon Nature</div>
                        </div>
                    )
                })}
            </div>
        </Container>
     );
}
 
export default Gallery;