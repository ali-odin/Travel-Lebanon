import "../css/Footer.css"
import * as React from 'react';
import { Container, Typography } from "@mui/material";
import ForestIcon from '@mui/icons-material/Forest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return ( 
        <div className="footer">
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    flexDirection: {md: "row", xs: "column"}
                }}
            >
                <div className="left">
                    <div className="logo">
                        <ForestIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: "white" }} />
                        <div className="text">
                            <Typography
                                variant="p"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    fontWeight: 700,
                                    textDecoration: 'none',
                            }}
                            >
                                EXPLORE 
                            </Typography>
                            <Typography
                                variant="p"
                                noWrap
                                component="a"
                                className="gradient-p"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    fontWeight: 700,
                                }}
                            >
                                LEBANON
                            </Typography>
                        </div>
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Company</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="social-links">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/ali-allaw-488b18270/"><LinkedInIcon /></a></li>
                            <li><a href="https://www.instagram.com/allaw.dev/"><InstagramIcon /></a></li>
                            <li><a href="https://wa.link/14pdm2"><WhatsAppIcon /></a></li>
                        </ul>
                    </div>
                    <Typography>
                        Copyright@2023
                    </Typography>
                </div>
            </Container>
        </div>
     );
}
 
export default Footer;