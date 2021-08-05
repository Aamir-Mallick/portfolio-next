import React, { useState } from "react";
import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Link,
} from "@material-ui/core";
// import styles from "./container.module.css";

export const HeaderNavBar = () => {
  const classes = useStyles();
  const [showDropDown, setShowDropDown] = useState(false);

  const DropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const tabletAndDesktopViewNavbar = () => {
    return (
      <>
        <Box className={classes.NavMainContainer}>
          <Typography variant="h5">Protfolio</Typography>
        </Box>
        <Box className={classes.headerNavigationContainer}>
          <Typography variant="body2">
            <Link style={{ color: "#ffffff" }} href="#about">
              About
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link style={{ color: "#ffffff" }} href="#skill">
              {" "}
              Skill
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link style={{ color: "#ffffff" }} href="#project">
              Projects
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link style={{ color: "#ffffff" }} href="#contact">
              Contact
            </Link>
          </Typography>
        </Box>
      </>
    );
  };

  const mobileViewNavbar = () => {
    return (
      <>
        <Box className={classes.headingContainer}>
          <Typography variant="h5">Protfolio</Typography>
        </Box>
        <Box className={classes.navIcons}>
          {!showDropDown ? (
            <IconButton>
              <DehazeIcon style={{ color: "#ffffff" }} onClick={DropDown} />
            </IconButton>
          ) : (
            <IconButton>
              <CloseIcon style={{ color: "#ffffff" }} onClick={DropDown} />
            </IconButton>
          )}
        </Box>
      </>
    );
  };

  const navLinkDropDown = () => {
    return (
      <Box className={classes.dropDownNav}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    style={{ color: "#ffffff" }}
                    href="#about"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    About
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    style={{ color: "#ffffff" }}
                    href="#skill"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Skill
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    style={{ color: "#ffffff" }}
                    href="#project"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Project
                  </Link>
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary={
                <Typography align="center" variant="body2">
                  <Link
                    style={{ color: "#ffffff" }}
                    href="#contact"
                    onClick={() => {
                      setShowDropDown(false);
                    }}
                  >
                    Contact
                  </Link>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <>
      <Box className={`${showDropDown ? classes.main : ""}`}>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar className={`${classes.toolbarContainer}`}>
            {tabletAndDesktopViewNavbar()}
            {mobileViewNavbar()}
          </Toolbar>
          {showDropDown ? <Divider /> : null}
          {showDropDown ? navLinkDropDown() : null}
        </AppBar>
      </Box>
    </>
  );
};
