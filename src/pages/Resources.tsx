import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material";
import { useMemo } from "react";

const facts = [
  {
    title: "Медитація знижує рівень стресу (Harvard, 2014)",
    description:
      "Дослідження показали, що регулярна практика медитації зменшує рівень гормону стресу кортизолу та покращує емоційний стан.",
    url: "https://www.health.harvard.edu/mind-and-mood/meditation-and-psychological-well-being",
  },
  {
    title: "Вплив медитації на мозок (Nature Reviews Neuroscience, 2015)",
    description:
      "МРТ-дослідження довели, що медитація збільшує товщину кори головного мозку в зонах, відповідальних за увагу та емоційну регуляцію.",
    url: "https://www.nature.com/articles/nrn3916",
  },
  {
    title: "Психотерапія та нейропластичність",
    description:
      "Сучасні дослідження підтверджують, що психотерапія сприяє формуванню нових нейронних зв'язків і покращує адаптацію до стресу.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181994/",
  },
  {
    title: "Когнітивно-поведінкова терапія ефективна при депресії",
    description:
      "Метаналізи показують, що КПТ є одним із найефективніших методів лікування депресії та тривожних розладів.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3584580/",
  },
  {
    title: "Вплив природи на психічне здоров'я",
    description:
      "Прогулянки на природі знижують рівень тривоги, покращують настрій і підвищують креативність (Stanford, 2015).",
    url: "https://news.stanford.edu/2015/06/30/hiking-mental-health-063015/",
  },
  {
    title: "Сон і психічне здоров'я",
    description:
      "Хронічний недосип підвищує ризик розвитку депресії, тривожності та знижує когнітивні функції.",
    url: "https://www.sleepfoundation.org/mental-health",
  },
];

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // brain
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // nature
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", // book
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // science
  "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80", // neurons
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", // psychology
];

function getRandomImage(idx: number) {
  // Для стабильности: просто чередуем картинки по индексу
  return images[idx % images.length];
}

export const Resources = () => {
  // Для SSR/CSR стабильности используем useMemo
  const factImages = useMemo(
    () => facts.map((_, idx) => getRandomImage(idx)),
    []
  );

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
          Наукові факти та статті
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
          Тут ви знайдете лише перевірені наукові факти, сучасні дослідження та
          корисні статті про психологію, медитацію, стрес і здоров'я мозку.
        </Typography>
        <Grid container spacing={4}>
          {facts.map((fact, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: idx % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "stretch",
                  backgroundColor: "white",
                  boxShadow: "0 8px 24px rgba(7, 87, 91, 0.10)",
                  minHeight: 220,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: 180 },
                    minHeight: 180,
                    background: `url(${factImages[idx]}) center/cover no-repeat`,
                    flexShrink: 0,
                  }}
                />
                <CardContent
                  sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.main", fontWeight: 500, mb: 1 }}
                  >
                    {fact.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {fact.description}
                  </Typography>
                  <MuiLink
                    href={fact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ mt: "auto", fontWeight: 500, color: "primary.main" }}
                  >
                    Джерело
                  </MuiLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
