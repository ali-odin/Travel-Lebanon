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
                    Lebanon is known for its diverse natural landscapes, including mountains, valleys, forests, and coastline. Some popular natural attractions in Lebanon include the Jeita Grotto, the Baatara Gorge waterfall, the Kadisha Valley...
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