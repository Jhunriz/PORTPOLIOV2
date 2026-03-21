import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Footer } from "./Footer"

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-2 py-6 sm:px-6 lg:px-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
