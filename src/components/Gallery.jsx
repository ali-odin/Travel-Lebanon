import "../css/Gallery.css"
import * as React from 'react';
import { Container, Typography } from "@mui/material";
import img_1 from "../assets/kassem-mahfouz-mBcY97cXOTs-unsplash.jpg"
import img_2 from "../assets/christelle-hayek-Hr75vPRGGAQ-unsplash.jpg"
import img_3 from "../assets/patricia-jekki-hDoVPWVQ5x0-unsplash.jpg"
import img_4 from "../assets/marten-bjork-bUEWTfk3kPg-unsplash.jpg"
import img_5 from "../assets/piotr-chrobot-KqEYj1VHA_o-unsplash.jpg"
import img_6 from "../assets/rashid-khreiss-Ur0JWjVvP60-unsplash.jpg"

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img_1,
            title: "AL-SAWAH"
        },
        {
            id: 2,
            imgSrc: img_2,
            title: "Lebanese Chess",
        },
        {
            id: 3,
            imgSrc: img_3,
            title: "Lebanese Telefrique",
            
        },
        {
            id: 4,
            imgSrc: img_4,
            title: "Lebanese Mosques",
        },
        {
            id: 5,
            imgSrc: img_5,
            title: "Lebanese Port",
        },
        {
            id: 6,
            imgSrc: img_6,
            title: "Lebanese City",
        },
    ]

    return ( 
        
        <Container
            id="Gallery"
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
                Gallery for a Beautiful natural landscapes in Lebanon, contains a diverse range of natural landscapes, including mountains, valleys, forests, and coastline. Some of the popular natural attractions in Lebanon include the Jeita Grotto.
            </Typography>
            <div class="container">

                {data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.imgSrc} />
                            <div className="card__head">{item.title}</div>
                        </div>
                    )
                })}
            </div>
        </Container>
     );
}
 
export default Gallery;