import "../css/Desccription.css"
import * as React from 'react';
import { Container, Typography, Button } from "@mui/material";

const Description = () => {
    return ( 
        <div className="description">
            <Container
                maxWidth="sm"
                sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "32px",
                    padding: "120px 20px"
                }}
            >
                <Typography
                    variant="h4"
                    component="h5"
                    sx={{
                        fontWeight: "500",
                        width: {md: "88%", xs: "100%"}
                    }}
                >
                    Our hills and valleys are like nothing you’ve seen.
                </Typography>
                <Typography
                    sx={{
                        color: "var(--subheader-text-color)",
                        width: {md: "68%", xs: "100%"}
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor.
                </Typography>
                <Button
                    className="main-btn"
                    sx={{
                        width: {md: "40%", xs: "100%"}
                    }}
                >
                    Learn More
                </Button>
            </Container>
        </div>
     );
}
 
export default Description;