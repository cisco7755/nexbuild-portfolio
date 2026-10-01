import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import InsightDetail from './pages/InsightDetail'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'
import PageTransition from './components/PageTransition'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { theme, toggle } = useTheme()
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-paper transition-colors duration-200 dark:bg-night">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar theme={theme} toggle={toggle} />
      <div id="content" className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
            <Route path="/insights/:slug" element={<PageTransition><InsightDetail /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
