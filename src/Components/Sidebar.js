import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as MuiDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    display: "flex",
  },
});

const Sidebar = (props) => {
  const { history } = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/home"),
    },
    {
      text: "The Marker",
      onClick: () => history.push("/marker"),
    },
    {
      text: "The Hopper",
      onClick: () => history.push("/hopper"),
    },
    {
      text: "The Air Tank",
      onClick: () => history.push("/air_tank"),
    },
    {
      text: "The Paint",
      onClick: () => history.push("/paint"),
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon color="white" />
          </Button>
          <MuiDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawer}
          >
            {list(anchor)}
          </MuiDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default withRouter(Sidebar);
