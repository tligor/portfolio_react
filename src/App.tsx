import Sidebar from './Containers/Sidebar'
import About from './Containers/About'
import EstiloGlobal, { Container } from './styles'
import Projects from './Containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
