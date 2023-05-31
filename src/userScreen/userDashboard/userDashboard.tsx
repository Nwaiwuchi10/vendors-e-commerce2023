import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./userDashBoard.css";
// import union from "../../assets/images/Union.png";
// import lends from "../../assets/images/lendsqr.png";
import { BiSearch } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { MdOutlineArrowDropDown, MdAccountCircle } from "react-icons/md";

import Sidebar from "./Sidebar";
// import SideBsr from "./SideBsr";
const drawerWidth = 240;

interface Props {
  children: any;

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export const NavLinks = () => {
  const user = localStorage.getItem("firstName");
  return (
    <div className="container nav-flex-div">
      <div className="logo-small-screen">
        <div className="imgs-disp-div">
          <div className="img-cont2">
            {/* <img src={lends} alt="lend" className="imgs-lend" /> */}
          </div>
        </div>
      </div>

      <div>
        <input placeholder="Search for anything " className="input-search" />
        <button className="search-btn">
          <BiSearch className="b-icon" style={{ color: "white" }} />
        </button>
      </div>
      <div className="person">
        <FiBell className="fibell-icon" />
        <MdAccountCircle className="img-face" />
        {user}
        <MdOutlineArrowDropDown />
      </div>
    </div>
  );
};
export const Toolbars = () => {
  return (
    <div className="imgs-disp-div">
      <div className="img-cont">
        {" "}
        {/* <img src={union} alt="heu" className="img-union" /> */}
      </div>
      <div className="img-cont2">
        {/* <img src={lends} alt="lend" className="imgs-lend" /> */}
      </div>
      <Toolbar />
    </div>
  );
};

export default function UserDashBoard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbars />

      <Divider />
      <List style={{ color: "#213F7D" }}>
        {" "}
        <Sidebar />{" "}
      </List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#FFFFFF",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#171744" }} />
          </IconButton>
          <div>
            <NavLinks />
          </div>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>{props.children}</Typography>
      </Box>
    </Box>
  );
}
