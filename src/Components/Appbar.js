import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppbar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppbar
        style={{
          background:
            "linear-gradient(45deg, rgb(1, 204, 255), rgb(1, 114, 255), rgb(1, 204, 255))",
        }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            size="small"
          >
            <Sidebar />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Learn about Paintball Gear
          </Typography>
        </Toolbar>
      </MuiAppbar>
    </div>
  );
}
