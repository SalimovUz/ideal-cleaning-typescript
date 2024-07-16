import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Index = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Discover amazing content and join our community.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>

      <Container sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://via.placeholder.com/300x200?text=Image+${
                    index + 1
                  }`}
                  alt={`Image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Card Title {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a description for the card. It provides additional
                    information about the content displayed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 2,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">© 2024 My Website</Typography>
      </Box>
    </div>
  );
};

export default Index;
