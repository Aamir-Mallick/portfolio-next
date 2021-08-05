import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@material-ui/core";
import { useStyles } from "./useStyles";
import DoneAllIcon from "@material-ui/icons/DoneAll";

export const SkillContainer = () => {
  const classes = useStyles();
  return (
    <Box id="skill" className={classes.skillMainContainer}>
      <Box style={{ margin: "10px auto" }}>
        <Typography
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingTop: "20px",
            color: "inherit",
            fontWeight: 700,
          }}
          variant="body2"
        >
          Skills
        </Typography>
      </Box>
      <Box className={classes.skillCardMainContainer}>
        <Box>
          <List component="nav" aria-label="main mailbox folders">
            {["Javascript", "React.js", "Redux.js", "Typescript"].map(
              (list) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <DoneAllIcon />
                    </ListItemIcon>
                    <ListItemText primary={list} />
                  </ListItem>
                );
              }
            )}
          </List>
        </Box>
        <Box>
          <List component="nav" aria-label="main mailbox folders">
            {["Bootstrap", "Material Ui", "HTML5", "CSS3"].map((list) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText primary={list} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
