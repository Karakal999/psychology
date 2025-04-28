import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#07575B",
        color: "white",
        paddingTop: "48px",
        paddingBottom: "48px",
        marginTop: "auto",
        boxShadow: "0 -4px 12px rgba(7, 87, 91, 0.08)",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#C4DFE6" }}>
              Про нас
            </Typography>
            <Typography variant="body2" sx={{ color: "#F5F9FA" }}>
              Ми допомагаємо людям впоратися з життєвими труднощами та знайти
              шлях до гармонії та щастя.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#C4DFE6" }}>
              Контакти
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="tel:+380001234567"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#F5F9FA",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#C4DFE6",
                  },
                }}
              >
                <PhoneOutlined /> +38 (000) 123-45-67
              </Link>
              <Link
                href="mailto:support@psychology.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#F5F9FA",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#C4DFE6",
                  },
                }}
              >
                <MailOutlined /> support@psychology.com
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#C4DFE6" }}>
              Швидкі посилання
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="/about"
                sx={{
                  color: "#F5F9FA",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#C4DFE6",
                  },
                }}
              >
                Про сервіс
              </Link>
              <Link
                href="/privacy"
                sx={{
                  color: "#F5F9FA",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#C4DFE6",
                  },
                }}
              >
                Політика конфіденційності
              </Link>
              <Link
                href="/terms"
                sx={{
                  color: "#F5F9FA",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#C4DFE6",
                  },
                }}
              >
                Умови використання
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(196, 223, 230, 0.2)",
            color: "#F5F9FA",
          }}
        >
          © {new Date().getFullYear()} Психологія та підтримка. Всі права
          захищені.
        </Typography>
      </Container>
    </footer>
  );
};
