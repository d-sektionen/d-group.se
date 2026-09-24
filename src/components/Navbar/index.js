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

const INSTAGRAM_URL = "https://www.instagram.com/dgroup2627/";

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
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          height: {
            md: "72px",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              alignItems: {
                xs: "flex-start",
                md: "center",
              },
              minHeight: {
                md: "72px !important",
              },
              height: {
                md: "72px",
              },
            }}
          >
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
              /* Mobile dropdown */
            >
              <IconButton
                size="large"
                aria-label="Öppna meny"
                aria-controls="menu-appbar"
                aria-haspopup="menu"
                aria-expanded={Boolean(anchorElNav)}
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ pt: 2 }}
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
                <MenuItem component={NavLink} to="/" key="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Start
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/groupies" key="groupies" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Groupies
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/kontakt" key="Kontakt" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Kontakt
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/pateter" key="WallOfFame" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Wall Of Fame
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/movies" key="Taggfilmer" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Taggfilmer
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/kastapil" key="KastaPil" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Kasta pil
                    </Typography>
                  </MenuItem>

                <MenuItem component={NavLink} to="/calendar" key="Festkalender" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      Festkalender
                    </Typography>
                  </MenuItem>

                <MenuItem component="a" href="http://domd.nu/" key="DomD" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      D<span style={{ fontSize: "75%" }}>ÖM</span>D
                    </Typography>
                  </MenuItem>

                <MenuItem component="a" href="https://www.facebook.com/DGroup2324" key="Facebook" onClick={handleCloseNavMenu}>
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      width={50}
                      height={50}
                    />
                  </MenuItem>

                <MenuItem component="a" href={INSTAGRAM_URL} key="Instagram" onClick={handleCloseNavMenu}>
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      width={50}
                      height={50}
                      style={{ margin: "0 10px" }}
                    />
                  </MenuItem>
              </Menu1>
            </Box>

            <Box
              sx={{
                flexGrow: 1.5,
                display: { xs: "flex", md: "none" },
              }}
              /* Mobile LOGO */
            >
              <Link to="/" sx={{ textDecoration: "none" }}>
                <img alt="logo" src={logo} width={60} height={60} />
              </Link>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
              /* Computer LinkBar */
            >
              <Button component={NavLink} to="/"
                  key="Start"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Start
                </Button>

              <Button component={NavLink} to="/groupies"
                  key="hej"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Groupies
                </Button>

              <Button component={NavLink} to="/kontakt"
                  key="Kontakt"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Kontakt
                </Button>

              <Button component={NavLink} to="/pateter"
                  key="WoF"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Wall Of Fame
                </Button>

              <Button component={NavLink} to="/movies"
                  key="movies"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Taggfilmer
                </Button>

              <Button component={NavLink} to="/kastapil"
                  key="kastapil"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Kasta pil
                </Button>

              <Button component={NavLink} to="/calendar"
                  key="Kalender"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    flexGrow: 1,
                  }}
                >
                  Festkalender
                </Button>

              <Button component="a" href="http://domd.nu/"
                  key="DomD"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  D<span style={{ fontSize: "75%" }}>ÖM</span>D
                </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                mt: 1,
                display: { xs: "none", md: "flex" },
              }}
              /* Computer FB/IG to right */
            >
              <a href={INSTAGRAM_URL}>
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  width={50}
                  height={50}
                  style={{ margin: "0 10px" }}
                />
              </a>

              <a href="https://www.facebook.com/DGroup2324">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  width={50}
                  height={50}
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
