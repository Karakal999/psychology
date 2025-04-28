import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Tests } from "./pages/Tests/Tests";
import { AnxietyTest } from "./pages/Tests/AnxietyTest/AnxietyTest";
import { DepressionTest } from "./pages/Tests/DepressionTest/DepressionTest";
import { StressTest } from "./pages/Tests/StressTest/StressTest";
import BurnoutTest from "./pages/Tests/BurnoutTest/BurnoutTest";
import { Consultations } from "./pages/Consultations/Consultations";
import { ConsultationRequest } from "./pages/ConsultationRequest/ConsultationRequest";
import { ThankYou } from "./pages/ThankYou/ThankYou";
import { Meditations } from "./pages/Meditations";
import { Resources } from "./pages/Resources/Resources";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import Profile from "./pages/Profile/Profile";
import { PrivateRoute } from "./components/PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/tests/anxiety-test" element={<AnxietyTest />} />
      <Route path="/tests/depression-test" element={<DepressionTest />} />
      <Route path="/tests/stress-test" element={<StressTest />} />
      <Route path="/tests/burnout-test" element={<BurnoutTest />} />
      <Route path="/consultations" element={<Consultations />} />
      <Route path="/consultation-request" element={<ConsultationRequest />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/meditations" element={<Meditations />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      {/* Здесь будут добавлены другие маршруты */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
