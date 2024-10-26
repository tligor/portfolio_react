import { ThemeProvider } from 'styled-components'

import Sidebar from './Containers/Sidebar'
import About from './Containers/About'
import EstiloGlobal, { Container } from './styles'
import Projects from './Containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [usingDarkTheme, setusingDarkTheme] = useState(false)

  function switchTheme() {
    setusingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
