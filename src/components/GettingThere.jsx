import "../css/GettingThere.css"
import * as React from 'react';
import { Container, Typography, Box, Button } from "@mui/material";
import img_1 from "../assets/kassem-mahfouz-mBcY97cXOTs-unsplash.jpg"

const GettingThere = () => {

    const gettingThereCard = (
            title="Your Title", 
            description="Describe It", 
            btn,
            decriptionCard,
            decriptionCardImg="Your Img",
            decriptionCardTitle="Your Title",
            decriptionCardDescription="Describe It",
        ) => {
        return (
            <Box
                className="getting-there-box"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    justifyContent: {md: "start", xs: "center"},
                    alignItems: {md: "start", xs: "center"}
                }}
            >
                <Typography
                    variant="h5"
                    component="h6"
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    className="card-description"
                    sx={{
                        color: "var(--subheader-text-color)",
                        lineHeight: "32px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis !important",
                    }}
                >
                    {description}
                </Typography>
                {
                    decriptionCard &&
                    <Box
                        className="decription-card"
                        sx={{
                            display: "flex",
                            columnGap: "20px",
                            margin: {md: "70px 20px 20px 20px", xs: "30px 0px"},
                            flexDirection: {md: "row" , xs: "column"},
                            justifyContent: "center",
                            alignItems: "center",
                            rowGap: "30px"
                        }}
                    >
                        <img src={decriptionCardImg} alt="" />
                        <div className="details"
                        >
                            <Typography
                                variant="h5"
                                component="h6"
                            >
                                {decriptionCardTitle}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "var(--subheader-text-color)",
                                    lineHeight: "30px",
                                    width: {md: "50%", xs: "100%"}
                                }}
                            >
                                {decriptionCardDescription}
                            </Typography>
                        </div>
                    </Box>
                }
                {
                    btn && 
                    <Button className="main-btn">
                        Learn More
                    </Button>
                }
            </Box>
        )
    }

    return ( 
        <div className="getting-there">
            <Container
                maxWidth="md"
                xs={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h3"
                    component="h4"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: {md: "start", xs: "center"}
                    }}
                >
                    Getting there
                </Typography>
                <Container
                    className="getting-there-card-container"
                    sx={{
                        margin: {md: "60px", xs: "150px 0px 20px 0px"},
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        rowGap: {md: "60px", xs: "100px"},
                        textAlign: {md: "start", xs:"center"}
                    }}
                >
                {gettingThereCard('Bookings your flights', 'Be ready to book your flights with the easiest and the most comfortable system, you will see the future with your both eyes....')}
                {gettingThereCard('Choosing your hotel', 'Choosing your hotel depends on your taste, so we offer many kinds of hotels that u will be thankful for us after u visit it.')}
                {gettingThereCard('Planning your experiences', 'We hope u likes what we offer and tell us about ur beatiful experiences and about what u enjoyed in this world of magic...', true, true, img_1, "Travelling there", "Lebanon is known for its diverse natural landscapes, including mountains, valleys, forests, and coastline.")}
                </Container>
            </Container>
        </div>
     );
}
 
export default GettingThere;
