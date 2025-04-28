import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SupportIcon from "@mui/icons-material/Support";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState } from "react";
import { SpecialistModal } from "../../components/SpecialistModal/SpecialistModal";
import { ServiceInfoModal } from "../../components/ServiceInfoModal";
import { FamilyTherapyInfoModal } from "../../components/FamilyTherapyInfoModal";
import { GroupSessionsInfoModal } from "../../components/GroupSessionsInfoModal";

const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionAvatar = motion(Avatar);
const MotionAccordion = motion(Accordion);

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

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

const specialists = [
  {
    name: "Ольга Петренко",
    specialization: "Клінічний психолог",
    experience: "10 років",
    image: "/images/specialists/olga.jpg",
    description:
      "Спеціалізується на роботі з тривожними розладами та депресією. Має сертифікати з когнітивно-поведінкової терапії.",
    contacts: {
      phone: "+380 50 123 4567",
      email: "olga.petrenko@psychology-support.com",
      telegram: "@olga_psychologist",
    },
    schedule: {
      ponedilok: "09:00 - 18:00",
      vivtorok: "09:00 - 18:00",
      sereda: "09:00 - 18:00",
      chetver: "09:00 - 18:00",
      piatnytsia: "09:00 - 16:00",
      subota: "10:00 - 14:00",
      nedilia: "Вихідний",
    },
  },
  {
    name: "Іван Коваленко",
    specialization: "Психолог-консультант",
    experience: "8 років",
    image: "/images/specialists/ivan.jpg",
    description:
      "Експерт у сфері сімейної психології та кризових станів. Працює з парами та сім'ями.",
    contacts: {
      phone: "+380 67 234 5678",
      email: "ivan.kovalenko@psychology-support.com",
      telegram: "@ivan_psychologist",
    },
    schedule: {
      ponedilok: "10:00 - 19:00",
      vivtorok: "10:00 - 19:00",
      sereda: "10:00 - 19:00",
      chetver: "10:00 - 19:00",
      piatnytsia: "10:00 - 17:00",
      subota: "11:00 - 15:00",
      nedilia: "Вихідний",
    },
  },
];

export const Consultations = () => {
  const navigate = useNavigate();
  const [selectedSpecialist, setSelectedSpecialist] = useState<
    (typeof specialists)[0] | null
  >(null);
  const [serviceInfoOpen, setServiceInfoOpen] = useState(false);
  const [familyTherapyInfoOpen, setFamilyTherapyInfoOpen] = useState(false);
  const [groupSessionsInfoOpen, setGroupSessionsInfoOpen] = useState(false);

  const handleSpecialistClick = (specialist: (typeof specialists)[0]) => {
    setSelectedSpecialist(specialist);
  };

  const handleServiceInfoOpen = () => setServiceInfoOpen(true);
  const handleServiceInfoClose = () => setServiceInfoOpen(false);
  const handleFamilyTherapyInfoOpen = () => setFamilyTherapyInfoOpen(true);
  const handleFamilyTherapyInfoClose = () => setFamilyTherapyInfoOpen(false);
  const handleGroupSessionsInfoOpen = () => setGroupSessionsInfoOpen(true);
  const handleGroupSessionsInfoClose = () => setGroupSessionsInfoOpen(false);

  const handleCloseModal = () => {
    setSelectedSpecialist(null);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Box sx={{ py: 6, backgroundColor: "#F5F9FA" }}>
        <Container>
          <MotionBox
            variants={itemVariants}
            sx={{ textAlign: "center", mb: 8 }}
          >
            <Typography
              component={motion.h1}
              variants={itemVariants}
              variant="h2"
              gutterBottom
              sx={{
                color: "primary.main",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Професійні психологічні консультації
            </Typography>
            <Typography
              component={motion.div}
              variants={itemVariants}
              variant="h5"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                maxWidth: "800px",
                mx: "auto",
                mb: 4,
              }}
            >
              Отримайте кваліфіковану допомогу від наших спеціалістів у зручному
              для вас форматі
            </Typography>
            <MotionButton
              variants={buttonVariants}
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/consultation-request")}
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
              Записатися на консультацію
            </MotionButton>
          </MotionBox>

          <Grid container spacing={4}>
            <AnimatePresence>
              {specialists.map((specialist, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <MotionCard
                    variants={cardVariants}
                    custom={index}
                    whileHover="hover"
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      backgroundColor: "white",
                      boxShadow: "0 8px 24px rgba(7, 87, 91, 0.10)",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: "0 12px 32px rgba(7, 87, 91, 0.15)",
                      },
                    }}
                    onClick={() => handleSpecialistClick(specialist)}
                  >
                    <MotionAvatar
                      src={specialist.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 3,
                        border: "4px solid",
                        borderColor: "primary.main",
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <Typography
                      component={motion.h3}
                      variants={itemVariants}
                      variant="h5"
                      gutterBottom
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      {specialist.name}
                    </Typography>
                    <Typography
                      component={motion.div}
                      variants={itemVariants}
                      variant="subtitle1"
                      color="text.secondary"
                      gutterBottom
                    >
                      {specialist.specialization}
                    </Typography>
                    <Typography
                      component={motion.div}
                      variants={itemVariants}
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {specialist.description}
                    </Typography>
                    <MotionButton
                      variants={buttonVariants}
                      variant="contained"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpecialistClick(specialist);
                      }}
                    >
                      Детальніше
                    </MotionButton>
                  </MotionCard>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography
              component={motion.h2}
              variants={itemVariants}
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "primary.main",
                mb: 4,
              }}
            >
              Види консультацій
            </Typography>
            <AnimatePresence>
              {[
                {
                  title: "Індивідуальна консультація",
                  icon: (
                    <PsychologyIcon sx={{ fontSize: 40, color: "#07575B" }} />
                  ),
                  onClick: handleServiceInfoOpen,
                },
                {
                  title: "Сімейна терапія",
                  icon: <SupportIcon sx={{ fontSize: 40, color: "#07575B" }} />,
                  onClick: handleFamilyTherapyInfoOpen,
                },
                {
                  title: "Групові заняття",
                  icon: <GroupsIcon sx={{ fontSize: 40, color: "#07575B" }} />,
                  onClick: handleGroupSessionsInfoOpen,
                },
              ].map((service, index) => (
                <MotionAccordion
                  key={index}
                  variants={accordionVariants}
                  custom={index}
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: "rgba(7, 87, 91, 0.05)",
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {service.icon}
                      <Typography variant="h6">{service.title}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Детальна інформація про {service.title.toLowerCase()}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={service.onClick}
                      sx={{ mt: 2 }}
                    >
                      Дізнатися більше
                    </Button>
                  </AccordionDetails>
                </MotionAccordion>
              ))}
            </AnimatePresence>
          </Box>
        </Container>

        {selectedSpecialist && (
          <SpecialistModal
            open={!!selectedSpecialist}
            onClose={handleCloseModal}
            specialist={selectedSpecialist}
          />
        )}

        <ServiceInfoModal
          open={serviceInfoOpen}
          onClose={handleServiceInfoClose}
        />

        <FamilyTherapyInfoModal
          open={familyTherapyInfoOpen}
          onClose={handleFamilyTherapyInfoClose}
        />

        <GroupSessionsInfoModal
          open={groupSessionsInfoOpen}
          onClose={handleGroupSessionsInfoClose}
        />
      </Box>
    </motion.div>
  );
};
