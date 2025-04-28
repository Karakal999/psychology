import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExperimentOutlined,
  TeamOutlined,
  HeartOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion.create(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const services = [
  {
    title: "Психологічні тести",
    description: "Пройдіть тести для оцінки вашого психологічного стану",
    icon: <ExperimentOutlined style={{ fontSize: "2rem", color: "#07575B" }} />,
    path: "/tests",
  },
  {
    title: "Консультації",
    description: "Отримайте професійну допомогу від наших спеціалістів",
    icon: <TeamOutlined style={{ fontSize: "2rem", color: "#07575B" }} />,
    path: "/consultations",
  },
  {
    title: "Медитації",
    description: "Практики для розслаблення та зняття стресу",
    icon: <HeartOutlined style={{ fontSize: "2rem", color: "#07575B" }} />,
    path: "/meditations",
  },
  {
    title: "Корисні матеріали",
    description: "Статті та ресурси для саморозвитку",
    icon: <BookOutlined style={{ fontSize: "2rem", color: "#07575B" }} />,
    path: "/resources",
  },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ width: "100%" }}
    >
      <section
        style={{ width: "100%", backgroundColor: "#F5F9FA", padding: "64px 0" }}
      >
        <Container>
          <MotionBox
            variants={itemVariants}
            sx={{ textAlign: "center", mb: 8 }}
          >
            <MotionTypography
              variant="h2"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "primary.main",
                mb: 4,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
              variants={containerVariants}
            >
              Ласкаво просимо до світу психологічної підтримки
            </MotionTypography>
            <MotionTypography
              variant="h5"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
              variants={containerVariants}
            >
              Ми допомагаємо вам досягти емоційного благополуччя та
              особистісного зростання
            </MotionTypography>
            <MotionButton
              variants={buttonVariants}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/consultation-request")}
              sx={{
                borderRadius: 4,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                backgroundColor: "#07575B",
                "&:hover": {
                  backgroundColor: "#003B46",
                },
              }}
            >
              Почати шлях до гармонії
            </MotionButton>
          </MotionBox>
        </Container>
      </section>

      <section style={{ width: "100%", padding: "64px 0" }}>
        <Container>
          <Grid container spacing={4}>
            <AnimatePresence>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <MotionCard
                    variants={cardVariants}
                    custom={index}
                    whileHover="hover"
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      backgroundColor: "#F5F9FA",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 8px 24px rgba(7, 87, 91, 0.15)",
                      },
                    }}
                    onClick={() => navigate(service.path)}
                  >
                    <CardContent>
                      <MotionBox
                        variants={itemVariants}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          gap: 2,
                        }}
                      >
                        <MotionBox
                          variants={itemVariants}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundColor: "rgba(7, 87, 91, 0.1)",
                            mb: 2,
                          }}
                        >
                          {service.icon}
                        </MotionBox>
                        <MotionTypography
                          variant="h6"
                          gutterBottom
                          sx={{
                            textAlign: "center",
                            color: "text.secondary",
                            mb: 6,
                          }}
                          variants={containerVariants}
                        >
                          {service.title}
                        </MotionTypography>
                        <MotionTypography
                          variant="body2"
                          sx={{ color: "#07575B", lineHeight: 1.6 }}
                          variants={itemVariants}
                        >
                          {service.description}
                        </MotionTypography>
                      </MotionBox>
                    </CardContent>
                  </MotionCard>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      </section>
    </motion.div>
  );
};
