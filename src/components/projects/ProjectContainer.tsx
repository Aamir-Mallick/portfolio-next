import React from "react";
import { Box, Typography, Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const ProjectContainer = () => {
  const classes = useStyles();
  return (
    <Box id="project" className={classes.root}>
      <Box>
        <Typography
          style={{
            color: "#ffffff",
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
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://naughty-wilson-7983d0.netlify.app/"
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://github.com/Aamir-Mallick/fodify-Application"
                >
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
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://aamir-mallick.github.io/zomato-replica/"
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://github.com/Aamir-Mallick/zomato-replica"
                >
                  Git hub
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h4" align="center">
            Client Project
          </Typography>
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
              <img
                src={"../../../starweaver.png"}
                width="220px"
                height="200px"
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                href="https://go.starweaver.com/on-air"
              >
                View
              </Button>
              {/* <Button variant="outlined" color="primary">
                Git hub
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectContainer;
