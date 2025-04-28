import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ServiceInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const ServiceInfoModal = ({ open, onClose }: ServiceInfoModalProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ m: 0, p: 2 }}>
      Індивідуальні консультації
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
      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        <b>Індивідуальні консультації</b> — це персональна робота з психологом,
        спрямована на вирішення ваших конкретних проблем, запитів та життєвих
        ситуацій. Під час таких зустрічей ви отримуєте:
        <ul>
          <li>Підтримку та розуміння у безпечному просторі</li>
          <li>Можливість глибше зрозуміти себе, свої емоції та поведінку</li>
          <li>
            Індивідуальні рекомендації та стратегії для подолання труднощів
          </li>
          <li>
            Роботу з тривогою, стресом, депресією, самооцінкою, стосунками та
            іншими питаннями
          </li>
        </ul>
        Тривалість консультації — 50 хвилин. Кількість зустрічей визначається
        індивідуально.
      </Typography>
    </DialogContent>
  </Dialog>
);
