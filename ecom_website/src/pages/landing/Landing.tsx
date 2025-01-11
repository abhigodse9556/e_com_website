import { useState } from "react";
import { Typography } from "@mui/material";
import classes from "./Landing.module.css";
import { landing_img } from "../../assets/images";

const Landing = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className={classes["landing-container"]}>
      <div className={classes["landing-header"]}>
        <Typography
          fontSize={{ xs: 15, sm: 20, md: 10, lg: 15, xl: 20 }}
          fontWeight="400"
          color="#291212"
        >
          Welcome to Guruprasad Furniture
        </Typography>
      </div>
      <div className={classes["landing-navbar"]}>
        <div className={classes["landing-logo"]}>
          <Typography
            fontSize={{ xs: 15, sm: 10, md: 15, lg: 20, xl: 50 }}
            color="#291212"
            fontWeight="bold"
          >
            Guruprasad
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 10, md: 15, lg: 18, xl: 50 }}
            color="#291212"
            fontWeight="bold"
          >
            Furniture
          </Typography>
        </div>
        <div className={classes["landing-menu"]}>
          {["Home", "Catalog", "About", "Contact"].map((link) => (
            <Typography
              key={link}
              className={
                activeLink === link
                  ? `${classes["nav-link"]} ${classes["nav-link-active"]}`
                  : classes["nav-link"]
              }
              fontSize={{ xs: 13, sm: 15, md: 16, lg: 18, xl: 40 }}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </Typography>
          ))}
        </div>
        <div className={classes["landing-icons"]}></div>
      </div>
      <div className={classes["landing-image-container"]}>
        <img className={classes["landing-image"]} src={landing_img} alt="" />
      </div>
      <div className={classes["landing-slogan"]}>
        <Typography
          variant="h2"
          fontSize={{ xs: 20, sm: 20, md: 40, lg: 50, xl: 60 }}
          fontWeight="bold"
          color="textSecondary"
          width="max-content"
        >
          Sustainable Style for Your Home
        </Typography>
      </div>
    </div>
  );
};

export default Landing;
