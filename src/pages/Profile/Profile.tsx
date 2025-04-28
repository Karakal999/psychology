import React from "react";
import { Container, Typography, Box, Button, Avatar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Profile: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <Container maxWidth="md">
        <MotionBox
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionTypography variant="h4" gutterBottom variants={itemVariants}>
            Будь ласка, увійдіть в систему
          </MotionTypography>
          <MotionButton
            variant="contained"
            color="primary"
            href="/login"
            variants={itemVariants}
          >
            Увійти
          </MotionButton>
        </MotionBox>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <MotionBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={4}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionBox variants={itemVariants}>
          <Avatar
            sx={{ width: 120, height: 120, mb: 2 }}
            alt={user.name}
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&background=random`}
          />
        </MotionBox>

        <MotionTypography variant="h4" gutterBottom variants={itemVariants}>
          {user.name}
        </MotionTypography>

        <MotionTypography
          variant="body1"
          color="text.secondary"
          variants={itemVariants}
        >
          {user.email}
        </MotionTypography>

        <MotionBox mt={4} variants={itemVariants}>
          <MotionButton
            variant="contained"
            color="error"
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Вийти
          </MotionButton>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};

export default Profile;
