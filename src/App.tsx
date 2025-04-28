import { ThemeProvider } from "@mui/material/styles";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./styles/theme";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./routes";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";

// Конфигурация темы для Ant Design
const antTheme = {
  token: {
    colorPrimary: "#07575B",
    colorSuccess: "#66A5AD",
    colorInfo: "#C4DFE6",
    colorTextBase: "#003B46",
    colorBgBase: "#FFFFFF",
    colorBorder: "#66A5AD",
    borderRadius: 8,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ConfigProvider theme={antTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <Router>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                  width: "100%",
                }}
              >
                <Header />
                <Box
                  component="main"
                  sx={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AppRoutes />
                </Box>
                <Footer />
              </Box>
            </Router>
          </AuthProvider>
        </ThemeProvider>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;
