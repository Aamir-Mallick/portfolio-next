import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    height: "200px",
  },
  toolbarContainer: {
    // display: "flex",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
    },
  },
  NavMainContainer: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  headingContainer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  navIcons: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  headerNavigationContainer: {
    width: "250px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  dropDownNav: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      transition: "width 2s, height 2s, transform 2s",
      zIndex: "2000",
      display: "block",
      textAlign: "center",
      //   marginTop: "3.5rem",
      background: "#556cd6",
    },
  },
}));
