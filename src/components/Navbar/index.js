import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu1 from "@mui/material/Menu";
import { HiMenu } from "react-icons/hi";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <img
                  alt="logo"
                  src={logo}
                  width={60}
                  height={60}
                  component="div"
                />
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <HiMenu />
              </IconButton>
              <Menu1
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <NavLink to="/">
                  <MenuItem key="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">Start</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="groupies">
                  <MenuItem key="groupies" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">Groupies</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="pateter">
                  <MenuItem key="WallOfFame" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">Wall Of Fame</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="movies">
                  <MenuItem key="Taggfilmer" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">Taggfilmer</Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to="calender">
                  <MenuItem key="Festkalender" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">Festkalender</Typography>
                  </MenuItem>
                </NavLink>
                <a href="http://domd.nu/">
                  <MenuItem key="DomD" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">DÖMD</Typography>
                  </MenuItem>
                </a>
              </Menu1>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img
                alt="logo"
                src={logo}
                width={60}
                height={60}
                component="div"
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/">
                <Button
                  key="Start"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Start
                </Button>
              </NavLink>
              <NavLink to="groupies">
                <Button
                  key="hej"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Groupies
                </Button>
              </NavLink>
              <NavLink to="pateter">
                <Button
                  key="WoF"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Wall Of Fame
                </Button>
              </NavLink>
              <NavLink to="movies">
                <Button
                  key="movies"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Taggfilmer
                </Button>
              </NavLink>
              <NavLink to="calender">
                <Button
                  key="Kalender"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Festkalender
                </Button>
              </NavLink>
              <a href="http://domd.nu/">
                <Button
                  key="DomD"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  DömD
                </Button>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
