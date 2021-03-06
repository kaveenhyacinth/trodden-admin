import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Report,
  Home,
  Person,
  Group,
  Event,
  Feedback,
  CardTravel,
  PostAdd,
} from "@material-ui/icons";
import { Colors } from "../theme";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: Colors.primary,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    color: Colors.black,
    textDecoration: "none",
  },
}));

export const Wrapper = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {props.auth ? (
        <React.Fragment>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Trodden Admin Console
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link className={classes.link} to="/">
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link className={classes.link} to="/nomads">
                <ListItem button>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary={"Nomads"} />
                </ListItem>
              </Link>
              <Link className={classes.link} to="/caravans">
                <ListItem button>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary={"Caravans"} />
                </ListItem>
              </Link>
              <Link className={classes.link} to="blazes">
                <ListItem button>
                  <ListItemIcon>
                    <Event />
                  </ListItemIcon>
                  <ListItemText primary={"Blazes"} />
                </ListItem>
              </Link>
              <Link className={classes.link} to="memories">
                <ListItem button>
                  <ListItemIcon>
                    <PostAdd />
                  </ListItemIcon>
                  <ListItemText primary={"Memories"} />
                </ListItem>
              </Link>
              <Link className={classes.link}  className={classes.link}to="trips">
                <ListItem button>
                  <ListItemIcon>
                    <CardTravel />
                  </ListItemIcon>
                  <ListItemText primary={"Trips"} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Report />
                </ListItemIcon>
                <ListItemText primary={"Reports"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Feedback />
                </ListItemIcon>
                <ListItemText primary={"Feedback"} />
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ) : null}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
