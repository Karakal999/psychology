import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  Avatar,
  Divider,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";
import { useState } from "react";

interface SpecialistModalProps {
  open: boolean;
  onClose: () => void;
  specialist: {
    name: string;
    specialization: string;
    experience: string;
    image: string;
    description: string;
    contacts: {
      phone: string;
      email: string;
      telegram: string;
    };
    schedule: {
      ponedilok: string;
      vivtorok: string;
      sereda: string;
      chetver: string;
      piatnytsia: string;
      subota: string;
      nedilia: string;
    };
  };
}

const generateTimeSlots = (startTime: string, endTime: string) => {
  const slots = [];
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  let currentHour = startHour;
  let currentMinute = startMinute;

  while (
    currentHour < endHour ||
    (currentHour === endHour && currentMinute <= endMinute)
  ) {
    const timeString = `${currentHour
      .toString()
      .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
    slots.push(timeString);

    currentMinute += 30;
    if (currentMinute >= 60) {
      currentHour++;
      currentMinute = 0;
    }
  }

  return slots;
};

const getUkrainianDayName = (day: string) => {
  const dayMap: { [key: string]: string } = {
    ponedilok: "Понеділок",
    vivtorok: "Вівторок",
    sereda: "Середа",
    chetver: "Четвер",
    piatnytsia: "П'ятниця",
    subota: "Субота",
    nedilia: "Неділя",
  };
  return dayMap[day] || day;
};

export const SpecialistModal = ({
  open,
  onClose,
  specialist,
}: SpecialistModalProps) => {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    setSelectedTime("");

    if (
      day &&
      specialist.schedule[day as keyof typeof specialist.schedule] !==
        "Вихідний"
    ) {
      const [startTime, endTime] =
        specialist.schedule[day as keyof typeof specialist.schedule].split(
          " - "
        );
      const slots = generateTimeSlots(startTime, endTime);
      setAvailableTimeSlots(slots);
    } else {
      setAvailableTimeSlots([]);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedDay && selectedTime) {
      // Here you would typically handle the appointment booking
      console.log(`Booking appointment for ${selectedDay} at ${selectedTime}`);
      // You might want to navigate to a booking form or show a confirmation dialog
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
            }}
          >
            <Avatar
              src={specialist.image}
              alt={specialist.name}
              sx={{
                width: 200,
                height: 200,
                mb: 3,
                border: "4px solid #07575B",
              }}
            />
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ color: "primary.main", fontWeight: "500" }}
            >
              {specialist.name}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ fontWeight: "500" }}
            >
              {specialist.specialization}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Досвід: {specialist.experience}
            </Typography>
            <Divider sx={{ width: "100%", mb: 3 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: "center", lineHeight: 1.8, mb: 4 }}
            >
              {specialist.description}
            </Typography>

            {/* Contacts Section */}
            <Box sx={{ width: "100%", mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                Контакти
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Button
                    component="a"
                    href={`tel:${specialist.contacts.phone.replace(
                      /\s+/g,
                      ""
                    )}`}
                    startIcon={<PhoneIcon />}
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: "flex-start", textTransform: "none" }}
                  >
                    {specialist.contacts.phone}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    component="a"
                    href={`mailto:${specialist.contacts.email}`}
                    startIcon={<EmailIcon />}
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: "flex-start", textTransform: "none" }}
                  >
                    {specialist.contacts.email}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    component="a"
                    href={`https://t.me/${specialist.contacts.telegram.replace(
                      "@",
                      ""
                    )}`}
                    startIcon={<TelegramIcon />}
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: "flex-start", textTransform: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {specialist.contacts.telegram}
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/* Schedule Section */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                Графік роботи
              </Typography>

              {/* Day Selection */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Виберіть день</InputLabel>
                <Select
                  value={selectedDay}
                  onChange={(e) => handleDayChange(e.target.value)}
                  label="Виберіть день"
                >
                  {Object.entries(specialist.schedule).map(([day, time]) => (
                    <MenuItem
                      key={day}
                      value={day}
                      disabled={time === "Вихідний"}
                    >
                      {getUkrainianDayName(day)}: {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Time Slots */}
              {selectedDay && availableTimeSlots.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Доступні години прийому:
                  </Typography>
                  <Grid container spacing={1}>
                    {availableTimeSlots.map((time) => (
                      <Grid item xs={4} sm={3} key={time}>
                        <Button
                          variant={
                            selectedTime === time ? "contained" : "outlined"
                          }
                          onClick={() => handleTimeSelect(time)}
                          sx={{
                            width: "100%",
                            minWidth: "unset",
                            p: 1,
                          }}
                        >
                          {time}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Book Appointment Button */}
              {selectedTime && (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleBookAppointment}
                  sx={{ mt: 2 }}
                >
                  Записатися на {getUkrainianDayName(selectedDay)} о{" "}
                  {selectedTime}
                </Button>
              )}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
