import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const specialists = [
  { id: "olga", name: "Ольга Петренко", specialization: "Клінічний психолог" },
  {
    id: "ivan",
    name: "Іван Коваленко",
    specialization: "Психолог-консультант",
  },
  { id: "maria", name: "Марія Сидоренко", specialization: "Дитячий психолог" },
];

const consultationTypes = [
  { value: "individual", label: "Індивідуальна консультація" },
  { value: "family", label: "Сімейна терапія" },
  { value: "group", label: "Групові заняття" },
];

export const ConsultationRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialist: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
    // После успешной отправки перенаправляем на страницу благодарности
    navigate("/thank-you");
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#F5F9FA" }}>
      <Container maxWidth="md">
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
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "primary.main",
                mb: 4,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Запис на консультацію
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Ваше ім'я"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Телефон"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Спеціаліст</InputLabel>
                    <Select
                      name="specialist"
                      value={formData.specialist}
                      onChange={handleChange}
                      label="Спеціаліст"
                    >
                      {specialists.map((specialist) => (
                        <MenuItem key={specialist.id} value={specialist.id}>
                          {specialist.name} - {specialist.specialization}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Тип консультації</InputLabel>
                    <Select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      label="Тип консультації"
                    >
                      {consultationTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Бажана дата"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    label="Бажаний час"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Додаткова інформація"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
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
                      Надіслати заявку
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
