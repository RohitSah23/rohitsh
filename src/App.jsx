import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Blogs from "./components/Blogs.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="projects"
          element={
            <main className="mt-4 flex w-full flex-col gap-4">
              <Projects fullCatalog />
            </main>
          }
        />
        <Route
          path="blogs"
          element={
            <main className="mt-4 flex w-full flex-col gap-4">
              <Blogs />
            </main>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
