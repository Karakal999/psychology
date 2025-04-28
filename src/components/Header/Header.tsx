import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const { currentUser, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      style={{ width: "100%" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Психологія та підтримка
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => navigate("/tests")}>
              Тести
            </Button>
            <Button color="inherit" onClick={() => navigate("/consultations")}>
              Консультації
            </Button>
            <Button color="inherit" onClick={() => navigate("/meditations")}>
              Медитації
            </Button>
            <Button color="inherit" onClick={() => navigate("/resources")}>
              Ресурси
            </Button>
            {currentUser ? (
              <>
                <Button color="inherit" onClick={() => navigate("/profile")}>
                  Профіль
                </Button>
                <Button color="inherit" onClick={handleSignOut}>
                  Вийти
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => navigate("/login")}>
                Увійти
              </Button>
            )}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/consultation-request")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "secondary.dark",
                },
              }}
            >
              Записатися
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
