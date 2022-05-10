import React from "react"
import { Layout } from "./components"
import "./index.css"
import { DataProvider } from "./context/Datacontext"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages"
import Services from "./pages/Services"

export default function App() {
  return (
    <DataProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
      </Layout>
    </DataProvider>
  )
}
