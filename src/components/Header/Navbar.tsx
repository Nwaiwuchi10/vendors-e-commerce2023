import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
import TopNavbar from "./TopNavbar";
import CategoryMenu from "./CategoryMenu";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <FaTimes
          style={{
            cursor: "pointer",
            marginRight: "90px",
          }}
        />
      </Typography>
      <Divider />
      <List
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "50px",
          }}
        >
          <ListItem>Sign In</ListItem>
          <ListItem>Sign Up</ListItem>
          <ListItem> Market</ListItem>
          <ListItem>Become a vendor</ListItem>
          <ListItem> About Us</ListItem>
          <ListItem> Contact Us</ListItem>
        </ul>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Container>
    <Box sx={{ display: "flex" }} className="box-header-div">
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: "white",
          color: "black",
          position: "relative",
          width: "100%",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,

              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" component="div" className="now-music-sm">
              VENDORS
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              VENDORS
            </Typography>
          </Link>
          <div className="category-nav">
            <CategoryMenu />
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List>
              <ul
                style={{
                  display: "flex",

                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  textAlign: "right",
                }}
              >
                <ListItem>
                  <span>Sign</span>
                  <span style={{ marginLeft: "5px" }}>In</span>
                </ListItem>
                <ListItem>
                  <span>Sign</span>
                  <span style={{ marginLeft: "5px" }}>Up</span>
                </ListItem>

                <ListItem>Market</ListItem>
                <ListItem>
                  {" "}
                  <span>Become</span>
                  <span style={{ marginLeft: "5px" }}>a</span>
                  <span style={{ marginLeft: "5px" }}>vendor</span>
                </ListItem>
                <ListItem>
                  {" "}
                  <span>About</span>
                  <span style={{ marginLeft: "5px" }}>Us</span>
                </ListItem>
                <ListItem>
                  {" "}
                  <span>Contact</span>
                  <span style={{ marginLeft: "5px" }}>Us</span>
                </ListItem>
              </ul>
            </List>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box> */}
    </Box>
    // </Container>
  );
}
