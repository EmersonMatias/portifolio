import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe/AboutMe"
import Home from "./pages/Home/Home"
import { GlobalStyle } from "./styles/globalStyles"


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
