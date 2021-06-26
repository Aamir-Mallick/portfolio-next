import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skillMainContainer: {
    width: "60%",
    margin: "0px auto",
    // height: "300px",
    backgroundColor: "#ffffff",
  },
  skillCardMainContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
}));
