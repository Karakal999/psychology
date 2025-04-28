import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  CardContent,
  alpha,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
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
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const resources = [
  {
    title: "Книги та статті",
    description: "Рекомендована література та наукові статті з психології",
    icon: <BookOutlined style={{ fontSize: "2.5rem", color: "#07575B" }} />,
    link: "https://www.goodreads.com/shelf/show/psychology",
    gradient: "linear-gradient(135deg, #C4DFE6 0%, #66A5AD 100%)",
  },
  {
    title: "Відео-лекції",
    description: "Онлайн-курси та лекції від провідних психологів",
    icon: (
      <VideoCameraOutlined style={{ fontSize: "2.5rem", color: "#07575B" }} />
    ),
    link: "https://www.youtube.com/results?search_query=psychology+lectures+ukrainian",
    gradient: "linear-gradient(135deg, #66A5AD 0%, #07575B 100%)",
  },
  {
    title: "Наукові дослідження",
    description: "Актуальні дослідження в галузі психології",
    icon: <FileTextOutlined style={{ fontSize: "2.5rem", color: "#07575B" }} />,
    link: "https://scholar.google.com/scholar?q=psychology+research",
    gradient: "linear-gradient(135deg, #07575B 0%, #003B46 100%)",
  },
  {
    title: "Мобільні додатки",
    description: "Корисні застосунки для психологічної підтримки",
    icon: <AppstoreOutlined style={{ fontSize: "2.5rem", color: "#07575B" }} />,
    link: "https://play.google.com/store/search?q=psychology+apps&c=apps",
    gradient: "linear-gradient(135deg, #003B46 0%, #07575B 100%)",
  },
];

export const Resources = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#F5F9FA", minHeight: "100vh" }}>
      <Container>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
            Корисні ресурси
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variant="h5"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Підбірка корисних матеріалів, книг, відео та додатків для вашого
            саморозвитку
          </MotionTypography>
        </MotionBox>

        <Grid container spacing={4}>
          <AnimatePresence>
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: resource.gradient,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      flexGrow: 1,
                      p: 3,
                    }}
                  >
                    <MotionBox
                      className="icon-wrapper"
                      variants={iconVariants}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        backgroundColor: alpha("#07575B", 0.05),
                        mb: 3,
                      }}
                    >
                      {resource.icon}
                    </MotionBox>
                    <MotionTypography
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        mb: 2,
                      }}
                    >
                      {resource.title}
                    </MotionTypography>
                    <MotionTypography
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {resource.description}
                    </MotionTypography>
                    <MotionButton
                      variants={buttonVariants}
                      className="resource-button"
                      variant="contained"
                      color="primary"
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: "100%",
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: "1rem",
                        fontWeight: 500,
                        textTransform: "none",
                        background:
                          "linear-gradient(135deg, #07575B 0%, #003B46 100%)",
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(7, 87, 91, 0.3)",
                        },
                      }}
                    >
                      Перейти
                    </MotionButton>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};
