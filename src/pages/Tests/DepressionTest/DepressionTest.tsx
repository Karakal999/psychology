import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { questions } from "./questions";
import { getResults } from "./results";

export const DepressionTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr) => acc + curr, 0);
  };

  const results = getResults(calculateScore());

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {!showResults ? (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 4 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "rgba(7, 87, 91, 0.1)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#07575B",
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1, textAlign: "right", color: "text.secondary" }}
            >
              {currentQuestion + 1} з {questions.length}
            </Typography>
          </Box>

          <Card
            sx={{
              backgroundColor: "#F5F9FA",
              boxShadow: "0 4px 12px rgba(7, 87, 91, 0.08)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "primary.main", mb: 3 }}
              >
                {questions[currentQuestion].text}
              </Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[currentQuestion] ?? ""}
                  onChange={(e) => handleAnswer(Number(e.target.value))}
                >
                  {questions[currentQuestion].options.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                      sx={{ mb: 1 }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
              >
                <Button
                  variant="outlined"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  sx={{ minWidth: 100 }}
                >
                  Назад
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                  sx={{ minWidth: 100 }}
                >
                  {currentQuestion === questions.length - 1
                    ? "Завершити"
                    : "Далі"}
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Button
            variant="text"
            color="primary"
            onClick={() => setShowExitDialog(true)}
            sx={{ mt: 2 }}
          >
            Вийти з тесту
          </Button>
        </Box>
      ) : (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ backgroundColor: "#F5F9FA", mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "primary.main", mb: 3 }}
              >
                {results.level}
              </Typography>
              <Typography variant="body1" paragraph>
                {results.description}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 4, mb: 2 }}>
                Рекомендації:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {results.recommendations.map((rec, index) => (
                  <Typography component="li" key={index} paragraph>
                    {rec}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button variant="outlined" onClick={() => navigate("/tests")}>
              Повернутися до тестів
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers([]);
              }}
            >
              Пройти тест знову
            </Button>
          </Box>
        </Box>
      )}

      <Dialog open={showExitDialog} onClose={() => setShowExitDialog(false)}>
        <DialogTitle>Ви впевнені?</DialogTitle>
        <DialogContent>
          <Typography>
            Якщо ви вийдете зараз, ваш прогрес буде втрачено. Ви дійсно хочете
            вийти?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowExitDialog(false)}>
            Продовжити тест
          </Button>
          <Button
            onClick={() => navigate("/tests")}
            color="primary"
            variant="contained"
          >
            Вийти
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
