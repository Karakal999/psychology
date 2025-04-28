import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { questions } from "./questions";
import { useNavigate } from "react-router-dom";

interface BurnoutResult {
  level: string;
  description: string;
  recommendations: string[];
}

const BurnoutTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [exitDialogOpen, setExitDialogOpen] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

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

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
  };

  const getBurnoutLevel = (score: number): BurnoutResult => {
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage < 25) {
      return {
        level: "Низький рівень вигорання",
        description:
          "У вас низький рівень професійного вигорання. Продовжуйте підтримувати баланс між роботою та відпочинком.",
        recommendations: [
          "Продовжуйте практикувати здоровий баланс між роботою та особистим життям",
          "Регулярно займайтеся фізичними вправами",
          "Підтримуйте позитивні соціальні зв'язки",
        ],
      };
    } else if (percentage < 50) {
      return {
        level: "Помірний рівень вигорання",
        description:
          "У вас спостерігаються ознаки помірного професійного вигорання. Варто звернути увагу на свій емоційний стан.",
        recommendations: [
          "Встановіть чіткі межі між роботою та особистим життям",
          "Практикуйте техніки релаксації та медитації",
          "Регулярно беріть перерви протягом робочого дня",
        ],
      };
    } else if (percentage < 75) {
      return {
        level: "Підвищений рівень вигорання",
        description:
          "У вас підвищений рівень професійного вигорання. Необхідно вжити заходів для покращення ситуації.",
        recommendations: [
          "Зверніться до професійного психолога або коуча",
          "Перегляньте свої робочі обов'язки та навантаження",
          "Знайдіть нові джерела мотивації та натхнення",
        ],
      };
    } else {
      return {
        level: "Високий рівень вигорання",
        description:
          "У вас високий рівень професійного вигорання. Потрібна негайна увага до вашого психологічного здоров'я.",
        recommendations: [
          "Терміново зверніться за професійною допомогою",
          "Розгляньте можливість взяти відпустку або перерву в роботі",
          "Проведіть серйозний перегляд вашого робочого життя та пріоритетів",
        ],
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      {!showResults ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Typography variant="h4" gutterBottom>
            Тест на професійне вигорання
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mb: 4, height: 10, borderRadius: 5 }}
          />
          <Typography variant="h6" gutterBottom>
            {questions[currentQuestion].text}
          </Typography>
          <FormControl component="fieldset" sx={{ width: "100%", my: 2 }}>
            <RadioGroup
              value={answers[currentQuestion]}
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
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              variant="outlined"
              onClick={() => setExitDialogOpen(true)}
              color="secondary"
            >
              Вийти
            </Button>
            <Box>
              <Button
                variant="outlined"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                sx={{ mr: 2 }}
              >
                Назад
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={answers[currentQuestion] === -1}
              >
                {currentQuestion === questions.length - 1
                  ? "Завершити"
                  : "Далі"}
              </Button>
            </Box>
          </Box>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Typography variant="h4" gutterBottom>
              Результати тесту
            </Typography>
            {(() => {
              const score = calculateScore();
              const result = getBurnoutLevel(score);
              return (
                <>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {result.level}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {result.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Рекомендації:
                  </Typography>
                  <ul>
                    {result.recommendations.map((rec, index) => (
                      <Typography
                        component="li"
                        key={index}
                        variant="body1"
                        paragraph
                      >
                        {rec}
                      </Typography>
                    ))}
                  </ul>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/tests")}
                      fullWidth
                    >
                      Повернутися до списку тестів
                    </Button>
                  </Box>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      )}

      <Dialog open={exitDialogOpen} onClose={() => setExitDialogOpen(false)}>
        <DialogTitle>Підтвердження виходу</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ви впевнені, що хочете вийти? Весь прогрес буде втрачено.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExitDialogOpen(false)} color="primary">
            Скасувати
          </Button>
          <Button onClick={() => navigate("/tests")} color="error">
            Вийти
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BurnoutTest;
