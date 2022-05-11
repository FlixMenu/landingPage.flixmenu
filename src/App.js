import React from "react"
import { Layout } from "./components"
import "./index.css"
import { DataProvider } from "./context/Datacontext"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages"
import Aos from 'aos'

Aos.init()

export default function App() {
  return (
    <DataProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </DataProvider>
  )
}
