import { useState } from "react";
import { Typography } from "@mui/material";
import classes from "./Landing.module.css";
import { landing_img } from "../../assets/images";

const Landing = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link: string) => {
    setActiveLink(link);
  };

  const featuredProducts = [
    {
      name: "Villa",
      price: 12000,
    },
    {
      name: "Office Chair",
      price: 7000,
    },
    {
      name: "Bookshelf",
      price: 15000,
    },
    {
      name: "Sofa",
      price: 20000,
    },
    {
      name: "Armchair",
      price: 10000,
    },
    {
      name: "Table",
      price: 18000,
    },
    {
      name: "Shelf",
      price: 10000,
    },
    {
      name: "Chair",
      price: 5000,
    },
  ];

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
            fontSize={{ xs: 15, sm: 10, md: 15, lg: 20, xl: 30 }}
            color="#291212"
            fontWeight="bold"
          >
            Guruprasad
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 10, md: 15, lg: 18, xl: 28 }}
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
              fontSize={{ xs: 13, sm: 15, md: 16, lg: 18, xl: 25 }}
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
      <div className={classes["landing-scroll-down"]}>
        <Typography
          variant="h2"
          fontSize={{ xs: 15, sm: 20, md: 10, lg: 15, xl: 20 }}
          fontWeight="bold"
          color="info"
          width="max-content"
        >
          Scroll Down to Explore!
        </Typography>
      </div>
      <div className={classes["landing-featured-products"]}>
        <div className={classes["landing-featured-products-title"]}>
          <Typography
            variant="h2"
            fontSize={{ xs: 15, sm: 20, md: 30, lg: 40, xl: 50 }}
            fontWeight="bold"
            color="textSecondary"
            width="max-content"
          >
            Our Featured Products
          </Typography>
        </div>
        <div className={classes["landing-featured-products-container"]}>
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className={classes["landing-featured-products-card"]}
            >
              <Typography
                variant="h2"
                fontSize={{ xs: 15, sm: 18, md: 22, lg: 28, xl: 38 }}
                fontWeight="bold"
                color="textSecondary"
                width="max-content"
              >
                {product.name}
              </Typography>
              <Typography
                variant="h2"
                fontSize={{ xs: 15, sm: 18, md: 22, lg: 28, xl: 38 }}
                fontWeight="bold"
                color="textSecondary"
                width="max-content"
              >
                ₹ {product.price} {/*&#8377*/}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["landing-footer"]}></div>
    </div>
  );
};

export default Landing;
