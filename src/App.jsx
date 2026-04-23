import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

export default function App() {
  return (
    <Suspense fallback={<main className="layout">Loading project details...</main>}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </Suspense>
  );
}
