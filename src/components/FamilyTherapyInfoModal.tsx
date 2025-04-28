import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FamilyTherapyInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const FamilyTherapyInfoModal = ({
  open,
  onClose,
}: FamilyTherapyInfoModalProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ m: 0, p: 2 }}>
      Сімейна терапія
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
        <b>Сімейна терапія</b> — це спільна робота з психологом для пар,
        подружжя або всієї родини. Вона допомагає:
        <ul>
          <li>
            Вирішити конфлікти та покращити взаєморозуміння між членами сім'ї
          </li>
          <li>Навчитися ефективній комунікації та підтримці одне одного</li>
          <li>Подолати кризи, пов'язані зі змінами у житті родини</li>
          <li>Зміцнити емоційний зв'язок та довіру</li>
        </ul>
        Сімейна терапія може бути корисною у випадках частих сварок, труднощів у
        вихованні дітей, розлучення, втрати чи інших складних ситуацій.
        Тривалість сесії — 60 хвилин. Кількість зустрічей визначається
        індивідуально.
      </Typography>
    </DialogContent>
  </Dialog>
);
