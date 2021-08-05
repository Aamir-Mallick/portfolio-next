import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const Contact = () => {
  const classes = useStyles();
  return (
    <Box id="contact" className={classes.root}>
      <Typography variant="h4" align="center">
        Contact Me
      </Typography>
      <Box className={classes.container}>
        <Box>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </Box>
        <Box>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>
      </Box>
      <Box style={{ width: "400px", margin: "0rem auto" }}>
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box style={{ width: "400px", margin: "2rem auto" }}>
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
      </Box>

      <Box style={{ width: "400px", margin: "2rem auto" }}>
        <Button variant="contained" color="primary" fullWidth>
          send
        </Button>
      </Box>
    </Box>
  );
};
