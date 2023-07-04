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
import FacebookIcon from "../../images/logos/FacebookLogo.webp";
import InstagramIcon from "../../images/logos/InstagramLogo.webp";

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
            <Link to="/" /* Computer LOGO */>
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
<<<<<<< HEAD
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} /* Mobile dropdown */>
=======
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }} /* Mobile dropdown */
            >
>>>>>>> master
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
<<<<<<< HEAD
                sx={{pt:2}}
              >
                <HiMenu />
              </IconButton>
              <Menu1 
=======
                sx={{ pt: 2 }}
              >
                <HiMenu />
              </IconButton>
              <Menu1
>>>>>>> master
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
                <Link to="kontakt">
                  <MenuItem key="Kontakt" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Kontakt
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
<<<<<<< HEAD
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
=======
                      D<span Style="font-size:75%">ÖM</span>D
                    </Typography>
                  </MenuItem>
                </a>
                <a
                  href="https://www.facebook.com/DGroup2223"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key="Facebook" onClick={handleCloseNavMenu}>
                    <img
                      src={FacebookIcon}
                      alt="FB_logo"
                      width={"50vw"}
                      height={"50vh"}
                    />
                  </MenuItem>
                </a>
                <a
                  href="https://instagram.com/dgroup22_23/"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key="Instagram" onClick={handleCloseNavMenu}>
                    <img
                      src={InstagramIcon}
                      alt="FB_logo"
                      width={"50vw"}
                      height={"50vh"}
                      sx={{ mx: 10 }}
                    />
>>>>>>> master
                  </MenuItem>
                </a>
              </Menu1>
            </Box>
<<<<<<< HEAD
            <Box sx={{ flexGrow: 1.5, display: { xs: "flex", md: "none" }  }} /* Mobile LOGO */>
            <Link to="/" sx={{textDecoration:"none"}}>
              <img
                alt="logo"
                src={logo}
                width={60}
                height={60}
              />     
            </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} /* Computer LinkBar */>
=======
            <Box
              sx={{
                flexGrow: 1.5,
                display: { xs: "flex", md: "none" },
              }} /* Mobile LOGO */
            >
              <Link to="/" sx={{ textDecoration: "none" }}>
                <img alt="logo" src={logo} width={60} height={60} />
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }} /* Computer LinkBar */
            >
>>>>>>> master
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
              <Link to="kontakt">
                <Button
                  key="Kontakt"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Kontakt
                </Button>
<<<<<<< HEAD
                </Link>
=======
              </Link>
>>>>>>> master
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
<<<<<<< HEAD
            <Box sx={{ flexGrow: 0, mt: 1, display: { xs: "none", md: "flex" } }} /* Computer FB/IG to right */>
              <a href="https://instagram.com/dgroup2122/">
=======
            <Box
              sx={{
                flexGrow: 0,
                mt: 1,
                display: { xs: "none", md: "flex" },
              }} /* Computer FB/IG to right */
            >
              <a href="https://instagram.com/dgroup22_23/">
>>>>>>> master
                <img
                  src={InstagramIcon}
                  alt="FB_logo"
                  width={"50vw"}
                  height={"50vh"}
                  sx={{ mx: 10 }}
                />
              </a>
<<<<<<< HEAD
              <a href="https://www.facebook.com/DGroup2021">
=======
              <a href="https://www.facebook.com/DGroup2223">
>>>>>>> master
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
