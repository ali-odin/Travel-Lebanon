import "./App.css"
import Landing from "./components/Landing"
import Destinations from "./components/Destinations"
import Secrets from "./components/Secrets"
import Description from "./components/Description"
import Experiences from "./components/Experiences"
import Gallery from "./components/Gallery"
import GettingThere from "./components/GettingThere"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Landing />
      <Destinations />
      <Secrets />
      <Description />
      <Experiences />
      <Gallery />
      <GettingThere />
      <Footer />
    </div>
  )
}

export default App


