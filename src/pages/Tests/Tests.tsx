import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionCard = motion.create(Card);

const tests = [
  {
    id: "anxiety-test",
    title: "Тест на рівень тривожності",
    description:
      "Оцініть свій поточний рівень тривожності та дізнайтеся про способи його зниження",
    image: "/images/anxiety.jpg",
    duration: "10-15 хвилин",
    questions: 20,
  },
  {
    id: "depression-test",
    title: "Діагностика депресії",
    description:
      "Визначте наявність симптомів депресії та отримайте рекомендації щодо подальших дій",
    image: "/images/depression-diagnosis.jpg",
    duration: "15-20 хвилин",
    questions: 25,
  },
  {
    id: "stress-test",
    title: "Тест на рівень стресу",
    description:
      "Проаналізуйте свій рівень стресу та знайдіть шляхи його подолання",
    image: "/images/stress-level.jpg",
    duration: "10-12 хвилин",
    questions: 18,
  },
  {
    id: "burnout-test",
    title: "Тест на професійне вигорання",
    description: "Оцініть свій стан та ризик професійного вигорання",
    image: "/images/professional-burnout.jpg",
    duration: "12-15 хвилин",
    questions: 22,
  },
];

export const Tests = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6, backgroundColor: "#F5F9FA" }}>
      <Container>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: "primary.main",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Психологічні тести
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Пройдіть наші тести, щоб краще зрозуміти себе та свій емоційний стан
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tests.map((test, index) => (
            <Grid item xs={12} md={6} key={test.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    transition: "transform 0.3s ease-in-out",
                    boxShadow: "0 8px 24px rgba(7, 87, 91, 0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={test.image}
                  alt={test.title}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{ color: "primary.main", fontWeight: "500" }}
                    >
                      {test.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {test.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Тривалість: {test.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Питань: {test.questions}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`/tests/${test.id}`)}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "primary.dark",
                        },
                      }}
                    >
                      Почати тест
                    </Button>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
