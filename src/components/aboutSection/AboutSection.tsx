import React from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { useStyles } from "./useStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const AboutSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box id="about" className={classes.aboutMainContainer}>
        <Box className={classes.textContent}>
          <Box className={classes.textContentChild_1}>
            <Box style={{ width: "100px", margin: "0px auto" }}>
              <IconButton
                color="inherit"
                href="https://github.com/Aamir-Mallick"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/aamir-mallick-b4b41a187/"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Box className={classes.imageContainer}></Box>
          </Box>
          <Box className={classes.textContentChild_2}>
            <Typography variant="h4">
              Hii I am Aamir Mallick, I am front end Developer, And Javasript
              enthusiastic.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
