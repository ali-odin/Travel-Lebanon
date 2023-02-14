import "../css/Footer.css"
import * as React from 'react';
import { Container, Typography } from "@mui/material";
import ForestIcon from '@mui/icons-material/Forest';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                            <li><FacebookIcon /></li>
                            <li><InstagramIcon /></li>
                            <li><TwitterIcon /></li>
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