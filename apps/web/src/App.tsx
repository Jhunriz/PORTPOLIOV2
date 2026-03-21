import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HeroPage from "./pages/HeroPage"

function About() {
  return <h1 className="text-2xl font-bold">About Page</h1>
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Nested routes rendered inside <Outlet /> */}
        <Route index element={<HeroPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}
