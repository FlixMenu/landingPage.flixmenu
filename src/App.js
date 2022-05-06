
import React from "react"
import { Layout } from "./components"
import "./index.css"
import { DataProvider } from "./context/Datacontext"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages"
import LoadingAnimation from "./pages/loadingAnimation"
import { AnimatePresence } from "framer-motion"


export default function App() {
  const location = useLocation()
  return (
    <DataProvider>
      <Layout>
        <Router>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/loadingAnimation" element={<LoadingAnimation />} />
            </Routes>
          </AnimatePresence>
          </Router>
      </Layout>
    </DataProvider>
  )
}
