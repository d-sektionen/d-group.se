import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu1 from "@mui/material/Menu";
import { HiMenu } from "react-icons/hi";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from "../../images/logos/FacebookLogo.png";
import InstagramIcon from "../../images/logos/InstagramLogo.png";

import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Link = styled(NavLink)`
  text-decoration: none;
`;

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
          <Toolbar disableGutters sx={{ alignItems: "flex-start" }}>
            <Link to="/">
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
            </Link>

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
                <Link to="/">
                  <MenuItem key="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Start
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="groupies">
                  <MenuItem key="groupies" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Groupies
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="pateter">
                  <MenuItem key="WallOfFame" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Wall Of Fame
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="movies">
                  <MenuItem key="Taggfilmer" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Taggfilmer
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="calender">
                  <MenuItem key="Festkalender" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Festkalender
                    </Typography>
                  </MenuItem>
                </Link>
                <a href="http://domd.nu/" style={{ textDecoration: "none" }}>
                  <MenuItem key="DomD" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                    D<span Style="font-size:75%">ÖM</span>D
                    </Typography>
                  </MenuItem>
                </a>
                <a href="https://www.facebook.com/DGroup2021" style={{ textDecoration: "none" }}>
                  <MenuItem key="Facebook" onClick={handleCloseNavMenu}>
                  <img
                  src={FacebookIcon}
                  alt="FB_logo"
                  width={"50vw"}
                  height={"50vh"}
                />
                  </MenuItem>
                </a>
                <a href="https://instagram.com/dgroup2122/" style={{ textDecoration: "none" }}>
                  <MenuItem key="Instagram" onClick={handleCloseNavMenu}>
                  <img
                  src={InstagramIcon}
                  alt="FB_logo"
                  width={"50vw"}
                  height={"50vh"}
                  sx={{ mx: 10 }}
                />
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
              <Link to="/">
                <Button
                  key="Start"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Start
                </Button>
              </Link>
              <Link to="groupies">
                <Button
                  key="hej"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Groupies
                </Button>
              </Link>
              <Link to="pateter">
                <Button
                  key="WoF"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Wall Of Fame
                </Button>
              </Link>
              <Link to="movies">
                <Button
                  key="movies"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Taggfilmer
                </Button>
              </Link>
              <Link to="calender">
                <Button
                  key="Kalender"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", flexGrow: 1 }}
                >
                  Festkalender
                </Button>
              </Link>
              <a href="http://domd.nu/" style={{ textDecoration: "none" }}>
                <Button
                  key="DomD"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  D<span Style="font-size:75%">ÖM</span>D
                </Button>
              </a>
            </Box>
            <Box sx={{ flexGrow: 0, mt: 1, display: { xs: "none", md: "flex" } }}>
              <a href="https://instagram.com/dgroup2122/">
                <img
                  src={InstagramIcon}
                  alt="FB_logo"
                  width={"50vw"}
                  height={"50vh"}
                  sx={{ mx: 10 }}
                />
              </a>
              <a href="https://www.facebook.com/DGroup2021">
                <img
                  src={FacebookIcon}
                  alt="FB_logo"
                  width={"50vw"}
                  height={"50vh"}
                />
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;