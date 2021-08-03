import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const ProjectContainer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography
          style={{
            // border: "2px solid #A34F4F",
            margin: "0rem 15rem",
            backgroundColor: "#fff",
          }}
          variant="h4"
          align="center"
        >
          Projects
        </Typography>
      </Box>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              style={{
                width: "250px",
                margin: "2rem auto",
                border: "2px solid #A34F4F",
                padding: "1rem",
                borderRadius: 5,
              }}
            >
              <Box>
                <img src={"../../../fodify.png"} width="220px" height="200px" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "1rem",
                }}
              >
                <Button variant="outlined" color="primary" href="">
                  View
                </Button>
                <Button variant="outlined" color="primary">
                  Git hub
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              style={{
                width: "250px",
                margin: "2rem auto",
                border: "2px solid #A34F4F",
                padding: "1rem",
                borderRadius: 5,
              }}
            >
              <Box>
                <img src={"../../../zomato.png"} width="220px" height="200px" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "1rem",
                }}
              >
                <Button variant="outlined" color="primary">
                  View
                </Button>
                <Button variant="outlined" color="primary">
                  Git hub
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Box
            style={{
              width: "250px",
              margin: "2rem auto",
              border: "2px solid #A34F4F",
              padding: "1rem",
              borderRadius: 5,
            }}
          >
            <Box>
              <img src={"../../../zomato.png"} width="220px" height="200px" />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <Button variant="outlined" color="primary">
                View
              </Button>
              <Button variant="outlined" color="primary">
                Git hub
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectContainer;
