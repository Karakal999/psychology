import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6, backgroundColor: "#F5F9FA" }}>
      <Container maxWidth="sm">
        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(7, 87, 91, 0.15)",
          }}
        >
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                color: "success.main",
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
            </Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                color: "primary.main",
                mb: 3,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Дякуємо за вашу заявку!
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "text.secondary", fontSize: "1.1rem" }}
            >
              Ми отримали вашу заявку на консультацію. Наш менеджер зв'яжеться з
              вами найближчим часом для уточнення деталей та підтвердження
              запису.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Повернутися на головну
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
