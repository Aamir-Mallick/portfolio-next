import { makeStyles } from "@material-ui/core/styles";
import img from "/main.jpg";

export const useStyles = makeStyles((theme) => ({
  aboutMainContainer: {
    position: "relative",
    top: "60px",

    height: "450px",
    // borderBottom: "5px solid black",
    backgroundSize: "cover",
    color: "#ffffff",
    overflow: "auto",
  },
  textContent: {
    display: "flex",
    // border: "5px solid black",
    // width: "600px",
    margin: "1rem auto",
    height: "400px",
    justifyContent: "space-around",
  },
  textContentChild_1: {
    // border: "1px solid #ffffff",
    // flexGrow: 1,
  },
  textContentChild_2: {
    // border: "1px solid #ffffff",
    flexBasis: 300,
    paddingTop: "4rem",
    paddingLeft: "2rem",
  },
  imageContainer: {
    width: "300px",
    height: "300px",
    backgroundImage: `url("/aamir.jpg")`,
    borderRadius: "100%",
    backgroundSize: "cover",
    border: "5px solid black",
  },
}));
