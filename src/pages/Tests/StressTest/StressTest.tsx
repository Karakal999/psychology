import React from "react";
import { Box, Typography } from "@mui/material";

export const StressTest: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Тест на рівень стресу
      </Typography>
      <Typography variant="body1">
        Цей тест допоможе вам оцінити ваш поточний рівень стресу.
      </Typography>
    </Box>
  );
};
