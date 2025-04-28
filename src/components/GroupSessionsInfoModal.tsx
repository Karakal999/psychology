import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface GroupSessionsInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const GroupSessionsInfoModal = ({
  open,
  onClose,
}: GroupSessionsInfoModalProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle sx={{ m: 0, p: 2 }}>
      Групові заняття
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
        <b>Групові заняття</b> — це тематичні групи підтримки та терапевтичні
        групи для роботи з різними аспектами психологічного благополуччя. Вони
        допомагають:
        <ul>
          <li>Відчути підтримку людей з подібним досвідом</li>
          <li>Навчитися новим навичкам спілкування та саморегуляції</li>
          <li>Обговорити свої переживання у безпечному середовищі</li>
          <li>Підвищити самооцінку та впевненість у собі</li>
        </ul>
        Групові заняття проводяться під керівництвом досвідченого психолога.
        Тривалість одного заняття — 90 хвилин. Формат і тематика груп можуть
        змінюватися залежно від запиту учасників.
      </Typography>
    </DialogContent>
  </Dialog>
);
