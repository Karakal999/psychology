import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import BookIcon from "@mui/icons-material/Book";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import AppsIcon from "@mui/icons-material/Apps";

const meditations = [
  {
    title: "Релаксація для зняття стресу",
    description:
      "Коротка медитація для зниження напруги, відновлення спокою та енергії.",
    details:
      "Ця медитація допоможе вам розслабитися, зосередитися на диханні та відчути внутрішній спокій. Рекомендовано слухати у тихому місці, сидячи або лежачи.",
    audioUrl: "#",
  },
  {
    title: "Медитація усвідомленості (Mindfulness)",
    description:
      "Практика для розвитку уважності, прийняття себе та зниження тривоги.",
    details:
      "Медитація усвідомленості допомагає навчитися бути тут і зараз, приймати свої думки та емоції без осуду. Підходить для щоденного використання.",
    audioUrl: "#",
  },
  {
    title: "Візуалізація: Безпечне місце",
    description:
      "Медитація для створення внутрішнього відчуття безпеки та затишку.",
    details:
      "Під час цієї практики ви уявляєте місце, де почуваєтеся спокійно та захищено. Це допомагає знизити рівень стресу та тривоги.",
    audioUrl: "#",
  },
  {
    title: "Дихальна гімнастика",
    description: "Коротка вправа для відновлення рівноваги та зняття напруги.",
    details:
      "Дихальні вправи допомагають швидко заспокоїти нервову систему, покращити концентрацію та самопочуття.",
    audioUrl: "#",
  },
];

const blogPosts = [
  {
    title: "Чому медитація корисна для психіки?",
    excerpt:
      "Медитація допомагає знизити рівень стресу, покращити концентрацію та емоційний стан. Дізнайтеся, як регулярна практика впливає на мозок і самопочуття...",
    url: "#",
  },
  {
    title: "5 простих технік для початківців",
    excerpt:
      "Не знаєте, з чого почати? Ось кілька простих вправ, які допоможуть вам зробити перші кроки у світі медитації...",
    url: "#",
  },
  {
    title: "Як зробити медитацію звичкою?",
    excerpt:
      "Регулярність — ключ до результату. Ділимося порадами, як інтегрувати медитацію у щоденне життя...",
    url: "#",
  },
];

const resources = [
  {
    title: "Відео медитації",
    description:
      "Підбірка відео для практики медитації на YouTube та інших платформах.",
    icon: <VideoLibraryIcon sx={{ fontSize: 40, color: "#07575B" }} />,
    link: "https://www.youtube.com/results?search_query=guided+meditation+ukrainian",
  },
  {
    title: "Аудіо медитації",
    description:
      "Слухайте медитації у форматі аудіо на Spotify, SoundCloud, подкастах.",
    icon: <HeadphonesIcon sx={{ fontSize: 40, color: "#07575B" }} />,
    link: "https://open.spotify.com/search/медитація",
  },
  {
    title: "Книги та статті",
    description:
      "Рекомендовані книги та статті про медитацію, уважність і психологічне здоров'я.",
    icon: <BookIcon sx={{ fontSize: 40, color: "#07575B" }} />,
    link: "https://www.goodreads.com/shelf/show/meditation",
  },
  {
    title: "Мобільні додатки",
    description:
      "Зручні застосунки для медитації та релаксації на вашому смартфоні.",
    icon: <AppsIcon sx={{ fontSize: 40, color: "#07575B" }} />,
    link: "https://play.google.com/store/search?q=медитація&c=apps",
  },
];

export const Meditations = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof meditations)[0] | null>(
    null
  );

  const handleOpen = (meditation: (typeof meditations)[0]) => {
    setSelected(meditation);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#F5F9FA", minHeight: "100vh" }}>
      <Container>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            color: "primary.main",
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
          }}
        >
          Медитації для психологічної підтримки
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            maxWidth: "700px",
            mx: "auto",
            mb: 6,
            textAlign: "center",
          }}
        >
          Слухайте медитації для зняття стресу, розвитку усвідомленості та
          відновлення внутрішнього балансу. Оберіть практику, яка підходить саме
          вам.
        </Typography>

        {/* Секция с ресурсами */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Корисні ресурси
          </Typography>
          <Grid container spacing={4}>
            {resources.map((res, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "white",
                    height: "100%",
                    boxShadow: "0 8px 24px rgba(7, 87, 91, 0.10)",
                    transition: "0.2s",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(7, 87, 91, 0.18)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{res.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ color: "primary.main", fontWeight: "500" }}
                  >
                    {res.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {res.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Перейти
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция блога */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Блог про медитації
          </Typography>
          <Grid container spacing={4}>
            {blogPosts.map((post, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor: "white",
                    boxShadow: "0 8px 24px rgba(7, 87, 91, 0.10)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", fontWeight: 500, mb: 1 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {post.excerpt}
                  </Typography>
                  <MuiLink
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ mt: "auto", fontWeight: 500, color: "primary.main" }}
                  >
                    Читати
                  </MuiLink>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция с медитациями */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Аудіо-медитації
          </Typography>
          <Grid container spacing={4}>
            {meditations.map((m, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                    minHeight: 180,
                    boxShadow: "0 8px 24px rgba(7, 87, 91, 0.10)",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(7, 87, 91, 0.18)",
                      transform: "translateY(-4px)",
                    },
                  }}
                  onClick={() => handleOpen(m)}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "primary.main", fontWeight: 500, mb: 1 }}
                  >
                    {m.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {m.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlayArrowIcon />}
                    sx={{ mt: "auto" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(m);
                    }}
                  >
                    Детальніше
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            {selected?.title}
            <IconButton
              aria-label="close"
              onClick={handleClose}
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
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              {selected?.details}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowIcon />}
              component="a"
              href={
                selected && selected.audioUrl && selected.audioUrl !== "#"
                  ? selected.audioUrl
                  : undefined
              }
              target="_blank"
              rel="noopener noreferrer"
              disabled={
                !selected || !selected.audioUrl || selected.audioUrl === "#"
              }
            >
              Слухати
            </Button>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};
